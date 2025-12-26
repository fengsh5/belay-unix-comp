<template>
	<view :class="themeClass">
		<slot></slot>
	</view>
</template>

<script>
/**
 * BlThemeProvider 主题提供者组件（Vue2 版本）
 * 
 * ⚠️ 注意：Vue2 版本功能有限，主要用于简单的主题名称切换。
 * 
 * 功能限制：
 * - 仅支持通过 theme 属性设置主题名称（'light' | 'dark'）
 * - 不支持主题配置对象（theme 属性为字符串，不是对象）
 * - 不设置 CSS 变量
 * - 不集成 BlTheme 工具类
 * 
 * 推荐使用方式：
 * 1. 在 uni-app x 项目中使用 Vue3 版本的 BlThemeProvider（index.uvue）
 * 2. 在 uni-app 项目中，可以通过 CSS 类名实现主题切换
 * 
 * 示例：
 * <bl-theme-provider theme="dark">
 *   <view>内容</view>
 * </bl-theme-provider>
 * 
 * 如果需要完整的主题配置功能，请使用 uni-app x 项目中的 Vue3 版本。
 * 
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlThemeProvider',
	provide() {
		return {
			themeProvider: this
		}
	},
	props: {
		/**
		 * 主题名称（'light' | 'dark'）
		 * 
		 * ⚠️ Vue2 版本仅支持主题名称字符串，不支持主题配置对象
		 * 如果需要主题配置对象，请使用 uni-app x 项目中的 Vue3 版本
		 */
		theme: {
			type: String,
			default: ''
		},
		/**
		 * 主题配置（Vue2 版本暂不支持，保留用于兼容性）
		 * 
		 * ⚠️ 注意：Vue2 版本不处理此属性，仅触发事件
		 * 如需使用主题配置，请使用 uni-app x 项目中的 Vue3 版本
		 */
		themeConfig: {
			type: Object,
			default: null
		},
		/**
		 * 是否自动初始化默认主题
		 */
		autoInit: {
			type: Boolean,
			default: true
		},
		/**
		 * 是否从本地文件加载主题
		 */
		loadFromFile: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			currentTheme: 'light'
		}
	},
	computed: {
		themeClass() {
			return `bl-theme bl-theme-${this.currentTheme}`
		}
	},
	created() {
		// 设置当前主题
		if (this.theme) {
			this.currentTheme = this.theme
		} else {
			// 尝试从本地存储读取
			try {
				const savedTheme = uni.getStorageSync('theme')
				if (savedTheme) {
					this.currentTheme = savedTheme
				}
			} catch (e) {
				// 忽略错误
			}
		}
		
		// 注册主题配置（如果提供了自定义配置）
		if (this.themeConfig && this.theme) {
			// 这里可以扩展主题注册逻辑
			this.$emit('theme-registered', this.theme, this.themeConfig)
		}
	},
	methods: {
		setTheme(themeName) {
			this.currentTheme = themeName
			// 保存到本地存储
			try {
				uni.setStorageSync('theme', themeName)
			} catch (e) {
				// 忽略错误
			}
			this.$emit('theme-change', themeName)
		},
		getTheme() {
			return this.currentTheme
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

