# BlTabbar BlTabbar

BlTabbar组件，用于bltabbar场景。

## 📦 引入

```typescript
import { BlTabbar } from '@/uni_modules/belay-unix'
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
| value | 当前选中的标签索引  | `number` | `0` | 否 |
| fixed | 是否固定在底部  | `boolean` | `true` | 否 |
| safeAreaBottom | 是否显示底部安全区域  | `boolean` | `true` | 否 |
| backgroundColor | 背景颜色  | `string` | `#fff` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 值变化事件  | `\(index: number\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，BlTabButton 组件  | - |

## 💡 示例

### 基础用法

```vue example:bl-tabbar/basic
<template>
  <view class="example-basic">
    <bl-tabbar :value="currentIndex" @change="handleChange" :fixed="false">
      <bl-tab-button title="首页" icon="home"></bl-tab-button>
      <bl-tab-button title="分类" icon="category"></bl-tab-button>
      <bl-tab-button title="购物车" icon="cart"></bl-tab-button>
      <bl-tab-button title="我的" icon="user"></bl-tab-button>
    </bl-tabbar>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

