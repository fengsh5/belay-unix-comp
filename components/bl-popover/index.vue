<template>
	<view 
		:class="popoverClass" 
		:style="popoverStyle"
		@touchstart="handleTouchStart"
		@touchend="handleTouchEnd"
		@click="handleClick"
	>
		<slot></slot>
		<view 
			v-if="visible" 
			:class="contentClass"
		>
			<view v-if="arrow" class="bl-popover__arrow"></view>
			<view class="bl-popover__inner">
				<view v-if="title || $slots.title" class="bl-popover__title">
					<slot name="title">
						<text v-if="title">{{ title }}</text>
					</slot>
				</view>
				<view v-if="content || $slots.content" class="bl-popover__body">
					<slot name="content">
						<text v-if="content">{{ content }}</text>
					</slot>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'BlPopover',
		props: {
			/**
			 * 卡片标题
			 */
			title: {
				type: String,
				default: ''
			},
			/**
			 * 卡片内容
			 */
			content: {
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
			popoverClass() {
				const classes = ['bl-popover']
				if (this.customClass) {
					classes.push(this.customClass)
				}
				return classes.join(' ')
			},
			popoverStyle() {
				return this.customStyle || ''
			},
			contentClass() {
				const classes = ['bl-popover__content']
				classes.push(`bl-popover__content--${this.placement}`)
				if (this.visible) {
					classes.push('bl-popover__content--visible')
				}
				return classes.join(' ')
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

