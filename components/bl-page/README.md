# BlPage BlPage

BlPage组件，用于blpage场景。

## 📦 引入

```typescript
import { BlPage } from '@/uni_modules/belay-unix'
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
| backgroundColor | 背景颜色  | `string` | `#f7f8fa` | 否 |
| showNavBar | 是否显示导航栏  | `boolean` | `true` | 否 |
| safeAreaBottom | 是否显示底部安全区域  | `boolean` | `false` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，页面内容  | - |

## 💡 示例

### 基础用法

```vue example:bl-page/basic
<template>
  <view class="example-basic">
    <bl-page>
      <view class="page-content">
        <text>这是页面内容</text>
      </view>
    </bl-page>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

