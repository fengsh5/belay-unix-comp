# BlStep BlStep

BlStep组件，用于blstep场景。

## 📦 引入

```typescript
import { BlStep } from '@/uni_modules/belay-unix'
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
| activeIcon | 自定义激活状态图标  | `string \| null` | `null` | 否 |
| inactiveIcon | 自定义未激活状态图标  | `string \| null` | `null` | 否 |
| finishIcon | 自定义已完成步骤对应的底部图标  | `string \| null` | `null` | 否 |
| stepIndex | 步骤索引（由父组件自动设置）  | `number` | `0` | 否 |
| isLast | 是否为最后一个（由父组件自动设置）  | `boolean` | `false` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击事件  | `\(event: any\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，步骤显示内容  | - |

## 💡 示例

### 基础用法

```vue
<template>
  <view>
    <bl-step></bl-step>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

