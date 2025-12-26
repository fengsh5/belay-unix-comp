# BlCol BlCol

BlCol组件，用于blcol场景。

## 📦 引入

```typescript
import { BlCol } from '@/uni_modules/belay-unix'
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
| span | 占用比例（24栅格）  | `number` | `24` | 否 |
| offset | 偏移位置  | `number` | `0` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽  | - |

## 💡 示例

### 基础用法

```vue
<template>
  <view>
    <bl-col></bl-col>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

