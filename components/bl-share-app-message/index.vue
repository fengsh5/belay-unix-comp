<template>
	<view v-if="showShareButton" :class="shareButtonClass" :style="shareButtonStyle" @click="handleShareClick">
		<slot name="trigger">
			<bl-button type="primary" :text="shareButtonText"></bl-button>
		</slot>
	</view>
</template>

<script>
/**
 * BlShareAppMessage 分享消息组件
 * 支持 Vue 2 和 Vue 3
 * 跨平台分享组件，支持小程序、APP、H5
 */
export default {
	name: 'BlShareAppMessage',
	props: {
		/**
		 * 分享配置对象或函数
		 */
		payload: {
			type: [Object, Function],
			default: null
		},
		/**
		 * 分享标题
		 */
		title: {
			type: String,
			default: ''
		},
		/**
		 * 分享路径（小程序）
		 */
		path: {
			type: String,
			default: ''
		},
		/**
		 * 分享链接（H5/APP）
		 */
		href: {
			type: String,
			default: ''
		},
		/**
		 * 分享图片
		 */
		imageUrl: {
			type: String,
			default: ''
		},
		/**
		 * 分享内容（APP）
		 */
		content: {
			type: String,
			default: ''
		},
		/**
		 * 分享摘要（APP）
		 */
		summary: {
			type: String,
			default: ''
		},
		/**
		 * APP端支持的分享平台
		 */
		platforms: {
			type: Array,
			default: () => ['weixin', 'qq', 'sina', 'copy']
		},
		/**
		 * 是否显示分享按钮（APP/H5）
		 */
		showShareButton: {
			type: Boolean,
			default: false
		},
		/**
		 * 分享按钮文本
		 */
		shareButtonText: {
			type: String,
			default: '分享'
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
	mounted() {
		// 小程序端：配置页面分享
		// #ifdef MP
		this.setupMiniProgramShare()
		// #endif
	},
	computed: {
		shareButtonClass() {
			const classes = ['bl-shareappmessage']
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		shareButtonStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		shareData() {
			if (this.payload) {
				if (typeof this.payload == 'function') {
					return this.payload() || {}
				}
				return this.payload
			}
			
			return {
				title: this.title,
				path: this.path,
				href: this.href,
				imageUrl: this.imageUrl,
				content: this.content,
				summary: this.summary
			}
		}
	},
	methods: {
		/**
		 * 小程序端配置分享
		 */
		setupMiniProgramShare() {
			// #ifdef MP
			const pages = getCurrentPages()
			if (pages && pages.length > 0) {
				const currentPage = pages[pages.length - 1]
				if (currentPage) {
					const shareData = this.shareData
					currentPage.onShareAppMessage = () => {
						this.$emit('share', shareData)
						return {
							title: shareData.title || '',
							path: shareData.path || '/pages/index/index',
							imageUrl: shareData.imageUrl || ''
						}
					}
				}
			}
			// #endif
		},
		/**
		 * APP端分享
		 */
		shareToApp(platform) {
			// #ifdef APP
			// APP端需要使用 plus.share API
			if (typeof plus === 'undefined') {
				console.warn('[BlShareAppMessage] plus对象不可用')
				return
			}
			
			const shareData = this.shareData
			
			try {
				plus.share.getServices((services) => {
					if (!services || services.length === 0) {
						uni.showToast({
							title: '未找到可用的分享服务',
							icon: 'none'
						})
						return
					}
					
					// 如果指定了平台，直接分享
					if (platform && platform !== 'copy') {
						const service = services.find((s) => {
							if (platform === 'weixin') {
								return s.id === 'weixin' || s.id === 'weixin_timeline'
							} else if (platform === 'qq') {
								return s.id === 'qq'
							} else if (platform === 'sina') {
								return s.id === 'sinaweibo'
							}
							return false
						})
						
						if (service) {
							this.doShare(service, shareData)
						} else {
							uni.showToast({
								title: '该分享平台不可用',
								icon: 'none'
							})
						}
						return
					}
					
					// 显示分享菜单
					this.showShareMenu(services, shareData)
				}, (error) => {
					console.error('[BlShareAppMessage] getServices error:', error)
					this.$emit('fail', error)
				})
			} catch (e) {
				console.error('[BlShareAppMessage] shareToApp error:', e)
				this.$emit('fail', e)
			}
			// #endif
		},
		/**
		 * 显示分享菜单
		 */
		showShareMenu(services, shareData) {
			// #ifdef APP
			const menuItems = []
			
			for (const platform of this.platforms) {
				if (platform === 'copy') {
					menuItems.push({
						title: '复制链接',
						action: () => this.copyLink(shareData.href || '')
					})
					continue
				}
				
				const service = services.find((s) => {
					if (platform === 'weixin') {
						return s.id === 'weixin' || s.id === 'weixin_timeline'
					} else if (platform === 'qq') {
						return s.id === 'qq'
					} else if (platform === 'sina') {
						return s.id === 'sinaweibo'
					}
					return false
				})
				
				if (service) {
					const platformName = this.getPlatformName(platform)
					menuItems.push({
						title: platformName,
						action: () => this.doShare(service, shareData)
					})
				}
			}
			
			if (menuItems.length === 0) {
				uni.showToast({
					title: '未找到可用的分享服务',
					icon: 'none'
				})
				return
			}
			
			// 显示操作菜单
			uni.showActionSheet({
				itemList: menuItems.map(item => item.title),
				success: (res) => {
					const item = menuItems[res.tapIndex]
					if (item && item.action) {
						item.action()
					}
				}
			})
			// #endif
		},
		/**
		 * 执行分享
		 */
		doShare(service, shareData) {
			// #ifdef APP
			const shareOptions = {
				type: 'web',
				href: shareData.href || '',
				title: shareData.title || '',
				content: shareData.content || shareData.summary || '',
				thumbs: shareData.imageUrl ? [shareData.imageUrl] : [],
				media: shareData.imageUrl || ''
			}
			
			service.send(shareOptions, () => {
				uni.showToast({
					title: '分享成功',
					icon: 'success'
				})
				this.$emit('success', { platform: service.id })
			}, (error) => {
				console.error('[BlShareAppMessage] share error:', error)
				uni.showToast({
					title: error.message || '分享失败',
					icon: 'none'
				})
				this.$emit('fail', error)
			})
			// #endif
		},
		/**
		 * H5端分享
		 */
		shareToH5() {
			// #ifdef H5
			const shareData = this.shareData
			// H5端降级到复制链接
			this.copyLink(shareData.href || window.location.href)
			// #endif
		},
		/**
		 * 复制链接
		 */
		copyLink(url) {
			if (!url) {
				// #ifdef H5
				url = window.location.href
				// #endif
				// #ifndef H5
				url = '/'
				// #endif
			}
			
			uni.setClipboardData({
				data: url,
				success: () => {
					uni.showToast({
						title: '链接已复制',
						icon: 'success'
					})
					this.$emit('success', { platform: 'copy' })
				},
				fail: (error) => {
					console.error('[BlShareAppMessage] copy error:', error)
					uni.showToast({
						title: '复制失败',
						icon: 'none'
					})
					this.$emit('fail', error)
				}
			})
		},
		/**
		 * 获取平台名称
		 */
		getPlatformName(platform) {
			const names = {
				weixin: '微信',
				qq: 'QQ',
				sina: '微博',
				copy: '复制链接'
			}
			return names[platform] || platform
		},
		/**
		 * 处理分享点击
		 */
		handleShareClick() {
			const shareData = this.shareData
			this.$emit('share', shareData)
			
			// #ifdef MP
			// 小程序端通过右上角分享按钮触发
			uni.showToast({
				title: '请点击右上角分享',
				icon: 'none'
			})
			// #endif
			
			// #ifdef APP
			this.shareToApp()
			// #endif
			
			// #ifdef H5
			this.shareToH5()
			// #endif
		},
		/**
		 * 主动触发分享（可指定平台）
		 */
		share(platform) {
			// #ifdef APP
			if (platform) {
				this.shareToApp(platform)
			} else {
				this.shareToApp()
			}
			// #endif
			
			// #ifdef H5
			this.shareToH5()
			// #endif
			
			// #ifdef MP
			uni.showToast({
				title: '请点击右上角分享',
				icon: 'none'
			})
			// #endif
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

