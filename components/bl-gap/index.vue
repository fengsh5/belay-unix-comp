<template>
	<view 
		class="bl-gap"
		:style="gapStyle"
	></view>
</template>

<script>
/**
 * BlGap 间距组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlGap',
	props: {
		/**
		 * 自定义样式
		 */
		customStyle: {
			type: String,
			default: ''
		}
	},
	computed: {
		gapStyle() {
			const styles = []
			styles.push('background-color: var(--bl-bg-color-secondary, #f5f5f5)')
			styles.push('width: 100%')
			styles.push('height: 8px')
			styles.push('margin: 0')
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

