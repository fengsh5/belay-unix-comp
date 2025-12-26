<template>
	<bl-modal
		:visible="visible"
		:overlay-closable="overlayClosable"
		:content-style="contentStyle"
		@close="handleClose"
		@click-overlay="handleClickOverlay"
	>
		<text v-if="title" :class="titleClass" :style="titleStyle">{{ title }}</text>
		<bl-icon 
			v-if="showCloseIcon" 
			icon="close" 
			class="bl-dialog__close"
			@click="handleCancel"
		></bl-icon>
		<view :class="contentClass" :style="messageStyle">
			<slot>{{ message }}</slot>
		</view>
		<view v-if="footer" class="bl-dialog__footer">
			<slot name="footer">{{ footer }}</slot>
		</view>
		<view v-else-if="showCancelButton || showConfirmButton" :class="footerClass">
			<bl-hairline v-if="theme !== 'round-button'" placement="['top']"></bl-hairline>
			<bl-button
				v-if="showCancelButton"
				:class="cancelClass"
				:text="cancelTextValue"
				:round="theme === 'round-button'"
				:plain="theme !== 'round-button'"
				@click="handleCancel"
			></bl-button>
			<bl-hairline v-if="theme !== 'round-button' && showCancelButton && showConfirmButton" placement="['right']"></bl-hairline>
			<bl-button
				v-if="showConfirmButton"
				:class="confirmClass"
				type="primary"
				:text="confirmTextValue"
				:round="theme === 'round-button'"
				:plain="theme !== 'round-button'"
				:disabled="loading"
				@click="handleConfirm"
			></bl-button>
		</view>
	</bl-modal>
</template>

<script>
/**
 * BlDialog 对话框组件
 * 支持 Vue 2 和 Vue 3
 * 
 * 注意：Vue2 版本需要从 i18nProvider 获取翻译，或使用全局 t 函数
 */
export default {
	name: 'BlDialog',
	props: {
		/**
		 * 是否显示
		 */
		visible: {
			type: Boolean,
			default: false
		},
		/**
		 * 弹窗容器宽度
		 */
		width: {
			type: [Number, String],
			default: '327px'
		},
		/**
		 * 标题
		 */
		title: {
			type: String,
			default: ''
		},
		/**
		 * 标题样式
		 */
		titleStyle: {
			type: String,
			default: ''
		},
		/**
		 * 内容
		 */
		message: {
			type: String,
			default: ''
		},
		/**
		 * 内容样式
		 */
		messageStyle: {
			type: String,
			default: ''
		},
		/**
		 * 按钮主题
		 */
		theme: {
			type: String,
			default: 'default' // default | round-button
		},
		/**
		 * 是否显示关闭图标
		 */
		showCloseIcon: {
			type: Boolean,
			default: false
		},
		/**
		 * 是否显示取消按钮
		 */
		showCancelButton: {
			type: Boolean,
			default: false
		},
		/**
		 * 是否显示确认按钮
		 */
		showConfirmButton: {
			type: Boolean,
			default: true
		},
		/**
		 * 底部显示区域
		 */
		footer: {
			type: String,
			default: null
		},
		/**
		 * 底部确认按钮内容
		 */
		confirmText: {
			type: String,
			default: ''
		},
		/**
		 * 底部取消按钮内容
		 */
		cancelText: {
			type: String,
			default: ''
		},
		/**
		 * 点击遮罩层是否可关闭
		 */
		overlayClosable: {
			type: Boolean,
			default: true
		},
		/**
		 * 确认按钮是否加载中
		 */
		loading: {
			type: Boolean,
			default: false
		},
		/**
		 * 自定义样式
		 */
		customStyle: {
			type: String,
			default: ''
		}
	},
	computed: {
		contentStyle() {
			const styles = []
			const widthValue = typeof this.width === 'number' ? `${this.width}px` : this.width
			styles.push(`width: ${widthValue}`)
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		titleClass() {
			return 'bl-dialog__title'
		},
		contentClass() {
			return 'bl-dialog__content'
		},
		footerClass() {
			return 'bl-dialog__footer'
		},
		cancelClass() {
			return 'bl-dialog__cancel'
		},
		confirmClass() {
			return 'bl-dialog__confirm'
		},
		confirmTextValue() {
			if (this.confirmText) {
				return this.confirmText
			}
			// 尝试从 i18nProvider 获取翻译
			if (this.$parent && this.$parent.$options.name === 'BlI18nProvider') {
				return this.$parent.t('comp.confirm')
			}
			// 如果没有 i18nProvider，返回默认值
			return '确定'
		},
		cancelTextValue() {
			if (this.cancelText) {
				return this.cancelText
			}
			// 尝试从 i18nProvider 获取翻译
			if (this.$parent && this.$parent.$options.name === 'BlI18nProvider') {
				return this.$parent.t('comp.cancel')
			}
			// 如果没有 i18nProvider，返回默认值
			return '取消'
		}
	},
	methods: {
		handleClose() {
			this.$emit('close')
		},
		handleClickOverlay() {
			if (this.overlayClosable) {
				this.$emit('close')
			}
		},
		handleCancel() {
			this.$emit('cancel')
			this.$emit('close')
		},
		handleConfirm() {
			if (!this.loading) {
				this.$emit('confirm')
			}
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

