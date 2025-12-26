# BlDrawer 抽屉

抽屉组件，用于抽屉场景。

## 📦 引入

```typescript
import { BlDrawer } from '@/uni_modules/belay-unix'
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
| visible | 是否显示  | `boolean` | `false` | 否 |
| placement | 抽屉位置  | `DrawerPlacement` | `right` | 否 |
| title | 标题  | `string` | - | 否 |
| width | 宽度（placement 为 left 或 right 时）  | `number \| string` | `null` | 否 |
| height | 高度（placement 为 top 或 bottom 时）  | `number \| string` | `null` | 否 |
| mask | 是否显示遮罩层  | `boolean` | `true` | 否 |
| maskClosable | 点击遮罩层是否可关闭  | `boolean` | `true` | 否 |
| closable | 是否显示关闭按钮  | `boolean` | `true` | 否 |
| destroyOnClose | 关闭时销毁子节点  | `boolean` | `false` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| close | 关闭事件  | `\(\) =\> void` |
| clickMask | 点击遮罩层事件  | `\(\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，抽屉内容  | - |
| title | 标题插槽  | - |
| extra | 额外操作插槽  | - |

## 💡 示例

### 基础用法

```vue example:bl-drawer/basic
<template>
  <view class="example-basic">
    <bl-button @click="showDrawer = true">打开抽屉</bl-button>
    <bl-drawer :visible="showDrawer" title="抽屉标题" @close="showDrawer = false">
      <view class="drawer-content">
        <text>这是抽屉内容</text>
      </view>
    </bl-drawer>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

