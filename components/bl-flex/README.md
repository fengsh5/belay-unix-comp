# BlFlex BlFlex

BlFlex组件，用于blflex场景。

## 📦 引入

```typescript
import { BlFlex } from '@/uni_modules/belay-unix'
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
| justify | 主轴对齐方式  | `FlexJustify` | `start` | 否 |
| align | 交叉轴对齐方式  | `FlexAlign` | `start` | 否 |
| direction | 方向  | `FlexDirection` | `row` | 否 |
| wrap | 是否自动换行  | `boolean \| 'wrap' \| 'nowrap' \| 'wrap-reverse'` | `false` | 否 |
| gap | 间距大小  | `number \| 'small' \| 'middle' \| 'large'` | `0` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，子元素  | - |

## 💡 示例

### 基础用法

```vue example:bl-flex/basic
<template>
  <view class="example-basic">
    <bl-flex>
      <view class="flex-item">1</view>
      <view class="flex-item">2</view>
      <view class="flex-item">3</view>
    </bl-flex>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

