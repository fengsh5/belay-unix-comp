# BlSlider 滑块

滑块组件，用于滑块场景。

## 📦 引入

```typescript
import { BlSlider } from '@/uni_modules/belay-unix'
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
| value | 当前值  | `number` | `0` | 否 |
| min | 最小值  | `number` | `0` | 否 |
| max | 最大值  | `number` | `100` | 否 |
| step | 步长  | `number` | `1` | 否 |
| disabled | 是否禁用  | `boolean` | `false` | 否 |
| activeColor | 滑块颜色  | `string` | `#09BB07` | 否 |
| backgroundColor | 滑块背景色  | `string` | `#EBEBEB` | 否 |
| blockSize | 滑块大小  | `number` | `15` | 否 |
| blockColor | 滑块颜色  | `string` | `#ffffff` | 否 |
| showValue | 是否显示当前值  | `boolean` | `false` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 值变化事件（拖拽结束）  | `\(value: number\) =\> void` |
| changing | 值正在变化事件（拖拽中）  | `\(value: number\) =\> void` |

## 💡 示例

### 基础用法

```vue example:bl-slider/basic
<template>
  <view class="example-basic">
    <bl-slider :value="50"></bl-slider>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

