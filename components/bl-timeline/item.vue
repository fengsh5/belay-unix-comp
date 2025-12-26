<template>
	<view 
		:class="['bl-timeline__item', pending ? 'bl-timeline__item--pending' : '']"
		:style="itemStyle"
	>
		<view 
			:class="['bl-timeline__head', dot || $slots.dot ? 'bl-timeline__head--custom' : '']"
			:style="headStyle"
		>
			<slot name="dot">
				<view v-if="dot" class="bl-timeline__dot" :style="dotStyle"></view>
			</slot>
		</view>
		<view class="bl-timeline__tail"></view>
		<view class="bl-timeline__content">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'BlTimelineItem',
		props: {
			/**
			 * 自定义颜色
			 */
			color: {
				type: String,
				default: ''
			},
			/**
			 * 自定义点
			 */
			dot: {
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
		inject: {
			timeline: {
				default: null
			}
		},
		computed: {
			pending() {
				return this.timeline ? this.timeline.pending : false
			},
			itemStyle() {
				return this.customStyle || ''
			},
			headStyle() {
				if (this.color) {
					return `border-color: ${this.color};`
				}
				return ''
			},
			dotStyle() {
				if (this.color) {
					return `background-color: ${this.color};`
				}
				return ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>

