<template>
	<view :class="emptyClass" :style="emptyStyle">
		<bl-image 
			v-if="showImg" 
			:src="imageUrl" 
			mode="aspectFit"
			class="bl-empty__image"
		></bl-image>
		<view v-if="retryText && onRetry" class="bl-empty__retry" @click="handleRetry">
			<bl-view @click="handleRetry">{{ retryText }}</bl-view>
		</view>
		<text v-if="desc" class="bl-empty__desc">{{ desc }}</text>
		<text v-if="detail" class="bl-empty__detail">{{ detail }}</text>
	</view>
</template>

<script>
/**
 * BlEmpty 空状态组件
 * 支持 Vue 2 和 Vue 3
 */
const DEFAULT_IMAGE = '/static/empty/default.png'
const ERROR_IMAGE = '/static/empty/error.png'
const NETWORK_IMAGE = '/static/empty/network.png'
const EMPTY_IMAGE = '/static/empty/empty.png'
const SEARCH_IMAGE = '/static/empty/search.png'

const iconMap = {
	error: ERROR_IMAGE,
	network: NETWORK_IMAGE,
	empty: EMPTY_IMAGE,
	default: DEFAULT_IMAGE,
	search: SEARCH_IMAGE
}

export default {
	name: 'BlEmpty',
	props: {
		/**
		 * 类型
		 */
		type: {
			type: String,
			default: 'default' // error | network | empty | default | search | custom
		},
		/**
		 * 自定义图标
		 */
		url: {
			type: String,
			default: ''
		},
		/**
		 * 是否显示提示图
		 */
		showImg: {
			type: Boolean,
			default: true
		},
		/**
		 * 描述
		 */
		desc: {
			type: String,
			default: ''
		},
		/**
		 * 详情
		 */
		detail: {
			type: String,
			default: ''
		},
		/**
		 * 重试文本
		 */
		retryText: {
			type: String,
			default: ''
		},
		/**
		 * 重试回调
		 */
		onRetry: {
			type: Function,
			default: null
		},
		/**
		 * 自定义样式
		 */
		customStyle: {
			type: String,
			default: ''
		}
	},
	computed: {
		emptyClass() {
			return 'bl-empty'
		},
		emptyStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		imageUrl() {
		if (this.type == 'custom') {
				return this.url || DEFAULT_IMAGE
			}
			return iconMap[this.type] || DEFAULT_IMAGE
		},
		retryTextValue() {
			return this.retryText || '重试'
		}
	},
	methods: {
		handleRetry() {
			if (this.onRetry) {
				this.onRetry()
			}
			this.$emit('retry')
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

