# BlDivider 分割线

分割线组件，用于分割线场景。

## 📦 引入

```typescript
import { BlDivider } from '@/uni_modules/belay-unix'
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
| dashed | 虚线样式  | `boolean` | `false` | 否 |
| tip | 分割线中间文字  | `string` | - | 否 |

## 💡 示例

### 基础用法

```vue example:bl-divider/basic
<template>
  <view class="example-basic">
    <bl-divider></bl-divider>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

