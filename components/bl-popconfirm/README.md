# BlPopconfirm 气泡确认框

气泡确认框组件，用于气泡确认框场景。

## 📦 引入

```typescript
import { BlPopconfirm } from '@/uni_modules/belay-unix'
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
| title | 确认框标题  | `string` | - | 否 |
| description | 确认框描述  | `string` | - | 否 |
| okText | 确认按钮文字  | `string` | `确定` | 否 |
| cancelText | 取消按钮文字  | `string` | `取消` | 否 |
| okType | 确认按钮类型  | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | `primary` | 否 |
| visible | 是否显示确认框  | `boolean` | `false` | 否 |
| disabled | 是否禁用  | `boolean` | `false` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| confirm | 确认事件  | `\(\) =\> void` |
| cancel | 取消事件  | `\(\) =\> void` |
| visibleChange | 可见性改变事件  | `\(visible: boolean\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，触发元素  | - |
| title | 标题插槽  | - |
| description | 描述插槽  | - |

## 💡 示例

### 基础用法

```vue example:bl-popconfirm/basic
<template>
  <view class="example-basic">
    <bl-popconfirm title="确定要删除吗？" description="删除后无法恢复">
      <bl-button type="danger">删除</bl-button>
    </bl-popconfirm>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

