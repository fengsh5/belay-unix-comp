<template>
	<view :class="groupClass" :style="groupStyle">
		<slot></slot>
	</view>
</template>

<script>
/**
 * BlRadioGroup 单选框组组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlRadioGroup',
	model: {
		prop: 'value',
		event: 'change'
	},
	props: {
		/**
		 * 选中的值
		 */
		value: {
			type: [String, Number],
			default: null
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
		 * 自定义样式
		 */
		customStyle: {
			type: String,
			default: ''
		}
	},
	provide() {
		return {
			radioGroup: this
		}
	},
	computed: {
		groupClass() {
			return 'bl-radio-group'
		},
		groupStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		}
	},
	methods: {
		handleChange(value) {
			this.$emit('change', value)
			this.$emit('input', value)
		}
	}
}
</script>

<style scoped>
.bl-radio-group {
	display: flex;
	flex-direction: column;
}
</style>

