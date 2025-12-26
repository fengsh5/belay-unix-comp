# BlSpace 间距

间距组件，用于间距场景。

## 📦 引入

```typescript
import { BlSpace } from '@/uni_modules/belay-unix'
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
| size | 间距大小  | `number \| 'small' \| 'middle' \| 'large'` | `middle` | 否 |
| direction | 间距方向  | `SpaceDirection` | `horizontal` | 否 |
| align | 对齐方式  | `SpaceAlign` | `center` | 否 |
| wrap | 是否自动换行，仅在 horizontal 时有效  | `boolean` | `false` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，子元素  | - |

## 💡 示例

### 基础用法

```vue example:bl-space/basic
<template>
  <view class="example-basic">
    <bl-space>
      <bl-button>按钮1</bl-button>
      <bl-button>按钮2</bl-button>
      <bl-button>按钮3</bl-button>
    </bl-space>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

