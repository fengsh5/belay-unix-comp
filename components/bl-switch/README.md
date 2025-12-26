# BlSwitch 开关

开关组件，用于开关场景。

## 📦 引入

```typescript
import { BlSwitch } from '@/uni_modules/belay-unix'
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
| checked | 是否选中  | `boolean` | `false` | 否 |
| disabled | 是否禁用  | `boolean` | `false` | 否 |
| type | 样式类型，有效值：switch | checkbox  | `'switch' \| 'checkbox'` | `switch` | 否 |
| color | switch 的颜色，同 css 的 color  | `string` | `#1aad19` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 值变化事件  | `\(event: any\) =\> void` |

## 💡 示例

### 基础用法

```vue example:bl-switch/basic
<template>
  <view class="example-basic">
    <bl-switch></bl-switch>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

