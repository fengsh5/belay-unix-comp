<template>
	<view :class="stepClass" :style="stepStyle">
		<text :class="descClass" @click="handleClick">
			<slot></slot>
		</text>
		<view v-if="!isLast" :class="lineClass" :style="lineStyle"></view>
		<view :class="iconBoxClass">
			<view v-if="stepIconType === 'circle'" :class="circleFlagClass" :style="circleFlagStyle"></view>
			<bl-icon v-else-if="stepIconType === 'icon'" :icon="stepIcon" color="var(--bl-white-color, #fff)" :style="iconFlagStyle"></bl-icon>
			<text v-else :class="otherFlagClass" :style="otherFlagStyle">{{ stepIcon }}</text>
		</view>
	</view>
</template>

<script>
/**
 * BlStep 步骤项组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlStep',
	inject: {
		steps: {
			default: null
		}
	},
	props: {
		/**
		 * 自定义激活状态图标
		 */
		activeIcon: {
			type: String,
			default: null
		},
		/**
		 * 自定义未激活状态图标
		 */
		inactiveIcon: {
			type: String,
			default: null
		},
		/**
		 * 自定义已完成步骤对应的底部图标
		 */
		finishIcon: {
			type: String,
			default: null
		},
		/**
		 * 步骤索引（由父组件自动设置）
		 */
		stepIndex: {
			type: Number,
			default: 0
		},
		/**
		 * 是否为最后一个（由父组件自动设置）
		 */
		isLast: {
			type: Boolean,
			default: false
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
		direction() {
			return this.steps ? this.steps.direction : 'horizontal'
		},
		activeStep() {
			return this.steps ? Number(this.steps.active) : 0
		},
		finishStep() {
			return this.steps && this.steps.finish != null ? Number(this.steps.finish) : null
		},
		activeColor() {
			return this.steps && this.steps.activeColor ? this.steps.activeColor : 'var(--bl-primary-color, #007aff)'
		},
		inactiveColor() {
			return this.steps && this.steps.inactiveColor ? this.steps.inactiveColor : 'var(--bl-text-color-tertiary, #999)'
		},
		isActiveStep() {
			return this.stepIndex === this.activeStep
		},
		isFinish() {
			return this.stepIndex < this.activeStep
		},
		isFirst() {
			return this.stepIndex === 0
		},
		stepClass() {
			const classes = ['bl-step']
			classes.push(`bl-step--${this.direction}`)
			if (this.isLast) {
				classes.push(`bl-step--${this.direction}--last`)
			}
			return classes.join(' ')
		},
		stepStyle() {
			const styles = []
			styles.push(`color: ${this.isActiveStep ? this.activeColor : 'var(--bl-text-color, #333)'}`)
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		descClass() {
			const classes = ['bl-step__desc']
			classes.push(`bl-step__desc--${this.direction}`)
			if (!this.isFirst && !this.isLast) {
				classes.push(`bl-step__desc--${this.direction}--other`)
			}
			if (this.isFirst) {
				classes.push(`bl-step__desc--${this.direction}--first`)
			}
			if (this.direction === 'vertical' && !this.isActiveStep) {
				classes.push('bl-step__desc--vertical--inactive')
			}
			return classes.join(' ')
		},
		lineClass() {
			const classes = ['bl-step__line']
			classes.push(`bl-step__line--${this.direction}`)
			if (this.isFirst) {
				classes.push(`bl-step__line--${this.direction}--first`)
			}
			return classes.join(' ')
		},
		lineStyle() {
			const styles = []
			if (this.isFinish || this.stepIndex === this.finishStep) {
				styles.push(`background-color: ${this.activeColor}`)
			} else {
				styles.push(`background-color: ${this.inactiveColor}`)
			}
			return styles.join('; ')
		},
		iconBoxClass() {
			const classes = ['bl-step__icon-box']
			classes.push(`bl-step__icon-box--${this.direction}`)
			if (!this.isFirst && !this.isLast) {
				classes.push(`bl-step__icon-box--${this.direction}--other`)
			}
			if (this.isFirst) {
				classes.push(`bl-step__icon-box--${this.direction}--first`)
			}
			if (this.isLast) {
				classes.push(`bl-step__icon-box--${this.direction}--last`)
			}
			return classes.join(' ')
		},
		stepIcon() {
			if (this.isActiveStep) {
				return this.activeIcon || (this.steps ? this.steps.activeIcon : 'check')
			} else if (this.isFinish) {
				return this.finishIcon || (this.steps ? this.steps.finishIcon : null)
			} else {
				return this.inactiveIcon || (this.steps ? this.steps.inactiveIcon : null)
			}
		},
		stepIconType() {
			if (!this.stepIcon) {
				return 'circle'
			}
			return 'icon'
		},
		stepIconColor() {
			return this.isActiveStep || this.isFinish ? this.activeColor : this.inactiveColor
		},
		circleFlagClass() {
			return 'bl-step__circle-flag'
		},
		circleFlagStyle() {
			return `background-color: ${this.stepIconColor}`
		},
		iconFlagStyle() {
			return `background-color: ${this.stepIconColor}`
		},
		otherFlagClass() {
			return 'bl-step__other-flag'
		},
		otherFlagStyle() {
			return `background-color: ${this.stepIconColor}`
		}
	},
	methods: {
		handleClick() {
			if (this.steps && this.steps.handleStepClick) {
				this.steps.handleStepClick(this.stepIndex)
			}
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

