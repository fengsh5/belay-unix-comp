# BlAutocomplete BlAutocomplete

BlAutocomplete组件，用于blautocomplete场景。

## 📦 引入

```typescript
import { BlAutocomplete } from '@/uni_modules/belay-unix'
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
| value | 当前值  | `string` | `null` | 否 |
| defaultValue | 默认值  | `string` | - | 否 |
| placeholder | 输入框占位符  | `string` | - | 否 |
| disabled | 是否禁用  | `boolean` | `false` | 否 |
| readonly | 是否只读  | `boolean` | `false` | 否 |
| options | 数据源  | `Array\<string \| \{ value: string, label?: string \}\>` | `[]` | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 值改变事件  | `\(value: string\) =\> void` |
| select | 选择选项事件  | `\(value: string\) =\> void` |
| search | 搜索事件  | `\(value: string\) =\> void` |
| focus | 获得焦点事件  | `\(\) =\> void` |
| blur | 失去焦点事件  | `\(\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，自定义选项内容  | - |

## 💡 示例

### 基础用法

```vue example:bl-autocomplete/basic
<template>
  <view class="example-basic">
    <bl-autocomplete 
      :options="options" 
      placeholder="请输入内容"
      @select="handleSelect"
    ></bl-autocomplete>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

