<template>
	<text 
		:class="textClass" 
		:style="textStyle"
		:selectable="selectable"
		:user-select="userSelect"
		:space="space"
		:decode="decode"
		@click="handleClick"
	>
		<slot></slot>
	</text>
</template>

<script>
/**
 * BlText 文本组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlText',
	props: {
		/**
		 * 文本是否可选
		 */
		selectable: {
			type: Boolean,
			default: false
		},
		/**
		 * 是否允许用户选择文本
		 */
		userSelect: {
			type: Boolean,
			default: false
		},
		/**
		 * 显示连续空格，可选值：ensp(中文字符空格一半大小)、emsp(中文字符空格大小)、nbsp(根据字体设置的空格大小)
		 */
		space: {
			type: String,
			default: ''
		},
		/**
		 * 是否解码
		 */
		decode: {
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
		textClass() {
			const classes = ['bl-text']
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		textStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		}
	},
	methods: {
		handleClick(e) {
			this.$emit('click', e)
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

