<template>
	<view 
		:class="tooltipClass" 
		:style="tooltipStyle"
		@touchstart="handleTouchStart"
		@touchend="handleTouchEnd"
		@click="handleClick"
	>
		<slot></slot>
		<view 
			v-if="visible" 
			:class="contentClass"
			:style="contentStyle"
		>
			<view v-if="arrow" class="bl-tooltip__arrow"></view>
			<slot name="title">
				<text v-if="title">{{ title }}</text>
			</slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'BlTooltip',
		props: {
			/**
			 * 提示文字
			 */
			title: {
				type: String,
				default: ''
			},
			/**
			 * 气泡框位置
			 */
			placement: {
				type: String,
				default: 'top'
			},
			/**
			 * 触发行为
			 */
			trigger: {
				type: String,
				default: 'hover'
			},
			/**
			 * 是否显示箭头
			 */
			arrow: {
				type: Boolean,
				default: true
			},
			/**
			 * 背景颜色
			 */
			color: {
				type: String,
				default: ''
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
				visible: false
			}
		},
		computed: {
			tooltipClass() {
				const classes = ['bl-tooltip']
				if (this.customClass) {
					classes.push(this.customClass)
				}
				return classes.join(' ')
			},
			tooltipStyle() {
				return this.customStyle || ''
			},
			contentClass() {
				const classes = ['bl-tooltip__content']
				classes.push(`bl-tooltip__content--${this.placement}`)
				if (this.visible) {
					classes.push('bl-tooltip__content--visible')
				}
				return classes.join(' ')
			},
			contentStyle() {
				const styles = []
				if (this.color) {
					styles.push(`background-color: ${this.color}`)
					styles.push(`--bl-tooltip-bg: ${this.color}`)
				}
				return styles.join('; ')
			}
		},
		methods: {
			handleTouchStart() {
				if (this.trigger === 'hover' || this.trigger === 'focus') {
					this.show()
				}
			},
			handleTouchEnd() {
				if (this.trigger === 'hover' || this.trigger === 'focus') {
					setTimeout(() => {
						this.hide()
					}, 200)
				}
			},
			handleClick() {
				if (this.trigger === 'click') {
					this.visible = !this.visible
					this.$emit('visibleChange', this.visible)
				}
			},
			show() {
				if (!this.visible) {
					this.visible = true
					this.$emit('visibleChange', true)
				}
			},
			hide() {
				if (this.visible) {
					this.visible = false
					this.$emit('visibleChange', false)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>

