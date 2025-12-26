<template>
	<input 
		:class="inputClass" 
		:style="inputStyle"
		:value="value"
		:type="type"
		:password="password"
		:placeholder="placeholder"
		:placeholder-style="placeholderStyle"
		:placeholder-class="placeholderClass"
		:disabled="disabled"
		:maxlength="maxlength"
		:cursor-spacing="cursorSpacing"
		:focus="focus"
		:confirm-type="confirmType"
		:confirm-hold="confirmHold"
		:cursor="cursor"
		:selection-start="selectionStart"
		:selection-end="selectionEnd"
		:adjust-position="adjustPosition"
		:hold-keyboard="holdKeyboard"
		:auto-focus="autoFocus"
		:always-embed="alwaysEmbed"
		:auto-blur="autoBlur"
		@input="handleInput"
		@focus="handleFocus"
		@blur="handleBlur"
		@confirm="handleConfirm"
		@keyboardheightchange="handleKeyboardHeightChange"
	/>
</template>

<script>
/**
 * BlInput 输入框组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlInput',
	model: {
		prop: 'value',
		event: 'input'
	},
	props: {
		/**
		 * 输入框的初始内容
		 */
		value: {
			type: String,
			default: ''
		},
		/**
		 * input 的类型
		 */
		type: {
			type: String,
			default: 'text' // text | number | idcard | digit | tel | safe-password | nickname
		},
		/**
		 * 是否是密码类型
		 */
		password: {
			type: Boolean,
			default: false
		},
		/**
		 * 输入框为空时占位符
		 */
		placeholder: {
			type: String,
			default: ''
		},
		/**
		 * 指定 placeholder 的样式类
		 */
		placeholderClass: {
			type: String,
			default: 'input-placeholder'
		},
		/**
		 * 指定 placeholder 的样式
		 */
		placeholderStyle: {
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
		 * 最大输入长度，设置为 -1 的时候不限制最大长度
		 */
		maxlength: {
			type: Number,
			default: 140
		},
		/**
		 * 指定光标与键盘的距离，单位 px
		 */
		cursorSpacing: {
			type: Number,
			default: 0
		},
		/**
		 * 是否自动聚焦，拉起键盘
		 */
		focus: {
			type: Boolean,
			default: false
		},
		/**
		 * 设置键盘右下角按钮的文字
		 */
		confirmType: {
			type: String,
			default: 'done' // send | search | next | go | done
		},
		/**
		 * 点击键盘右下角按钮时是否保持键盘不收起
		 */
		confirmHold: {
			type: Boolean,
			default: false
		},
		/**
		 * 指定 focus 时的光标位置
		 */
		cursor: {
			type: Number,
			default: -1
		},
		/**
		 * 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用
		 */
		selectionStart: {
			type: Number,
			default: -1
		},
		/**
		 * 光标结束位置，自动聚集时有效，需与 selection-end 搭配使用
		 */
		selectionEnd: {
			type: Number,
			default: -1
		},
		/**
		 * 键盘弹起时，是否自动上推页面
		 */
		adjustPosition: {
			type: Boolean,
			default: true
		},
		/**
		 * focus 时，点击页面的时候不收起键盘
		 */
		holdKeyboard: {
			type: Boolean,
			default: false
		},
		/**
		 * 是否自动聚焦
		 */
		autoFocus: {
			type: Boolean,
			default: false
		},
		/**
		 * 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态
		 */
		alwaysEmbed: {
			type: Boolean,
			default: false
		},
		/**
		 * 是否在点击清空图标时自动失焦
		 */
		autoBlur: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		inputClass() {
			const classes = ['bl-input']
			if (this.disabled) {
				classes.push('bl-input--disabled')
			}
			return classes.join(' ')
		},
		inputStyle() {
			return {}
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
		handleKeyboardHeightChange(e) {
			this.$emit('keyboardHeightChange', e)
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

