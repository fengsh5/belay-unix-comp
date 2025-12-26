# BlImage 图片

图片组件，用于图片场景。

## 📦 引入

```typescript
import { BlImage } from '@/uni_modules/belay-unix'
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
| src | 图片资源地址  | `string` | - | 否 |
| mode | 图片裁剪、缩放的模式  | `'scaleToFill' \| 'aspectFit' \| 'aspectFill' \| 'widthFix' \| 'heightFix' \| 'top' \| 'bottom' \| 'center' \| 'left' \| 'right' \| 'top left' \| 'top right' \| 'bottom left' \| 'bottom right'` | `scaleToFill` | 否 |
| lazyLoad | 图片懒加载，在即将进入一定范围（上下三屏）时才开始加载  | `boolean` | `false` | 否 |
| fadeShow | 是否开启淡入效果  | `boolean` | `true` | 否 |
| webp | 是否开启 WebP 格式支持  | `boolean` | `false` | 否 |
| showMenuByLongpress | 是否开启长按图片显示识别小程序码菜单  | `boolean` | `false` | 否 |
| draggable | 是否允许拖拽  | `boolean` | `true` | 否 |
| referrerPolicy | 图片的引用地址策略  | `string` | `no-referrer` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| error | 错误事件  | `\(event: any\) =\> void` |
| load | 加载完成事件  | `\(event: any\) =\> void` |
| click | 点击事件  | `\(event: any\) =\> void` |

## 💡 示例

### 基础用法

```vue example:bl-image/basic
<template>
  <view class="example-basic">
    <bl-image 
      src="https://pic.616pic.com/photoone/00/02/58/618cf527354c35308.jpg!/fw/1120"
      mode="aspectFit"
      style="width: 200px; height: 200px;"
    ></bl-image>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

