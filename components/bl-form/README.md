# BlForm 表单

表单组件，用于表单场景。

## 📦 引入

```typescript
import { BlForm } from '@/uni_modules/belay-unix'
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
| model | 表单数据对象 | `Record<string, any>` | `{}` | 否 |
| rules | 表单验证规则 | `Record<string, any>` | `{}` | 否 |
| labelWidth | 表单标签宽度  | `number \| string` | `0` | 否 |
| showRequired | 是否显示必填标识  | `boolean` | `false` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| submit | 表单提交事件 | `(model: Record<string, any>) => void` | - |
| reset | 表单重置事件 | `(event: any) => void` | - |
| validate | 表单验证事件 | `(valid: boolean, errors: string[]) => void` | - |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，表单项组件  | - |

## 💡 示例

### 基础用法

```vue example:bl-form/basic
<template>
  <view class="example-basic">
    <bl-form :model="formData" @submit="handleSubmit">
      <bl-input v-model="formData.username" placeholder="用户名"></bl-input>
      <bl-input v-model="formData.password" type="password" placeholder="密码"></bl-input>
      <bl-button form-type="submit" style="margin-top: 20px;">提交</bl-button>
    </bl-form>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

