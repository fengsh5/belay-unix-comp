# BlTabs 标签页

标签页组件，用于标签页场景。

## 📦 引入

```typescript
import { BlTabs } from '@/uni_modules/belay-unix'
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
| padding | 内边距  | `string \| number` | `5px` | 否 |
| activeKey | 当前激活的 key  | `string` | - | 否 |
| animate | 切换动画  | `boolean` | `true` | 否 |
| scrollable | tab 标题溢出时滚动  | `boolean` | `true` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| activeKeyChange | 激活的 key 变化事件  | `\(key: string\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，TabPanel 组件  | - |

## 💡 示例

### 基础用法

```vue example:bl-tabs/basic
<template>
  <view class="example-basic">
    <bl-tabs active-key="1">
      <bl-tab-panel title="标签1" name="1">
        <text>标签1的内容</text>
      </bl-tab-panel>
      <bl-tab-panel title="标签2" name="2">
        <text>标签2的内容</text>
      </bl-tab-panel>
      <bl-tab-panel title="标签3" name="3">
        <text>标签3的内容</text>
      </bl-tab-panel>
    </bl-tabs>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

