<template>
	<view :class="loadingClass" :style="loadingStyle">
		<view v-if="icon" class="bl-loading__icon">
			<slot name="icon">{{ icon }}</slot>
		</view>
		<bl-spinner v-else :custom-style="spinStyle" :class="spinClassName"></bl-spinner>
		<text v-if="message" class="bl-loading__message">{{ message }}</text>
	</view>
</template>

<script>
/**
 * BlLoading 加载组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlLoading',
	props: {
		/**
		 * 自定义图标的插槽
		 */
		icon: {
			type: String,
			default: null
		},
		/**
		 * loading描述的插槽
		 */
		message: {
			type: String,
			default: ''
		},
		/**
		 * 默认loading的style
		 */
		spinStyle: {
			type: String,
			default: ''
		},
		/**
		 * 默认loading的className
		 */
		spinClassName: {
			type: String,
			default: ''
		},
		/**
		 * 自定义样式
		 */
		customStyle: {
			type: String,
			default: ''
		}
	},
	computed: {
		loadingClass() {
			return 'bl-loading'
		},
		loadingStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		}
	}
}
</script>

<style scoped>
.bl-loading {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 40px 20px;
}

.bl-loading__message {
	margin-top: 40px;
	color: var(--bl-text-color-tertiary, #999);
	font-size: 14px;
}
</style>

