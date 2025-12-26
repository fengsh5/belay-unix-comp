# BlTable 表格

表格组件，用于表格场景。

## 📦 引入

```typescript
import { BlTable } from '@/uni_modules/belay-unix'
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
| columns | 表格列配置 | `Array<TableColumn>` | `[]` | 否 |
| dataSource | 数据源 | `Array<Record<string, any>>` | `[]` | 否 |
| bordered | 是否显示边框  | `boolean` | `true` | 否 |
| showHeader | 是否显示表头  | `boolean` | `true` | 否 |
| striped | 是否显示斑马纹  | `boolean` | `false` | 否 |
| size | 尺寸  | `'default' \| 'middle' \| 'small'` | `default` | 否 |
| disabled | 是否禁用  | `boolean` | `false` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| rowClick | 行点击事件 | `(record: Record<string, any>, index: number) => void` | - |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，自定义表格内容  | - |

## 💡 示例

### 基础用法

```vue example:bl-table/basic
<template>
  <view class="example-basic">
    <bl-table :columns="columns" :data-source="dataSource"></bl-table>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

