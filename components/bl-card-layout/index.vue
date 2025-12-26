<template>
	<view :class="cardLayoutClass" :style="cardLayoutStyle">
		<slot></slot>
	</view>
</template>

<script>
/**
 * BlCardLayout 卡片布局组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlCardLayout',
	props: {
		/**
		 * 是否显示边框
		 */
		border: {
			type: Boolean,
			default: true
		},
		/**
		 * 边框颜色
		 */
		borderColor: {
			type: String,
			default: '#ebedf0'
		},
		/**
		 * 是否显示圆角
		 */
		round: {
			type: Boolean,
			default: true
		},
		/**
		 * 圆角大小
		 */
		radius: {
			type: Number,
			default: 16
		},
		/**
		 * 内边距
		 */
		padding: {
			type: [Number, String],
			default: 32
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
		cardLayoutClass() {
			const classes = ['bl-cardlayout']
			if (this.border) {
				classes.push('bl-cardlayout--border')
			}
			if (this.round) {
				classes.push('bl-cardlayout--round')
			}
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		cardLayoutStyle() {
			const styles = []
			styles.push('background-color: #fff')
			if (this.border) {
				styles.push(`border: 1px solid ${this.borderColor}`)
			}
			if (this.round) {
				styles.push(`border-radius: ${this.radius}px`)
			}
			const paddingValue = typeof this.padding == 'number' ? `${this.padding}px` : this.padding
			styles.push(`padding: ${paddingValue}`)
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

