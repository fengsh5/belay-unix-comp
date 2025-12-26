# BlView 视图容器

视图容器组件，用于视图容器场景。

## 📦 引入

```typescript
import { BlView } from '@/uni_modules/belay-unix'
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
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击事件  | `\(event: any\) =\> void` |
| touchStart | 触摸开始事件  | `\(event: any\) =\> void` |
| touchEnd | 触摸结束事件  | `\(event: any\) =\> void` |
| touchMove | 触摸移动事件  | `\(event: any\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽  | - |

## 💡 示例

### 基础用法

```vue example:bl-view/basic
<template>
  <view class="example-basic">
    <bl-view>
      <text>视图容器内容</text>
    </bl-view>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

