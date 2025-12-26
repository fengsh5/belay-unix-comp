# BlCell 单元格

单元格组件，用于单元格场景。

## 📦 引入

```typescript
import { BlCell } from '@/uni_modules/belay-unix'
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
| title | 左侧标题  | `string` | - | 否 |
| value | 右侧内容  | `string` | - | 否 |
| icon | 左侧图标  | `string` | - | 否 |
| iconColor | 左侧图标颜色  | `string` | - | 否 |
| arrow | 是否显示右侧箭头  | `boolean` | `false` | 否 |
| isLink | 是否为链接（点击跳转）  | `boolean` | `false` | 否 |
| arrowColor | 箭头颜色  | `string` | `#969799` | 否 |
| valueColor | 右侧内容颜色  | `string` | `#969799` | 否 |
| padding | 是否使用内边距  | `boolean` | `true` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击事件  | `\(event: any\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽  | - |
| value | 右侧内容插槽  | - |

## 💡 示例

### 基础用法

```vue example:bl-cell/basic
<template>
  <view class="example-basic">
    <bl-cell title="标题" value="内容"></bl-cell>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

