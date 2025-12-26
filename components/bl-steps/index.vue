<template>
	<view :class="stepsClass" :style="stepsStyle">
		<slot></slot>
	</view>
</template>

<script>
/**
 * BlSteps 步骤条组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlSteps',
	props: {
		/**
		 * 显示方向
		 */
		direction: {
			type: String,
			default: 'horizontal' // horizontal | vertical
		},
		/**
		 * 当前步骤（激活状态）
		 */
		active: {
			type: [Number, String],
			default: 0
		},
		/**
		 * 结束步骤
		 */
		finish: {
			type: [Number, String],
			default: null
		},
		/**
		 * 激活状态颜色
		 */
		activeColor: {
			type: String,
			default: ''
		},
		/**
		 * 未激活状态颜色
		 */
		inactiveColor: {
			type: String,
			default: 'var(--bl-text-color-tertiary, #999)'
		},
		/**
		 * 激活状态底部图标
		 */
		activeIcon: {
			type: String,
			default: 'check'
		},
		/**
		 * 未激活状态底部图标
		 */
		inactiveIcon: {
			type: String,
			default: null
		},
		/**
		 * 已完成步骤对应的底部图标
		 */
		finishIcon: {
			type: String,
			default: null
		},
		/**
		 * 自定义样式
		 */
		customStyle: {
			type: String,
			default: ''
		}
	},
	provide() {
		return {
			steps: this
		}
	},
	computed: {
		stepsClass() {
			const classes = ['bl-steps']
			classes.push(`bl-steps--${this.direction}`)
			return classes.join(' ')
		},
		stepsStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		}
	},
	methods: {
		handleStepClick(stepIndex) {
			this.$emit('click', stepIndex)
		}
	}
}
</script>

<style scoped>
.bl-steps {
	position: relative;
	width: 100%;
	box-sizing: border-box;
}

.bl-steps--horizontal {
	display: flex;
	align-items: flex-start;
	justify-content: center;
	padding: 0px 8px;
}

.bl-steps--vertical {
	padding: 0px 10px 0px 25px;
}
</style>

