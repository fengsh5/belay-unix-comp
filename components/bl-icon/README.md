# BlIcon 图标

图标组件，用于图标场景。

## 📦 引入

```typescript
import { BlIcon } from '@/uni_modules/belay-unix'
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
| icon | 支持绑定 内置图标名称、http 图片、或 svg 字符串  | `string` | - | 否 |
| width | 图标宽度  | `number \| string` | `1em` | 否 |
| color | 对于多色 SVG 图标和 HTTP 图标无效  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击事件  | `\(event: any\) =\> void` |

## 💡 示例

### 基础用法

```vue example:bl-icon/basic
<template>
  <view class="example-basic">
    <bl-icon icon="star" color="#ffd700"></bl-icon>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

