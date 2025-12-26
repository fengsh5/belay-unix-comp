# BlCheckbox 复选框

复选框组件，用于复选框场景。

## 📦 引入

```typescript
import { BlCheckbox } from '@/uni_modules/belay-unix'
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
| checked | 选中状态  | `boolean` | `false` | 否 |
| disabled | 禁用  | `boolean` | `false` | 否 |
| color | 选中颜色  | `string` | - | 否 |
| value | 只支持BlCheckboxGroup中使用  | `string \| number \| null` | `null` | 否 |
| reverse | 改变文本位置  | `boolean` | `false` | 否 |
| label | 文本  | `string` | - | 否 |
| labelColorVariable | label的颜色是否可变  | `boolean` | `false` | 否 |
| round | 圆形模式  | `boolean` | `false` | 否 |
| width | 设置大小  | `string \| number \| null` | `null` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 值变化事件  | `\(event: \{ detail: \{ checked: boolean` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，复选框标签内容  | - |

## 💡 示例

### 基础用法

```vue example:bl-checkbox/basic
<template>
  <view class="example-basic">
    <bl-checkbox>选项</bl-checkbox>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

