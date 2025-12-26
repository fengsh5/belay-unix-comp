# BlPosterPainter BlPosterPainter

BlPosterPainter组件，用于blposterpainter场景。

## 📦 引入

```typescript
import { BlPosterPainter } from '@/uni_modules/belay-unix'
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
| palette | 海报绘制配置  | `Palette \| null` | `null` | 否 |
| width | 画布宽度  | `number \| string` | `750` | 否 |
| height | 画布高度  | `number \| string` | `1334` | 否 |
| scaleRatio | 缩放比例  | `number` | `2` | 否 |
| canvasId | Canvas ID  | `string` | `posterCanvas` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| complete | 绘制完成事件  | `\(imagePath: string\) =\> void` |
| fail | 绘制失败事件  | `\(error: any\) =\> void` |
| imgOk | 图片加载成功事件  | `\(event: any\) =\> void` |
| imgErr | 图片加载失败事件  | `\(error: any\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽  | - |

## 💡 示例

### 基础用法

```vue example:bl-poster-painter/basic
<template>
  <view class="example-basic">
    <bl-button @click="drawPoster">绘制海报</bl-button>
    <bl-poster-painter 
      :palette="posterPalette"
      width="750"
      height="1334"
      @complete="handleComplete"
      @fail="handleFail"
    ></bl-poster-painter>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

