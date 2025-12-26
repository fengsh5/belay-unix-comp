# BlCalendar 日历

日历组件，用于日历场景。

## 📦 引入

```typescript
import { BlCalendar } from '@/uni_modules/belay-unix'
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
| value | 当前日期  | `Date \| string` | `null` | 否 |
| defaultValue | 默认日期  | `Date \| string` | `null` | 否 |
| mode | 日历模式  | `CalendarMode` | `month` | 否 |
| fullscreen | 是否全屏显示  | `boolean` | `true` | 否 |
| dateCellRender | 自定义日期单元格内容  | `\(date: Date\) =\> any` | - | 否 |
| monthCellRender | 自定义月份单元格内容  | `\(date: Date\) =\> any` | - | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| select | 日期选择事件  | `\(date: Date\) =\> void` |
| panelChange | 面板改变事件  | `\(date: Date` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，自定义日历内容  | - |
| dateCell | 自定义日期单元格内容  | date: Date |
| monthCell | 自定义月份单元格内容  | date: Date |

## 💡 示例

### 基础用法

```vue example:bl-calendar/basic
<template>
  <view class="example-basic">
    <bl-calendar></bl-calendar>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

