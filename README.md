# Belay-Unix 组件库

支持 uni-app 和 uni-app x 的跨平台组件库。

## ⚠️ 重要提示

**此组件库专为 uni-app x 和 uni-app 项目设计，请在 uni-app x 和 uni-app 项目中使用！**

### 适用项目类型

✅ **支持**：
- uni-app x 项目（推荐）
- uni-app 项目（Vue2/Vue3）

❌ **不支持**：
- 纯 Web 项目（Vite/Webpack）
- 纯 Vue 项目（不使用 uni-app 框架）

### 为什么不能在纯 Web 项目中使用？

1. **`.uts` 文件**：组件库使用了 UTS 语言（`.uts` 文件），需要 uni-app x 编译器处理
2. **`.uvue` 文件**：组件使用了 `.uvue` 文件格式，需要 uni-app x 编译器处理
3. **`.vue` 文件**：组件同时提供了 `.vue` 文件，但需要 uni-app 框架支持
4. **编译器支持**：Vite/Webpack 等纯 Web 构建工具无法处理 `.uts` 和 `.uvue` 文件，也无法正确解析 uni-app 特有的 API
5. **框架依赖**：组件库依赖 uni-app 框架提供的 API（如 `uni.showToast`、`uni.request` 等）

## 📦 安装

### 方式一：通过插件市场安装（推荐）

1. 打开 [uni-app 插件市场](https://ext.dcloud.net.cn/)
2. 搜索 `belay-unix`
3. 点击"使用 HBuilderX 导入插件"
4. 组件库会自动安装到项目的 `uni_modules/belay-unix/` 目录

### 方式二：通过 npm 安装

在 uni-app x 或 uni-app 项目中安装：

```bash
pnpm install belay-unix
# 或
npm install belay-unix
# 或
yarn add belay-unix
```

**⚠️ 重要提示**：通过 npm 安装后，需要手动复制到 `uni_modules/` 目录：

```bash
# 在项目根目录执行
mkdir -p uni_modules
cp -r node_modules/belay-unix uni_modules/
```

**安装位置说明**：
- ✅ 正确位置：`项目根目录/uni_modules/belay-unix/`
- ❌ 错误位置：`项目根目录/components/belay-unix/`
- ❌ 错误位置：`node_modules/belay-unix/`（需要复制到 uni_modules）

详细安装说明请查看 [安装指南](./docs/INSTALL.md)

## 🚀 快速开始

### 方式一：使用 app.use()（推荐）

**uni-app x 项目**：在 `main.uts` 中注册所有组件

**uni-app 项目**：在 `main.js` 或 `main.ts` 中注册所有组件

**uni-app x 项目**（`main.uts`）：
```typescript
import { createSSRApp } from 'vue'
import App from './App.uvue'
import BelayUnix from '@/uni_modules/belay-unix'

export function createApp() {
  const app = createSSRApp(App)
  app.use(BelayUnix) // 注册所有组件为 kebab-case
  return {
    app
  }
}
```

**uni-app 项目**（`main.js` 或 `main.ts`）：
```javascript
import { createSSRApp } from 'vue'
import App from './App.vue'
import BelayUnix from '@/uni_modules/belay-unix'

export function createApp() {
  const app = createSSRApp(App)
  app.use(BelayUnix) // 注册所有组件为 kebab-case
  return {
    app
  }
}
```

然后在模板中直接使用，无需导入：

```vue
<template>
  <view>
    <bl-button type="primary">按钮</bl-button>
    <bl-input v-model="value" placeholder="请输入" />
  </view>
</template>
```

**注意**：现在组件目录已统一使用 kebab-case（`bl-button`），与组件名保持一致，easycom 配置更加简单。

### 方式二：按需导入组件（推荐）

如果不想注册所有组件，可以按需导入：

```vue
<script lang="uts">
import { BlButton, BlInput } from '@/uni_modules/belay-unix'

export default {
  components: {
    BlButton,
    BlInput
  }
}
</script>

<template>
  <view>
    <BlButton type="primary">按钮</BlButton>
    <BlInput v-model="value" placeholder="请输入" />
  </view>
</template>
```

**优点**：
- ✅ 只导入使用的组件，减少打包体积
- ✅ 支持 Tree Shaking
- ✅ 类型提示完整

**注意**：
- 按需导入时，模板中使用的是 `BlButton`（PascalCase），不是 `bl-button`
- 使用 `app.use(BelayUnix)` 时，模板中使用的是 `bl-button`（kebab-case）
- 所有组件都可以通过 `import { ComponentName } from '@/uni_modules/belay-unix'` 导入

## 📚 文档

详细文档请查看 `docs` 目录：

- [重要提示](./docs/IMPORTANT.md) - 使用前必读
- [组件导入说明](./docs/IMPORT.md) - 组件导入方式（按需导入、全局注册等）
- [组件使用说明](./docs/COMPONENT_USAGE.md) - 组件使用指南
- [组件索引](./docs/COMPONENTS.md) - 所有组件的分类索引
- [主题系统使用指南](./docs/THEME.md) - 主题系统完整使用指南
- [Easycom 配置](./docs/EASYCOM_GUIDE.md) - Easycom 配置指南

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License
