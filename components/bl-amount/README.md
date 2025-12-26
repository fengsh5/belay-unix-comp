# BlAmount BlAmount

BlAmount组件，用于blamount场景。

## 📦 引入

```typescript
import { BlAmount } from '@/uni_modules/belay-unix'
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
| value | 金额数值  | `number \| string` | `0` | 否 |
| showSymbol | 是否显示货币符号  | `boolean` | `true` | 否 |
| symbol | 货币符号  | `string` | `¥` | 否 |
| decimals | 小数位数  | `number` | `2` | 否 |
| thousandSeparator | 是否使用千分位分隔符  | `boolean` | `true` | 否 |
| separator | 千分位分隔符  | `string` | - | 否 |
| size | 金额大小  | `'small' \| 'medium' \| 'large'` | `medium` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 💡 示例

### 基础用法

```vue example:bl-amount/basic
<template>
  <view class="example-basic">
    <bl-amount :value="1234.56"></bl-amount>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

