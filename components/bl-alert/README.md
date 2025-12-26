# BlAlert BlAlert

BlAlert组件，用于blalert场景。

## 📦 引入

```typescript
import { BlAlert } from '@/uni_modules/belay-unix'
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
| type | 指定警告提示的样式类型  | `AlertType` | `info` | 否 |
| message | 警告提示内容  | `string` | - | 否 |
| description | 警告提示的辅助性文字介绍  | `string` | - | 否 |
| showIcon | 是否显示辅助图标  | `boolean` | `false` | 否 |
| icon | 自定义图标  | `string` | - | 否 |
| closable | 是否可关闭  | `boolean` | `false` | 否 |
| closeText | 关闭按钮自定义文字  | `string` | - | 否 |
| size | 警告提示的尺寸  | `AlertSize` | `default` | 否 |
| onClose | 关闭时触发的回调函数  | `\(\) =\> void` | - | 否 |
| onClick | 点击 Alert 时触发的回调函数  | `\(\) =\> void` | - | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| close | 关闭事件  | `\(\) =\> void` |
| click | 点击事件  | `\(\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，警告提示内容  | - |
| icon | 自定义图标  | - |
| closeIcon | 自定义关闭按钮  | - |
| description | 自定义描述内容  | - |

## 💡 示例

### 基础用法

```vue example:bl-alert/basic
<template>
  <view class="example-basic">
    <bl-alert message="这是一条提示信息"></bl-alert>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

