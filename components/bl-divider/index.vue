<template>
	<view 
		:class="dividerClass"
		:style="dividerStyle"
	>
		<view :class="sideClass" :style="sideStyle"></view>
		<text v-if="tip" class="bl-divider__tip">{{ tip }}</text>
		<view :class="sideClass" :style="sideStyle"></view>
	</view>
</template>

<script>
/**
 * BlDivider 分割线组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlDivider',
	props: {
		/**
		 * 自定义样式
		 */
		customStyle: {
			type: String,
			default: ''
		},
		/**
		 * 虚线样式
		 */
		dashed: {
			type: Boolean,
			default: false
		},
		/**
		 * 分割线中间文字
		 */
		tip: {
			type: String,
			default: ''
		}
	},
	computed: {
		dividerClass() {
			return 'bl-divider'
		},
		dividerStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		sideClass() {
			const classes = ['bl-divider__side']
			if (this.dashed) {
				classes.push('bl-divider__side--dashed')
			}
			return classes.join(' ')
		},
		sideStyle() {
			return ''
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

