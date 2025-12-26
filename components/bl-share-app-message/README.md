# BlShareAppMessage BlShareAppMessage

BlShareAppMessage组件，用于blshareappmessage场景。

## 📦 引入

```typescript
import { BlShareAppMessage } from '@/uni_modules/belay-unix'
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
| payload | 分享配置对象或函数  | `SharePayload \| \(\(...args: any[]\) =\> SharePayload\) \| null` | `null` | 否 |
| title | 分享标题  | `string` | - | 否 |
| path | 分享路径（小程序）  | `string` | - | 否 |
| href | 分享链接（H5/APP）  | `string` | - | 否 |
| imageUrl | 分享图片  | `string` | - | 否 |
| content | 分享内容（APP）  | `string` | - | 否 |
| summary | 分享摘要（APP）  | `string` | - | 否 |
| platforms | APP端支持的分享平台  | `Array\<SharePlatform\>` | `[]'weixin` | 否 |
| showShareButton | 是否显示分享按钮（APP/H5）  | `boolean` | `false` | 否 |
| shareButtonText | 分享按钮文本  | `string` | `分享` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| success | 分享成功事件  | `\(event: any\) =\> void` |
| fail | 分享失败事件  | `\(event: any\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| trigger | 触发分享的按钮插槽  | - |

## 💡 示例

### 基础用法

```vue example:bl-share-app-message/basic
<template>
  <view class="example-basic">
    <bl-share-app-message 
      title="分享标题"
      path="/pages/index/index"
      @success="handleSuccess"
      @fail="handleFail"
    >
      <template #trigger>
        <bl-button type="primary">分享</bl-button>
      </template>
    </bl-share-app-message>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

