# BlSwiper 轮播图

轮播图组件，用于轮播图场景。

## 📦 引入

```typescript
import { BlSwiper } from '@/uni_modules/belay-unix'
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
| current | 当前显示的滑块索引  | `number` | `0` | 否 |
| indicatorDots | 是否显示指示点  | `boolean` | `false` | 否 |
| indicatorColor | 指示点颜色  | `string` | `rgba(0` | 否 |
| indicatorActiveColor | 当前选中的指示点颜色  | `string` | - | 否 |
| autoplay | 是否自动播放  | `boolean` | `false` | 否 |
| interval | 自动播放时间间隔  | `number` | `5000` | 否 |
| duration | 滑动动画时长  | `number` | `500` | 否 |
| circular | 是否采用衔接滑动  | `boolean` | `false` | 否 |
| vertical | 滑动方向是否为纵向  | `boolean` | `false` | 否 |
| previousMargin | 前边距  | `string` | `0px` | 否 |
| nextMargin | 后边距  | `string` | `0px` | 否 |
| displayMultipleItems | 同时显示的滑块数量  | `number` | `1` | 否 |
| skipHiddenItemLayout | 是否跳过未显示的滑块布局  | `boolean` | `false` | 否 |
| items | 数据列表（用于自动生成 swiper-item） 如果提供了此属性，组件会自动将每个数据项包裹在 swiper-item 中 如果不提供，则使用默认插槽，用户需要自己提供 swiper-item  | `Array\<any\> \| null` | `null` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 当前滑块索引变化事件  | `\(event: \{ detail: \{ current: number` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，swiper-item 组件或使用 items 时渲染的内容  | - |

## 💡 示例

### 基础用法

```vue example:bl-swiper/basic
<template>
  <view class="example-basic">
    <bl-swiper :indicator-dots="true" :autoplay="true" :circular="true">
      <swiper-item>
        <view class="swiper-item swiper-item-1">
          <text>1</text>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item swiper-item-2">
          <text>2</text>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item swiper-item-3">
          <text>3</text>
        </view>
      </swiper-item>
    </bl-swiper>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

