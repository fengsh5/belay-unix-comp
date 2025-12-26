<template>
	<view 
		:class="alertClass" 
		:style="alertStyle"
		@click="handleClick"
	>
		<view class="bl-alert__content">
			<!-- 图标 -->
			<view v-if="showIcon && !$slots.icon" class="bl-alert__icon">
				<bl-icon 
					:name="iconName" 
					:size="iconSize"
					:color="iconColor"
				></bl-icon>
			</view>
			<view v-if="showIcon && $slots.icon" class="bl-alert__icon">
				<slot name="icon"></slot>
			</view>
			
			<!-- 消息内容 -->
			<view class="bl-alert__message">
				<view class="bl-alert__message-text">
					<slot>{{ message }}</slot>
				</view>
				<view v-if="description || $slots.description" class="bl-alert__description">
					<slot name="description">{{ description }}</slot>
				</view>
			</view>
			
			<!-- 关闭按钮 -->
			<view v-if="closable" class="bl-alert__close" @click.stop="handleClose">
				<slot name="closeIcon">
					<bl-icon 
						name="close" 
						:size="closeIconSize"
						:color="closeIconColor"
					></bl-icon>
				</slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'BlAlert',
		props: {
			/**
			 * 指定警告提示的样式类型
			 */
			type: {
				type: String,
				default: 'info'
			},
			/**
			 * 警告提示内容
			 */
			message: {
				type: String,
				default: ''
			},
			/**
			 * 警告提示的辅助性文字介绍
			 */
			description: {
				type: String,
				default: ''
			},
			/**
			 * 是否显示辅助图标
			 */
			showIcon: {
				type: Boolean,
				default: false
			},
			/**
			 * 自定义图标
			 */
			icon: {
				type: String,
				default: ''
			},
			/**
			 * 是否可关闭
			 */
			closable: {
				type: Boolean,
				default: false
			},
			/**
			 * 关闭按钮自定义文字
			 */
			closeText: {
				type: String,
				default: ''
			},
			/**
			 * 警告提示的尺寸
			 */
			size: {
				type: String,
				default: 'default'
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
			alertClass() {
				const classes = ['bl-alert']
				
				// 类型
				if (this.type) {
					classes.push(`bl-alert--${this.type}`)
				}
				
				// 尺寸
				if (this.size && this.size !== 'default') {
					classes.push(`bl-alert--${this.size}`)
				}
				
				// 无图标
				if (!this.showIcon) {
					classes.push('bl-alert--no-icon')
				}
				
				// 自定义类名
				if (this.customClass) {
					classes.push(this.customClass)
				}
				
				return classes.join(' ')
			},
			alertStyle() {
				return this.customStyle || ''
			},
			iconName() {
				if (this.icon) {
					return this.icon
				}
				// 根据类型返回默认图标
				const iconMap = {
					success: 'check-circle',
					info: 'info-circle',
					warning: 'exclamation-circle',
					error: 'close-circle'
				}
				return iconMap[this.type] || 'info-circle'
			},
			iconSize() {
				if (this.size === 'small') {
					return 32
				}
				if (this.size === 'large') {
					return 48
				}
				return 40
			},
			iconColor() {
				const colorMap = {
					success: 'var(--bl-success-color, #52c41a)',
					info: 'var(--bl-primary-color, #1890ff)',
					warning: 'var(--bl-warning-color, #faad14)',
					error: 'var(--bl-error-color, #ff4d4f)'
				}
				return colorMap[this.type] || ''
			},
			closeIconSize() {
				if (this.size === 'small') {
					return 28
				}
				if (this.size === 'large') {
					return 40
				}
				return 32
			},
			closeIconColor() {
				return 'var(--bl-text-color-secondary, #8c8c8c)'
			}
		},
		methods: {
			handleClose() {
				this.$emit('close')
			},
			handleClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>

