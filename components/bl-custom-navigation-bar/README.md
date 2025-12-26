# BlCustomNavigationBar BlCustomNavigationBar

BlCustomNavigationBar组件，用于blcustomnavigationbar场景。

## 📦 引入

```typescript
import { BlCustomNavigationBar } from '@/uni_modules/belay-unix'
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
| title | 标题  | `string` | - | 否 |
| showBack | 是否显示返回按钮  | `boolean` | `true` | 否 |
| backgroundColor | 背景颜色  | `string` | `#ffffff` | 否 |
| textColor | 文字颜色  | `string` | `#323233` | 否 |
| fixed | 是否固定在顶部  | `boolean` | `true` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| back | 返回按钮点击事件  | `\(\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| center | 中间内容插槽  | - |
| right | 右侧内容插槽  | - |

## 💡 示例

### 基础用法

```vue example:bl-custom-navigation-bar/basic
<template>
  <view class="example-basic">
    <bl-custom-navigation-bar 
      title="自定义导航栏"
      :show-back="true"
      background-color="#ffffff"
      text-color="#323233"
      :fixed="false"
      @back="handleBack"
    >
      <template #right>
        <view class="nav-right">
          <text>更多</text>
        </view>
      </template>
    </bl-custom-navigation-bar>
    <view class="content">
      <text>页面内容</text>
    </view>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

