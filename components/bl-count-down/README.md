# BlCountDown 倒计时

倒计时组件，用于倒计时场景。

## 📦 引入

```typescript
import { BlCountDown } from '@/uni_modules/belay-unix'
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
| itemClassName | 组件中item的类名  | `string` | - | 否 |
| itemStyle | 组件中item的样式  | `string` | - | 否 |
| delimiterClassName | 组件中分割线的类名  | `string` | - | 否 |
| delimiterStyle | 组件中分割线的样式  | `string` | - | 否 |
| duration | 延时多久执行一次定时操作（单位：ms）  | `number` | `1000` | 否 |
| separateData | 自定义分隔符  | `CountDownSeparateData` | `({
					dayUnit: ' ` | 否 |
| isRemainTime | 表示 futureTime 为毫秒形式的剩余时间  | `boolean` | `false` | 否 |
| futureTime | 目标时间  | `number \| string \| Date \| null` | `null` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| finish | 倒计时结束事件  | `\(\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，自定义倒计时显示内容  | - |

## 💡 示例

### 基础用法

```vue example:bl-count-down/basic
<template>
  <view class="example-basic">
    <bl-count-down :future-time="futureTime"></bl-count-down>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

