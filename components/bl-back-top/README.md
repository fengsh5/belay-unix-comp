# BlBackTop 回到顶部

回到顶部组件，用于回到顶部场景。

## 📦 引入

```typescript
import { BlBackTop } from '@/uni_modules/belay-unix'
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
| visibilityHeight | 滚动高度达到此值才显示  | `number` | `400` | 否 |
| onClick | 点击按钮的回调  | `\(\) =\> void` | - | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击事件  | `\(\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，自定义按钮内容  | - |

## 💡 示例

### 基础用法

```vue example:bl-back-top/basic
<template>
  <view class="example-basic">
    <view class="scroll-content">
      <text>向下滚动查看回到顶部按钮</text>
      <view v-for="i in 20" :key="i" class="content-item">
        <text>内容 {{ i }}</text>
      </view>
    </view>
    <bl-back-top></bl-back-top>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

