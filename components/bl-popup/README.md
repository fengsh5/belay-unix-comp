# BlPopup 弹出层

弹出层组件，用于弹出层场景。

## 📦 引入

```typescript
import { BlPopup } from '@/uni_modules/belay-unix'
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
| width | 弹窗容器宽度  | `number \| string` | `200px` | 否 |
| round | 是否有圆角  | `boolean` | `false` | 否 |
| position | 抽屉展示位置  | `'top' \| 'left' \| 'bottom' \| 'right' \| 'center'` | `bottom` | 否 |
| overlayClosable | 点击遮罩层是否可关闭  | `boolean` | `true` | 否 |
| destroyOnClose | 关闭弹窗时销毁子节点  | `boolean` | `false` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| close | 关闭事件  | `\(\) =\> void` |
| clickOverlay | 点击遮罩层事件  | `\(\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，弹窗内容  | - |

## 💡 示例

### 基础用法

```vue example:bl-popup/basic
<template>
  <view class="example-basic">
    <bl-button @click="showPopup = true">打开弹出层</bl-button>
    <bl-popup :visible="showPopup" @close="showPopup = false">
      <view class="popup-content">
        <text>这是弹出层内容</text>
        <bl-button @click="showPopup = false" style="margin-top: 20px;">关闭</bl-button>
      </view>
    </bl-popup>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

