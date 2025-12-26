# BlCheckerPopup BlCheckerPopup

BlCheckerPopup组件，用于blcheckerpopup场景。

## 📦 引入

```typescript
import { BlCheckerPopup } from '@/uni_modules/belay-unix'
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
| type | 类型  | `'checkbox' \| 'radio'` | `checkbox` | 否 |
| options | 选项列表  | `Array\<CheckerOption\>` | `[]` | 否 |
| value | 当前选中的值（radio为单个值，checkbox为数组）  | `string \| number \| Array\<string \| number\> \| null` | `null` | 否 |
| round | 是否显示圆角  | `boolean` | `true` | 否 |
| showConfirm | 是否显示确认按钮  | `boolean` | `true` | 否 |
| confirmText | 确认按钮文本  | `string` | `确定` | 否 |
| overlayClosable | 点击遮罩层是否可关闭  | `boolean` | `true` | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| close | 关闭事件  | `\(\) =\> void` |
| change | 值变化事件  | `\(value: string \| number \| Array\<string \| number\>\) =\> void` |
| confirm | 确认事件  | `\(value: string \| number \| Array\<string \| number\>\) =\> void` |

## 💡 示例

### 基础用法

```vue example:bl-checker-popup/basic
<template>
  <view class="example-basic">
    <bl-button @click="showPopup = true">打开选择器弹窗</bl-button>
    <bl-checker-popup 
      :visible="showPopup" 
      title="选择选项"
      type="checkbox"
      :options="checkerOptions"
      :value="checkerValues"
      @close="showPopup = false"
      @confirm="handleConfirm"
    ></bl-checker-popup>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

