# BlGrid 宫格

宫格组件，用于宫格场景。

## 📦 引入

```typescript
import { BlGrid } from '@/uni_modules/belay-unix'
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
| columnCount | 列数  | `number` | `4` | 否 |
| gutter | 间隔 px  | `number \| null` | `null` | 否 |
| border | 显示边框  | `boolean` | `true` | 否 |
| square | 方形网格  | `boolean` | `false` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，BlGridItem 组件  | - |

## 💡 示例

### 基础用法

```vue example:bl-grid/basic
<template>
  <view class="example-basic">
    <bl-grid :column-count="4">
      <bl-grid-item>
        <view class="grid-item">
          <text>1</text>
        </view>
      </bl-grid-item>
      <bl-grid-item>
        <view class="grid-item">
          <text>2</text>
        </view>
      </bl-grid-item>
      <bl-grid-item>
        <view class="grid-item">
          <text>3</text>
        </view>
      </bl-grid-item>
      <bl-grid-item>
        <view class="grid-item">
          <text>4</text>
        </view>
      </bl-grid-item>
    </bl-grid>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

