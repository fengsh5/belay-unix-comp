<template>
	<view 
		:class="['bl-filter-item', isSelected ? 'bl-filter-item--selected' : '']"
		:style="itemStyle"
		@click="handleClick"
	>
		<text class="bl-filter-item__text">{{ label }}</text>
	</view>
</template>

<script>
	export default {
		name: 'BlFilterItem',
		props: {
			/**
			 * 选项值
			 */
			value: {
				type: [String, Number],
				required: true
			},
			/**
			 * 选项标签
			 */
			label: {
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
			filter: {
				default: null
			}
		},
		computed: {
			isSelected() {
				return this.filter ? this.filter.isSelected(this.value) : false
			},
			itemStyle() {
				return this.customStyle || ''
			}
		},
		methods: {
			handleClick() {
				if (this.filter) {
					this.filter.handleItemClick(this.value)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../bl-filter/index.scss';
	
	.bl-filter-item {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 8px 16px;
		margin-right: 12px;
		border-radius: 4px;
		background-color: var(--bl-background-color-secondary, #f5f7fa);
		transition: all 0.3s;
		cursor: pointer;
	}
	
	.bl-filter-item--selected {
		background-color: var(--bl-primary-color, #409eff);
		color: #ffffff;
	}
	
	.bl-filter-item__text {
		font-size: var(--bl-font-size-base, 28rpx);
		color: var(--bl-text-color, #303133);
		white-space: nowrap;
	}
	
	.bl-filter-item--selected .bl-filter-item__text {
		color: #ffffff;
	}
</style>

