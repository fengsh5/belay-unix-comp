<template>
	<view :class="containerClass" :style="containerStyle">
		<view v-if="before" class="bl-search-bar__before">
			<slot name="before">{{ before }}</slot>
		</view>
		<view class="bl-search-bar__box">
			<view v-if="searchIcon" class="bl-search-bar__search-icon">
				<slot name="searchIcon">{{ searchIcon }}</slot>
			</view>
			<bl-icon v-else icon="search" color="#ababab" :size="32"></bl-icon>
			<bl-input
				:class="inputClass"
				:value="value"
				:placeholder="placeholderValue"
				:style="inputStyle"
				@input="handleChange"
				@confirm="handleConfirm"
			></bl-input>
			<view v-if="clearable && value" class="bl-search-bar__cancel" @click.stop="handleClear">
				<bl-icon icon="cross-circle-fill" color="rgba(0, 0, 0, 0.5)" :size="32"></bl-icon>
			</view>
		</view>
		<view v-if="after" class="bl-search-bar__after">
			<slot name="after">{{ after }}</slot>
		</view>
	</view>
</template>

<script>
/**
 * BlSearchBar 搜索栏组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlSearchBar',
	model: {
		prop: 'value',
		event: 'change'
	},
	props: {
		/**
		 * 当前值
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
		 * 搜索框外左侧插槽
		 */
		before: {
			type: String,
			default: null
		},
		/**
		 * 搜索框外右侧插槽
		 */
		after: {
			type: String,
			default: null
		},
		/**
		 * 自定义搜索图标
		 */
		searchIcon: {
			type: String,
			default: null
		},
		/**
		 * 清空按钮
		 */
		clearable: {
			type: Boolean,
			default: true
		},
		/**
		 * 文字对齐方式
		 */
		align: {
			type: String,
			default: 'left' // left | center | right
		},
		/**
		 * 防抖时间，单位ms
		 */
		debounceTime: {
			type: Number,
			default: 1000
		},
		/**
		 * 自定义样式
		 */
		customStyle: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			searchTimer: null
		}
	},
	computed: {
		containerClass() {
			return 'bl-search-bar'
		},
		containerStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		inputClass() {
			return 'bl-search-bar__input'
		},
		inputStyle() {
			const styles = []
			styles.push(`text-align: ${this.align}`)
			styles.push('flex: 1')
			styles.push('color: var(--bl-text-color, #333)')
			styles.push('margin-left: 8px')
			styles.push('line-height: 1.5')
			return styles.join('; ')
		},
		placeholderValue() {
			if (this.placeholder) {
				return this.placeholder
			}
			// 尝试从 i18nProvider 获取翻译
			if (this.$parent && this.$parent.$options.name === 'BlI18nProvider') {
				return this.$parent.t('comp.search')
			}
			// 如果没有 i18nProvider，返回默认值
			return '搜索'
		}
	},
	methods: {
		/**
		 * 防抖搜索
		 */
		debounceSearch(value) {
			if (this.searchTimer) {
				clearTimeout(this.searchTimer)
			}
			this.searchTimer = setTimeout(() => {
				this.$emit('search', value)
				this.searchTimer = null
			}, this.debounceTime)
		},
		handleChange(evt) {
			const value = evt.detail?.value || evt.detail || ''
			this.$emit('change', value)
			this.$emit('input', value)
			this.debounceSearch(value)
		},
		handleConfirm(evt) {
			const value = evt.detail?.value || evt.detail || ''
			if (this.searchTimer) {
				clearTimeout(this.searchTimer)
				this.searchTimer = null
			}
			this.$emit('search', value)
		},
		handleClear() {
			this.$emit('clear')
			this.$emit('change', '')
			this.$emit('input', '')
		}
	},
	beforeDestroy() {
		if (this.searchTimer) {
			clearTimeout(this.searchTimer)
			this.searchTimer = null
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

