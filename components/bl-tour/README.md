# BlTour 漫游式引导

漫游式引导组件，用于漫游式引导场景。

## 📦 引入

```typescript
import { BlTour } from '@/uni_modules/belay-unix'
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
| open | 是否显示引导  | `boolean` | `false` | 否 |
| steps | 引导步骤  | `Array\<TourStep\>` | `[]` | 否 |
| current | 当前步骤索引  | `number` | `null` | 否 |
| defaultCurrent | 默认当前步骤索引  | `number` | `0` | 否 |
| mask | 是否显示遮罩层  | `boolean` | `true` | 否 |
| maskStyle | 遮罩层样式  | `Record\<string` | `({` | 否 |
| closable | 是否显示关闭按钮  | `boolean` | `true` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| close | 关闭事件  | `\(\) =\> void` |
| change | 步骤改变事件  | `\(current: number\) =\> void` |
| finish | 完成事件  | `\(\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，自定义引导内容  | - |
| step | 自定义步骤内容  | - |

## 💡 示例

### 基础用法

```vue example:bl-tour/basic
<template>
  <view class="example-basic">
    <bl-button @click="showTour = true">开始引导</bl-button>
    <bl-tour 
      :open="showTour" 
      :steps="tourSteps"
      @close="showTour = false"
    ></bl-tour>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

