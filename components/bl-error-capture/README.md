# BlErrorCapture 错误捕获

错误捕获组件，用于错误捕获场景。

## 📦 引入

```typescript
import { BlErrorCapture } from '@/uni_modules/belay-unix'
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
| error | 错误信息  | `string` | - | 否 |
| showError | 是否显示错误  | `boolean` | `true` | 否 |
| errorMessage | 错误提示文本  | `string` | `出现错误，请重试` | 否 |
| retryText | 重试按钮文本  | `string` | `重试` | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| retry | 重试事件  | `\(\) =\> void` |
| error | 错误事件  | `\(error: string \| \{ message?: string \}\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，正常显示的内容  | - |

## 💡 示例

### 基础用法

```vue example:bl-error-capture/basic
<template>
  <view class="example-basic">
    <bl-error-capture :error="errorMsg" :show-error="showError" @retry="handleRetry">
      <view class="normal-content">
        <text>正常内容显示</text>
      </view>
    </bl-error-capture>
    <bl-button @click="toggleError" style="margin-top: 12px;">
      {{ showError ? '隐藏错误' : '显示错误' }}
    </bl-button>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

