<template>
	<view class="bl-popconfirm" :style="popconfirmStyle">
		<view @click="handleTriggerClick">
			<slot></slot>
		</view>
		<view 
			v-if="currentVisible"
			:class="['bl-popconfirm__popup', `bl-popconfirm__popup--${placement}`]"
		>
			<view class="bl-popconfirm__content">
				<view v-if="title || $slots.title" class="bl-popconfirm__title">
					<slot name="title">{{ title }}</slot>
				</view>
				<view v-if="description || $slots.description" class="bl-popconfirm__description">
					<slot name="description">{{ description }}</slot>
				</view>
				<view class="bl-popconfirm__actions">
					<bl-button 
						size="small"
						@click="handleCancel"
					>
						{{ cancelText }}
					</bl-button>
					<bl-button 
						:type="okType"
						size="small"
						@click="handleConfirm"
					>
						{{ okText }}
					</bl-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'BlPopconfirm',
		props: {
			/**
			 * 确认框标题
			 */
			title: {
				type: String,
				default: ''
			},
			/**
			 * 确认框描述
			 */
			description: {
				type: String,
				default: ''
			},
			/**
			 * 确认按钮文字
			 */
			okText: {
				type: String,
				default: '确定'
			},
			/**
			 * 取消按钮文字
			 */
			cancelText: {
				type: String,
				default: '取消'
			},
			/**
			 * 确认按钮类型
			 */
			okType: {
				type: String,
				default: 'primary'
			},
			/**
			 * 是否显示确认框
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
			 * 弹出位置
			 */
			placement: {
				type: String,
				default: 'top'
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
		data() {
			return {
				internalVisible: false
			}
		},
		computed: {
			popconfirmStyle() {
				return this.customStyle || ''
			},
			currentVisible() {
				return this.visible != null ? this.visible : this.internalVisible
			}
		},
		methods: {
			handleTriggerClick() {
				if (this.disabled) {
					return
				}
				this.show()
			},
			show() {
				if (this.visible == null) {
					this.internalVisible = true
				}
				this.$emit('update:visible', true)
				this.$emit('visibleChange', true)
			},
			hide() {
				if (this.visible == null) {
					this.internalVisible = false
				}
				this.$emit('update:visible', false)
				this.$emit('visibleChange', false)
			},
			handleConfirm() {
				this.$emit('confirm')
				this.hide()
			},
			handleCancel() {
				this.$emit('cancel')
				this.hide()
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>

