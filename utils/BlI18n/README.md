# BlI18n 国际化系统（参考 Ant Design 方案）

国际化系统，参考 Ant Design 的 `ConfigProvider` 方案实现，支持通过组件属性或全局配置方法动态切换语言。

## 功能特性

- ✅ 参考 Ant Design 的 ConfigProvider 设计
- ✅ 支持通过组件属性传递语言配置（类似 antd 的 `locale` 属性）
- ✅ 支持通过全局配置方法动态切换语言（类似 `ConfigProvider.config()`）
- ✅ 提供类似 antd 的语言包结构（zhCN、enUS 等）
- ✅ 自动保存用户选择的语言到本地存储
- ✅ 支持语言变更监听
- ✅ 兼容旧 API，平滑迁移

## 基本用法

### 方式一：通过组件属性传递语言配置（推荐，类似 antd）

类似 antd 的 `ConfigProvider`，通过组件包裹应用并传递语言配置：

```vue
<template>
  <bl-i18n-provider :locale="locale">
    <view class="app">
      <text>{{ t('common.ok') }}</text>
      <bl-button>{{ t('button.submit') }}</bl-button>
    </view>
  </bl-i18n-provider>
</template>

<script lang="uts">
  import { zhCN } from '@/uni_modules/belay-unix/locales/zh-CN.uts'
  import { t } from '@/uni_modules/belay-unix/utils/BlI18n/index.uts'
  
  export default {
    data() {
      return {
        locale: zhCN
      }
    },
    methods: {
      t
    }
  }
</script>
```

### 方式二：通过全局配置方法动态切换语言（类似 antd 的 ConfigProvider.config）

```typescript
import { BlI18n } from '@/uni_modules/belay-unix/utils/BlI18n/index.uts'
import { zhCN, enUS } from '@/uni_modules/belay-unix/utils/BlI18n/locales/index.uts'

// 配置语言（类似 antd 的 ConfigProvider.config）
BlI18n.config({
  locale: zhCN  // 切换到中文
})

// 切换到英文
BlI18n.config({
  locale: enUS
})

// 获取当前语言配置
const currentLocale = BlI18n.getLocale()
```


## 完整示例

### 示例 1：动态切换语言

```vue
<template>
  <bl-i18n-provider :locale="currentLocale">
    <view class="page">
      <view class="header">
        <text class="title">{{ t('common.info') }}</text>
        <button @click="toggleLanguage" class="lang-button">
          切换到{{ currentLocale.locale === 'zh-CN' ? 'English' : '中文' }}
        </button>
      </view>
      
      <view class="content">
        <bl-button type="primary">{{ t('button.submit') }}</bl-button>
        <bl-button>{{ t('button.cancel') }}</bl-button>
      </view>
    </view>
  </bl-i18n-provider>
</template>

<script lang="uts">
  import { zhCN, enUS } from '@/uni_modules/belay-unix/locales/index.uts'
  import { t, type Locale } from '@/uni_modules/belay-unix/utils/BlI18n/index.uts'
  
  export default {
    data() {
      return {
        currentLocale: zhCN as Locale
      }
    },
    methods: {
      toggleLanguage(): void {
        this.currentLocale = this.currentLocale.locale === 'zh-CN' ? enUS : zhCN
      },
      t
    }
  }
</script>
```

### 示例 2：使用全局配置方法（类似 antd）

```vue
<template>
  <view class="page">
    <view class="header">
      <text class="title">{{ t('common.info') }}</text>
      <button @click="changeLanguage" class="lang-button">
        切换语言
      </button>
    </view>
  </view>
</template>

<script lang="uts">
  import { BlI18n } from '@/uni_modules/belay-unix/utils/BlI18n/index.uts'
  import { zhCN, enUS } from '@/uni_modules/belay-unix/locales/index.uts'
  import { t } from '@/uni_modules/belay-unix/utils/BlI18n/index.uts'
  
  export default {
    data() {
      return {
        currentLang: 'zh-CN'
      }
    },
    onLoad() {
      // 初始化语言
      BlI18n.initLocale()
      
      // 监听语言变化
      BlI18n.onLocaleChange((locale) => {
        console.log('语言已更新:', locale)
      })
    },
    methods: {
      changeLanguage(): void {
        // 动态切换语言（类似 antd 的 ConfigProvider.config）
        const newLang = this.currentLang === 'zh-CN' ? 'en-US' : 'zh-CN'
        this.currentLang = newLang
        
        BlI18n.config({
          locale: newLang === 'zh-CN' ? zhCN : enUS
        })
      },
      t
    }
  }
</script>
```

