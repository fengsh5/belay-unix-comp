# BlBottomBar BlBottomBar

BlBottomBar组件，用于blbottombar场景。

## 📦 引入

```typescript
import { BlBottomBar } from '@/uni_modules/belay-unix'
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
| fixed | 是否固定在底部  | `boolean` | `true` | 否 |
| safeAreaBottom | 是否显示安全区域  | `boolean` | `true` | 否 |
| backgroundColor | 背景颜色  | `string` | `#fff` | 否 |
| height | 高度  | `number \| string` | `100` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽  | - |

## 💡 示例

### 基础用法

```vue example:bl-bottom-bar/basic
<template>
  <view class="example-basic">
    <view class="content">
      <text>内容区域</text>
    </view>
    <bl-bottom-bar :fixed="false">
      <view class="bottom-bar-content">
        <bl-button size="small">操作1</bl-button>
        <bl-button size="small" type="primary">操作2</bl-button>
      </view>
    </bl-bottom-bar>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

