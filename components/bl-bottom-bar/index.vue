<template>
	<view :class="bottomBarClass" :style="bottomBarStyle">
		<bl-hairline placement="['top']"></bl-hairline>
		<slot></slot>
	</view>
</template>

<script>
/**
 * BlBottomBar 底部栏组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlBottomBar',
	props: {
		/**
		 * 是否固定在底部
		 */
		fixed: {
			type: Boolean,
			default: true
		},
		/**
		 * 是否显示安全区域
		 */
		safeAreaBottom: {
			type: Boolean,
			default: true
		},
		/**
		 * 背景颜色
		 */
		backgroundColor: {
			type: String,
			default: '#fff'
		},
		/**
		 * 高度
		 */
		height: {
			type: [Number, String],
			default: 100
		},
		/**
		 * 自定义样式
		 */
		customStyle: {
			type: String,
			default: ''
		},
		/**
		 * 自定义类名
		 */
		customClass: {
			type: String,
			default: ''
		}
	},
	computed: {
		bottomBarClass() {
			const classes = ['bl-bottombar']
			if (this.fixed) {
				classes.push('bl-bottombar--fixed')
			}
			if (this.safeAreaBottom) {
				classes.push('bl-bottombar--safe-area')
			}
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		bottomBarStyle() {
			const styles = []
			styles.push(`background-color: ${this.backgroundColor}`)
			const heightValue = typeof this.height === 'number' ? `${this.height}px` : this.height
			styles.push(`height: ${heightValue}`)
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

