<template>
	<view :class="numberInputClass" :style="numberInputStyle">
		<view 
			v-if="showMinus" 
			:class="buttonClass('minus')"
			:style="buttonStyle('minus')"
			@click="handleMinus"
		>
			<text class="bl-numberinput__button-text">-</text>
		</view>
		<input
			:class="inputClass"
			:style="inputStyle"
			:value="displayValue"
			type="number"
			:disabled="disabled || !editable"
			:placeholder="placeholder"
			@input="handleInput"
			@blur="handleBlur"
			@focus="handleFocus"
		/>
		<view 
			v-if="showPlus" 
			:class="buttonClass('plus')"
			:style="buttonStyle('plus')"
			@click="handlePlus"
		>
			<text class="bl-numberinput__button-text">+</text>
		</view>
	</view>
</template>

<script>
/**
 * BlNumberInput 数字输入框组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlNumberInput',
	model: {
		prop: 'value',
		event: 'change'
	},
	props: {
		/**
		 * 当前值
		 */
		value: {
			type: Number,
			default: 0
		},
		/**
		 * 最小值
		 */
		min: {
			type: Number,
			default: -Infinity
		},
		/**
		 * 最大值
		 */
		max: {
			type: Number,
			default: Infinity
		},
		/**
		 * 步长，每次点击时改变的值
		 */
		step: {
			type: Number,
			default: 1
		},
		/**
		 * 是否禁用
		 */
		disabled: {
			type: Boolean,
			default: false
		},
		/**
		 * 是否可编辑
		 */
		editable: {
			type: Boolean,
			default: true
		},
		/**
		 * 是否显示减少按钮
		 */
		showMinus: {
			type: Boolean,
			default: true
		},
		/**
		 * 是否显示增加按钮
		 */
		showPlus: {
			type: Boolean,
			default: true
		},
		/**
		 * 占位符
		 */
		placeholder: {
			type: String,
			default: ''
		},
		/**
		 * 输入框宽度
		 */
		width: {
			type: [Number, String],
			default: 120
		},
		/**
		 * 按钮大小
		 */
		buttonSize: {
			type: Number,
			default: 48
		},
		/**
		 * 自定义样式
		 */
		customStyle: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			inputValue: this.value || 0
		}
	},
	watch: {
		value(newVal) {
			this.inputValue = newVal
		}
	},
	computed: {
		numberInputClass() {
			return 'bl-numberinput'
		},
		numberInputStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		displayValue() {
			return this.inputValue != null ? String(this.inputValue) : ''
		},
		inputClass() {
			return 'bl-numberinput__input'
		},
		inputStyle() {
			const styles = []
			const widthValue = typeof this.width === 'number' ? `${this.width}px` : this.width
			styles.push(`width: ${widthValue}`)
			return styles.join('; ')
		}
	},
	methods: {
		buttonClass(type) {
			const classes = ['bl-numberinput__button', `bl-numberinput__button--${type}`]
			if (this.disabled) {
				classes.push('bl-numberinput__button--disabled')
			}
			if (type === 'minus' && this.inputValue <= this.min) {
				classes.push('bl-numberinput__button--disabled')
			}
			if (type === 'plus' && this.inputValue >= this.max) {
				classes.push('bl-numberinput__button--disabled')
			}
			return classes.join(' ')
		},
		buttonStyle(type) {
			const styles = []
			styles.push(`width: ${this.buttonSize}px`)
			styles.push(`height: ${this.buttonSize}px`)
			return styles.join('; ')
		},
		handleMinus() {
			if (this.disabled || this.inputValue <= this.min) return
			const newValue = Math.max(this.min, this.inputValue - this.step)
			this.updateValue(newValue)
		},
		handlePlus() {
			if (this.disabled || this.inputValue >= this.max) return
			const newValue = Math.min(this.max, this.inputValue + this.step)
			this.updateValue(newValue)
		},
		handleInput(e) {
			const value = e.detail?.value !== undefined ? e.detail.value : (e.target?.value || '')
			const numValue = value === '' ? 0 : Number(value)
			if (!isNaN(numValue)) {
				this.inputValue = numValue
			}
		},
		handleBlur(e) {
			const value = e.detail?.value !== undefined ? e.detail.value : (e.target?.value || '')
			let numValue = value === '' ? 0 : Number(value)
			if (isNaN(numValue)) {
				numValue = this.value || 0
			}
			numValue = Math.max(this.min, Math.min(this.max, numValue))
			this.updateValue(numValue)
		},
		handleFocus(e) {
			this.$emit('focus', e)
		},
		updateValue(newValue) {
			this.inputValue = newValue
			this.$emit('change', newValue)
			this.$emit('input', newValue)
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

