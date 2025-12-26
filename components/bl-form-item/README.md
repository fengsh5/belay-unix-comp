# BlFormItem 表单项

表单项组件，用于在表单中包装表单控件，提供标签、必填标识和错误提示等功能。

## 📦 引入

```typescript
import { BlFormItem } from '@/uni_modules/belay-unix'
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
| label | 标签文本 | `string` | `''` | 否 |
| prop | 表单字段名，用于表单验证和数据处理 | `string` | `''` | 否 |
| labelWidth | 标签宽度，优先级高于表单的 labelWidth | `number \| string` | `null` | 否 |
| required | 是否必填 | `boolean` | `false` | 否 |
| error | 错误提示信息 | `string` | `''` | 否 |
| customStyle | 自定义样式 | `string` | - | 否 |
| customClass | 自定义类名 | `string` | - | 否 |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，表单控件内容 | - |
| label | 自定义标签内容 | - |

## 💡 示例

### 基础用法

```vue
<template>
  <bl-form :model="formData" :rules="rules">
    <bl-form-item label="用户名" prop="username">
      <bl-input v-model="formData.username" placeholder="请输入用户名"></bl-input>
    </bl-form-item>
    <bl-form-item label="密码" prop="password">
      <bl-input v-model="formData.password" type="password" placeholder="请输入密码"></bl-input>
    </bl-form-item>
  </bl-form>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  username: '',
  password: ''
})

const rules = {
  username: {
    required: true,
    message: '请输入用户名'
  },
  password: {
    required: true,
    message: '请输入密码'
  }
}
</script>
```

### 自定义标签

```vue
<template>
  <bl-form :model="formData">
    <bl-form-item prop="username">
      <template #label>
        <text>用户名</text>
        <text class="label-tip">（必填）</text>
      </template>
      <bl-input v-model="formData.username"></bl-input>
    </bl-form-item>
  </bl-form>
</template>
```

### 显示错误信息

```vue
<template>
  <bl-form :model="formData">
    <bl-form-item label="邮箱" prop="email" error="请输入正确的邮箱地址">
      <bl-input v-model="formData.email"></bl-input>
    </bl-form-item>
  </bl-form>
</template>
```

## 📝 注意事项

- 此组件需要配合 `bl-form` 组件使用
- `prop` 属性用于关联表单数据和验证规则
- 当表单设置了 `showRequired` 且字段在 `rules` 中标记为 `required` 时，会自动显示必填标识
- 错误信息可以通过 `error` 属性手动设置，也可以从表单验证结果中自动获取

