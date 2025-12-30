<template>
	<view 
		:class="['bl-collapse__panel', isActive ? 'bl-collapse__panel--active' : '', disabled || collapseDisabled ? 'bl-collapse__panel--disabled' : '']"
		:style="panelStyle"
	>
		<view 
			:class="['bl-collapse__header', disabled || collapseDisabled ? 'bl-collapse__header--disabled' : '']"
			@click="handleClick"
		>
			<view v-if="showArrow" class="bl-collapse__arrow">
				<bl-icon 
					name="right" 
					:size="24"
					color="var(--bl-text-color-secondary, #8c8c8c)"
				></bl-icon>
			</view>
			<view class="bl-collapse__title">
				<slot name="header">{{ title }}</slot>
			</view>
		</view>
		<view 
			:class="['bl-collapse__content', isActive ? 'bl-collapse__content--active' : '']"
		>
			<view class="bl-collapse__body">
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'BlCollapseItem',
		props: {
			/**
			 * 面板 key（与 name 相同）
			 */
			name: {
				type: [String, Number],
				required: true
			},
			/**
			 * 面板标题（与 title 相同）
			 */
			title: {
				type: String,
				default: ''
			},
			/**
			 * 是否禁用
			 */
			disabled: {
				type: Boolean,
				default: false
			},
			/**
			 * 是否显示箭头
			 */
			showArrow: {
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
		inject: {
			collapse: {
				default: null
			}
		},
		computed: {
			isActive() {
				if (this.collapse) {
					return this.collapse.isPanelActive(this.name)
				}
				return false
			},
			collapseDisabled() {
				return this.collapse ? this.collapse.disabled : false
			},
			panelStyle() {
				return this.customStyle || ''
			}
		},
		methods: {
			handleClick() {
				if (this.disabled || this.collapseDisabled) {
					return
				}
				if (this.collapse) {
					this.collapse.handlePanelChange(this.name)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../bl-collapse/index.scss';
</style>

