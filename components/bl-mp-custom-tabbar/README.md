# BlMpCustomTabbar BlMpCustomTabbar

BlMpCustomTabbar组件，用于blmpcustomtabbar场景。

## 📦 引入

```typescript
import { BlMpCustomTabbar } from '@/uni_modules/belay-unix'
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
| current | 当前选中的tab索引  | `number` | `0` | 否 |
| list | tabbar列表  | `Array\<TabbarItem\>` | `[]` | 否 |
| showTabbar | 是否显示tabbar  | `boolean` | `true` | 否 |
| fixed | 是否固定在底部  | `boolean` | `true` | 否 |
| safeAreaBottom | 是否显示安全区域  | `boolean` | `true` | 否 |
| customStyle | 自定义样式  | `string` | - | 否 |
| customClass | 自定义类名  | `string` | - | 否 |

## 📡 Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 值变化事件  | `\(index: number\) =\> void` |
| switch | 切换事件  | `\(index: number` |

## 💡 示例

### 基础用法

```vue example:bl-mp-custom-tabbar/basic
<template>
  <view class="example-basic">
    <bl-mp-custom-tabbar 
      :current="currentTab"
      :list="tabbarList"
      :fixed="false"
      @change="handleTabChange"
    ></bl-mp-custom-tabbar>
  </view>
</template>
```

## 📝 注意事项

- 此组件支持 uni-app x 和 uni-app 项目
- 使用前请确保已正确引入组件库
- 更多用法请参考组件库文档

