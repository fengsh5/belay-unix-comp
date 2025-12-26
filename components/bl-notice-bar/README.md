# BlNoticeBar 通告栏

通告栏组件，用于通告栏场景。

## 📦 引入

```typescript
import { BlNoticeBar } from '@/uni_modules/belay-unix'
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
| text | 通知栏文本  | `string` | - | 否 |
| scrollable | 是否可滚动  | `boolean` | `false` | 否 |
| scrollWithAnimation | 滚动时是否使用动画  | `boolean` | `true` | 否 |
| icon | 左侧图标  | `string` | - | 否 |
| iconColor | 左侧图标颜色  | `string` | `#ff9500` | 否 |
| closable | 是否显示关闭按钮  | `boolean` | `false` | 否 |
| color | 文本颜色  | `string` | `#ed6a0c` | 否 |
| background | 背景颜色  | `string` | `#fffbe8` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| close | 关闭事件  | `\(event: any\) =\> void` |
| click | 点击事件  | `\(event: any\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，通知栏文本内容  | - |

## 💡 示例

### 基础用法

```vue example:bl-notice-bar/basic
<template>
  <view class="example-basic">
    <bl-notice-bar text="这是一条通知消息"></bl-notice-bar>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

