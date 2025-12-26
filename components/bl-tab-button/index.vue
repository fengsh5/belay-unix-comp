<template>
	<view 
		:class="tabButtonClass" 
		:style="tabButtonStyle"
		@click="handleClick"
	>
		<view v-if="icon" class="bl-tabbutton__icon">
			<bl-icon :name="icon" :color="iconColorValue"></bl-icon>
		</view>
		<text :class="textClass" :style="textStyle">{{ text }}</text>
		<bl-badge v-if="badge" :value="badge" class="bl-tabbutton__badge"></bl-badge>
	</view>
</template>

<script>
/**
 * BlTabButton 标签页按钮组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlTabButton',
	props: {
		/**
		 * 按钮文本
		 */
		text: {
			type: String,
			default: ''
		},
		/**
		 * 图标名称
		 */
		icon: {
			type: String,
			default: ''
		},
		/**
		 * 图标颜色
		 */
		iconColor: {
			type: String,
			default: '#646566'
		},
		/**
		 * 徽章值
		 */
		badge: {
			type: [String, Number],
			default: ''
		},
		/**
		 * 是否选中
		 */
		active: {
			type: Boolean,
			default: false
		},
		/**
		 * 选中时的图标颜色
		 */
		activeIconColor: {
			type: String,
			default: '#007aff'
		},
		/**
		 * 选中时的文字颜色
		 */
		activeTextColor: {
			type: String,
			default: '#007aff'
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
		tabButtonClass() {
			const classes = ['bl-tabbutton']
			if (this.active) {
				classes.push('bl-tabbutton--active')
			}
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		tabButtonStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		iconColorValue() {
			return this.active ? (this.activeIconColor || '#007aff') : (this.iconColor || '#646566')
		},
		textClass() {
			return 'bl-tabbutton__text'
		},
		textStyle() {
			const styles = []
			if (this.active) {
				styles.push(`color: ${this.activeTextColor || '#007aff'}`)
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

