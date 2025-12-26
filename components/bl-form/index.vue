<template>
	<form 
		:class="formClass" 
		:style="formStyle"
		@submit="handleSubmit"
		@reset="handleReset"
	>
		<slot></slot>
	</form>
</template>

<script>
/**
 * BlForm 表单组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlForm',
	provide() {
		return {
			form: this
		}
	},
	props: {
		/**
		 * 表单数据对象
		 */
		model: {
			type: Object,
			default: () => ({})
		},
		/**
		 * 表单验证规则
		 */
		rules: {
			type: Object,
			default: () => ({})
		},
		/**
		 * 表单标签宽度
		 */
		labelWidth: {
			type: [Number, String],
			default: 0
		},
		/**
		 * 是否显示必填标识
		 */
		showRequired: {
			type: Boolean,
			default: false
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
		formClass() {
			const classes = ['bl-form']
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		formStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		}
	},
	methods: {
		handleSubmit(e) {
			e.preventDefault()
			this.validate((valid) => {
				if (valid) {
					this.$emit('submit', this.model)
				}
			})
		},
		handleReset(e) {
			this.$emit('reset', e)
		},
		validate(callback) {
			// 基础的表单验证逻辑
			const errors = []
			
			if (this.rules && typeof this.rules == 'object') {
				for (const field in this.rules) {
					const rule = this.rules[field]
					const value = this.model[field]
					
					if (rule && typeof rule == 'object') {
						// 必填验证
						if (rule.required && (value == null || value == '')) {
							const message = rule.message || `${field}不能为空`
							errors.push(message)
						}
						// 其他验证规则可以在这里扩展
					}
				}
			}
			
			const valid = errors.length == 0
			this.$emit('validate', {
				valid: valid,
				errors: errors
			})
			if (callback) {
				callback(valid)
			}
		},
		resetFields() {
			// 重置表单字段
			for (const field in this.model) {
				this.model[field] = ''
			}
			this.$emit('reset')
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

