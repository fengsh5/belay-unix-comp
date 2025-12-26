<template>
	<view class="bl-message">
		<view 
			v-for="item in messageList" 
			:key="item.id"
			:class="['bl-message__item', `bl-message__item--${item.config.type || 'info'}`, item.fadeOut ? 'bl-message__item--fade-out' : '']"
			:style="item.config.customStyle"
		>
			<view class="bl-message__icon">
				<bl-icon 
					v-if="item.config.type === 'loading'"
					name="loading"
					:size="32"
					:color="iconColor(item.config.type)"
					:spin="true"
				></bl-icon>
				<bl-icon 
					v-else-if="item.config.icon"
					:name="item.config.icon"
					:size="32"
					:color="iconColor(item.config.type)"
				></bl-icon>
				<bl-icon 
					v-else
					:name="defaultIcon(item.config.type)"
					:size="32"
					:color="iconColor(item.config.type)"
				></bl-icon>
			</view>
			<text class="bl-message__content">{{ item.config.content }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'BlMessage',
		data() {
			return {
				messageList: []
			}
		},
		onLoad() {
			// 监听消息更新事件
			uni.$on('bl-message-update', this.handleMessageUpdate)
		},
		onUnload() {
			// 移除事件监听
			uni.$off('bl-message-update', this.handleMessageUpdate)
		},
		methods: {
			handleMessageUpdate(messages) {
				// 标记需要淡出的消息
				const currentIds = this.messageList.map(item => item.id)
				const newIds = messages.map(item => item.id)
				
				// 标记需要淡出的消息
				this.messageList.forEach(item => {
					if (newIds.indexOf(item.id) < 0) {
						item.fadeOut = true
					}
				})
				
				// 延迟移除淡出的消息
				setTimeout(() => {
					this.messageList = messages.map(msg => ({
						id: msg.id,
						config: msg.config,
						fadeOut: false
					}))
				}, 300)
			},
			defaultIcon(type) {
				const iconMap = {
					success: 'check-circle',
					error: 'close-circle',
					info: 'info-circle',
					warning: 'exclamation-circle',
					loading: 'loading'
				}
				return iconMap[type || 'info'] || 'info-circle'
			},
			iconColor(type) {
				const colorMap = {
					success: 'var(--bl-success-color, #52c41a)',
					error: 'var(--bl-error-color, #ff4d4f)',
					info: 'var(--bl-primary-color, #1890ff)',
					warning: 'var(--bl-warning-color, #faad14)',
					loading: 'var(--bl-primary-color, #1890ff)'
				}
				return colorMap[type || 'info'] || 'var(--bl-primary-color, #1890ff)'
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>

