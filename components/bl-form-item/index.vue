<template>
	<view 
		:class="formItemClass" 
		:style="formItemStyle"
	>
		<view class="bl-form-item__label" :style="labelStyle" v-if="label || $slots.label">
			<slot name="label">
				<text v-if="label">{{ label }}</text>
			</slot>
			<text class="bl-form-item__required" v-if="isRequired">*</text>
		</view>
		<view class="bl-form-item__content">
			<slot></slot>
			<view class="bl-form-item__error" v-if="errorMessage">
				<text class="bl-form-item__error-text">{{ errorMessage }}</text>
			</view>
		</view>
	</view>
</template>

<script>
/**
 * BlFormItem 表单项组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlFormItem',
	inject: {
		form: {
			default: null
		}
	},
	props: {
		/**
		 * 标签文本
		 */
		label: {
			type: String,
			default: ''
		},
		/**
		 * 表单字段名，用于表单验证和数据处理
		 */
		prop: {
			type: String,
			default: ''
		},
		/**
		 * 标签宽度，优先级高于表单的 labelWidth
		 */
		labelWidth: {
			type: [Number, String],
			default: null
		},
		/**
		 * 是否必填
		 */
		required: {
			type: Boolean,
			default: false
		},
		/**
		 * 错误提示信息
		 */
		error: {
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
	computed: {
		formItemClass() {
			const classes = ['bl-form-item']
			if (this.errorMessage) {
				classes.push('bl-form-item--error')
			}
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		formItemStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		labelStyle() {
			const styles = []
			const width = this.labelWidth || (this.form ? this.form.labelWidth : 0)
			if (width) {
				styles.push(`width: ${typeof width === 'number' ? width + 'px' : width}`)
			}
			return styles.join('; ')
		},
		isRequired() {
			if (this.required) {
				return true
			}
			if (this.form && this.form.showRequired && this.prop) {
				const rules = this.form.rules || {}
				const rule = rules[this.prop]
				if (rule && rule.required) {
					return true
				}
			}
			return false
		},
		errorMessage() {
			if (this.error) {
				return this.error
			}
			// 可以从表单验证结果中获取错误信息
			// 这里简化处理，实际项目中可以更复杂
			return ''
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

