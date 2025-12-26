# BlPickerSelector 选择器

选择器组件，用于选择器场景。

## 📦 引入

```typescript
import { BlPickerSelector } from '@/uni_modules/belay-unix'
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
| value | 当前选中的值  | `string \| number \| null` | `null` | 否 |
| range | 选项数组  | `Array\<any\>` | `[]` | 否 |
| rangeKey | 当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容  | `string` | - | 否 |
| disabled | 是否禁用  | `boolean` | `false` | 否 |
| placeholder | 占位符  | `string` | `请选择` | 否 |
| showArrow | 是否显示箭头  | `boolean` | `true` | 否 |
| formatter | 显示文本格式化函数  | `\(\(text: string` | `null` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 值变化事件  | `\(value: string \| number` |
| cancel | 取消选择事件  | `\(\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，自定义触发元素  | - |

## 💡 示例

### 基础用法

```vue example:bl-picker-selector/basic
<template>
  <view class="example-basic">
    <bl-picker-selector 
      :range="options" 
      :value="selectedValue"
      placeholder="请选择"
      @change="handleChange"
    ></bl-picker-selector>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

