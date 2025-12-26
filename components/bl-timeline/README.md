# BlTimeline 时间轴

时间轴组件，用于时间轴场景。

## 📦 引入

```typescript
import { BlTimeline } from '@/uni_modules/belay-unix'
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
| mode | 时间轴模式  | `TimelineMode` | `left` | 否 |
| pending | 是否显示最后一条时间轴的尾部  | `boolean` | `false` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，TimelineItem 组件  | - |
| pending | 待处理项插槽  | - |

## 💡 示例

### 基础用法

```vue example:bl-timeline/basic
<template>
  <view class="example-basic">
    <bl-timeline>
      <bl-timeline-item>
        <text>步骤1：开始</text>
      </bl-timeline-item>
      <bl-timeline-item>
        <text>步骤2：进行中</text>
      </bl-timeline-item>
      <bl-timeline-item>
        <text>步骤3：完成</text>
      </bl-timeline-item>
    </bl-timeline>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

