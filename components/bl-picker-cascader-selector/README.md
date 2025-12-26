# BlPickerCascaderSelector 级联选择器

级联选择器组件，用于级联选择器场景。

## 📦 引入

```typescript
import { BlPickerCascaderSelector } from '@/uni_modules/belay-unix'
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
| value | 当前选中的值，数组形式  | `Array\<string \| number\>` | `[]` | 否 |
| options | 级联数据  | `Array\<CascaderOption\>` | `[]` | 否 |
| childrenKey | 子级字段名  | `string` | `children` | 否 |
| labelKey | 显示字段名  | `string` | `label` | 否 |
| valueKey | 值字段名  | `string` | `value` | 否 |
| disabled | 是否禁用  | `boolean` | `false` | 否 |
| placeholder | 占位符  | `string` | `请选择` | 否 |
| showArrow | 是否显示箭头  | `boolean` | `true` | 否 |
| formatter | 显示文本格式化函数  | `\(\(labels: string[]` | `null` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 值变化事件  | `\(value: Array\<string \| number\>` |
| columnChange | 列变化事件  | `\(event: \{ column: number` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，自定义触发元素  | - |

## 💡 示例

### 基础用法

```vue example:bl-picker-cascader-selector/basic
<template>
  <view class="example-basic">
    <bl-picker-cascader-selector 
      :options="cascaderOptions" 
      :value="selectedCascader"
      placeholder="请选择"
      @change="handleChange"
    ></bl-picker-cascader-selector>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

