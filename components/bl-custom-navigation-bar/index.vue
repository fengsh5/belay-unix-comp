<template>
	<view :class="navigationBarClass" :style="navigationBarStyle">
		<view class="bl-customnavigationbar__content">
			<view v-if="showBack" class="bl-customnavigationbar__back" @click="handleBack">
				<bl-icon name="arrow-left" class="bl-customnavigationbar__back-icon" :color="textColor"></bl-icon>
			</view>
			<view class="bl-customnavigationbar__center">
				<slot name="center">
					<text v-if="title" class="bl-customnavigationbar__title" :style="titleStyle">
						{{ title }}
					</text>
				</slot>
			</view>
			<view class="bl-customnavigationbar__right">
				<slot name="right"></slot>
			</view>
		</view>
	</view>
</template>

<script>
/**
 * BlCustomNavigationBar 自定义导航栏组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlCustomNavigationBar',
	props: {
		/**
		 * 标题
		 */
		title: {
			type: String,
			default: ''
		},
		/**
		 * 是否显示返回按钮
		 */
		showBack: {
			type: Boolean,
			default: true
		},
		/**
		 * 背景颜色
		 */
		backgroundColor: {
			type: String,
			default: '#ffffff'
		},
		/**
		 * 文字颜色
		 */
		textColor: {
			type: String,
			default: '#323233'
		},
		/**
		 * 是否固定在顶部
		 */
		fixed: {
			type: Boolean,
			default: true
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
		navigationBarClass() {
			const classes = ['bl-customnavigationbar']
			if (this.fixed) {
				classes.push('bl-customnavigationbar--fixed')
			}
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		navigationBarStyle() {
			const styles = []
			styles.push(`background-color: ${this.backgroundColor}`)
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		titleStyle() {
			return `color: ${this.textColor}`
		}
	},
	methods: {
		handleBack() {
			this.$emit('back')
			uni.navigateBack({
				fail: () => {
					// 如果无法返回，尝试跳转到首页
					uni.reLaunch({
						url: '/pages/index/index'
					})
				}
			})
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

