<template>
	<view 
		:class="wrapperClass"
		:style="wrapperStyle"
		@click="handleClick"
	>
		<view 
			:class="radioClass"
			:style="radioStyle"
		>
			<view v-if="isChecked" :class="radioPointClass" :style="radioPointStyle"></view>
		</view>
		<view :class="contentClass" :style="contentStyle">
			<slot>{{ label }}</slot>
		</view>
	</view>
</template>

<script>
/**
 * BlRadio 单选框组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlRadio',
	model: {
		prop: 'checked',
		event: 'change'
	},
	props: {
		/**
		 * 选中状态
		 */
		checked: {
			type: Boolean,
			default: false
		},
		/**
		 * 禁用
		 */
		disabled: {
			type: Boolean,
			default: false
		},
		/**
		 * 选中颜色
		 */
		color: {
			type: String,
			default: ''
		},
		/**
		 * 只支持BlRadioGroup中使用
		 */
		value: {
			type: [String, Number],
			default: null
		},
		/**
		 * 改变文本位置
		 */
		reverse: {
			type: Boolean,
			default: false
		},
		/**
		 * 文本
		 */
		label: {
			type: String,
			default: ''
		},
		/**
		 * label的颜色是否可变
		 */
		labelColorVariable: {
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
		wrapperClass() {
			const classes = ['bl-radio__wrapper']
			if (this.disabled) {
				classes.push('bl-radio__wrapper--disabled')
			}
			if (this.reverse) {
				classes.push('bl-radio__wrapper--reverse')
			}
			return classes.join(' ')
		},
		wrapperStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		isChecked() {
			return this.checked
		},
		radioClass() {
			const classes = ['bl-radio']
			if (this.isChecked) {
				classes.push('bl-radio--checked')
			}
			if (this.disabled) {
				classes.push('bl-radio--disabled')
			}
			return classes.join(' ')
		},
		radioStyle() {
			const styles = []
			if (this.isChecked && this.color) {
				styles.push(`border-color: ${this.color}`)
			}
			return styles.join('; ')
		},
		radioPointClass() {
			return 'bl-radio__point'
		},
		radioPointStyle() {
			const styles = []
			if (this.color) {
				styles.push(`background-color: ${this.color}`)
			}
			return styles.join('; ')
		},
		contentClass() {
			const classes = ['bl-radio__content']
			if (this.labelColorVariable && this.isChecked && this.color) {
				classes.push('bl-radio__content--active')
			}
			return classes.join(' ')
		},
		contentStyle() {
			const styles = []
			if (this.labelColorVariable && this.isChecked && this.color) {
				styles.push(`color: ${this.color}`)
			}
			return styles.join('; ')
		}
	},
	methods: {
		handleClick() {
			if (!this.disabled && !this.isChecked) {
				this.$emit('change', true)
				this.$emit('input', true)
			}
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

