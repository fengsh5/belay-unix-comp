<template>
	<view>
		<!-- 分享好友组件（仅在弹窗显示时渲染） -->
		<bl-share-app-message 
			v-if="visible && shareable && shareAppMessage && !hideShareAppMessageComponent"
			:payload="shareAppMessage"
		></bl-share-app-message>
		
		<!-- 弹窗 -->
		<bl-popup 
			:visible="visible" 
			@close="handleClose"
			:overlay-closable="true"
		>
			<view class="bl-share-dialog" :style="containerStyle">
				<!-- 背景遮罩 -->
				<view class="bl-share-dialog__background" @click="handleClose"></view>
				
				<!-- 内容容器 -->
				<view class="bl-share-dialog__container" @click.stop="handlePrevent">
					<!-- 海报区域 -->
					<view v-if="posterShareable" class="bl-share-dialog__poster" @click.stop="handlePrevent">
						<bl-poster-painter 
							v-if="visible && memoizedPoster"
							:palette="memoizedPoster"
							@complete="handleImageReady"
						></bl-poster-painter>
						<bl-spinner v-if="posterShareable && !posterImg"></bl-spinner>
					</view>
					
					<!-- 操作按钮 -->
					<view class="bl-share-dialog__actions" :class="{ 'bl-share-dialog__actions--center': shareable && !posterShareable }">
						<!-- 分享好友按钮 -->
						<view v-if="shareable" class="bl-share-dialog__action" @click="handleShareAppMessage">
							<image class="bl-share-dialog__action-img" src="/static/share-send.png"></image>
							<text class="bl-share-dialog__action-name">分享好友</text>
						</view>
						
						<!-- 保存海报按钮 -->
						<view v-if="posterShareable" class="bl-share-dialog__action" @click="handleSavePoster">
							<image class="bl-share-dialog__action-img" src="/static/share-save.png"></image>
							<text class="bl-share-dialog__action-name">{{ saveButtonText }}</text>
						</view>
					</view>
				</view>
			</view>
		</bl-popup>
		
		<!-- 触发元素（通过 slot 传入） -->
		<view @click="handleTriggerClick">
			<slot></slot>
		</view>
	</view>
</template>

<script>
/**
 * BlShareDialog 分享对话框组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlShareDialog',
	model: {
		prop: 'visible',
		event: 'update:visible'
	},
	props: {
		/**
		 * 是否显示
		 */
		visible: {
			type: Boolean,
			default: false
		},
		/**
		 * 是否禁用
		 */
		disabled: {
			type: Boolean,
			default: false
		},
		/**
		 * 设置分享好友，返回数据同微信 onShareAppMessage
		 */
		shareAppMessage: {
			type: [Object, Function],
			default: null
		},
		/**
		 * 分享好友时，如果没有传递图片，平台将使用当前页面的截图
		 */
		screenShot: {
			type: String,
			default: 'cover' // 'page' | 'cover'
		},
		/**
		 * 海报渲染描述
		 */
		poster: {
			type: [Object, Function],
			default: null
		},
		/**
		 * 保存按钮文本
		 */
		saveButtonText: {
			type: String,
			default: '保存海报'
		},
		/**
		 * 显示弹窗之前调用，如果返回 false, 则禁止弹窗
		 */
		onBeforeOpen: {
			type: Function,
			default: null
		}
	},
	data() {
		return {
			posterImg: null,
			hideShareAppMessageComponent: true
		}
	},
	watch: {
		visible(newVal) {
			if (newVal) {
				// 显示时延迟显示分享组件
				setTimeout(() => {
					this.hideShareAppMessageComponent = false
				}, 100)
			} else {
				this.hideShareAppMessageComponent = true
			}
		}
	},
	computed: {
		shareable() {
			return this.shareAppMessage != null
		},
		posterShareable() {
			return this.poster != null
		},
		memoizedPoster() {
			// 只有在弹窗显示时才更新 poster
			if (!this.visible) {
				return null
			}
		if (typeof this.poster == 'function') {
			// 如果是函数，需要异步处理
			try {
				return this.poster()
			} catch (e) {
				console.error('[BlShareDialog] poster function error:', e)
				return null
			}
		}
			return this.poster
		},
		containerStyle() {
			// 为了在不同尺寸的屏幕下都能完整显示，需要进行缩放
			try {
				const systemInfo = uni.getSystemInfoSync()
				const windowWidth = systemInfo.windowWidth || 375
				const windowHeight = systemInfo.windowHeight || 667
				const ratio = windowHeight / windowWidth
				const DEFAULT_RATIO = 500 / 260
				
				let scale = 1
				if (ratio < DEFAULT_RATIO) {
					scale = ratio / DEFAULT_RATIO
				}
				
				return `transform: scale(${scale})`
			} catch (e) {
				return ''
			}
		},
		saveButtonTextValue() {
			// #ifdef H5
			return '下载海报'
			// #endif
			// #ifndef H5
			return this.saveButtonText || '保存海报'
			// #endif
		}
	},
	methods: {
		handleClose() {
			this.$emit('update:visible', false)
			this.$emit('close')
		},
		handlePrevent() {
			// 阻止事件冒泡
		},
		handleTriggerClick() {
			if (this.disabled) {
				return
			}
			
		// 调用 onBeforeOpen 钩子
		if (this.onBeforeOpen && typeof this.onBeforeOpen == 'function') {
			const result = this.onBeforeOpen()
			if (result == false) {
				return
			}
		}
			
			this.$emit('update:visible', true)
			this.$emit('open')
		},
		handleShareAppMessage() {
			// #ifdef MP
			uni.showToast({
				title: '请点击右上角分享',
				icon: 'none'
			})
			// #endif
			
			// #ifdef APP || H5
			// 触发分享
			this.$emit('share')
			// #endif
		},
		handleSavePoster() {
			if (!this.posterImg) {
				uni.showToast({
					title: '海报未生成',
					icon: 'none'
				})
				return
			}
			
			// #ifdef APP
			// APP端保存图片
			uni.saveImageToPhotosAlbum({
				filePath: this.posterImg,
				success: () => {
					uni.showToast({
						title: '保存成功',
						icon: 'success'
					})
					this.$emit('save-success')
				},
				fail: (err) => {
					console.error('[BlShareDialog] saveImageToPhotosAlbum fail:', err)
					uni.showToast({
						title: '保存失败',
						icon: 'none'
					})
					this.$emit('save-fail', err)
				}
			})
			// #endif
			
			// #ifdef H5
			// H5端下载图片
			const link = document.createElement('a')
			link.href = this.posterImg
			link.download = 'poster.png'
			link.click()
			this.$emit('save-success')
			// #endif
			
			// #ifdef MP
			// 小程序端保存图片
			uni.saveImageToPhotosAlbum({
				filePath: this.posterImg,
				success: () => {
					uni.showToast({
						title: '保存成功',
						icon: 'success'
					})
					this.$emit('save-success')
				},
				fail: (err) => {
					console.error('[BlShareDialog] saveImageToPhotosAlbum fail:', err)
					uni.showToast({
						title: '保存失败',
						icon: 'none'
					})
					this.$emit('save-fail', err)
				}
			})
			// #endif
		},
		handleImageReady(imageUrl) {
			this.posterImg = imageUrl
			this.$emit('image-ready', imageUrl)
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

