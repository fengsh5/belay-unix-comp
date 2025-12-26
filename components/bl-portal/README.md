# BlPortal BlPortal

BlPortal组件，用于blportal场景。

## 📦 引入

```typescript
import { BlPortal } from '@/uni_modules/belay-unix'
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
| target | 目标容器选择器  | `string` | `body` | 否 |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，要传送的内容  | - |

## 💡 示例

### 基础用法

```vue example:bl-portal/basic
<template>
  <view class="example-basic">
    <bl-button @click="showPortal = !showPortal">切换传送门</bl-button>
    <bl-portal v-if="showPortal" target="body">
      <view class="portal-content">
        <text>这是通过传送门渲染的内容</text>
      </view>
    </bl-portal>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

