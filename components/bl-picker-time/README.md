# BlPickerTime 时间选择器

时间选择器组件，用于时间选择器场景。

## 📦 引入

```typescript
import { BlPickerTime } from '@/uni_modules/belay-unix'
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
| value | 当前选中的值，格式为 HH:mm  | `string` | - | 否 |
| disabled | 是否禁用  | `boolean` | `false` | 否 |
| placeholder | 占位符  | `string` | `请选择时间` | 否 |
| showArrow | 是否显示箭头  | `boolean` | `true` | 否 |
| formatter | 时间格式化函数  | `\(\(value: string\) =\> string\) \| null` | `null` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 值变化事件  | `\(value: string\) =\> void` |
| cancel | 取消选择事件  | `\(\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，自定义触发元素  | - |

## 💡 示例

### 基础用法

```vue example:bl-picker-time/basic
<template>
  <view class="example-basic">
    <bl-picker-time 
      :value="selectedTime"
      placeholder="请选择时间"
      @change="handleChange"
    ></bl-picker-time>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

