# BlSegmented 分段控制器

分段控制器组件，用于分段控制器场景。

## 📦 引入

```typescript
import { BlSegmented } from '@/uni_modules/belay-unix'
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
| value | 当前选中的值  | `string \| number` | `null` | 否 |
| defaultValue | 默认选中的值  | `string \| number` | `null` | 否 |
| options | 选项数据  | `Array\<string \| number \| \{ label: string` | `[]` | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 值改变事件  | `\(value: string \| number\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，自定义选项内容  | - |

## 💡 示例

### 基础用法

```vue example:bl-segmented/basic
<template>
  <view class="example-basic">
    <bl-segmented :options="['选项1', '选项2', '选项3']" :default-value="'选项1'"></bl-segmented>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

