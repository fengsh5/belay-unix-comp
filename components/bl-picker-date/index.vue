<template>
	<picker
		:class="pickerClass"
		:style="pickerStyle"
		mode="date"
		:value="value"
		:start="start"
		:end="end"
		:fields="fields"
		:disabled="disabled"
		@change="handleChange"
		@cancel="handleCancel"
	>
		<slot>
			<view class="bl-pickerdate__trigger">
				<text class="bl-pickerdate__text">{{ displayText }}</text>
				<bl-icon v-if="showArrow" name="arrow-down" class="bl-pickerdate__arrow"></bl-icon>
			</view>
		</slot>
	</picker>
</template>

<script>
/**
 * BlPickerDate 日期选择器组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlPickerDate',
	model: {
		prop: 'value',
		event: 'change'
	},
	props: {
		/**
		 * 当前选中的值
		 */
		value: {
			type: String,
			default: ''
		},
		/**
		 * 可选的最小日期
		 */
		start: {
			type: String,
			default: ''
		},
		/**
		 * 可选的最大日期
		 */
		end: {
			type: String,
			default: ''
		},
		/**
		 * 选择器的粒度
		 */
		fields: {
			type: String,
			default: 'day' // year | month | day
		},
		/**
		 * 是否禁用
		 */
		disabled: {
			type: Boolean,
			default: false
		},
		/**
		 * 占位符
		 */
		placeholder: {
			type: String,
			default: '请选择日期'
		},
		/**
		 * 是否显示箭头
		 */
		showArrow: {
			type: Boolean,
			default: true
		},
		/**
		 * 日期格式化函数
		 */
		formatter: {
			type: Function,
			default: null
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
		pickerClass() {
			const classes = ['bl-pickerdate']
			if (this.disabled) {
				classes.push('bl-pickerdate--disabled')
			}
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		pickerStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		displayText() {
			if (!this.value) {
				return this.placeholder
			}
			if (this.formatter && typeof this.formatter === 'function') {
				return this.formatter(this.value)
			}
			return this.value
		}
	},
	methods: {
		handleChange(e) {
			const value = e.detail?.value || e.detail || ''
			this.$emit('change', value)
			this.$emit('input', value)
		},
		handleCancel(e) {
			this.$emit('cancel', e)
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

