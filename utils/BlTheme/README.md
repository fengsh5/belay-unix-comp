# BlTheme 主题切换工具（参考 Ant Design 方案）

主题切换工具，参考 Ant Design 的 `ConfigProvider` 方案实现，支持通过组件属性或全局配置方法动态切换主题。

## 功能特性

- ✅ 参考 Ant Design 的 ConfigProvider 设计
- ✅ 支持通过组件属性传递主题配置
- ✅ 支持通过全局配置方法动态切换主题（类似 `ConfigProvider.config()`）
- ✅ 主题配置与 `variables.scss` 文件保持一致
- ✅ 自动保存用户选择的主题到本地存储
- ✅ 支持主题变更监听
- ✅ 支持预设主题（浅色/深色）
- ✅ 跨平台支持（H5、APP、小程序）

## 基本用法

### 方式一：通过组件属性传递主题配置（推荐）

类似 antd 的 `ConfigProvider`，通过组件包裹应用并传递主题配置：

```vue
<template>
  <bl-theme-provider :theme="themeConfig">
    <view class="app">
      <text class="title">我的应用</text>
      <bl-button type="primary">按钮</bl-button>
    </view>
  </bl-theme-provider>
</template>

<script lang="uts">
  import type { ThemeConfig } from '@/uni_modules/belay-unix/utils/BlTheme/index.uts'
  
  export default {
    data() {
      return {
        themeConfig: {
          'primary-color': '#409eff',
          'background-color': '#ffffff',
          'text-color': '#333333'
        } as ThemeConfig
      }
    }
  }
</script>

<style>
  .app {
    background-color: var(--bl-background-color);
    padding: var(--bl-spacing-md);
  }
  
  .title {
    color: var(--bl-text-color);
    font-size: var(--bl-font-size-lg);
  }
</style>
```

### 方式二：通过全局配置方法动态切换主题（类似 antd 的 ConfigProvider.config）

```typescript
import { BlTheme } from '@/uni_modules/belay-unix/utils/BlTheme/index.uts'

// 配置主题（类似 antd 的 ConfigProvider.config）
BlTheme.config({
  theme: {
    'primary-color': '#25b864',
    'background-color': '#ffffff',
    'text-color': '#333333'
  }
})

// 获取当前主题配置
const currentTheme = BlTheme.getTheme()

// 重置为主题默认值
BlTheme.resetTheme('light')  // 重置为浅色主题
BlTheme.resetTheme('dark')   // 重置为深色主题

// 设置预设主题
BlTheme.setPresetTheme('light')  // 切换到浅色主题
BlTheme.setPresetTheme('dark')   // 切换到深色主题
```

### 方式三：使用预设主题

```vue
<template>
  <!-- 使用浅色主题 -->
  <bl-theme-provider preset-theme="light">
    <your-content />
  </bl-theme-provider>
  
  <!-- 使用深色主题 -->
  <bl-theme-provider preset-theme="dark">
    <your-content />
  </bl-theme-provider>
</template>
```

## 完整示例

### 示例 1：动态切换主题

```vue
<template>
  <bl-theme-provider :theme="themeConfig">
    <view class="page">
      <view class="header">
        <text class="title">主题切换示例</text>
        <button @click="toggleTheme" class="theme-button">
          切换主题
        </button>
      </view>
      
      <view class="content">
        <view class="card">
          <text class="card-title">主色调</text>
          <view class="color-box" :style="{ backgroundColor: themeConfig['primary-color'] }"></view>
        </view>
      </view>
    </view>
  </bl-theme-provider>
</template>

<script lang="uts">
  import type { ThemeConfig } from '@/uni_modules/belay-unix/utils/BlTheme/index.uts'
  import { getDefaultTheme } from '@/uni_modules/belay-unix/utils/BlTheme/index.uts'
  
  export default {
    data() {
      return {
        themeConfig: getDefaultTheme('light') as ThemeConfig
      }
    },
    methods: {
      toggleTheme(): void {
        // 切换主色调
        const newPrimaryColor = this.themeConfig['primary-color'] === '#409eff' 
          ? '#25b864' 
          : '#409eff'
        
        this.themeConfig = {
          ...this.themeConfig,
          'primary-color': newPrimaryColor
        }
      }
    }
  }
</script>

<style>
  .page {
    flex: 1;
    background-color: var(--bl-background-color);
    padding: var(--bl-spacing-md);
  }
  
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: var(--bl-spacing-lg);
  }
  
  .title {
    font-size: var(--bl-font-size-xl);
    color: var(--bl-text-color);
    margin-bottom: var(--bl-spacing-md);
  }
  
  .theme-button {
    background-color: var(--bl-primary-color);
    color: var(--bl-white-color);
    padding: var(--bl-spacing-sm) var(--bl-spacing-md);
    border-radius: var(--bl-border-radius);
  }
  
  .card {
    background-color: var(--bl-background-color-secondary);
    padding: var(--bl-spacing-md);
    border-radius: var(--bl-border-radius);
  }
  
  .card-title {
    font-size: var(--bl-font-size-base);
    color: var(--bl-text-color-secondary);
    margin-bottom: var(--bl-spacing-sm);
  }
  
  .color-box {
    width: 100%;
    height: 60rpx;
    border-radius: var(--bl-border-radius-small);
  }
</style>
```

