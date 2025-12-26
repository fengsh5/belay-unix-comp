# BlText 文本

文本组件，用于文本场景。

## 📦 引入

```typescript
import { BlText } from '@/uni_modules/belay-unix'
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
| selectable | 文本是否可选  | `boolean` | `false` | 否 |
| userSelect | 是否允许用户选择文本  | `boolean` | `false` | 否 |
| space | 显示连续空格，可选值：ensp(中文字符空格一半大小)、emsp(中文字符空格大小)、nbsp(根据字体设置的空格大小)  | `'ensp' \| 'emsp' \| 'nbsp' \| ''` | - | 否 |
| decode | 是否解码  | `boolean` | `false` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击事件  | `\(event: any\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，文本内容  | - |

## 💡 示例

### 基础用法

```vue example:bl-text/basic
<template>
  <view class="example-basic">
    <bl-text>这是一段文本内容</bl-text>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

