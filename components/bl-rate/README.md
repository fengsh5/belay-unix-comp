# BlRate 评分

评分组件，用于评分场景。

## 📦 引入

```typescript
import { BlRate } from '@/uni_modules/belay-unix'
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
| defaultValue | 默认值  | `number` | `0` | 否 |
| count | 星星总数  | `number` | `5` | 否 |
| allowHalf | 是否允许半选  | `boolean` | `false` | 否 |
| allowClear | 是否允许清除  | `boolean` | `true` | 否 |
| readonly | 是否只读  | `boolean` | `false` | 否 |
| disabled | 是否禁用  | `boolean` | `false` | 否 |
| character | 自定义字符  | `string` | `★` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 值改变事件  | `\(value: number\) =\> void` |
| hoverChange | 鼠标悬停事件（移动端不支持）  | `\(value: number\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| character | 自定义字符插槽  | - |

## 💡 示例

### 基础用法

```vue example:bl-rate/basic
<template>
  <view class="example-basic">
    <bl-rate :value="3"></bl-rate>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

