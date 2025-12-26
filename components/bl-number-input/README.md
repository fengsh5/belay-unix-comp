# BlNumberInput BlNumberInput

BlNumberInput组件，用于blnumberinput场景。

## 📦 引入

```typescript
import { BlNumberInput } from '@/uni_modules/belay-unix'
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
| min | 最小值  | `number` | `Number.MIN_SAFE_INTEGER` | 否 |
| max | 最大值  | `number` | `Number.MAX_SAFE_INTEGER` | 否 |
| step | 步长，每次点击时改变的值  | `number` | `1` | 否 |
| disabled | 是否禁用  | `boolean` | `false` | 否 |
| editable | 是否可编辑  | `boolean` | `true` | 否 |
| showMinus | 是否显示减少按钮  | `boolean` | `true` | 否 |
| showPlus | 是否显示增加按钮  | `boolean` | `true` | 否 |
| placeholder | 占位符  | `string` | - | 否 |
| width | 输入框宽度  | `number \| string` | `120` | 否 |
| buttonSize | 按钮大小  | `number` | `48` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 值变化事件  | `\(value: number\) =\> void` |
| input | 输入事件  | `\(value: number\) =\> void` |
| blur | 失焦事件  | `\(event: any\) =\> void` |
| focus | 聚焦事件  | `\(event: any\) =\> void` |
| plus | 增加按钮点击事件  | `\(value: number\) =\> void` |
| minus | 减少按钮点击事件  | `\(value: number\) =\> void` |

## 💡 示例

### 基础用法

```vue example:bl-number-input/basic
<template>
  <view class="example-basic">
    <bl-number-input :value="1"></bl-number-input>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