### 示例 2：使用全局配置方法（类似 antd）

```vue
<template>
  <view class="page">
    <view class="header">
      <text class="title">主题切换示例（全局配置）</text>
      <button @click="changeTheme" class="theme-button">
        切换主题颜色
      </button>
    </view>
  </view>
</template>

<script lang="uts">
  import { BlTheme } from '@/uni_modules/belay-unix/utils/BlTheme/index.uts'
  
  export default {
    data() {
      return {
        currentColor: '#409eff'
      }
    },
    onLoad() {
      // 初始化主题
      BlTheme.initTheme()
      
      // 监听主题变化
      BlTheme.onThemeChange((theme) => {
        console.log('主题已更新:', theme)
      })
    },
    methods: {
      changeTheme(): void {
        // 动态切换主题（类似 antd 的 ConfigProvider.config）
        const newColor = this.currentColor === '#409eff' ? '#25b864' : '#409eff'
        this.currentColor = newColor
        
        BlTheme.config({
          theme: {
            'primary-color': newColor
          }
        })
      }
    }
  }
</script>

<style>
  .page {
    flex: 1;
    background-color: var(--bl-background-color);
    padding: var(--bl-spacing-md);
  }
  
  .title {
    font-size: var(--bl-font-size-xl);
    color: var(--bl-text-color);
  }
  
  .theme-button {
    background-color: var(--bl-primary-color);
    color: var(--bl-white-color);
    padding: var(--bl-spacing-sm) var(--bl-spacing-md);
    border-radius: var(--bl-border-radius);
    margin-top: var(--bl-spacing-md);
  }
</style>
```

### 示例 3：在 App.uvue 中初始化主题

```vue
<script lang="uts">
  import { BlTheme } from '@/uni_modules/belay-unix/utils/BlTheme/index.uts'
  
  export default {
    onLaunch() {
      // 从本地存储读取用户选择的主题
      BlTheme.initTheme()
    }
  }
</script>
```

## API 参考

### BlTheme 类（静态方法）

#### BlTheme.config(options: ThemeConfigOptions): void

配置主题（类似 antd 的 `ConfigProvider.config`）。

**参数：**
- `options.theme`: 主题配置对象，可以只传递需要修改的变量

**示例：**
```typescript
BlTheme.config({
  theme: {
    'primary-color': '#1890ff',
    'background-color': '#ffffff'
  }
})
```

#### BlTheme.getTheme(): ThemeConfig

获取当前全局主题配置。

**返回值：**
- 当前主题配置对象

**示例：**
```typescript
const theme = BlTheme.getTheme()
console.log(theme['primary-color'])
```

#### BlTheme.resetTheme(themeName?: 'light' | 'dark'): void

重置主题为默认值。

**参数：**
- `themeName`: 主题名称，默认为 `'light'`

**示例：**
```typescript
BlTheme.resetTheme('light')  // 重置为浅色主题
BlTheme.resetTheme('dark')   // 重置为深色主题
```

#### BlTheme.setPresetTheme(themeName: 'light' | 'dark'): void

设置预设主题（浅色或深色）。

**参数：**
- `themeName`: 主题名称

**示例：**
```typescript
BlTheme.setPresetTheme('light')  // 切换到浅色主题
BlTheme.setPresetTheme('dark')   // 切换到深色主题
```

#### BlTheme.initTheme(): void

初始化主题（从本地存储读取）。

**示例：**
```typescript
BlTheme.initTheme()
```

#### BlTheme.onThemeChange(listener: ThemeChangeListener): void

添加主题变更监听器。

**参数：**
- `listener`: 监听器函数，接收主题配置对象作为参数

**示例：**
```typescript
BlTheme.onThemeChange((theme) => {
  console.log('主题已更新:', theme)
})
```

#### BlTheme.offThemeChange(listener: ThemeChangeListener): void

移除主题变更监听器。

**参数：**
- `listener`: 要移除的监听器函数

**示例：**
```typescript
BlTheme.offThemeChange(handleThemeChange)
```

### BlThemeProvider 组件

#### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| theme | `ThemeConfig \| null` | `null` | 主题配置对象，可以只传递需要修改的变量 |
| presetTheme | `'light' \| 'dark' \| null` | `'light'` | 预设主题名称，当 theme 为空时使用 |

