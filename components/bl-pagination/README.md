# BlPagination 分页

分页组件，用于分页场景。

## 📦 引入

```typescript
import { BlPagination } from '@/uni_modules/belay-unix'
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
| current | 当前页码  | `number` | `null` | 否 |
| defaultCurrent | 默认页码  | `number` | `1` | 否 |
| pageSize | 每页条数  | `number` | `null` | 否 |
| defaultPageSize | 默认每页条数  | `number` | `10` | 否 |
| total | 数据总数  | `number` | `0` | 否 |
| showTotal | 是否显示总数  | `boolean` | `false` | 否 |
| showSizeChanger | 是否显示每页条数选择器  | `boolean` | `false` | 否 |
| pageSizeOptions | 每页条数选项  | `Array\<number\>` | `[]10` | 否 |
| showQuickJumper | 是否显示快速跳转  | `boolean` | `false` | 否 |
| showPrevNext | 是否显示上一页/下一页按钮  | `boolean` | `true` | 否 |
| simple | 是否简单模式（只显示上一页/下一页）  | `boolean` | `false` | 否 |
| size | 尺寸  | `PaginationSize` | `default` | 否 |
| disabled | 是否禁用  | `boolean` | `false` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 页码改变事件  | `\(page: number` |
| pageSizeChange | 每页条数改变事件  | `\(current: number` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| total | 自定义总数显示  | - |

## 💡 示例

### 基础用法

```vue example:bl-pagination/basic
<template>
  <view class="example-basic">
    <bl-pagination :total="100" :current="1" :page-size="10"></bl-pagination>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

