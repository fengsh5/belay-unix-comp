<template>
	<view class="bl-badge" :style="badgeStyle">
		<slot></slot>
		<view 
			v-if="showBadge" 
			:class="badgeContentClass"
			:style="badgeContentStyle"
		>
			<text v-if="displayValue" class="bl-badge__text">
				{{ displayValue }}
			</text>
		</view>
	</view>
</template>

<script>
/**
 * BlBadge 徽章组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlBadge',
	props: {
		/**
		 * 徽章显示值，为空时显示红点
		 */
		value: {
			type: [String, Number],
			default: ''
		},
		/**
		 * 徽章显示的最大值，超过时显示 value+
		 */
		max: {
			type: Number,
			default: 99
		},
		/**
		 * 是否为红点模式（不显示数字）
		 */
		dot: {
			type: Boolean,
			default: false
		},
		/**
		 * 徽章颜色
		 */
		color: {
			type: String,
			default: '#ff3b30'
		},
		/**
		 * 徽章位置偏移量 [x, y]
		 */
		offset: {
			type: Array,
			default: () => [0, 0]
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
		badgeStyle() {
			const styles = ['position: relative']
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		showBadge() {
			return this.dot || (this.value != null && this.value !== '' && this.value !== 0)
		},
		displayValue() {
			if (this.dot) {
				return ''
			}
			if (this.value == null || this.value === '') {
				return ''
			}
			const numValue = Number(this.value)
			if (isNaN(numValue)) {
				return this.value
			}
			if (numValue > this.max) {
				return `${this.max}+`
			}
			return String(numValue)
		},
		badgeContentClass() {
			const classes = ['bl-badge__content']
			if (this.dot) {
				classes.push('bl-badge__content--dot')
			}
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		badgeContentStyle() {
			const styles = []
			if (this.color) {
				styles.push(`background-color: ${this.color}`)
			}
			if (this.offset && this.offset.length >= 2) {
				styles.push(`transform: translate(${this.offset[0]}px, ${this.offset[1]}px)`)
			}
			return styles.join('; ')
		}
	}
}
</script>

<style scoped>
	@import './index.scss';
</style>

