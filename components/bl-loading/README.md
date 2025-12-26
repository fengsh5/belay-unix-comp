# BlLoading 加载中

加载中组件，用于加载中场景。

## 📦 引入

```typescript
import { BlLoading } from '@/uni_modules/belay-unix'
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
| icon | 自定义图标的插槽  | `string \| null` | `null` | 否 |
| message | loading描述的插槽  | `string` | - | 否 |
| spinStyle | 默认loading的style  | `string` | - | 否 |
| spinClassName | 默认loading的className  | `string` | - | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| icon | 图标插槽  | - |
| default | 默认插槽  | - |

## 💡 示例

### 基础用法

```vue example:bl-loading/basic
<template>
  <view class="example-basic">
    <bl-loading></bl-loading>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

