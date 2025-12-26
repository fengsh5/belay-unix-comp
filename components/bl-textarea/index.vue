<template>
	<textarea
		:class="textareaClass"
		:style="textareaStyle"
		:value="value"
		:placeholder="placeholder"
		:disabled="disabled"
		:maxlength="maxlength"
		:auto-focus="autoFocus"
		:focus="focus"
		:auto-height="autoHeight"
		:fixed="fixed"
		:cursor-spacing="cursorSpacing"
		:cursor="cursor"
		:show-confirm-bar="showConfirmBar"
		:selection-start="selectionStart"
		:selection-end="selectionEnd"
		:hold-keyboard="holdKeyboard"
		:adjust-position="adjustPosition"
		@input="handleInput"
		@focus="handleFocus"
		@blur="handleBlur"
		@confirm="handleConfirm"
		@linechange="handleLinechange"
		@keyboardheightchange="handleKeyboardheightchange"
	></textarea>
</template>

<script>
/**
 * BlTextarea 多行输入框组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlTextarea',
	model: {
		prop: 'value',
		event: 'input'
	},
	props: {
		/**
		 * 输入值
		 */
		value: {
			type: String,
			default: ''
		},
		/**
		 * 占位符
		 */
		placeholder: {
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
		 * 最大长度
		 */
		maxlength: {
			type: Number,
			default: -1
		},
		/**
		 * 是否自动聚焦
		 */
		autoFocus: {
			type: Boolean,
			default: false
		},
		/**
		 * 是否聚焦
		 */
		focus: {
			type: Boolean,
			default: false
		},
		/**
		 * 是否自动增高
		 */
		autoHeight: {
			type: Boolean,
			default: false
		},
		/**
		 * 是否固定
		 */
		fixed: {
			type: Boolean,
			default: false
		},
		/**
		 * 指定光标与键盘的距离
		 */
		cursorSpacing: {
			type: Number,
			default: 0
		},
		/**
		 * 指定focus时的光标位置
		 */
		cursor: {
			type: Number,
			default: -1
		},
		/**
		 * 是否显示键盘上方工具栏
		 */
		showConfirmBar: {
			type: Boolean,
			default: true
		},
		/**
		 * 光标起始位置
		 */
		selectionStart: {
			type: Number,
			default: -1
		},
		/**
		 * 光标结束位置
		 */
		selectionEnd: {
			type: Number,
			default: -1
		},
		/**
		 * focus时，点击页面的时候不收起键盘
		 */
		holdKeyboard: {
			type: Boolean,
			default: false
		},
		/**
		 * 键盘弹起时，是否自动上推页面
		 */
		adjustPosition: {
			type: Boolean,
			default: true
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
		textareaClass() {
			const classes = ['bl-textarea']
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		textareaStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		}
	},
	methods: {
		handleInput(e) {
			const value = e.detail?.value || e.target?.value || ''
			this.$emit('input', value)
			this.$emit('change', value)
		},
		handleFocus(e) {
			this.$emit('focus', e)
		},
		handleBlur(e) {
			this.$emit('blur', e)
		},
		handleConfirm(e) {
			this.$emit('confirm', e)
		},
		handleLinechange(e) {
			this.$emit('linechange', e)
		},
		handleKeyboardheightchange(e) {
			this.$emit('keyboardheightchange', e)
		}
	}
}
</script>

<style scoped>
.bl-textarea {
	box-sizing: border-box;
	width: 100%;
}
</style>

