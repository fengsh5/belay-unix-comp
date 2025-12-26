<template>
	<bl-modal
		:visible="visible"
		:overlay-closable="overlayClosable"
		:content-class-name="contentClassName"
		:content-style="contentStyle"
		:destroy-on-close="destroyOnClose"
		@close="handleClose"
		@click-overlay="handleClickOverlay"
	>
		<slot></slot>
	</bl-modal>
</template>

<script>
/**
 * BlPopup 弹窗组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlPopup',
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
			default: '200px'
		},
		/**
		 * 是否有圆角
		 */
		round: {
			type: Boolean,
			default: false
		},
		/**
		 * 抽屉展示位置
		 */
		position: {
			type: String,
			default: 'bottom' // top | left | bottom | right | center
		},
		/**
		 * 点击遮罩层是否可关闭
		 */
		overlayClosable: {
			type: Boolean,
			default: true
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
	computed: {
		contentClassName() {
			const classes = ['bl-popup__content']
			classes.push(`bl-popup__content--${this.position}`)
			if (this.round) {
				classes.push('bl-popup__content--round')
			}
			return classes.join(' ')
		},
		contentStyle() {
			const styles = []
			
			// 根据位置设置最大宽度或高度
			const widthValue = typeof this.width === 'number' ? `${this.width}px` : this.width
			if (this.isVertical) {
				styles.push(`max-height: ${widthValue}`)
			} else {
				styles.push(`max-width: ${widthValue}`)
			}
			
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			
			return styles.join('; ')
		},
		isVertical() {
			return this.position === 'top' || this.position === 'bottom'
		}
	},
	methods: {
		handleClose() {
			this.$emit('close')
		},
		handleClickOverlay() {
			this.$emit('clickOverlay')
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

