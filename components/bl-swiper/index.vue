<template>
	<swiper
		:class="swiperClass"
		:style="swiperStyle"
		:current="current"
		:indicator-dots="indicatorDots"
		:indicator-color="indicatorColor"
		:indicator-active-color="indicatorActiveColorValue"
		:autoplay="autoplayValue"
		:interval="interval"
		:duration="duration"
		:circular="circularValue"
		:vertical="vertical"
		:previous-margin="previousMargin"
		:next-margin="nextMargin"
		:display-multiple-items="displayMultipleItems"
		:skip-hidden-item-layout="skipHiddenItemLayout"
		@change="handleChange"
		@transition="handleTransition"
		@animationfinish="handleAnimationfinish"
	>
		<!-- 如果提供了 items，自动生成 swiper-item -->
		<template v-if="items && items.length > 0">
			<swiper-item v-for="(item, index) in items" :key="index">
				<slot :item="item" :index="index"></slot>
			</swiper-item>
		</template>
		<!-- 否则使用默认插槽，用户需要自己提供 swiper-item -->
		<slot v-else></slot>
	</swiper>
</template>

<script>
/**
 * BlSwiper 轮播图组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlSwiper',
	props: {
		/**
		 * 当前显示的滑块索引
		 */
		current: {
			type: Number,
			default: 0
		},
		/**
		 * 是否显示指示点
		 */
		indicatorDots: {
			type: Boolean,
			default: false
		},
		/**
		 * 指示点颜色
		 */
		indicatorColor: {
			type: String,
			default: 'rgba(0, 0, 0, .3)'
		},
		/**
		 * 当前选中的指示点颜色
		 */
		indicatorActiveColor: {
			type: String,
			default: ''
		},
		/**
		 * 是否自动播放
		 */
		autoplay: {
			type: Boolean,
			default: false
		},
		/**
		 * 自动播放时间间隔
		 */
		interval: {
			type: Number,
			default: 5000
		},
		/**
		 * 滑动动画时长
		 */
		duration: {
			type: Number,
			default: 500
		},
		/**
		 * 是否采用衔接滑动
		 */
		circular: {
			type: Boolean,
			default: false
		},
		/**
		 * 滑动方向是否为纵向
		 */
		vertical: {
			type: Boolean,
			default: false
		},
		/**
		 * 前边距
		 */
		previousMargin: {
			type: String,
			default: '0px'
		},
		/**
		 * 后边距
		 */
		nextMargin: {
			type: String,
			default: '0px'
		},
		/**
		 * 同时显示的滑块数量
		 */
		displayMultipleItems: {
			type: Number,
			default: 1
		},
		/**
		 * 是否跳过未显示的滑块布局
		 */
		skipHiddenItemLayout: {
			type: Boolean,
			default: false
		},
		/**
		 * 数据列表（用于自动生成 swiper-item）
		 */
		items: {
			type: Array,
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
		swiperClass() {
			return 'bl-swiper'
		},
		swiperStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		indicatorActiveColorValue() {
			return this.indicatorActiveColor || 'var(--bl-primary-color, #007aff)'
		},
		circularValue() {
			return this.circular
		},
		autoplayValue() {
			return this.autoplay
		}
	},
	methods: {
		handleChange(evt) {
			this.$emit('change', evt)
		},
		handleTransition(evt) {
			this.$emit('transition', evt)
		},
		handleAnimationfinish(evt) {
			this.$emit('animationfinish', evt)
		}
	}
}
</script>

<style scoped>
.bl-swiper {
	width: 100%;
	height: 100%;
}
</style>

