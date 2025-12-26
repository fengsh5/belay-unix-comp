# BlI18n 自定义语言包示例

本文档展示如何创建和注册自定义语言包。

## 创建自定义语言包

### 示例 1：日语（ja-JP）

创建文件 `utils/locales/ja-JP.uts`：

```typescript
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

### 示例 2：法语（fr-FR）

创建文件 `utils/locales/fr-FR.uts`：

```typescript
import type { Locale } from '@/uni_modules/belay-unix/utils/BlI18n/index.uts'

export const frFR: Locale = {
  locale: 'fr-FR',
  localeName: 'fr-FR',
  common: {
    ok: 'OK',
    cancel: 'Annuler',
    confirm: 'Confirmer',
    submit: 'Soumettre',
    reset: 'Réinitialiser',
    save: 'Enregistrer',
    delete: 'Supprimer',
    edit: 'Modifier',
    add: 'Ajouter',
    search: 'Rechercher',
    loading: 'Chargement...',
    noData: 'Aucune donnée',
    success: 'Succès',
    error: 'Erreur',
    warning: 'Avertissement',
    info: 'Information'
  },
  button: {
    submit: 'Soumettre',
    reset: 'Réinitialiser',
    cancel: 'Annuler',
    confirm: 'Confirmer',
    save: 'Enregistrer',
    delete: 'Supprimer',
    edit: 'Modifier',
    add: 'Ajouter',
    search: 'Rechercher',
    loading: 'Chargement...',
    primary: 'Bouton principal',
    secondary: 'Bouton secondaire',
    default: 'Bouton par défaut'
  },
  form: {
    required: 'Ce champ est obligatoire',
    invalid: 'Format invalide',
    minLength: 'La longueur doit être d\'au moins {{min}} caractères',
    maxLength: 'La longueur ne doit pas dépasser {{max}} caractères',
    min: 'La valeur doit être au moins {{min}}',
    max: 'La valeur ne doit pas dépasser {{max}}',
    pattern: 'Format invalide'
  },
  message: {
    success: 'Opération réussie',
    error: 'Opération échouée',
    warning: 'Avertissement',
    info: 'Information'
  }
}
```

### 示例 3：德语（de-DE）

创建文件 `utils/locales/de-DE.uts`：

```typescript
import type { Locale } from '@/uni_modules/belay-unix/utils/BlI18n/index.uts'

export const deDE: Locale = {
  locale: 'de-DE',
  localeName: 'de-DE',
  common: {
    ok: 'OK',
    cancel: 'Abbrechen',
    confirm: 'Bestätigen',
    submit: 'Absenden',
    reset: 'Zurücksetzen',
    save: 'Speichern',
    delete: 'Löschen',
    edit: 'Bearbeiten',
    add: 'Hinzufügen',
    search: 'Suchen',
    loading: 'Lädt...',
    noData: 'Keine Daten',
    success: 'Erfolg',
    error: 'Fehler',
    warning: 'Warnung',
    info: 'Information'
  },
  button: {
    submit: 'Absenden',
    reset: 'Zurücksetzen',
    cancel: 'Abbrechen',
    confirm: 'Bestätigen',
    save: 'Speichern',
    delete: 'Löschen',
    edit: 'Bearbeiten',
    add: 'Hinzufügen',
    search: 'Suchen',
    loading: 'Lädt...',
    primary: 'Primärer Button',
    secondary: 'Sekundärer Button',
    default: 'Standard-Button'
  },
  form: {
    required: 'Dieses Feld ist erforderlich',
    invalid: 'Ungültiges Format',
    minLength: 'Die Länge muss mindestens {{min}} Zeichen betragen',
    maxLength: 'Die Länge darf {{max}} Zeichen nicht überschreiten',
    min: 'Der Wert muss mindestens {{min}} sein',
    max: 'Der Wert darf {{max}} nicht überschreiten',
    pattern: 'Ungültiges Format'
  },
  message: {
    success: 'Vorgang erfolgreich',
    error: 'Vorgang fehlgeschlagen',
    warning: 'Warnung',
    info: 'Information'
  }
}
```

## 注册自定义语言包

### 方式一：在 App.uvue 中注册（推荐）

```vue
<script lang="uts">
  import { BlI18n } from '@/uni_modules/belay-unix/utils/BlI18n/index.uts'
  import { jaJP } from './utils/locales/ja-JP.uts'
  import { frFR } from './utils/locales/fr-FR.uts'
  import { deDE } from './utils/locales/de-DE.uts'
  
  export default {
    onLaunch() {
      // 注册自定义语言包
      BlI18n.registerLocale('ja-JP', jaJP)
      BlI18n.registerLocale('fr-FR', frFR)
      BlI18n.registerLocale('de-DE', deDE)
      
      // 初始化语言（从本地存储读取）
      BlI18n.initLocale()
      
      // 如果没有保存的语言，使用默认语言
      const locale = BlI18n.getLocale()
      if (locale == null || Object.keys(locale).length == 0) {
        const { zhCN } = await import('@/uni_modules/belay-unix/locales/zh-CN.uts')
        BlI18n.config({ locale: zhCN })
      }
    }
  }