### 示例 3：在 App.uvue 中初始化语言

```vue
<script lang="uts">
  import { BlI18n } from '@/uni_modules/belay-unix/utils/BlI18n/index.uts'
  import { zhCN } from '@/uni_modules/belay-unix/locales/zh-CN.uts'
  
  export default {
    onLaunch() {
      // 从本地存储读取用户选择的语言
      BlI18n.initLocale()
      
      // 如果没有保存的语言，使用默认语言
      const locale = BlI18n.getLocale()
      if (locale == null || Object.keys(locale).length == 0) {
        BlI18n.config({ locale: zhCN })
      }
    }
  }
</script>
```

## API 参考

### BlI18n 类（静态方法）

#### BlI18n.config(options: LocaleConfigOptions): void

配置语言（类似 antd 的 `ConfigProvider.config`）。

**参数：**
- `options.locale`: Locale 对象，类似 antd 的 zhCN、enUS 等

**示例：**
```typescript
import { zhCN } from '@/uni_modules/belay-unix/utils/BlI18n/locales/zh-CN.uts'

BlI18n.config({
  locale: zhCN
})
```

#### BlI18n.getLocale(): Locale

获取当前全局语言配置。

**返回值：**
- 当前 Locale 对象

**示例：**
```typescript
const locale = BlI18n.getLocale()
console.log(locale.locale) // 'zh-CN'
```

#### BlI18n.initLocale(): void

初始化语言（从本地存储读取）。

**示例：**
```typescript
BlI18n.initLocale()
```

#### BlI18n.onLocaleChange(listener: LocaleChangeListener): void

添加语言变更监听器。

**参数：**
- `listener`: 监听器函数，接收 Locale 对象作为参数

**示例：**
```typescript
BlI18n.onLocaleChange((locale) => {
  console.log('语言已更新:', locale)
})
```

#### BlI18n.offLocaleChange(listener: LocaleChangeListener): void

移除语言变更监听器。

**参数：**
- `listener`: 要移除的监听器函数

**示例：**
```typescript
BlI18n.offLocaleChange(handleLocaleChange)
```

#### BlI18n.registerLocale(localeCode: string, locale: Locale): void

注册语言包（支持外部注册自定义语言）。

**参数：**
- `localeCode`: 语言代码（如 'zh-CN', 'en-US', 'ja-JP' 等）
- `locale`: Locale 对象

**示例：**
```typescript
import { BlI18n } from '@/uni_modules/belay-unix/utils/BlI18n/index.uts'
import { jaJP } from './locales/ja-JP.uts'

BlI18n.registerLocale('ja-JP', jaJP)
```

#### BlI18n.getRegisteredLocales(): string[]

获取所有已注册的语言代码列表。

**返回值：**
- 已注册的语言代码数组

**示例：**
```typescript
const locales = BlI18n.getRegisteredLocales()
console.log(locales) // ['zh-CN', 'en-US', 'ja-JP', ...]
```

#### BlI18n.isLocaleRegistered(localeCode: string): boolean

检查语言是否已注册。

**参数：**
- `localeCode`: 语言代码

**返回值：**
- 是否已注册

**示例：**
```typescript
const isRegistered = BlI18n.isLocaleRegistered('ja-JP')
console.log(isRegistered) // true 或 false
```

### BlI18nProvider 组件

#### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| locale | `Locale \| null` | `null` | 语言配置对象（类似 antd 的 ConfigProvider locale 属性） |
| autoInit | `boolean` | `true` | 是否自动初始化默认语言 |
| loadFromFile | `boolean` | `false` | 是否从本地文件加载语言资源 |

