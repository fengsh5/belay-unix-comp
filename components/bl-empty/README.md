# BlEmpty 空状态

空状态组件，用于空状态场景。

## 📦 引入

```typescript
import { BlEmpty } from '@/uni_modules/belay-unix'
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
| type | 类型  | `'error' \| 'network' \| 'empty' \| 'default' \| 'search' \| 'custom'` | `default` | 否 |
| url | 自定义图标  | `string` | - | 否 |
| showImg | 是否显示提示图  | `boolean` | `true` | 否 |
| desc | 描述  | `string` | - | 否 |
| detail | 详情  | `string` | - | 否 |
| retryText | 重试文本  | `string` | - | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| retry | 重试事件  | `\(\) =\> void` |

## 💡 示例

### 基础用法

```vue example:bl-empty/basic
<template>
  <view class="example-basic">
    <bl-empty></bl-empty>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

