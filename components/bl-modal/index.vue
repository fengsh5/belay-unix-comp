<template>
	<view 
		v-if="display != 'none' || !destroyOnClose"
		:class="modalClass"
		:style="modalStyle"
	>
		<view 
			:class="overlayClass"
			:style="overlayStyle"
			@click="handleClickOverlay"
			@touchmove="handlePreventScroll"
		></view>
		<view 
			:class="contentClass"
			:style="contentStyle"
		>
			<slot v-if="display != 'none' || !destroyOnClose"></slot>
		</view>
	</view>
</template>

<script>
/**
 * BlModal 模态框组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlModal',
	props: {
		/**
		 * 是否显示Modal
		 */
		visible: {
			type: Boolean,
			default: false
		},
		/**
		 * 遮罩层类名
		 */
		overlayClassName: {
			type: String,
			default: ''
		},
		/**
		 * 遮罩层样式
		 */
		overlayStyle: {
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
		 * 弹窗类名
		 */
		contentClassName: {
			type: String,
			default: ''
		},
		/**
		 * 弹窗样式
		 */
		contentStyle: {
			type: String,
			default: ''
		},
		/**
		 * 关闭弹窗时销毁子节点
		 */
		destroyOnClose: {
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
	data() {
		return {
			display: 'none',
			closeTimer: null
		}
	},
	watch: {
		visible(newVal) {
			if (this.closeTimer) {
				clearTimeout(this.closeTimer)
				this.closeTimer = null
			}
			
			if (newVal) {
				this.display = 'block'
			} else {
				if (this.display == 'block') {
					// 等待动画结束
					this.closeTimer = setTimeout(() => {
						this.display = 'none'
						this.closeTimer = null
					}, 300)
				}
			}
		}
	},
	computed: {
		modalClass() {
			const classes = ['bl-modal']
			if (this.visible) {
				classes.push('bl-modal--show')
			}
			return classes.join(' ')
		},
		modalStyle() {
			const styles = []
			styles.push(`display: ${this.display}`)
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		overlayClass() {
			const classes = ['bl-modal__overlay']
			if (this.visible) {
				classes.push('bl-modal__overlay--show')
			}
			if (this.overlayClassName) {
				classes.push(this.overlayClassName)
			}
			return classes.join(' ')
		},
		overlayStyle() {
			const styles = []
			styles.push(`display: ${this.display}`)
			if (this.overlayStyle) {
				styles.push(this.overlayStyle)
			}
			return styles.join('; ')
		},
		contentClass() {
			const classes = ['bl-modal__content']
			if (this.visible) {
				classes.push('bl-modal__content--show')
			}
			if (this.contentClassName) {
				classes.push(this.contentClassName)
			}
			return classes.join(' ')
		},
		contentStyle() {
			const styles = []
			styles.push(`display: ${this.display}`)
			if (this.contentStyle) {
				styles.push(this.contentStyle)
			}
			return styles.join('; ')
		}
	},
	methods: {
		handleClickOverlay() {
			if (this.overlayClosable) {
				this.$emit('clickOverlay')
				this.$emit('close')
			}
		},
		handlePreventScroll() {
			// 阻止滚动
		}
	},
	beforeDestroy() {
		if (this.closeTimer) {
			clearTimeout(this.closeTimer)
			this.closeTimer = null
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

