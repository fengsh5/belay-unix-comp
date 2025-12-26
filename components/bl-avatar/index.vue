<template>
	<view :class="avatarClass" :style="avatarStyle">
		<bl-image 
			v-if="src" 
			:src="displaySrc" 
			:mode="mode"
			:class="imageClass"
			:style="imageStyle"
			@error="handleError"
			@load="handleLoad"
		></bl-image>
		<view v-else :class="placeholderClass" :style="placeholderStyle">
			<slot>
				<text class="bl-avatar__text">{{ placeholderText }}</text>
			</slot>
		</view>
	</view>
</template>

<script>
/**
 * BlAvatar 头像组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlAvatar',
	props: {
		/**
		 * 头像图片地址
		 */
		src: {
			type: String,
			default: ''
		},
		/**
		 * 是否为圆形
		 */
		round: {
			type: Boolean,
			default: true
		},
		/**
		 * 头像大小，支持数字（px）或字符串（如 'small', 'medium', 'large'）
		 */
		size: {
			type: [Number, String],
			default: 88
		},
		/**
		 * 图片裁剪、缩放的模式
		 */
		mode: {
			type: String,
			default: 'aspectFill'
		},
		/**
		 * 图片加载失败时的默认图
		 */
		errorImageSrc: {
			type: String,
			default: ''
		},
		/**
		 * 占位符文本（当没有图片时显示）
		 */
		placeholderText: {
			type: String,
			default: ''
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
			imageError: false
		}
	},
	computed: {
		avatarClass() {
			const classes = ['bl-avatar']
			if (this.round) {
				classes.push('bl-avatar--round')
			}
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		avatarStyle() {
			const styles = []
			const sizeValue = this.getSizeValue()
			styles.push(`width: ${sizeValue}`)
			styles.push(`height: ${sizeValue}`)
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		displaySrc() {
			if (this.imageError && this.errorImageSrc) {
				return this.errorImageSrc
			}
			return this.src
		},
		imageClass() {
			return 'bl-avatar__image'
		},
		imageStyle() {
			const sizeValue = this.getSizeValue()
			return `width: ${sizeValue}; height: ${sizeValue}`
		},
		placeholderClass() {
			return 'bl-avatar__placeholder'
		},
		placeholderStyle() {
			const sizeValue = this.getSizeValue()
			return `width: ${sizeValue}; height: ${sizeValue}`
		}
	},
	methods: {
		getSizeValue() {
			if (typeof this.size === 'number') {
				return `${this.size}px`
			}
			const sizeMap = {
				small: '32px',
				medium: '44px',
				large: '60px'
			}
			return sizeMap[this.size] || '44px'
		},
		handleError(e) {
			this.imageError = true
			this.$emit('error', e)
		},
		handleLoad(e) {
			this.imageError = false
			this.$emit('load', e)
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

