<template>
	<switch 
		:class="switchClass" 
		:style="switchStyle"
		:checked="checked"
		:disabled="disabled"
		:type="type"
		:color="color"
		@change="handleChange"
	></switch>
</template>

<script>
/**
 * BlSwitch 开关组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlSwitch',
	model: {
		prop: 'checked',
		event: 'change'
	},
	props: {
		/**
		 * 是否选中
		 */
		checked: {
			type: Boolean,
			default: false
		},
		/**
		 * 是否禁用
		 */
		disabled: {
			type: Boolean,
			default: false
		},
		/**
		 * 样式类型，有效值：switch | checkbox
		 */
		type: {
			type: String,
			default: 'switch'
		},
		/**
		 * switch 的颜色，同 css 的 color
		 */
		color: {
			type: String,
			default: '#1aad19'
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
		switchClass() {
			const classes = ['bl-switch']
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		switchStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		}
	},
	methods: {
		handleChange(e) {
			const checked = e.detail?.value !== undefined ? e.detail.value : e.target?.checked
			this.$emit('change', checked)
			this.$emit('input', checked)
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

