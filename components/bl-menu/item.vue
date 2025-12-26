<template>
	<view 
		:class="['bl-menu__item', isSelected ? 'bl-menu__item--selected' : '', disabled || menuDisabled ? 'bl-menu__item--disabled' : '', danger ? 'bl-menu__item--danger' : '']"
		:style="itemStyle"
		@click="handleClick"
	>
		<view v-if="icon || $slots.icon" class="bl-menu__item-icon">
			<slot name="icon">
				<bl-icon 
					v-if="icon"
					:name="icon" 
					:size="24"
					:color="isSelected ? 'var(--bl-primary-color, #1890ff)' : 'var(--bl-text-color-secondary, #8c8c8c)'"
				></bl-icon>
			</slot>
		</view>
		<view class="bl-menu__item-content">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'BlMenuItem',
		props: {
			/**
			 * 菜单项 key
			 */
			key: {
				type: [String, Number],
				required: true
			},
			/**
			 * 菜单项图标
			 */
			icon: {
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
			 * 是否危险
			 */
			danger: {
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
		inject: {
			menu: {
				default: null
			}
		},
		computed: {
			isSelected() {
				return this.menu ? this.menu.isSelected(this.key) : false
			},
			menuDisabled() {
				return this.menu ? this.menu.disabled : false
			},
			itemStyle() {
				return this.customStyle || ''
			}
		},
		methods: {
			handleClick() {
				if (this.disabled || this.menuDisabled) {
					return
				}
				if (this.menu) {
					this.menu.handleSelect(this.key)
				}
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>

