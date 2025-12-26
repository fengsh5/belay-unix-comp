# BlUploader 文件上传

文件上传组件，用于文件上传场景。

## 📦 引入

```typescript
import { BlUploader } from '@/uni_modules/belay-unix'
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
| fileList | 文件列表  | `Array\<UploadFile\>` | `[]` | 否 |
| maxCount | 最多可以选择的图片张数  | `number` | `9` | 否 |
| deletable | 是否显示删除按钮  | `boolean` | `true` | 否 |
| uploadText | 上传提示文本  | `string` | - | 否 |
| size | 图片预览大小  | `number \| string` | `160` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| afterRead | 选择文件后触发  | `\(files: Array\<UploadFile\>\) =\> void` |
| delete | 删除文件时触发  | `\(event: \{ index: number` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| upload | 上传按钮插槽  | - |

## 💡 示例

### 基础用法

```vue example:bl-uploader/basic
<template>
  <view class="example-basic">
    <bl-uploader :file-list="fileList" @after-read="handleAfterRead" @delete="handleDelete"></bl-uploader>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

