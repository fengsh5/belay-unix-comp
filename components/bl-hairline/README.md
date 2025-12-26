# BlHairline BlHairline

BlHairline组件，用于blhairline场景。

## 📦 引入

```typescript
import { BlHairline } from '@/uni_modules/belay-unix'
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
| placement | 边框位置，支持 'top' | 'bottom' | 'left' | 'right'  | `Array\<'top' \| 'bottom' \| 'left' \| 'right'\>` | `[]` | 否 |
| color | 边框颜色  | `string` | `#ebedf0` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽  | - |

## 💡 示例

### 基础用法

```vue example:bl-hairline/basic
<template>
  <view class="example-basic">
    <view class="hairline-demo">
      <bl-hairline :placement="['bottom']">
        <view class="hairline-content">
          <text>带底部细线的内容</text>
        </view>
      </bl-hairline>
    </view>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

