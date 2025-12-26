# BlCheckboxPopup BlCheckboxPopup

BlCheckboxPopup组件，用于blcheckboxpopup场景。

## 📦 引入

```typescript
import { BlCheckboxPopup } from '@/uni_modules/belay-unix'
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
| visible | 是否显示  | `boolean` | `false` | 否 |
| title | 标题  | `string` | - | 否 |
| options | 选项列表  | `Array\<CheckboxOption\>` | `[]` | 否 |
| value | 当前选中的值数组  | `Array\<string \| number\>` | `[]` | 否 |
| round | 是否显示圆角  | `boolean` | `true` | 否 |
| showConfirm | 是否显示确认按钮  | `boolean` | `true` | 否 |
| confirmText | 确认按钮文本  | `string` | `确定` | 否 |
| overlayClosable | 点击遮罩层是否可关闭  | `boolean` | `true` | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| close | 关闭事件  | `\(\) =\> void` |
| change | 值变化事件  | `\(value: Array\<string \| number\>\) =\> void` |
| confirm | 确认事件  | `\(value: Array\<string \| number\>\) =\> void` |

## 💡 示例

### 基础用法

```vue example:bl-checkbox-popup/basic
<template>
  <view class="example-basic">
    <bl-button @click="showPopup = true">打开复选框弹窗</bl-button>
    <bl-checkbox-popup 
      :visible="showPopup" 
      title="选择选项"
      :options="checkboxOptions"
      :value="checkedValues"
      @close="showPopup = false"
      @confirm="handleConfirm"
    ></bl-checkbox-popup>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

