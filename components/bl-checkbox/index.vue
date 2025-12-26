<template>
	<view 
		:class="wrapperClass"
		:style="wrapperStyle"
		@click="handleClick"
	>
		<view 
			:class="checkboxClass"
			:style="checkboxStyle"
		>
			<bl-icon v-if="isChecked" icon="check" :color="iconColor"></bl-icon>
		</view>
		<view :class="contentClass" :style="contentStyle">
			<slot>{{ label }}</slot>
		</view>
	</view>
</template>

<script>
/**
 * BlCheckbox 复选框组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlCheckbox',
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
		 * 只支持BlCheckboxGroup中使用
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
		 * 圆形模式
		 */
		round: {
			type: Boolean,
			default: false
		},
		/**
		 * 设置大小
		 */
		width: {
			type: [String, Number],
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
	computed: {
		wrapperClass() {
			const classes = ['bl-checkbox__wrapper']
			if (this.disabled) {
				classes.push('bl-checkbox__wrapper--disabled')
			}
			if (this.reverse) {
				classes.push('bl-checkbox__wrapper--reverse')
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
		checkboxClass() {
			const classes = ['bl-checkbox']
			if (this.isChecked) {
				classes.push('bl-checkbox--checked')
			}
			if (this.disabled) {
				classes.push('bl-checkbox--disabled')
			}
			if (this.round) {
				classes.push('bl-checkbox--round')
			}
			return classes.join(' ')
		},
		checkboxStyle() {
			const styles = []
			if (this.isChecked && this.color) {
				styles.push(`border-color: ${this.color}`)
				styles.push(`background-color: ${this.color}`)
			}
			if (this.width) {
				const widthValue = typeof this.width === 'number' ? this.width + 'px' : this.width
				styles.push(`width: ${widthValue}`)
				styles.push(`height: ${widthValue}`)
			}
			return styles.join('; ')
		},
		iconColor() {
			return this.isChecked ? (this.color || '#fff') : ''
		},
		contentClass() {
			const classes = ['bl-checkbox__content']
			if (this.labelColorVariable && this.isChecked && this.color) {
				classes.push('bl-checkbox__content--active')
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
			if (!this.disabled) {
				const newChecked = !this.checked
				this.$emit('change', newChecked)
				this.$emit('input', newChecked)
			}
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

