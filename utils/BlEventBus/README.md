# BlEventBus

事件总线工具类，用于组件间通信。

## 基本用法

### 创建事件总线实例

```typescript
import { EventBus } from '@/uni_modules/belay-unix/utils/BlEventBus/index.uts'

// 创建新的事件总线实例
const eventBus = new EventBus()
```

### 监听事件

```typescript
// 定义事件处理函数
const handleCustomEvent = (data: any) => {
  console.log('收到事件:', data)
}

// 监听事件
eventBus.on('custom-event', handleCustomEvent)
```

### 触发事件

```typescript
// 触发事件，传递数据
eventBus.emit('custom-event', { message: 'Hello World' })
```

### 取消监听

```typescript
// 取消指定的事件处理函数
eventBus.off('custom-event', handleCustomEvent)

// 或者取消该事件的所有监听器
eventBus.off('custom-event')
```

### 清除所有监听器

```typescript
// 清除所有事件的监听器
eventBus.clear()
```

## 全局事件总线

组件库提供了一个全局事件总线实例，可以在任何地方使用：

```typescript
import { globalEventBus } from '@/uni_modules/belay-unix/utils/BlEventBus/index.uts'

// 在任何组件中监听全局事件
globalEventBus.on('global-event', (data) => {
  console.log('收到全局事件:', data)
})

// 在任何组件中触发全局事件
globalEventBus.emit('global-event', { message: 'Hello' })
```

## API

### EventBus 类

#### constructor()

创建新的事件总线实例。

#### on(event: string, handler: (data?: any) => void): void

监听事件。

- `event`: 事件名称
- `handler`: 事件处理函数

#### off(event: string, handler?: (data?: any) => void): void

取消监听事件。

- `event`: 事件名称
- `handler`: 事件处理函数（可选，如果不提供则移除该事件的所有监听器）

#### emit(event: string, data?: any): void

触发事件。

- `event`: 事件名称
- `data`: 事件数据（可选）

#### clear(): void

移除所有监听器。

#### listenerCount(event?: string): number

获取指定事件的监听器数量。

- `event`: 事件名称（可选，如果不提供则返回所有事件的数量）

#### eventNames(): string[]

获取所有事件名称。

### globalEventBus

全局事件总线实例，可以直接使用。

## 使用场景

### 1. 组件间通信

```vue
<!-- 父组件 -->
<template>
	<view>
		<child-component @custom-event="handleEvent"></child-component>
	</view>
</template>

<script lang="uts">
	import { EventBus } from '@/uni_modules/belay-unix/utils/BlEventBus/index.uts'
	
	export default {
		data() {
			return {
				eventBus: new EventBus()
			}
		},
		methods: {
			handleEvent(data: any) {
				console.log('收到子组件事件:', data)
			}
		}
	}
</script>
```

### 2. 跨页面通信

```typescript
import { globalEventBus } from '@/uni_modules/belay-unix/utils/BlEventBus/index.uts'

// 在页面 A 中触发事件
globalEventBus.emit('page-change', { pageId: 'page-b' })

// 在页面 B 中监听事件
globalEventBus.on('page-change', (data) => {
	console.log('页面切换:', data)
})
```

### 3. 与 BlPageContext 配合使用

`BlPageContext` 内部使用了 `EventBus` 来管理页面生命周期事件。

## 注意事项

1. **内存泄漏**：记得在组件卸载时取消事件监听，避免内存泄漏。

2. **事件命名**：建议使用命名空间来避免事件名冲突，例如：`component:show`、`page:ready`。

3. **错误处理**：事件处理函数中的错误会被自动捕获并打印到控制台，不会影响其他监听器。

4. **性能考虑**：如果事件触发频率很高，考虑使用防抖或节流来优化性能。

## 转换说明

本工具从 `@wakeapp/utils` 的 `EventEmitter` 转换而来。

主要变化：
- TypeScript → UTS
- 简化了 API，移除了不常用的功能
- 提供了全局事件总线实例

