<template>
	<view :class="spinnerClass" :style="spinnerStyle">
		<view class="bl-spinner__bounce" :style="bounceStyle1"></view>
		<view class="bl-spinner__bounce" :style="bounceStyle2"></view>
		<view class="bl-spinner__bounce" :style="bounceStyle3"></view>
	</view>
</template>

<script>
/**
 * BlSpinner 加载动画组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlSpinner',
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
		spinnerClass() {
			return 'bl-spinner'
		},
		spinnerStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		bounceStyle1() {
			return 'animation-delay: -0.32s'
		},
		bounceStyle2() {
			return 'animation-delay: -0.16s'
		},
		bounceStyle3() {
			return 'animation-delay: 0s'
		}
	}
}
</script>

<style scoped>
.bl-spinner {
	display: inline-block;
	text-align: center;
	width: 5em;
	font-size: 12px;
	color: var(--bl-text-color-tertiary, #999);
	white-space: nowrap;
	line-height: 1;
}

.bl-spinner__bounce {
	width: 1em;
	height: 1em;
	margin: 0.1em;
	background-color: currentColor;
	border-radius: 50%;
	display: inline-block;
	animation: bl-spinner-bounce 1.4s infinite ease-in-out both;
}

@keyframes bl-spinner-bounce {
	0%, 80%, 100% {
		transform: scale(0);
	}
	40% {
		transform: scale(1);
	}
}
</style>

