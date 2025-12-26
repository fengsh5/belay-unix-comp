# BlBadge 徽标

徽标组件，用于徽标场景。

## 📦 引入

```typescript
import { BlBadge } from '@/uni_modules/belay-unix'
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
| value | 徽章显示值，为空时显示红点  | `string \| number` | - | 否 |
| max | 徽章显示的最大值，超过时显示 value+  | `number` | `99` | 否 |
| dot | 是否为红点模式（不显示数字）  | `boolean` | `false` | 否 |
| color | 徽章颜色  | `string` | `#ff3b30` | 否 |
| offset | 徽章位置偏移量  | `number[]` | `[]0` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，徽章包裹的内容  | - |

## 💡 示例

### 基础用法

```vue example:bl-badge/basic
<template>
  <view class="example-basic">
    <bl-badge>徽章</bl-badge>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

