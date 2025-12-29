<template>
	<view v-if="result" class="bl-share-poster">
		<bl-poster-painter
			:palette="result"
			width="290px"
			height="430px"
			:scale-ratio="2"
			@img-ok="handleImageReady"
			@img-err="handleError"
		></bl-poster-painter>
	</view>
</template>

<script>
/**
 * BlSharePoster 分享海报组件（Vue2 兼容版本）
 * 
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlSharePoster',
	props: {
		/**
		 * 海报描述
		 */
		value: {
			type: [Object, Function],
			required: true
		}
	},
	data() {
		return {
			result: null,
			loading: false,
			error: null
		}
	},
	watch: {
		value: {
			handler(newVal) {
				this.loadPoster()
			},
			immediate: true
		}
	},
	methods: {
		async loadPoster() {
			try {
				this.loading = true
				this.error = null
				
				let poster
				if (typeof this.value == 'function') {
					poster = await this.value()
				} else {
					poster = this.value
				}
				
				// 转换为海报绘制配置
				this.result = this.posterDescriptionToPalette(poster)
			} catch (e) {
				this.error = e
				const errorMessage = e && e.message ? e.message : '海报生成失败'
				uni.showToast({
					icon: 'none',
					title: errorMessage
				})
			} finally {
				this.loading = false
			}
		},
		posterDescriptionToPalette(poster) {
			// 这里需要根据 BlPosterPainter 的格式转换
			// 简化实现，实际需要完整的转换逻辑
			return {
				width: '290px',
				height: '430px',
				borderRadius: '12px',
				background: poster.background || 'var(--bl-primary-color)',
				views: []
			}
		},
		handleImageReady(img) {
			this.$emit('imageReady', img)
		},
		handleError(err) {
			console.error('海报生成失败', err)
			this.$emit('imageError', err)
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

