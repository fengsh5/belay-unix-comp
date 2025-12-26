# BlPopover 气泡卡片

气泡卡片组件，用于气泡卡片场景。

## 📦 引入

```typescript
import { BlPopover } from '@/uni_modules/belay-unix'
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
| title | 卡片标题  | `string` | - | 否 |
| content | 卡片内容  | `string` | - | 否 |
| placement | 气泡框位置  | `PopoverPlacement` | `top` | 否 |
| trigger | 触发行为  | `'hover' \| 'focus' \| 'click'` | `hover` | 否 |
| arrow | 是否显示箭头  | `boolean` | `true` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| visibleChange | 显示状态改变时触发  | `\(visible: boolean\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，触发元素  | - |
| title | 自定义标题  | - |
| content | 自定义内容  | - |

## 💡 示例

### 基础用法

```vue example:bl-popover/basic
<template>
  <view class="example-basic">
    <bl-popover title="标题" content="这是气泡卡片内容">
      <bl-button>点击查看气泡卡片</bl-button>
    </bl-popover>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

