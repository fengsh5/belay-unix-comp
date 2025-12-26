# BlPreviewContext BlPreviewContext

BlPreviewContext组件，用于blpreviewcontext场景。

## 📦 引入

```typescript
import { BlPreviewContext } from '@/uni_modules/belay-unix'
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
| urls | 图片列表  | `Array\<string\>` | `[]` | 否 |
| current | 当前显示的图片索引  | `number` | `0` | 否 |

## 💡 示例

### 基础用法

```vue example:bl-preview-context/basic
<template>
  <view class="example-basic">
    <bl-button @click="showPreview = true">预览图片</bl-button>
    <bl-preview-context 
      :urls="imageUrls"
      :current="currentIndex"
      v-if="showPreview"
    ></bl-preview-context>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

