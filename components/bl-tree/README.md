# BlTree 树形控件

树形控件组件，用于树形控件场景。

## 📦 引入

```typescript
import { BlTree } from '@/uni_modules/belay-unix'
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
| treeData | 树节点数据  | `Array\<TreeNodeData\>` | `[]` | 否 |
| checkable | 是否显示复选框  | `boolean` | `false` | 否 |
| defaultExpandAll | 是否默认展开所有节点  | `boolean` | `false` | 否 |
| defaultExpandedKeys | 默认展开的节点 key  | `Array\<string \| number\>` | `[]` | 否 |
| expandedKeys | 当前展开的节点 key（受控）  | `Array\<string \| number\>` | `null` | 否 |
| defaultSelectedKeys | 默认选中的节点 key  | `Array\<string \| number\>` | `[]` | 否 |
| selectedKeys | 当前选中的节点 key（受控）  | `Array\<string \| number\>` | `null` | 否 |
| defaultCheckedKeys | 默认勾选的节点 key  | `Array\<string \| number\>` | `[]` | 否 |
| checkedKeys | 当前勾选的节点 key（受控）  | `Array\<string \| number\>` | `null` | 否 |
| showLine | 是否显示连接线  | `boolean` | `false` | 否 |
| showIcon | 是否显示图标  | `boolean` | `false` | 否 |
| disabled | 是否禁用  | `boolean` | `false` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| expand | 节点展开/收起事件  | `\(expandedKeys: Array\<string \| number\>` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，自定义树节点内容  | node: TreeNodeData |
| icon | 图标插槽  | node: TreeNodeData |
| title | 标题插槽  | node: TreeNodeData |

## 💡 示例

### 基础用法

```vue example:bl-tree/basic
<template>
  <view class="example-basic">
    <bl-tree :tree-data="treeData"></bl-tree>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

