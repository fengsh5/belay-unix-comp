# BlVideo BlVideo

BlVideo组件，用于blvideo场景。

## 📦 引入

```typescript
import { BlVideo } from '@/uni_modules/belay-unix'
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
| src | 视频资源地址  | `string` | - | 否 |
| poster | 视频封面的图片网络资源地址或云文件ID  | `string` | - | 否 |
| autoplay | 是否自动播放  | `boolean` | `false` | 否 |
| loop | 是否循环播放  | `boolean` | `false` | 否 |
| muted | 是否静音播放  | `boolean` | `false` | 否 |
| controls | 是否显示默认播放控件  | `boolean` | `true` | 否 |
| showCenterPlayBtn | 是否显示中央播放按钮  | `boolean` | `true` | 否 |
| showFullscreenBtn | 是否显示全屏按钮  | `boolean` | `true` | 否 |
| showPlayBtn | 是否显示播放按钮  | `boolean` | `true` | 否 |
| showProgress | 是否显示进度条  | `boolean` | `true` | 否 |
| showLoading | 是否显示加载中提示  | `boolean` | `true` | 否 |
| enablePlayGesture | 是否开启播放手势  | `boolean` | `false` | 否 |
| objectFit | 视频缩放模式  | `'contain' \| 'fill' \| 'cover'` | `contain` | 否 |
| initialTime | 指定视频初始播放位置  | `number` | `0` | 否 |
| playbackRate | 播放速率  | `number` | `1.0` | 否 |
| direction | 视频播放方向  | `number` | `0` | 否 |
| enableProgressGesture | 是否开启进度手势  | `boolean` | `true` | 否 |
| showScreenLockButton | 是否显示锁屏按钮  | `boolean` | `false` | 否 |
| pageGesture | 是否开启页面手势  | `boolean` | `false` | 否 |
| playStrategy | 播放策略  | `number` | `0` | 否 |
| posterSize | 封面图大小  | `string` | `cover` | 否 |
| header | 视频请求的header  | `Record\<string` | `({` | 否 |
| enableMetadata | 是否启用元数据  | `boolean` | `false` | 否 |
| enablePictureInPicture | 是否开启画中画  | `boolean` | `false` | 否 |
| enableAutoRotation | 是否开启自动旋转  | `boolean` | `false` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| play | 播放事件  | `\(event: any\) =\> void` |
| pause | 暂停事件  | `\(event: any\) =\> void` |
| ended | 播放结束事件  | `\(event: any\) =\> void` |
| error | 错误事件  | `\(event: any\) =\> void` |
| waiting | 等待事件  | `\(event: any\) =\> void` |
| progress | 进度事件  | `\(event: any\) =\> void` |
| loadedMetadata | 元数据加载完成事件  | `\(event: any\) =\> void` |
| timeUpdate | 时间更新事件  | `\(event: any\) =\> void` |
| fullscreenChange | 全屏变化事件  | `\(event: any\) =\> void` |
| userAction | 用户操作事件  | `\(event: any\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽  | - |

## 💡 示例

### 基础用法

```vue example:bl-video/basic
<template>
  <view class="example-basic">
    <bl-video 
      src="https://example.com/video.mp4"
      :controls="true"
      :show-center-play-btn="true"
    ></bl-video>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

