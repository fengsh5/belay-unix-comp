# BlDialog 对话框

对话框组件，用于对话框场景。

## 📦 引入

```typescript
import { BlDialog } from '@/uni_modules/belay-unix'
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
| visible | 是否显示 | `boolean` | `false` | 否 |
| width | 弹窗容器宽度 | `number \| string` | `'327px'` | 否 |
| title | 标题 | `string` | - | 否 |
| titleStyle | 标题样式 | `string` | - | 否 |
| message | 内容 | `string` | - | 否 |
| messageStyle | 内容样式 | `string` | - | 否 |
| theme | 按钮主题 | `'default' \| 'round-button'` | `'default'` | 否 |
| showCloseIcon | 是否显示关闭图标 | `boolean` | `false` | 否 |
| showCancelButton | 是否显示取消按钮 | `boolean` | `false` | 否 |
| showConfirmButton | 是否显示确认按钮 | `boolean` | `true` | 否 |
| footer | 底部显示区域 | `string \| null` | `null` | 否 |
| confirmText | 底部确认按钮内容 | `string` | - | 否 |
| cancelText | 底部取消按钮内容 | `string` | - | 否 |
| overlayClosable | 点击遮罩层是否可关闭 | `boolean` | `false` | 否 |
| customStyle | 自定义样式 | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| close | 关闭事件 | `(action: DialogAction) => void` | - |
| cancel | 取消事件 | `() => void` | - |
| confirm | 确认事件 | `() => void` | - |
| clickOverlay | 点击遮罩层事件 | `() => void` | - |
| beforeClose | 关闭前事件 | `(action: DialogAction, done: () => void, cancel: () => void) => void` | - |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，对话框内容 | - |
| footer | 底部插槽 | - |

## 💡 示例

### 基础用法

```vue example:bl-dialog/basic
<template>
  <view class="example-basic">
    <bl-button @click="showDialog = true">打开对话框</bl-button>
    <bl-dialog 
      :visible="showDialog" 
      title="提示" 
      message="这是一个对话框"
      @close="showDialog = false"
      @confirm="handleConfirm"
    ></bl-dialog>
  </view>
</template>
```

### 自定义内容

```vue
<template>
  <view>
    <bl-button @click="showDialog = true">自定义内容</bl-button>
    <bl-dialog :visible="showDialog" title="自定义" @close="showDialog = false">
      <view>这是自定义内容</view>
    </bl-dialog>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

