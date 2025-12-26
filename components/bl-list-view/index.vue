<template>
	<list-view 
		class="bl-listview"
		:style="listViewStyle"
		:data="data"
		:item-key="itemKey"
		:refresher-enabled="refresherEnabled"
		:refresher-threshold="refresherThreshold"
		:refresher-default-style="refresherDefaultStyle"
		:refresher-background="refresherBackground"
		:refresher-triggered="refresherTriggered"
		:lower-threshold="lowerThreshold"
		:upper-threshold="upperThreshold"
		:enable-back-to-top="enableBackToTop"
		:offset-accuracy="offsetAccuracy"
		:scroll-into-view="scrollIntoView"
		:scroll-top="scrollTop"
		:scroll-anchoring="scrollAnchoring"
		@scroll="handleScroll"
		@scrolltolower="handleScrollToLower"
		@scrolltoupper="handleScrollToUpper"
		@refresherrefresh="handleRefresherRefresh"
		@refresherrestore="handleRefresherRestore"
		@refresherabort="handleRefresherAbort"
	>
		<template slot-scope="{ item, index }">
			<slot name="item" :item="item" :index="index">
				<slot></slot>
			</slot>
		</template>
	</list-view>
</template>

<script>
/**
 * BlListView 列表视图组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlListView',
	props: {
		/**
		 * 列表数据
		 */
		data: {
			type: Array,
			default: () => []
		},
		/**
		 * 列表中每项的key，用于优化渲染性能
		 */
		itemKey: {
			type: String,
			default: ''
		},
		/**
		 * 是否开启下拉刷新
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
		 * 距底部/右边多远时，触发 scrolltolower 事件
		 */
		lowerThreshold: {
			type: Number,
			default: 50
		},
		/**
		 * 距顶部/左边多远时，触发 scrolltoupper 事件
		 */
		upperThreshold: {
			type: Number,
			default: 50
		},
		/**
		 * iOS 点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部
		 */
		enableBackToTop: {
			type: Boolean,
			default: false
		},
		/**
		 * 控制 scroll 事件触发的频率
		 */
		offsetAccuracy: {
			type: Number,
			default: 10
		},
		/**
		 * 值应为某子元素id（id不能以数字开头）
		 */
		scrollIntoView: {
			type: String,
			default: ''
		},
		/**
		 * 设置竖向滚动条位置
		 */
		scrollTop: {
			type: Number,
			default: 0
		},
		/**
		 * 开启 scroll anchoring 特性
		 */
		scrollAnchoring: {
			type: Boolean,
			default: false
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
		listViewStyle() {
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
		handleScrollToLower(e) {
			this.$emit('scrollToLower', e)
		},
		handleScrollToUpper(e) {
			this.$emit('scrollToUpper', e)
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

