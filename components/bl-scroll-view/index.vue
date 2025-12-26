<template>
	<scroll-view 
		class="bl-scrollview"
		:style="scrollViewStyle"
		:scroll-x="scrollX"
		:scroll-y="scrollY"
		:upper-threshold="upperThreshold"
		:lower-threshold="lowerThreshold"
		:scroll-top="scrollTop"
		:scroll-left="scrollLeft"
		:scroll-into-view="scrollIntoView"
		:scroll-with-animation="scrollWithAnimation"
		:enable-back-to-top="enableBackToTop"
		:enable-flex="enableFlex"
		:scroll-anchoring="scrollAnchoring"
		:refresher-enabled="refresherEnabled"
		:refresher-threshold="refresherThreshold"
		:refresher-default-style="refresherDefaultStyle"
		:refresher-background="refresherBackground"
		:refresher-triggered="refresherTriggered"
		:enhanced="enhanced"
		:bounces="bounces"
		:show-scrollbar="showScrollbar"
		:paging-enabled="pagingEnabled"
		:fast-deceleration="fastDeceleration"
		@scroll="handleScroll"
		@scrolltoupper="handleScrollToUpper"
		@scrolltolower="handleScrollToLower"
		@refresherrefresh="handleRefresherRefresh"
		@refresherrestore="handleRefresherRestore"
		@refresherabort="handleRefresherAbort"
	>
		<slot></slot>
	</scroll-view>
</template>

<script>
/**
 * BlScrollView 滚动视图组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlScrollView',
	props: {
		/**
		 * 自定义样式
		 */
		customStyle: {
			type: String,
			default: ''
		},
		/**
		 * 允许横向滚动
		 */
		scrollX: {
			type: Boolean,
			default: false
		},
		/**
		 * 允许纵向滚动
		 */
		scrollY: {
			type: Boolean,
			default: false
		},
		/**
		 * 距顶部/左边多远时，触发 scrolltoupper 事件
		 */
		upperThreshold: {
			type: Number,
			default: 50
		},
		/**
		 * 距底部/右边多远时，触发 scrolltolower 事件
		 */
		lowerThreshold: {
			type: Number,
			default: 50
		},
		/**
		 * 设置竖向滚动条位置
		 */
		scrollTop: {
			type: Number,
			default: 0
		},
		/**
		 * 设置横向滚动条位置
		 */
		scrollLeft: {
			type: Number,
			default: 0
		},
		/**
		 * 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素
		 */
		scrollIntoView: {
			type: String,
			default: ''
		},
		/**
		 * 在设置滚动条位置时使用动画过渡
		 */
		scrollWithAnimation: {
			type: Boolean,
			default: false
		},
		/**
		 * iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向
		 */
		enableBackToTop: {
			type: Boolean,
			default: false
		},
		/**
		 * 启用 flexbox 布局
		 */
		enableFlex: {
			type: Boolean,
			default: false
		},
		/**
		 * 开启 scroll anchoring 特性
		 */
		scrollAnchoring: {
			type: Boolean,
			default: false
		},
		/**
		 * 开启自定义下拉刷新
		 */
		refresherEnabled: {
			type: Boolean,
			default: false
		},
		/**
		 * 设置自定义下拉刷新阈值
		 */
		refresherThreshold: {
			type: Number,
			default: 45
		},
		/**
		 * 设置自定义下拉刷新默认样式
		 */
		refresherDefaultStyle: {
			type: String,
			default: 'black'
		},
		/**
		 * 设置自定义下拉刷新区域背景颜色
		 */
		refresherBackground: {
			type: String,
			default: '#FFF'
		},
		/**
		 * 设置当前下拉刷新状态
		 */
		refresherTriggered: {
			type: Boolean,
			default: false
		},
		/**
		 * 启用增强特性
		 */
		enhanced: {
			type: Boolean,
			default: false
		},
		/**
		 * iOS 下支持，是否回弹
		 */
		bounces: {
			type: Boolean,
			default: true
		},
		/**
		 * 是否显示滚动条
		 */
		showScrollbar: {
			type: Boolean,
			default: true
		},
		/**
		 * 是否开启分页模式
		 */
		pagingEnabled: {
			type: Boolean,
			default: false
		},
		/**
		 * 是否开启快速滑动
		 */
		fastDeceleration: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		scrollViewStyle() {
			const styles = []
			styles.push('width: 100%')
			styles.push('height: 100%')
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		}
	},
	methods: {
		handleScroll(e) {
			this.$emit('scroll', e)
		},
		handleScrollToUpper(e) {
			this.$emit('scrollToUpper', e)
		},
		handleScrollToLower(e) {
			this.$emit('scrollToLower', e)
		},
		handleRefresherRefresh(e) {
			this.$emit('refresherRefresh', e)
		},
		handleRefresherRestore(e) {
			this.$emit('refresherRestore', e)
		},
		handleRefresherAbort(e) {
			this.$emit('refresherAbort', e)
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

