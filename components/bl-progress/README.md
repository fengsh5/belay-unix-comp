# BlProgress 进度条

进度条组件，用于进度条场景。

## 📦 引入

```typescript
import { BlProgress } from '@/uni_modules/belay-unix'
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
| type | 进度条类型  | `'circle' \| 'line' \| 'dashboard'` | `line` | 否 |
| percent | 进度百分比  | `number` | `0` | 否 |
| activeColor | 进度条颜色  | `string` | `#09BB07` | 否 |
| backgroundColor | 进度条背景色  | `string` | `#EBEBEB` | 否 |
| width | 进度条宽度（线性）或大小（圆形）  | `number \| string \| null` | `null` | 否 |
| strokeWidth | 进度条高度（仅线性）  | `number` | `6` | 否 |
| strokeLinecap | 进度条显示弧形（仅圆形）  | `string` | `round` | 否 |
| showInfo | 是否显示进度文字  | `boolean` | `true` | 否 |
| contentClassName | 显示进度内容类名  | `string` | - | 否 |
| contentStyle | 显示进度内容样式  | `string` | - | 否 |
| fontSize | 字体大小  | `number` | `16` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，进度文字内容  | - |

## 💡 示例

### 基础用法

```vue example:bl-progress/basic
<template>
  <view class="example-basic">
    <bl-progress :percent="50"></bl-progress>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

