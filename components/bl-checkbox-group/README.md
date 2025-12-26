# BlCheckboxGroup BlCheckboxGroup

BlCheckboxGroup组件，用于blcheckboxgroup场景。

## 📦 引入

```typescript
import { BlCheckboxGroup } from '@/uni_modules/belay-unix'
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
| value | 选中值  | `Array\<string \| number\>` | `[]` | 否 |
| disabled | 禁用  | `boolean` | `false` | 否 |
| color | 选中颜色  | `string` | - | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 值变化事件  | `\(value: Array\<string \| number\>\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，BlCheckbox 组件  | - |

## 💡 示例

### 基础用法

```vue example:bl-checkbox-group/basic
<template>
  <view class="example-basic">
    <bl-checkbox-group :value="checkedList" @change="handleChange">
      <bl-checkbox name="1">选项1</bl-checkbox>
      <bl-checkbox name="2">选项2</bl-checkbox>
      <bl-checkbox name="3">选项3</bl-checkbox>
    </bl-checkbox-group>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

