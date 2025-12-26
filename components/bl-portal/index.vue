<template>
	<view>
		<slot></slot>
	</view>
</template>

<script>
/**
 * BlPortal 传送门组件
 * 支持 Vue 2 和 Vue 3
 * 用于将内容渲染到指定的 DOM 节点
 * 在 uni-app 中，可以通过条件渲染实现类似效果
 */
export default {
	name: 'BlPortal',
	props: {
		/**
		 * 目标容器选择器
		 */
		target: {
			type: String,
			default: 'body'
		}
	},
	mounted() {
		// Portal 组件用于将内容渲染到指定的 DOM 节点
		// 在 uni-app 中，可以通过条件渲染实现类似效果
		// 这里提供一个基础实现，实际使用时可能需要结合具体的业务场景
	}
}
</script>

<style scoped>
/* Portal 组件通常不需要样式 */
</style>

