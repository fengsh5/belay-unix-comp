<template>
	<view :class="noticeBarClass" :style="noticeBarStyle" @click="handleClick">
		<bl-icon 
			v-if="icon" 
			:name="icon" 
			class="bl-noticebar__icon"
			:color="iconColor"
		></bl-icon>
		<scroll-view 
			class="bl-noticebar__content"
			:scroll-x="scrollable"
			:scroll-with-animation="scrollWithAnimation"
			:enable-flex="false"
		>
			<text class="bl-noticebar__text" :style="textStyle">
				<slot>{{ text }}</slot>
			</text>
		</scroll-view>
		<bl-icon 
			v-if="closable" 
			name="close" 
			class="bl-noticebar__close"
			@click.stop="handleClose"
		></bl-icon>
	</view>
</template>

<script>
/**
 * BlNoticeBar 通知栏组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlNoticeBar',
	props: {
		/**
		 * 通知栏文本
		 */
		text: {
			type: String,
			default: ''
		},
		/**
		 * 是否可滚动
		 */
		scrollable: {
			type: Boolean,
			default: false
		},
		/**
		 * 滚动时是否使用动画
		 */
		scrollWithAnimation: {
			type: Boolean,
			default: true
		},
		/**
		 * 左侧图标
		 */
		icon: {
			type: String,
			default: ''
		},
		/**
		 * 左侧图标颜色
		 */
		iconColor: {
			type: String,
			default: '#ff9500'
		},
		/**
		 * 是否显示关闭按钮
		 */
		closable: {
			type: Boolean,
			default: false
		},
		/**
		 * 文本颜色
		 */
		color: {
			type: String,
			default: '#ed6a0c'
		},
		/**
		 * 背景颜色
		 */
		background: {
			type: String,
			default: '#fffbe8'
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
			closed: false
		}
	},
	computed: {
		noticeBarClass() {
			const classes = ['bl-noticebar']
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		noticeBarStyle() {
			const styles = []
			if (this.background) {
				styles.push(`background-color: ${this.background}`)
			}
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		textStyle() {
			const styles = []
			if (this.color) {
				styles.push(`color: ${this.color}`)
			}
			return styles.join('; ')
		}
	},
	methods: {
		handleClick(e) {
			this.$emit('click', e)
		},
		handleClose(e) {
			this.closed = true
			this.$emit('close', e)
		}
	},
	mounted() {
		if (this.closable && this.closed) {
			this.$el.style.display = 'none'
		}
	},
	watch: {
		closed(newVal) {
			if (newVal && this.$el) {
				this.$el.style.display = 'none'
			}
		}
	}
}
</script>

<style scoped>
.bl-noticebar {
	display: flex;
	align-items: center;
	padding: 8px 16px;
	background-color: #fffbe8;
	min-height: 40px;
	box-sizing: border-box;
}

.bl-noticebar__icon {
	margin-right: 8px;
	flex-shrink: 0;
}

.bl-noticebar__content {
	flex: 1;
	overflow: hidden;
}

.bl-noticebar__text {
	font-size: 14px;
	line-height: 1.5;
	color: #ed6a0c;
	white-space: nowrap;
}

.bl-noticebar__close {
	margin-left: 8px;
	flex-shrink: 0;
	cursor: pointer;
}
</style>

