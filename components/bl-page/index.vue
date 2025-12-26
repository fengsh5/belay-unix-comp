<template>
	<view :class="pageClass" :style="pageStyle">
		<slot></slot>
	</view>
</template>

<script>
/**
 * BlPage 页面组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlPage',
	props: {
		/**
		 * 背景颜色
		 */
		backgroundColor: {
			type: String,
			default: '#f7f8fa'
		},
		/**
		 * 是否显示导航栏
		 */
		showNavBar: {
			type: Boolean,
			default: true
		},
		/**
		 * 是否显示底部安全区域
		 */
		safeAreaBottom: {
			type: Boolean,
			default: false
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
	data() {
		return {
			windowHeight: 0
		}
	},
	mounted() {
		try {
			const systemInfo = uni.getSystemInfoSync()
			this.windowHeight = systemInfo.windowHeight || systemInfo.screenHeight || 0
		} catch (e) {
			// 降级处理
			this.windowHeight = 0
		}
	},
	computed: {
		pageClass() {
			const classes = ['bl-page']
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		pageStyle() {
			const styles = []
			styles.push(`background-color: ${this.backgroundColor}`)
			styles.push('width: 100%')
			styles.push('height: 100%')
			if (this.windowHeight > 0) {
				styles.push(`min-height: ${this.windowHeight}px`)
			} else {
				styles.push('min-height: 100%')
			}
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

