# BlInput 输入框

输入框组件，用于输入框场景。

## 📦 引入

```typescript
import { BlInput } from '@/uni_modules/belay-unix'
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
| value | 输入框的初始内容 | `string` | - | 否 |
| type | input 的类型 | `'text' \| 'number' \| 'idcard' \| 'digit' \| 'tel' \| 'safe-password' \| 'nickname'` | `'text'` | 否 |
| password | 是否是密码类型 | `boolean` | `false` | 否 |
| placeholder | 输入框为空时占位符 | `string` | - | 否 |
| placeholderStyle | 指定 placeholder 的样式 | `string` | - | 否 |
| placeholderClass | 指定 placeholder 的样式类 | `string` | `'input-placeholder'` | 否 |
| disabled | 是否禁用 | `boolean` | `false` | 否 |
| maxlength | 最大输入长度，设置为 -1 的时候不限制最大长度 | `number` | `140` | 否 |
| cursorSpacing | 指定光标与键盘的距离，单位 px | `number` | `0` | 否 |
| focus | 是否自动聚焦 | `boolean` | `false` | 否 |
| confirmType | 设置键盘右下角按钮的文字 | `'send' \| 'search' \| 'next' \| 'go' \| 'done'` | `'done'` | 否 |
| confirmHold | 点击键盘右下角按钮时是否保持键盘不收起 | `boolean` | `false` | 否 |
| cursor | 指定 focus 时的光标位置 | `number` | `-1` | 否 |
| selectionStart | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用 | `number` | `-1` | 否 |
| selectionEnd | 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用 | `number` | `-1` | 否 |
| adjustPosition | 键盘弹起时，是否自动上推页面 | `boolean` | `true` | 否 |
| holdKeyboard | focus 时，点击页面的时候不收起键盘 | `boolean` | `false` | 否 |
| autoFocus | 是否自动聚焦 | `boolean` | `false` | 否 |
| alwaysEmbed | 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 | `boolean` | `false` | 否 |
| autoBlur | 是否在键盘收起时自动失去焦点 | `boolean` | `false` | 否 |
| customStyle | 自定义样式 | `string` | - | 否 |
| customClass | 自定义类名 | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| input | 输入事件  | `\(event: any\) =\> void` |
| focus | 聚焦事件  | `\(event: any\) =\> void` |
| blur | 失焦事件  | `\(event: any\) =\> void` |
| confirm | 确认事件  | `\(event: any\) =\> void` |
| keyboardHeightChange | 键盘高度变化事件  | `\(event: any\) =\> void` |

## 💡 示例

### 基础用法

```vue example:bl-input/basic
<template>
  <view class="example-basic">
    <bl-input placeholder="请输入内容"></bl-input>
  </view>
</template>
```

### 不同类型

```vue example:bl-input/types
<template>
  <view class="example-types">
    <bl-input type="text" placeholder="文本输入"></bl-input>
    <bl-input type="number" placeholder="数字输入"></bl-input>
    <bl-input password placeholder="密码输入"></bl-input>
  </view>
</template>
```

### 禁用和只读

```vue example:bl-input/disabled
<template>
  <view class="example-disabled">
    <bl-input disabled placeholder="禁用状态"></bl-input>
    <bl-input readonly value="只读内容"></bl-input>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

