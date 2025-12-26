# BlGap BlGap

BlGap组件，用于blgap场景。

## 📦 引入

```typescript
import { BlGap } from '@/uni_modules/belay-unix'
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
| customStyle | 自定义样式  | `string` | - | 否 |

## 💡 示例

### 基础用法

```vue example:bl-gap/basic
<template>
  <view class="example-basic">
    <view>内容1</view>
    <bl-gap></bl-gap>
    <view>内容2</view>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

