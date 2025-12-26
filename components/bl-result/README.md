# BlResult 结果页

结果页组件，用于结果页场景。

## 📦 引入

```typescript
import { BlResult } from '@/uni_modules/belay-unix'
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
| status | 结果状态  | `ResultStatus` | `info` | 否 |
| title | 标题  | `string` | - | 否 |
| subTitle | 副标题  | `string` | - | 否 |
| icon | 自定义图标  | `string` | - | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，额外操作  | - |
| icon | 图标插槽  | - |
| title | 标题插槽  | - |
| subTitle | 副标题插槽  | - |
| extra | 额外操作插槽  | - |

## 💡 示例

### 基础用法

```vue example:bl-result/basic
<template>
  <view class="example-basic">
    <bl-result title="操作成功" sub-title="这是一条成功提示信息"></bl-result>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

