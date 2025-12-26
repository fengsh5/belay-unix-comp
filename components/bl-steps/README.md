# BlSteps 步骤条

步骤条组件，用于步骤条场景。

## 📦 引入

```typescript
import { BlSteps } from '@/uni_modules/belay-unix'
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
| direction | 显示方向  | `'horizontal' \| 'vertical'` | `horizontal` | 否 |
| active | 当前步骤（激活状态）  | `number \| string` | `0` | 否 |
| finish | 结束步骤  | `number \| string \| null` | `null` | 否 |
| activeColor | 激活状态颜色  | `string` | - | 否 |
| inactiveColor | 未激活状态颜色  | `string` | `var(--bl-text-color-tertiary)` | 否 |
| activeIcon | 激活状态底部图标  | `string` | `check` | 否 |
| inactiveIcon | 未激活状态底部图标  | `string \| null` | `null` | 否 |
| finishIcon | 已完成步骤对应的底部图标  | `string \| null` | `null` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击事件  | `\(event: any\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，BlStep 组件  | - |

## 💡 示例

### 基础用法

```vue example:bl-steps/basic
<template>
  <view class="example-basic">
    <bl-steps :active="1">
      <bl-step title="步骤1"></bl-step>
      <bl-step title="步骤2"></bl-step>
      <bl-step title="步骤3"></bl-step>
    </bl-steps>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

