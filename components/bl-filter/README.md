# BlFilter BlFilter

BlFilter组件，用于blfilter场景。

## 📦 引入

```typescript
import { BlFilter } from '@/uni_modules/belay-unix'
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
| fixed | 是否固定在顶部  | `boolean` | `false` | 否 |
| backgroundColor | 背景颜色  | `string` | `#fff` | 否 |
| height | 高度  | `number \| string` | `88` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，筛选器内容  | - |

## 💡 示例

### 基础用法

```vue example:bl-filter/basic
<template>
  <view class="example-basic">
    <bl-filter>
      <view class="filter-content">
        <bl-button size="small">筛选1</bl-button>
        <bl-button size="small">筛选2</bl-button>
        <bl-button size="small">筛选3</bl-button>
      </view>
    </bl-filter>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

