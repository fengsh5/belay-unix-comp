<template>
	<picker
		:class="pickerClass"
		:style="pickerStyle"
		mode="time"
		:value="value"
		:disabled="disabled"
		@change="handleChange"
		@cancel="handleCancel"
	>
		<slot>
			<view class="bl-pickertime__trigger">
				<text class="bl-pickertime__text">{{ displayText }}</text>
				<bl-icon v-if="showArrow" name="arrow-down" class="bl-pickertime__arrow"></bl-icon>
			</view>
		</slot>
	</picker>
</template>

<script>
/**
 * BlPickerTime 时间选择器组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlPickerTime',
	model: {
		prop: 'value',
		event: 'change'
	},
	props: {
		/**
		 * 当前选中的值，格式为 HH:mm
		 */
		value: {
			type: String,
			default: ''
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
			default: '请选择时间'
		},
		/**
		 * 是否显示箭头
		 */
		showArrow: {
			type: Boolean,
			default: true
		},
		/**
		 * 时间格式化函数
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
			const classes = ['bl-pickertime']
			if (this.disabled) {
				classes.push('bl-pickertime--disabled')
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
			if (this.formatter && typeof this.formatter == 'function') {
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

