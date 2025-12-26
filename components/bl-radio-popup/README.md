# BlRadioPopup BlRadioPopup

BlRadioPopup组件，用于blradiopopup场景。

## 📦 引入

```typescript
import { BlRadioPopup } from '@/uni_modules/belay-unix'
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
| options | 选项列表  | `Array\<RadioOption\>` | `[]` | 否 |
| value | 当前选中的值  | `string \| number \| null` | `null` | 否 |
| round | 是否显示圆角  | `boolean` | `true` | 否 |
| overlayClosable | 点击遮罩层是否可关闭  | `boolean` | `true` | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| close | 关闭事件  | `\(\) =\> void` |
| change | 值变化事件  | `\(value: string \| number\) =\> void` |

## 💡 示例

### 基础用法

```vue example:bl-radio-popup/basic
<template>
  <view class="example-basic">
    <bl-button @click="showPopup = true">打开单选框弹窗</bl-button>
    <bl-radio-popup 
      :visible="showPopup" 
      title="选择选项"
      :options="radioOptions"
      :value="selectedRadio"
      @close="showPopup = false"
      @change="handleChange"
    ></bl-radio-popup>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

