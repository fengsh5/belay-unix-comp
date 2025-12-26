# BlDescriptions 描述列表

描述列表组件，用于描述列表场景。

## 📦 引入

```typescript
import { BlDescriptions } from '@/uni_modules/belay-unix'
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
| title | 标题  | `string` | - | 否 |
| bordered | 是否显示边框  | `boolean` | `false` | 否 |
| column | 一行显示多少列  | `number` | `1` | 否 |
| size | 尺寸  | `'default' \| 'middle' \| 'small'` | `default` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，DescriptionsItem 组件  | - |
| title | 标题插槽  | - |

## 💡 示例

### 基础用法

```vue example:bl-descriptions/basic
<template>
  <view class="example-basic">
    <bl-descriptions title="用户信息">
      <bl-descriptions-item label="姓名">张三</bl-descriptions-item>
      <bl-descriptions-item label="年龄">25</bl-descriptions-item>
      <bl-descriptions-item label="地址">北京市朝阳区</bl-descriptions-item>
    </bl-descriptions>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

