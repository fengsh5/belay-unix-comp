# BlPageStyle BlPageStyle

BlPageStyle组件，用于blpagestyle场景。

## 📦 引入

```typescript
import { BlPageStyle } from '@/uni_modules/belay-unix'
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
| backgroundColor | 页面背景颜色  | `string` | `#f7f8fa` | 否 |
| navigationBarTextStyle | 导航栏标题颜色  | `'black' \| 'white'` | `black` | 否 |
| navigationBarBackgroundColor | 导航栏背景颜色  | `string` | `#ffffff` | 否 |

## 💡 示例

### 基础用法

```vue example:bl-page-style/basic
<template>
  <view class="example-basic">
    <bl-page-style 
      background-color="#f5f5f5"
      navigation-bar-text-style="black"
      navigation-bar-background-color="#ffffff"
    ></bl-page-style>
    <view class="page-content">
      <text>页面样式已应用</text>
    </view>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

