<template>
	<view 
		:class="themeClass" 
		:style="themeStyle"
	>
		<slot></slot>
	</view>
</template>

<script>
/**
 * BlTheme 主题组件
 * 
 * 注意：此组件主要用于提供主题类名和自定义样式，不提供主题配置功能。
 * 如果需要完整的主题切换功能，请使用 BlThemeProvider 组件。
 * 
 * 使用场景：
 * 1. 需要为某个区域添加主题类名（如 bl-theme--custom）
 * 2. 需要为某个区域添加自定义样式
 * 3. 简单的主题容器，不涉及主题变量配置
 * 
 * 示例：
 * <bl-theme name="custom" custom-class="my-theme">
 *   <view>内容</view>
 * </bl-theme>
 * 
 * 如果需要主题切换功能，请使用：
 * <bl-theme-provider :theme="themeConfig">
 *   <view>内容</view>
 * </bl-theme-provider>
 * 
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlTheme',
	props: {
		/**
		 * 主题名称
		 */
		name: {
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
		themeClass() {
			const classes = ['bl-theme']
			if (this.name) {
				classes.push(`bl-theme--${this.name}`)
			}
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		themeStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		}
	}
}
</script>

<style scoped>
.bl-theme {
	box-sizing: border-box;
}
</style>

