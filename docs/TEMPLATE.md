# [组件名称] [组件中文名称]

[组件简介，描述组件的用途和主要功能]

## 📦 引入

```typescript
import { [ComponentName] } from '@/uni_modules/belay-unix'
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
| prop1 | 属性说明 | `type` | `default` | 否 |
| prop2 | 属性说明 | `type` | `default` | 否 |

### 类型说明

如果组件有复杂的类型定义，在这里详细说明：

```typescript
type ComponentType = {
  // 类型定义
}
```

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| event1 | 事件说明 | `(param: type) => void` |
| event2 | 事件说明 | `(param: type) => void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽 | - |
| slot1 | 插槽说明 | `{ data: type }` |

## 💡 示例

### 基础用法

```vue
<template>
  <view class="example-basic">
    <[component-name] [props]></[component-name]>
  </view>
</template>

<script lang="uts">
export default {
  data() {
    return {
      // 数据
    }
  },
  methods: {
    // 方法
  }
}
</script>
```

### 高级用法

```vue
<template>
  <view class="example-advanced">
    <!-- 高级用法示例 -->
  </view>
</template>
```

## 📝 注意事项

- 注意事项 1
- 注意事项 2
- 注意事项 3

## 🔗 相关组件

- [相关组件1](./../bl-component1/README.md)
- [相关组件2](./../bl-component2/README.md)