#### 语言配置优先级

1. 组件 `locale` 属性（最高优先级）
2. 本地存储的语言设置
3. 默认语言（zh-CN）

### 工具函数

#### t(key: string, params?: Record<string, string | number>, defaultValue?: string): string

翻译文本。

**参数：**
- `key`: 翻译键，支持点号分隔的路径（如 'common.ok'）
- `params`: 参数对象，用于替换占位符
- `defaultValue`: 默认值

**示例：**
```typescript
import { t } from '@/uni_modules/belay-unix/utils/BlI18n/index.uts'

// 简单翻译
const okText = t('common.ok') // '确定' 或 'OK'

// 带参数的翻译
const minLengthText = t('form.minLength', { min: 6 }) // '长度不能少于 6 个字符'
```

## 语言包结构

语言包使用类似 Ant Design 的 Locale 结构：

```typescript
export const zhCN: Locale = {
  locale: 'zh-CN',
  localeName: 'zh-CN',
  common: {
    ok: '确定',
    cancel: '取消',
    // ...
  },
  button: {
    submit: '提交',
    // ...
  },
  // ...
}
```

## 与 Ant Design 的对比

| 功能 | Ant Design | BlI18n |
|------|-----------|--------|
| 组件方式 | `<ConfigProvider locale={zhCN}>` | `<bl-i18n-provider :locale="zhCN">` |
| 全局配置 | `ConfigProvider.config({ locale: zhCN })` | `BlI18n.config({ locale: zhCN })` |
| 语言包 | `import zhCN from 'antd/es/locale/zh_CN'` | `import { zhCN } from '@/uni_modules/belay-unix/locales/zh-CN.uts'` |
| 翻译函数 | `t('common.ok')` | `t('common.ok')` |
| 本地存储 | 不支持 | 支持 |

## 注册自定义语言

### 方式一：使用 BlI18n.registerLocale()（推荐）

```typescript
import { BlI18n, type Locale } from '@/uni_modules/belay-unix/utils/BlI18n/index.uts'

// 创建自定义语言包
const jaJP: Locale = {
  locale: 'ja-JP',
  localeName: 'ja-JP',
  common: {
    ok: 'OK',
    cancel: 'キャンセル',
    confirm: '確認',
    // ...
  },
  button: {
    submit: '送信',
    cancel: 'キャンセル',
    // ...
  },
  // ...
}

// 注册语言包
BlI18n.registerLocale('ja-JP', jaJP)

// 使用注册的语言
BlI18n.config({ locale: jaJP })
```

### 方式二：使用 BlI18n.registerLocale()（推荐）

```typescript
import { BlI18n, type Locale } from '@/uni_modules/belay-unix/utils/BlI18n/index.uts'

// 创建自定义语言包
const frFR: Locale = {
  locale: 'fr-FR',
  localeName: 'fr-FR',
  common: {
    ok: 'OK',
    cancel: 'Annuler',
    // ...
  },
  // ...
}

// 注册语言包
BlI18n.registerLocale('fr-FR', frFR)

// 使用注册的语言
BlI18n.config({ locale: frFR })
```

### 方式三：通过 BlI18nProvider 组件注册

```vue
<template>
  <bl-i18n-provider :locale="customLocale">
    <your-content />
  </bl-i18n-provider>
</template>

<script lang="uts">
  import type { Locale } from '@/uni_modules/belay-unix/utils/BlI18n/index.uts'
  
  export default {
    data() {
      return {
        customLocale: {
          locale: 'de-DE',
          localeName: 'de-DE',
          common: {
            ok: 'OK',
            cancel: 'Abbrechen',
            // ...
          },
          // ...
        } as Locale
      }
    }
  }
</script>
```

### 检查已注册的语言

```typescript
import { BlI18n } from '@/uni_modules/belay-unix/utils/BlI18n/index.uts'

// 获取所有已注册的语言代码
const registeredLocales = BlI18n.getRegisteredLocales()
console.log('已注册的语言:', registeredLocales) // ['zh-CN', 'en-US', 'ja-JP', ...]

// 检查语言是否已注册
const isRegistered = BlI18n.isLocaleRegistered('ja-JP')
console.log('日语是否已注册:', isRegistered) // true 或 false
```

