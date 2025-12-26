<template>
	<view class="bl-notification">
		<view 
			v-for="item in notificationList" 
			:key="item.id"
			:class="['bl-notification__item', `bl-notification__item--${item.config.type || 'info'}`, item.fadeOut ? 'bl-notification__item--fade-out' : '']"
			:style="item.config.customStyle"
			@click="handleClick(item)"
		>
			<view class="bl-notification__header">
				<view v-if="showIcon(item)" class="bl-notification__icon">
					<bl-icon 
						:name="getIconName(item.config)"
						:size="32"
						:color="getIconColor(item.config.type)"
					></bl-icon>
				</view>
				<view class="bl-notification__content">
					<text v-if="item.config.message" class="bl-notification__message">{{ item.config.message }}</text>
					<text v-if="item.config.description" class="bl-notification__description">{{ item.config.description }}</text>
				</view>
			</view>
			<view v-if="item.config.closable" class="bl-notification__close" @click.stop="handleClose(item.id)">
				<bl-icon 
					name="close" 
					:size="28"
					color="var(--bl-text-color-secondary, #8c8c8c)"
				></bl-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'BlNotification',
		data() {
			return {
				notificationList: []
			}
		},
		onLoad() {
			uni.$on('bl-notification-update', this.handleNotificationUpdate)
			uni.$on('bl-notification-close', this.handleNotificationClose)
		},
		onUnload() {
			uni.$off('bl-notification-update', this.handleNotificationUpdate)
			uni.$off('bl-notification-close', this.handleNotificationClose)
		},
		methods: {
			handleNotificationUpdate(notifications) {
				const currentIds = this.notificationList.map(item => item.id)
				const newIds = notifications.map(item => item.id)
				
				this.notificationList.forEach(item => {
					if (newIds.indexOf(item.id) < 0) {
						item.fadeOut = true
					}
				})
				
				setTimeout(() => {
					this.notificationList = notifications.map(notif => ({
						id: notif.id,
						config: notif.config,
						fadeOut: false
					}))
				}, 300)
			},
			handleNotificationClose(id) {
				// 触发关闭事件，由 notification.uts 处理
				uni.$emit('bl-notification-close-internal', id)
			},
			showIcon(item) {
				return item.config.icon != null || item.config.type != null
			},
			getIconName(config) {
				if (config.icon) {
					return config.icon
				}
				const iconMap = {
					success: 'check-circle',
					error: 'close-circle',
					info: 'info-circle',
					warning: 'exclamation-circle'
				}
				return iconMap[config.type || 'info'] || 'info-circle'
			},
			getIconColor(type) {
				const colorMap = {
					success: 'var(--bl-success-color, #52c41a)',
					error: 'var(--bl-error-color, #ff4d4f)',
					info: 'var(--bl-primary-color, #1890ff)',
					warning: 'var(--bl-warning-color, #faad14)'
				}
				return colorMap[type || 'info'] || 'var(--bl-primary-color, #1890ff)'
			},
			handleClick(item) {
				if (item.config.onClick) {
					item.config.onClick()
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>

