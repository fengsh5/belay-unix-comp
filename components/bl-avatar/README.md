# BlAvatar 头像

头像组件，用于头像场景。

## 📦 引入

```typescript
import { BlAvatar } from '@/uni_modules/belay-unix'
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
| src | 头像图片地址  | `string` | - | 否 |
| round | 是否为圆形  | `boolean` | `true` | 否 |
| size | 头像大小，支持数字（px）或字符串（如 'small', 'medium', 'large'）  | `number \| string` | `88` | 否 |
| mode | 图片裁剪、缩放的模式  | `'scaleToFill' \| 'aspectFit' \| 'aspectFill' \| 'widthFix' \| 'heightFix' \| 'top' \| 'bottom' \| 'center' \| 'left' \| 'right' \| 'top left' \| 'top right' \| 'bottom left' \| 'bottom right'` | `aspectFill` | 否 |
| errorImageSrc | 图片加载失败时的默认图  | `string` | - | 否 |
| placeholderText | 占位符文本（当没有图片时显示）  | `string` | - | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| error | 图片加载错误事件  | `\(event: any\) =\> void` |
| load | 图片加载完成事件  | `\(event: any\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，当没有图片时显示的内容  | - |

## 💡 示例

### 基础用法

```vue example:bl-avatar/basic
<template>
  <view class="example-basic">
    <bl-avatar 
      src="https://pic.616pic.com/photoone/00/02/58/618cf527354c35308.jpg!/fw/1120" 
      size="large"
    ></bl-avatar>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

