# BlCollapse 折叠面板

折叠面板组件，用于折叠面板场景。

## 📦 引入

```typescript
import { BlCollapse } from '@/uni_modules/belay-unix'
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
| activeKey | 当前激活的面板 key  | `string \| number \| Array\<string \| number\>` | `null` | 否 |
| defaultActiveKey | 默认激活的面板 key  | `string \| number \| Array\<string \| number\>` | `null` | 否 |
| accordion | 是否手风琴模式（同时只能展开一个）  | `boolean` | `false` | 否 |
| bordered | 是否显示边框  | `boolean` | `true` | 否 |
| disabled | 是否禁用  | `boolean` | `false` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 面板切换事件  | `\(activeKey: string \| number \| Array\<string \| number\>\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，CollapsePanel 组件  | - |

## 💡 示例

### 基础用法

```vue example:bl-collapse/basic
<template>
  <view class="example-basic">
    <bl-collapse>
      <bl-collapse-panel :key="1" header="面板1">
        <text>这是面板1的内容</text>
      </bl-collapse-panel>
      <bl-collapse-panel :key="2" header="面板2">
        <text>这是面板2的内容</text>
      </bl-collapse-panel>
    </bl-collapse>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

