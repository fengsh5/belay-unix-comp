<template>
	<view></view>
</template>

<script>
/**
 * BlPreviewContext 图片预览上下文组件
 * 支持 Vue 2 和 Vue 3
 * 提供图片预览功能
 */
export default {
	name: 'BlPreviewContext',
	provide() {
		return {
			previewContext: this
		}
	},
	props: {
		/**
		 * 图片列表
		 */
		urls: {
			type: Array,
			default: () => []
		},
		/**
		 * 当前显示的图片索引
		 */
		current: {
			type: Number,
			default: 0
		}
	},
	methods: {
		/**
		 * 预览图片
		 */
		preview(urls, current) {
			const imageUrls = urls || this.urls || []
			const currentIndex = current != null ? current : this.current
			
			if (imageUrls.length > 0) {
				const currentUrl = imageUrls[currentIndex] || imageUrls[0]
				uni.previewImage({
					urls: imageUrls,
					current: currentUrl,
					success: () => {
						this.$emit('preview', { urls: imageUrls, current: currentIndex })
					},
					fail: (err) => {
						console.error('[BlPreviewContext] preview fail:', err)
					}
				})
			}
		},
		/**
		 * 预览单个图片
		 */
		previewSingle(url) {
			if (url) {
				uni.previewImage({
					urls: [url],
					current: url,
					success: () => {
						this.$emit('preview', { urls: [url], current: 0 })
					},
					fail: (err) => {
						console.error('[BlPreviewContext] previewSingle fail:', err)
					}
				})
			}
		}
	}
}
</script>

<style scoped>
/* PreviewContext 组件不渲染可见内容 */
</style>

