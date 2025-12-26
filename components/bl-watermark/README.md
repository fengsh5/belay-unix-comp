# BlWatermark 水印

水印组件，用于水印场景。

## 📦 引入

```typescript
import { BlWatermark } from '@/uni_modules/belay-unix'
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
| content | 水印内容  | `string \| Array\<string\>` | - | 否 |
| width | 水印宽度  | `number` | `120` | 否 |
| height | 水印高度  | `number` | `64` | 否 |
| image | 水印图片地址  | `string` | - | 否 |
| font | 水印文字样式  | `WatermarkFont` | `({
					color: 'rgba(0` | 否 |
| rotate | 水印旋转角度  | `number` | `-22` | 否 |
| opacity | 水印透明度  | `number` | `1` | 否 |
| gap | 水印间距  | `[number` | `[]100` | 否 |
| offset | 水印偏移量  | `[number` | `[]0` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，需要添加水印的内容  | - |

## 💡 示例

### 基础用法

```vue example:bl-watermark/basic
<template>
  <view class="example-basic">
    <bl-watermark content="水印文字">
      <view class="watermark-content">
        <text>这是需要添加水印的内容</text>
      </view>
    </bl-watermark>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