</script>
```

### 方式二：在页面中注册

```vue
<template>
  <view>
    <button @click="switchToJapanese">切换到日语</button>
    <button @click="switchToFrench">切换到法语</button>
  </view>
</template>

<script lang="uts">
  import { BlI18n } from '@/uni_modules/belay-unix/utils/BlI18n/index.uts'
  import { jaJP } from './utils/locales/ja-JP.uts'
  import { frFR } from './utils/locales/fr-FR.uts'
  
  export default {
    onLoad() {
      // 注册语言包（如果还未注册）
      if (!BlI18n.isLocaleRegistered('ja-JP')) {
        BlI18n.registerLocale('ja-JP', jaJP)
      }
      if (!BlI18n.isLocaleRegistered('fr-FR')) {
        BlI18n.registerLocale('fr-FR', frFR)
      }
    },
    methods: {
      switchToJapanese(): void {
        BlI18n.config({ locale: jaJP })
      },
      switchToFrench(): void {
        BlI18n.config({ locale: frFR })
      }
    }
  }
</script>
```

### 方式三：通过 BlI18nProvider 组件注册

```vue
<template>
  <bl-i18n-provider :locale="currentLocale">
    <your-content />
  </bl-i18n-provider>
</template>

<script lang="uts">
  import type { Locale } from '@/uni_modules/belay-unix/utils/BlI18n/index.uts'
  import { jaJP } from './utils/locales/ja-JP.uts'
  
  export default {
    data() {
      return {
        currentLocale: jaJP as Locale
      }
    },
    created() {
      // 注册语言包（如果还未注册）
      if (!BlI18n.isLocaleRegistered('ja-JP')) {
        BlI18n.registerLocale('ja-JP', jaJP)
      }
    }
  }
</script>
```

## 检查已注册的语言

```typescript
import { BlI18n } from '@/uni_modules/belay-unix/utils/BlI18n/index.uts'

// 获取所有已注册的语言代码
const registeredLocales = BlI18n.getRegisteredLocales()
console.log('已注册的语言:', registeredLocales)
// 输出: ['zh-CN', 'en-US', 'ja-JP', 'fr-FR', 'de-DE']

// 检查特定语言是否已注册
const isJapaneseRegistered = BlI18n.isLocaleRegistered('ja-JP')
console.log('日语是否已注册:', isJapaneseRegistered) // true 或 false
```

## 动态切换语言

```vue
<template>
  <view class="language-selector">
    <button 
      v-for="localeCode in availableLocales" 
      :key="localeCode"
      @click="switchLanguage(localeCode)"
      :class="{ active: currentLocaleCode === localeCode }"
    >
      {{ getLocaleName(localeCode) }}
    </button>
  </view>
</template>

<script lang="uts">
  import { BlI18n } from '@/uni_modules/belay-unix/utils/BlI18n/index.uts'
  import { zhCN, enUS } from '@/uni_modules/belay-unix/locales/index.uts'
  import { jaJP } from './utils/locales/ja-JP.uts'
  import { frFR } from './utils/locales/fr-FR.uts'
  import { deDE } from './utils/locales/de-DE.uts'
  
  export default {
    data() {
      return {
        currentLocaleCode: 'zh-CN',
        localeMap: {
          'zh-CN': zhCN,
          'en-US': enUS,
          'ja-JP': jaJP,
          'fr-FR': frFR,
          'de-DE': deDE
        }
      }
    },
    computed: {
      availableLocales(): string[] {
        return BlI18n.getRegisteredLocales()
      }
    },
    onLoad() {
      // 注册所有语言包
      BlI18n.registerLocale('ja-JP', jaJP)
      BlI18n.registerLocale('fr-FR', frFR)
      BlI18n.registerLocale('de-DE', deDE)
      
      // 获取当前语言
      const currentLocale = BlI18n.getLocale()
      if (currentLocale != null && currentLocale.locale != null) {
        this.currentLocaleCode = currentLocale.locale as string
      }
    },
    methods: {
      switchLanguage(localeCode: string): void {
        const locale = this.localeMap[localeCode]
        if (locale != null) {
          BlI18n.config({ locale: locale })
          this.currentLocaleCode = localeCode
        }
      },
      getLocaleName(localeCode: string): string {
        const names: Record<string, string> = {
          'zh-CN': '中文',
          'en-US': 'English',
          'ja-JP': '日本語',
          'fr-FR': 'Français',
          'de-DE': 'Deutsch'
        }
        return names[localeCode] || localeCode
      }
    }
  }
</script>
```

## 注意事项

1. **语言代码格式**：建议使用 BCP 47 格式（如 'zh-CN', 'en-US', 'ja-JP'）

2. **必需字段**：语言包必须包含 `locale` 和 `localeName` 字段

3. **注册时机**：建议在应用启动时注册所有需要的语言包

4. **语言包结构**：建议参考内置的 `zh-CN.uts` 和 `en-US.uts` 文件结构

5. **参数占位符**：使用 `{{key}}` 格式，例如：`'长度不能少于 {{min}} 个字符'`

