<template>
	<view>
		<slot></slot>
	</view>
</template>

<script>
/**
 * BlI18nProvider 国际化提供者组件（Vue2 版本）
 * 
 * ⚠️ 注意：Vue2 版本功能有限，主要用于简单的语言切换。
 * 
 * 功能限制：
 * - 使用 `language` 和 `resources` 属性（与 Vue3 版本的 `locale` 不同）
 * - 不集成 BlI18n 工具类
 * - 使用自己的实现方式
 * 
 * 推荐使用方式：
 * 1. 在 uni-app x 项目中使用 Vue3 版本的 BlI18nProvider（index.uvue）
 * 2. 在 uni-app 项目中，可以通过此组件实现简单的语言切换
 * 
 * 示例：
 * <bl-i18n-provider :language="currentLanguage" :resources="localeData">
 *   <view>内容</view>
 * </bl-i18n-provider>
 * 
 * 如果需要完整的多语言功能，请使用 uni-app x 项目中的 Vue3 版本。
 * 
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlI18nProvider',
	provide() {
		return {
			i18nProvider: this
		}
	},
	props: {
		/**
		 * 语言代码
		 */
		language: {
			type: String,
			default: ''
		},
		/**
		 * 语言资源
		 */
		resources: {
			type: Object,
			default: null
		},
		/**
		 * 是否自动初始化默认语言
		 */
		autoInit: {
			type: Boolean,
			default: true
		},
		/**
		 * 是否从本地文件加载语言资源
		 */
		loadFromFile: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			currentLanguage: 'zh-CN',
			localeData: {}
		}
	},
	created() {
		// 设置当前语言
		if (this.language) {
			this.currentLanguage = this.language
		} else {
			// 尝试从本地存储读取
			try {
				const savedLang = uni.getStorageSync('language')
				if (savedLang) {
					this.currentLanguage = savedLang
				} else {
					// 尝试从系统获取
					const systemInfo = uni.getSystemInfoSync()
					if (systemInfo && systemInfo.language) {
						this.currentLanguage = systemInfo.language
					}
				}
			} catch (e) {
				// 忽略错误，使用默认值
			}
		}
		
		// 注册语言资源
		if (this.resources) {
			for (const lang in this.resources) {
				if (this.resources[lang]) {
					this.localeData[lang] = this.resources[lang]
				}
			}
		}
	},
	methods: {
		setLanguage(language) {
			this.currentLanguage = language
			// 保存到本地存储
			try {
				uni.setStorageSync('language', language)
			} catch (e) {
				// 忽略错误
			}
			this.$emit('language-change', language)
		},
		getLanguage() {
			return this.currentLanguage
		},
		t(key, params) {
			const keys = key.split('.')
			let value = this.localeData[this.currentLanguage]
			
			for (const k of keys) {
				if (value && value[k]) {
					value = value[k]
				} else {
					return key
				}
			}
			
			// 参数替换（支持双花括号格式 {{key}}，与语言包格式一致）
			if (params && typeof value === 'string') {
				for (const paramKey in params) {
					// 支持双花括号格式 {{key}}（与语言包格式一致）
					value = value.replace(new RegExp(`\\{\\{${paramKey}\\}\\}`, 'g'), params[paramKey])
					// 兼容单花括号格式 {key}（向后兼容）
					value = value.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), params[paramKey])
				}
			}
			
			return value || key
		},
		registerLanguage(language, resources) {
			if (resources) {
				this.localeData[language] = resources
			}
		}
	}
}
</script>

<style scoped>
/* I18nProvider 组件不渲染可见内容 */
</style>

