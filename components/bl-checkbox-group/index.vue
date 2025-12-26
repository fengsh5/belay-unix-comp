<template>
	<view :class="groupClass" :style="groupStyle">
		<slot></slot>
	</view>
</template>

<script>
/**
 * BlCheckboxGroup 复选框组组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlCheckboxGroup',
	model: {
		prop: 'value',
		event: 'change'
	},
	props: {
		/**
		 * 选中值
		 */
		value: {
			type: Array,
			default: () => []
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
			checkboxGroup: this
		}
	},
	computed: {
		groupClass() {
			return 'bl-checkbox-group'
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
		handleChange(value, checked) {
			let newValue = [...(this.value || [])]
			if (checked) {
				if (!newValue.includes(value)) {
					newValue.push(value)
				}
			} else {
				const index = newValue.indexOf(value)
				if (index > -1) {
					newValue.splice(index, 1)
				}
			}
			this.$emit('change', newValue)
			this.$emit('input', newValue)
		}
	}
}
</script>

<style scoped>
.bl-checkbox-group {
	display: flex;
	flex-direction: column;
}
</style>

