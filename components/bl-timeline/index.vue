<template>
	<view 
		:class="['bl-timeline', mode !== 'left' ? `bl-timeline--${mode}` : '']"
		:style="timelineStyle"
	>
		<slot></slot>
		<view v-if="pending && $slots.pending" :class="['bl-timeline__item', 'bl-timeline__item--pending']">
			<slot name="pending"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'BlTimeline',
		props: {
			/**
			 * 时间轴模式
			 */
			mode: {
				type: String,
				default: 'left'
			},
			/**
			 * 是否显示最后一条时间轴的尾部
			 */
			pending: {
				type: Boolean,
				default: false
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
		provide() {
			return {
				timeline: this
			}
		},
		computed: {
			timelineStyle() {
				return this.customStyle || ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>

