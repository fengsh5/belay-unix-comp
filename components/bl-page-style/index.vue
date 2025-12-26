<template>
	<view></view>
</template>

<script>
/**
 * BlPageStyle 页面样式组件
 * 支持 Vue 2 和 Vue 3
 * 用于动态设置页面样式，如导航栏颜色等
 */
export default {
	name: 'BlPageStyle',
	props: {
		/**
		 * 页面背景颜色
		 */
		backgroundColor: {
			type: String,
			default: '#f7f8fa'
		},
		/**
		 * 导航栏标题颜色
		 */
		navigationBarTextStyle: {
			type: String,
			default: 'black' // black | white
		},
		/**
		 * 导航栏背景颜色
		 */
		navigationBarBackgroundColor: {
			type: String,
			default: '#ffffff'
		}
	},
	mounted() {
		// 动态设置页面样式
		const pages = getCurrentPages()
		if (pages && pages.length > 0) {
			const currentPage = pages[pages.length - 1]
			if (currentPage) {
				// 可以通过 uni.setNavigationBarColor 等 API 设置
				try {
					uni.setNavigationBarColor({
						frontColor: this.navigationBarTextStyle === 'white' ? '#ffffff' : '#000000',
						backgroundColor: this.navigationBarBackgroundColor
					})
				} catch (e) {
					console.warn('[BlPageStyle] 设置导航栏颜色失败:', e)
				}
			}
		}
	}
}
</script>

<style scoped>
/* PageStyle 组件不渲染可见内容 */
</style>