### 创建语言包文件（推荐）

为了更好的组织代码，建议创建独立的语言包文件：

```typescript
// utils/locales/ja-JP.uts
import type { Locale } from '@/uni_modules/belay-unix/utils/BlI18n/index.uts'

export const jaJP: Locale = {
  locale: 'ja-JP',
  localeName: 'ja-JP',
  common: {
    ok: 'OK',
    cancel: 'キャンセル',
    confirm: '確認',
    submit: '送信',
    reset: 'リセット',
    save: '保存',
    delete: '削除',
    edit: '編集',
    add: '追加',
    search: '検索',
    loading: '読み込み中...',
    noData: 'データがありません',
    success: '成功',
    error: 'エラー',
    warning: '警告',
    info: '情報'
  },
  button: {
    submit: '送信',
    reset: 'リセット',
    cancel: 'キャンセル',
    confirm: '確認',
    save: '保存',
    delete: '削除',
    edit: '編集',
    add: '追加',
    search: '検索',
    loading: '読み込み中...',
    primary: 'プライマリボタン',
    secondary: 'セカンダリボタン',
    default: 'デフォルトボタン'
  },
  form: {
    required: 'この項目は必須です',
    invalid: '入力形式が正しくありません',
    minLength: '長さは {{min}} 文字以上である必要があります',
    maxLength: '長さは {{max}} 文字を超えることはできません',
    min: '値は {{min}} 以上である必要があります',
    max: '値は {{max}} 以下である必要があります',
    pattern: '形式が正しくありません'
  },
  message: {
    success: '操作が成功しました',
    error: '操作が失敗しました',
    warning: '警告',
    info: '情報'
  }
}
```

然后在应用启动时注册：

```typescript
// App.uvue 或 main.uts
import { BlI18n } from '@/uni_modules/belay-unix/utils/BlI18n/index.uts'
import { jaJP } from './utils/locales/ja-JP.uts'

// 注册自定义语言包
BlI18n.registerLocale('ja-JP', jaJP)
```

## 注意事项

1. **语言包导入**：使用 `import { zhCN } from '@/uni_modules/belay-unix/locales/zh-CN.uts'` 导入语言包

2. **参数占位符**：使用 `{{key}}` 格式，例如：`'长度不能少于 {{min}} 个字符'`

3. **性能考虑**：语言切换会触发所有监听器，建议在组件卸载时移除监听器，避免内存泄漏

4. **语言包结构**：自定义语言包应该包含 `locale` 和 `localeName` 字段，以及各个模块的翻译内容

5. **注册时机**：建议在应用启动时（App.uvue 的 onLaunch）注册自定义语言包，确保在使用前已注册

## 完整示例

```vue
<template>
  <bl-i18n-provider :locale="locale">
    <view class="app">
      <view class="header">
        <text class="title">{{ t('common.info') }}</text>
        <button @click="toggleLocale" class="lang-button">
          {{ locale.locale === 'zh-CN' ? 'English' : '中文' }}
        </button>
      </view>
      
      <view class="content">
        <bl-button type="primary">{{ t('button.submit') }}</bl-button>
        <bl-button>{{ t('button.cancel') }}</bl-button>
      </view>
      
      <view class="form">
        <text>{{ t('form.required') }}</text>
        <text>{{ t('form.minLength', { min: 6 }) }}</text>
      </view>
    </view>
  </bl-i18n-provider>
</template>

<script lang="uts">
  import { zhCN, enUS } from '@/uni_modules/belay-unix/locales/index.uts'
  import { t, type Locale } from '@/uni_modules/belay-unix/utils/BlI18n/index.uts'
  
  export default {
    data() {
      return {
        locale: zhCN as Locale
      }
    },
    methods: {
      toggleLocale(): void {
        this.locale = this.locale.locale === 'zh-CN' ? enUS : zhCN
      },
      t
    }
  }
</script>
```
