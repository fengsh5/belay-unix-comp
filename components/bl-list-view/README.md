# BlListView 列表

列表组件，用于列表场景。

## 📦 引入

```typescript
import { BlListView } from '@/uni_modules/belay-unix'
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
| data | 列表数据  | `Array\<any\>` | `[]` | 否 |
| itemKey | 列表中每项的key，用于优化渲染性能  | `string` | - | 否 |
| refresherEnabled | 是否开启下拉刷新  | `boolean` | `false` | 否 |
| refresherThreshold | 设置自定义下拉刷新阈值  | `number` | `45` | 否 |
| refresherDefaultStyle | 设置自定义下拉刷新默认样式，支持设置 black | white | none  | `'black' \| 'white' \| 'none'` | `black` | 否 |
| refresherBackground | 设置自定义下拉刷新区域背景颜色  | `string` | `#FFF` | 否 |
| refresherTriggered | 设置当前下拉刷新状态  | `boolean` | `false` | 否 |
| lowerThreshold | 距底部/右边多远时，触发 scrolltolower 事件  | `number` | `50` | 否 |
| upperThreshold | 距顶部/左边多远时，触发 scrolltoupper 事件  | `number` | `50` | 否 |
| enableBackToTop | iOS 点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部  | `boolean` | `false` | 否 |
| offsetAccuracy | 控制 scroll 事件触发的频率，单位为 ms  | `number` | `10` | 否 |
| scrollIntoView | 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素  | `string` | - | 否 |
| scrollTop | 设置竖向滚动条位置  | `number` | `0` | 否 |
| scrollAnchoring | 开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效  | `boolean` | `false` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| scroll | 滚动事件  | `\(event: any\) =\> void` |
| scrollToLower | 滚动到底部/右边事件  | `\(event: any\) =\> void` |
| scrollToUpper | 滚动到顶部/左边事件  | `\(event: any\) =\> void` |
| refresherRefresh | 下拉刷新事件  | `\(event: any\) =\> void` |
| refresherRestore | 下拉刷新恢复事件  | `\(event: any\) =\> void` |
| refresherAbort | 下拉刷新中止事件  | `\(event: any\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，列表项内容  | - |
| item | 列表项插槽  | - |

## 💡 示例

### 基础用法

```vue example:bl-list-view/basic
<template>
  <view class="example-basic">
    <bl-list-view :data="listData" item-key="id" style="height: 300px;">
      <template #item="{ item }">
        <view class="list-item">
          <text>{{ item.name }}</text>
        </view>
      </template>
    </bl-list-view>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

