<template>
	<view v-if="!hasError" class="bl-errorcapture">
		<slot></slot>
	</view>
	<bl-empty
		v-else
		type="error"
		:desc="errorMessageValue"
		:retry-text="retryText"
		:on-retry="handleRetry"
		@retry="handleRetry"
	></bl-empty>
</template>

<script>
/**
 * BlErrorCapture 错误捕获组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlErrorCapture',
	props: {
		/**
		 * 错误信息
		 */
		error: {
			type: String,
			default: ''
		},
		/**
		 * 是否显示错误
		 */
		showError: {
			type: Boolean,
			default: true
		},
		/**
		 * 错误提示文本
		 */
		errorMessage: {
			type: String,
			default: '出现错误，请重试'
		},
		/**
		 * 重试按钮文本
		 */
		retryText: {
			type: String,
			default: '重试'
		}
	},
	data() {
		return {
			hasError: false,
			errorInfo: ''
		}
	},
	watch: {
		error: {
			handler(newVal) {
				this.hasError = newVal != null && newVal != '' && this.showError
				if (this.hasError) {
					this.errorInfo = newVal
				}
			},
			immediate: true
		},
		showError: {
			handler(newVal) {
				if (!newVal) {
					this.hasError = false
				} else if (this.error != null && this.error != '') {
					this.hasError = true
				}
			}
		}
	},
	computed: {
		errorMessageValue() {
			return this.errorInfo || this.errorMessage
		}
	},
	methods: {
		handleRetry() {
			this.hasError = false
			this.errorInfo = ''
			this.$emit('retry')
		},
		/**
		 * 捕获错误
		 * @param {string|Object} error - 错误信息，可以是字符串或包含 message 属性的对象
		 */
		captureError(error) {
			this.hasError = true
			if (typeof error == 'string') {
				this.errorInfo = error
			} else if (error != null && typeof error == 'object') {
				this.errorInfo = error.message || '未知错误'
			}
			this.$emit('error', error)
		}
	}
}
</script>

<style scoped>
.bl-errorcapture {
	width: 100%;
	height: 100%;
}
</style>

