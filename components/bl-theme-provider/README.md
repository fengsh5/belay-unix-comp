# BlThemeProvider 主题提供者

主题提供者组件，用于主题提供者场景。

## 📦 引入

```typescript
import { BlThemeProvider } from '@/uni_modules/belay-unix'
```

或者使用全局注册：

```typescript
// main.uts 或 main.js
import BelayUnix from '@/uni_modules/belay-unix'
app.use(BelayUnix)
```

## 📋 Props

| 参数 | 说明 | 类型 | 默认值 | 必填 |
|------|------|------|--------|------|
| theme | 主题配置对象（参考 antd 的 ConfigProvider theme 属性） 可以传递部分主题变量，会自动与默认主题合并  | `ThemeConfig \| null` | `null` | 否 |
| presetTheme | 预设主题名称（'light' | 'dark'） 当 theme 属性为空时，使用预设主题  | `'light' \| 'dark' \| null` | `light` | 否 |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽  | - |

## 💡 示例

### 基础用法

```vue example:bl-theme-provider/basic
<template>
  <view class="example-basic">
    <bl-theme-provider preset-theme="light">
      <view class="provider-content">
        <text>主题提供者内容</text>
        <bl-button type="primary">按钮</bl-button>
      </view>
    </bl-theme-provider>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