#### 主题配置优先级

1. 组件 `theme` 属性（最高优先级）
2. 全局主题配置（通过 `BlTheme.config()` 设置）
3. 预设主题（`presetTheme` 属性）

### 工具函数

#### getThemeCSSVar(key: keyof ThemeConfig): string

获取主题变量的 CSS 变量名。

**参数：**
- `key`: 主题变量键名

**返回值：**
- CSS 变量名（如 `'--bl-primary-color'`）

**示例：**
```typescript
const cssVarName = getThemeCSSVar('primary-color')
// 返回: '--bl-primary-color'
```

#### getThemeValue(key: keyof ThemeConfig, theme?: ThemeConfig | null): string | null

获取主题变量的值。

**参数：**
- `key`: 主题变量键名
- `theme`: 主题配置对象，如果不提供则使用全局主题配置

**返回值：**
- 主题变量的值或 `null`

**示例：**
```typescript
const primaryColor = getThemeValue('primary-color')
```

#### mergeThemeConfig(base: ThemeConfig, override: ThemeConfig): ThemeConfig

合并主题配置（深度合并）。

**参数：**
- `base`: 基础主题配置
- `override`: 要覆盖的主题配置

**返回值：**
- 合并后的主题配置

**示例：**
```typescript
const merged = mergeThemeConfig(defaultTheme, customTheme)
```

#### getDefaultTheme(themeName?: 'light' | 'dark'): ThemeConfig

获取默认主题配置。

**参数：**
- `themeName`: 主题名称，默认为 `'light'`

**返回值：**
- 默认主题配置对象

**示例：**
```typescript
const lightTheme = getDefaultTheme('light')
const darkTheme = getDefaultTheme('dark')
```

## 主题变量列表

主题配置包含以下变量（与 `variables.scss` 中的主题定义保持一致）：

### 主色调
- `primary-color`
- `primary-color-1` ~ `primary-color-4`
- `secondary-color`

### 功能色
- `success-color` ~ `success-color-4`
- `error-color` ~ `error-color-4`
- `warning-color` ~ `warning-color-4`
- `info-color` ~ `info-color-4`

### 基础色
- `black-color`
- `white-color`

### 灰度颜色
- `gray-1` ~ `gray-6`

### 背景色
- `background-color`
- `background-color-secondary`

### 文字颜色
- `text-color`
- `text-color-secondary`
- `text-color-disabled`

### 边框颜色
- `border-color`
- `border-color-light`
- `border-color-lighter`
- `border-color-extra-light`

### 圆角
- `border-radius`
- `border-radius-small`
- `border-radius-large`
- `border-radius-round`
- `border-radius-circle`

### 间距
- `spacing-xs`
- `spacing-sm`
- `spacing-md`
- `spacing-lg`
- `spacing-xl`

### 字体大小
- `font-size-xs`
- `font-size-sm`
- `font-size-base`
- `font-size-lg`
- `font-size-xl`

### 行高
- `line-height-base`
- `line-height-sm`
- `line-height-lg`

### z-index
- `z-index-base`
- `z-index-dropdown`
- `z-index-sticky`
- `z-index-fixed`
- `z-index-modal`
- `z-index-tooltip`

## 与 Ant Design 的对比

| 功能 | Ant Design | BlTheme |
|------|-----------|---------|
| 组件方式 | `<ConfigProvider theme={...}>` | `<bl-theme-provider :theme="...">` |
| 全局配置 | `ConfigProvider.config({ theme: {...} })` | `BlTheme.config({ theme: {...} })` |
| CSS 变量 | 自动生成 | 自动生成（H5 平台） |
| 主题合并 | 支持 | 支持（组件 theme > 全局主题 > 预设主题） |
| 本地存储 | 不支持 | 支持 |

## 注意事项

1. **SCSS 变量与运行时主题**：`variables.scss` 中的 SCSS 变量在编译时处理，而此工具提供的是运行时主题切换。两者可以配合使用。

2. **平台差异**：
   - **H5 平台**：工具会自动设置 CSS 变量
   - **APP 和小程序平台**：通过组件内部的响应式状态来实现主题切换

3. **主题同步**：如果修改了 `variables.scss` 中的主题定义，需要同步更新 `BlTheme/index.uts` 中的默认主题配置。

4. **性能考虑**：主题切换会触发所有监听器，建议在组件卸载时移除监听器，避免内存泄漏。

5. **CSS 变量使用**：在样式中使用主题变量时，使用 `var(--bl-xxx)` 格式，例如：
   ```css
   .my-class {
     color: var(--bl-text-color);
     background-color: var(--bl-background-color);
   }
   ```
