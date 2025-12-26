# BlRow BlRow

BlRow组件，用于blrow场景。

## 📦 引入

```typescript
import { BlRow } from '@/uni_modules/belay-unix'
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
| gutterHorizontal | 水平行间距  | `number \| string \| null` | `null` | 否 |
| gutterVertical | 垂直行间距  | `number \| string \| null` | `null` | 否 |
| align | 水平对齐方式  | `'flex-start' \| 'flex-end' \| 'center' \| 'baseline' \| 'stretch'` | `flex-start` | 否 |
| justify | 垂直对齐方式  | `'flex-start' \| 'flex-end' \| 'center' \| 'space-between' \| 'space-around' \| 'space-evenly'` | `flex-start` | 否 |
| wrap | 是否支持换行  | `boolean` | `true` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，BlCol 组件  | - |

## 💡 示例

### 基础用法

```vue example:bl-row/basic
<template>
  <view class="example-basic">
    <bl-row :gutter-horizontal="16">
      <bl-col :span="8">
        <view class="col-item">8</view>
      </bl-col>
      <bl-col :span="8">
        <view class="col-item">8</view>
      </bl-col>
      <bl-col :span="8">
        <view class="col-item">8</view>
      </bl-col>
    </bl-row>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

