# BlModal 模态框

模态框组件，用于模态框场景。

## 📦 引入

```typescript
import { BlModal } from '@/uni_modules/belay-unix'
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
| visible | 是否显示Modal  | `boolean` | `false` | 否 |
| overlayClassName | 遮罩层类名  | `string` | - | 否 |
| overlayStyle | 遮罩层样式  | `string` | - | 否 |
| overlayClosable | 点击遮罩层是否可关闭  | `boolean` | `true` | 否 |
| contentClassName | 弹窗类名  | `string` | - | 否 |
| contentStyle | 弹窗样式  | `string` | - | 否 |
| destroyOnClose | 关闭弹窗时销毁子节点  | `boolean` | `false` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| close | 关闭事件  | `\(\) =\> void` |
| clickOverlay | 点击遮罩层事件  | `\(\) =\> void` |
| beforeClose | 关闭前事件  | `\(done: \(\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，弹窗内容  | - |

## 💡 示例

### 基础用法

```vue example:bl-modal/basic
<template>
  <view class="example-basic">
    <bl-button @click="showModal = true">打开模态框</bl-button>
    <bl-modal :visible="showModal" @close="showModal = false">
      <view class="modal-content">
        <text>这是模态框内容</text>
        <bl-button @click="showModal = false" style="margin-top: 20px;">关闭</bl-button>
      </view>
    </bl-modal>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

