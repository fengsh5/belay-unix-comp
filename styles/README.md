# Belay-Unix 样式系统使用指南

## 概述

Belay-Unix 组件库提供了两套主题系统：

1. **SCSS 变量**（编译时）：用于生成基础样式和 mixins
2. **CSS 变量**（运行时）：用于动态主题切换

## 为什么需要两套系统？

### SCSS 变量的作用

- ✅ **编译时处理**：在构建时生成 CSS，性能更好
- ✅ **Mixins 中使用**：在 `mixins.scss` 中使用 SCSS 变量
- ✅ **作为默认值**：作为 CSS 变量的后备值（fallback）
- ✅ **静态样式**：不需要动态切换的样式可以使用 SCSS 变量

### CSS 变量的作用

- ✅ **运行时切换**：支持动态主题切换（参考 BlTheme 工具）
- ✅ **组件级主题**：支持不同组件使用不同主题
- ✅ **用户自定义**：支持用户自定义主题颜色

## 使用方式

### 方式一：在 SCSS 文件中使用（推荐用于 mixins 和静态样式）

```scss
@import '@/uni_modules/belay-unix/styles/variables.scss';

// 在 mixins 中使用 SCSS 变量
@mixin my-mixin {
  background-color: $background-color;
  color: $text-color;
  border-radius: $border-radius;
}

// 在静态样式中使用 SCSS 变量（作为 CSS 变量的后备）
.my-class {
  // CSS 变量（运行时）+ SCSS 变量（后备）
  color: var(--bl-text-color, $text-color);
  background-color: var(--bl-background-color, $background-color);
  padding: var(--bl-spacing-md, $spacing-md);
}
```

### 方式二：在组件样式中使用（推荐用于需要主题切换的场景）

```vue
<template>
  <view class="container">
    <text class="title">标题</text>
  </view>
</template>

<style>
  /* 直接使用 CSS 变量（运行时主题切换） */
  .container {
    background-color: var(--bl-background-color);
    padding: var(--bl-spacing-md);
  }
  
  .title {
    color: var(--bl-text-color);
    font-size: var(--bl-font-size-lg);
  }
</style>
```

### 方式三：混合使用（最佳实践）

```vue
<style lang="scss">
  @import '@/uni_modules/belay-unix/styles/variables.scss';
  
  .container {
    /* 优先使用 CSS 变量（支持运行时切换） */
    /* SCSS 变量作为后备（确保在未设置 CSS 变量时也能正常显示） */
    background-color: var(--bl-background-color, $background-color);
    color: var(--bl-text-color, $text-color);
    padding: var(--bl-spacing-md, $spacing-md);
    border-radius: var(--bl-border-radius, $border-radius);
  }
  
  .static-element {
    /* 静态样式可以直接使用 SCSS 变量 */
    border: 1px solid $border-color;
  }
</style>
```

## 最佳实践

### ✅ 推荐做法

1. **在 mixins 中使用 SCSS 变量**
```scss
   @mixin card {
     background-color: $background-color;
     border-radius: $border-radius;
}
```

2. **在组件样式中使用 CSS 变量（带后备）**
   ```css
   .my-class {
     color: var(--bl-text-color, $text-color);
}
```

3. **在需要主题切换的场景中，优先使用 CSS 变量**
   ```css
   .theme-aware {
     background-color: var(--bl-background-color);
     color: var(--bl-text-color);
}
```

### ❌ 不推荐做法

1. **不要在组件样式中只使用 SCSS 变量（不支持运行时切换）**
   ```css
   /* ❌ 不推荐：不支持运行时主题切换 */
   .my-class {
     color: $text-color;
}
```

2. **不要在 mixins 中使用 CSS 变量（编译时无法解析）**
```scss
   /* ❌ 不推荐：SCSS 无法解析 CSS 变量 */
   @mixin my-mixin {
     color: var(--bl-text-color);
}
```

## 主题变量映射

SCSS 变量和 CSS 变量的对应关系：

| SCSS 变量 | CSS 变量 | 说明 |
|----------|----------|------|
| `$primary-color` | `--bl-primary-color` | 主色调 |
| `$background-color` | `--bl-background-color` | 背景色 |
| `$text-color` | `--bl-text-color` | 文字颜色 |
| `$border-color` | `--bl-border-color` | 边框颜色 |
| `$spacing-md` | `--bl-spacing-md` | 间距 |
| `$border-radius` | `--bl-border-radius` | 圆角 |

完整的变量列表请参考 `variables.scss` 文件。

## 运行时主题切换

使用 BlTheme 工具进行运行时主题切换：

```typescript
import { BlTheme } from '@/uni_modules/belay-unix/utils/BlTheme/index.uts'

// 切换主题
BlTheme.config({
  theme: {
    'primary-color': '#1890ff',
    'background-color': '#ffffff'
  }
})
```

详细使用说明请参考：[BlTheme 使用文档](../utils/BlTheme/README.md)

## 总结

- **SCSS 变量**：用于编译时、mixins、静态样式、作为 CSS 变量的后备值
- **CSS 变量**：用于运行时主题切换、组件级主题、用户自定义主题
- **最佳实践**：在组件样式中使用 `var(--bl-xxx, $xxx)` 格式，既支持运行时切换，又有编译时后备
