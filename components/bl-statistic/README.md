# BlStatistic 统计数值

统计数值组件，用于统计数值场景。

## 📦 引入

```typescript
import { BlStatistic } from '@/uni_modules/belay-unix'
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
| value | 数值  | `number \| string` | `0` | 否 |
| valueStyle | 数值的样式  | `string` | - | 否 |
| prefix | 数值前缀  | `string` | - | 否 |
| suffix | 数值后缀  | `string` | - | 否 |
| title | 标题  | `string` | - | 否 |
| precision | 数值精度  | `number` | `null` | 否 |
| groupSeparator | 千分位标识符  | `string` | - | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，自定义数值显示  | - |
| prefix | 前缀插槽  | - |
| suffix | 后缀插槽  | - |
| title | 标题插槽  | - |

## 💡 示例

### 基础用法

```vue example:bl-statistic/basic
<template>
  <view class="example-basic">
    <bl-statistic title="总销售额" :value="112893"></bl-statistic>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

