# BlMenu 菜单

菜单组件，用于菜单场景。

## 📦 引入

```typescript
import { BlMenu } from '@/uni_modules/belay-unix'
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
| selectedKeys | 当前选中的菜单项 key  | `Array\<string \| number\>` | `null` | 否 |
| defaultSelectedKeys | 默认选中的菜单项 key  | `Array\<string \| number\>` | `[]` | 否 |
| openKeys | 当前打开的 SubMenu key  | `Array\<string \| number\>` | `null` | 否 |
| defaultOpenKeys | 默认打开的 SubMenu key  | `Array\<string \| number\>` | `[]` | 否 |
| mode | 菜单模式  | `MenuMode` | `vertical` | 否 |
| theme | 菜单主题  | `MenuTheme` | `light` | 否 |
| multiple | 是否允许选中多个菜单项  | `boolean` | `false` | 否 |
| allowDeselect | 是否允许取消选中  | `boolean` | `false` | 否 |
| disabled | 是否禁用  | `boolean` | `false` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| select | 选中菜单项事件  | `\(keys: Array\<string \| number\>\) =\> void` |
| openChange | 打开/关闭 SubMenu 事件  | `\(openKeys: Array\<string \| number\>\) =\> void` |

## 🎨 Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽，MenuItem 或 SubMenu 组件  | - |

## 💡 示例

### 基础用法

```vue example:bl-menu/basic
<template>
  <view class="example-basic">
    <bl-menu :default-selected-keys="['1']">
      <bl-menu-item key="1">菜单项1</bl-menu-item>
      <bl-menu-item key="2">菜单项2</bl-menu-item>
      <bl-menu-item key="3">菜单项3</bl-menu-item>
    </bl-menu>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

