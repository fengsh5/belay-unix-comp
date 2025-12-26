<template>
	<view 
		class="bl-statistic"
		:style="statisticStyle"
	>
		<view v-if="title || $slots.title" class="bl-statistic__title">
			<slot name="title">{{ title }}</slot>
		</view>
		<view class="bl-statistic__content">
			<view v-if="prefix || $slots.prefix" class="bl-statistic__prefix">
				<slot name="prefix">{{ prefix }}</slot>
			</view>
			<view class="bl-statistic__value" :style="valueStyle">
				<slot>{{ formattedValue }}</slot>
			</view>
			<view v-if="suffix || $slots.suffix" class="bl-statistic__suffix">
				<slot name="suffix">{{ suffix }}</slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'BlStatistic',
		props: {
			/**
			 * 数值
			 */
			value: {
				type: [Number, String],
				default: 0
			},
			/**
			 * 数值的样式
			 */
			valueStyle: {
				type: String,
				default: ''
			},
			/**
			 * 数值前缀
			 */
			prefix: {
				type: String,
				default: ''
			},
			/**
			 * 数值后缀
			 */
			suffix: {
				type: String,
				default: ''
			},
			/**
			 * 标题
			 */
			title: {
				type: String,
				default: ''
			},
			/**
			 * 数值精度
			 */
			precision: {
				type: Number,
				default: null
			},
			/**
			 * 千分位标识符
			 */
			groupSeparator: {
				type: String,
				default: ','
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
			statisticStyle() {
				return this.customStyle || ''
			},
			formattedValue() {
				let numValue
				
				if (typeof this.value === 'string') {
					numValue = parseFloat(this.value)
				} else {
					numValue = this.value
				}
				
				// 处理精度
				if (this.precision != null) {
					numValue = parseFloat(numValue.toFixed(this.precision))
				}
				
				// 格式化数字（添加千分位）
				const parts = numValue.toString().split('.')
				parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.groupSeparator)
				
				return parts.join('.')
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>

