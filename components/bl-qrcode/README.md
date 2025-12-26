# BlQrcode BlQrcode

BlQrcode组件，用于blqrcode场景。

## 📦 引入

```typescript
import { BlQrcode } from '@/uni_modules/belay-unix'
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
| value | 二维码内容  | `string` | - | 否 |
| size | 二维码大小  | `number` | `200` | 否 |
| color | 二维码颜色  | `string` | `#000000` | 否 |
| backgroundColor | 二维码背景颜色  | `string` | `#FFFFFF` | 否 |
| errorCorrectLevel | 二维码容错级别  | `'L' \| 'M' \| 'Q' \| 'H'` | `M` | 否 |
| bordered | 是否显示边框  | `boolean` | `true` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击事件  | `\(\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，自定义二维码下方内容  | - |

## 💡 示例

### 基础用法

```vue example:bl-qrcode/basic
<template>
  <view class="example-basic">
    <bl-qrcode value="https://www.example.com" :size="200"></bl-qrcode>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

