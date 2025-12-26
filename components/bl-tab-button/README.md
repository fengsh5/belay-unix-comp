# BlTabButton BlTabButton

BlTabButton组件，用于bltabbutton场景。

## 📦 引入

```typescript
import { BlTabButton } from '@/uni_modules/belay-unix'
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
| text | 按钮文本  | `string` | - | 否 |
| icon | 图标名称  | `string` | - | 否 |
| iconColor | 图标颜色  | `string` | `#646566` | 否 |
| badge | 徽章值  | `string \| number` | - | 否 |
| active | 是否选中  | `boolean` | `false` | 否 |
| activeIconColor | 选中时的图标颜色  | `string` | `#007aff` | 否 |
| activeTextColor | 选中时的文字颜色  | `string` | `#007aff` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击事件  | `\(event: any\) =\> void` |

## 💡 示例

### 基础用法

```vue
<template>
  <view>
    <bl-tab-button></bl-tab-button>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

