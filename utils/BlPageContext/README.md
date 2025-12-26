# BlPageContext

页面上下文组件，用于在组件中监听页面生命周期事件。

## 基本用法

在页面中包裹 `BlPageContext`，然后在子组件中使用 hooks 监听页面生命周期：

```vue
<!-- pages/index/index.uvue -->
<template>
	<bl-page-context>
		<view>
			<text>页面内容</text>
			<my-component></my-component>
		</view>
	</bl-page-context>
</template>

<script lang="uts">
	export default {
		onLoad() {
			console.log('页面加载')
		}
	}
</script>
```

```vue
<!-- components/my-component/index.uvue -->
<template>
	<view>
		<text>我的组件</text>
	</view>
</template>

<script lang="uts">
	import { useDidShow, useDidHide, useDidReady } from '@/uni_modules/belay-unix/utils/BlPageContext/hooks.uts'
	
	export default {
		name: 'MyComponent',
		setup() {
			// 页面显示时
			const cleanupShow = useDidShow(() => {
				console.log('页面显示了')
			})
			
			// 页面隐藏时
			const cleanupHide = useDidHide(() => {
				console.log('页面隐藏了')
			})
			
			// 页面准备就绪时
			const cleanupReady = useDidReady(() => {
				console.log('页面准备就绪')
			})
			
			// 组件卸载时清理（可选，组件卸载时会自动清理）
			return {
				cleanupShow,
				cleanupHide,
				cleanupReady
			}
		}
	}
</script>
```

## API

### BlPageContext 组件

无需任何 props，直接包裹页面内容即可。

### Hooks

#### usePageContext()

获取页面上下文对象。

```typescript
const context = usePageContext()
// context: { eventBus: EventBus, state: { visible?: boolean, ready?: boolean } } | null
```

#### useDidShow(fn: () => void)

页面显示时的 hook。

```typescript
useDidShow(() => {
  console.log('页面显示了')
})
```

#### useDidHide(fn: () => void)

页面隐藏时的 hook。

```typescript
useDidHide(() => {
  console.log('页面隐藏了')
})
```

#### useDidReady(fn: () => void)

页面准备就绪时的 hook。

```typescript
useDidReady(() => {
  console.log('页面准备就绪')
})
```

#### useRouter()

获取路由信息。

```typescript
const router = useRouter()
// router: { path: string, query: Record<string, string>, params: Record<string, any> }
```

## 注意事项

1. **必须在页面中使用**：`BlPageContext` 必须在页面中使用，因为它依赖于页面的生命周期钩子（`onShow`、`onHide`、`onReady`）。

2. **组件中使用 hooks**：hooks 只能在组件中使用，不能在页面中直接使用。在页面中应该直接使用 `onShow`、`onHide`、`onReady` 等生命周期钩子。

3. **自动清理**：hooks 返回的清理函数会在组件卸载时自动调用，但也可以手动调用。

4. **事件总线**：`BlPageContext` 内部使用了 `BlEventBus` 来管理页面生命周期事件。你也可以直接使用 `BlEventBus` 进行组件间通信。

## 转换说明

本组件从 `WKPageContext` 转换而来。

源文件位置: `tools/packages/components/src/WKPageContext/`

主要变化：
- React Context → Vue provide/inject
- React Hooks → Vue Composition API
- Taro 生命周期 → uni-app x 生命周期

