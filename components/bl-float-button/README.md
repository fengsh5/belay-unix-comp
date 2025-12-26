# BlFloatButton 悬浮按钮

悬浮按钮组件，用于悬浮按钮场景。

## 📦 引入

```typescript
import { BlFloatButton } from '@/uni_modules/belay-unix'
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
| type | 按钮类型  | `FloatButtonType` | `primary` | 否 |
| shape | 按钮形状  | `FloatButtonShape` | `circle` | 否 |
| size | 按钮大小  | `'default' \| 'large' \| 'small'` | `default` | 否 |
| icon | 按钮图标  | `string` | - | 否 |
| description | 按钮描述  | `string` | - | 否 |
| disabled | 是否禁用  | `boolean` | `false` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击事件  | `\(\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，自定义按钮内容  | - |
| icon | 图标插槽  | - |

## 💡 示例

### 基础用法

```vue example:bl-float-button/basic
<template>
  <view class="example-basic">
    <view class="content">
      <text>内容区域</text>
    </view>
    <bl-float-button icon="plus" @click="handleClick"></bl-float-button>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

