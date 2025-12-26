# BlTag 标签

标签组件，用于标签场景。

## 📦 引入

```typescript
import { BlTag } from '@/uni_modules/belay-unix'
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
| type | 标签类型  | `'primary' \| 'default' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | 否 |
| size | 标签大小  | `'small' \| 'medium' \| 'large'` | `medium` | 否 |
| effect | 标签样式效果  | `'dark' \| 'light' \| 'plain'` | `light` | 否 |
| round | 是否为圆角  | `boolean` | `false` | 否 |
| closeable | 是否可关闭  | `boolean` | `false` | 否 |
| icon | 图标名称  | `string` | - | 否 |
| iconColor | 图标颜色  | `string` | - | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| close | 关闭事件  | `\(event: any\) =\> void` |
| click | 点击事件  | `\(event: any\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，标签内容  | - |

## 💡 示例

### 基础用法

```vue example:bl-tag/basic
<template>
  <view class="example-basic">
    <bl-tag>标签（默认 primary）</bl-tag>
  </view>
</template>
```

### 不同类型

```vue
<template>
  <view class="tag-group">
    <bl-tag>主要标签（默认）</bl-tag>
    <bl-tag type="primary">主要标签</bl-tag>
    <bl-tag type="default">默认标签</bl-tag>
    <bl-tag type="success">成功标签</bl-tag>
    <bl-tag type="warning">警告标签</bl-tag>
    <bl-tag type="danger">危险标签</bl-tag>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

