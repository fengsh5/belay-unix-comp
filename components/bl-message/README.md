# BlMessage 消息提示

消息提示组件，用于消息提示场景。

## 📦 引入

```typescript
import { BlMessage } from '@/uni_modules/belay-unix'
```

或者使用全局注册：

```typescript
// main.uts 或 main.js
import BelayUnix from '@/uni_modules/belay-unix'
app.use(BelayUnix)
```

## 💡 示例

### 基础用法

```vue example:bl-message/basic
<template>
  <view class="example-basic">
    <bl-button @click="showMessage">显示消息</bl-button>
    <bl-message></bl-message>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

