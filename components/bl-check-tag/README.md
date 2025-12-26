# BlCheckTag 可选择标签

可选择标签组件，用于可选择标签场景。

## 📦 引入

```typescript
import { BlCheckTag } from '@/uni_modules/belay-unix'
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
| text | 文本内容  | `string` | - | 否 |
| checked | 是否选中  | `boolean` | `false` | 否 |
| disabled | 是否禁用  | `boolean` | `false` | 否 |
| size | 标签大小  | `'small' \| 'medium' \| 'large'` | `medium` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 值变化事件  | `\(checked: boolean\) =\> void` |
| click | 点击事件  | `\(event: any\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，标签文本内容  | - |

## 💡 示例

### 基础用法

```vue example:bl-check-tag/basic
<template>
  <view class="example-basic">
    <bl-check-tag text="标签1" :checked="checked1" @change="handleChange1"></bl-check-tag>
    <bl-check-tag text="标签2" :checked="checked2" @change="handleChange2"></bl-check-tag>
    <bl-check-tag text="标签3" :checked="checked3" @change="handleChange3"></bl-check-tag>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

