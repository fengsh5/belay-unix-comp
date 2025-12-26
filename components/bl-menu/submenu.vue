<template>
	<view class="bl-menu__submenu" :style="submenuStyle">
		<view 
			:class="['bl-menu__submenu-title', isOpen ? 'bl-menu__submenu--open' : '', disabled || menuDisabled ? 'bl-menu__submenu-title--disabled' : '']"
			@click="handleTitleClick"
		>
			<view v-if="icon || $slots.icon" class="bl-menu__submenu-icon">
				<slot name="icon">
					<bl-icon 
						v-if="icon"
						:name="icon" 
						:size="24"
						color="var(--bl-text-color-secondary, #8c8c8c)"
					></bl-icon>
				</slot>
			</view>
			<view class="bl-menu__submenu-title-text">
				<slot name="title">{{ title }}</slot>
			</view>
			<view class="bl-menu__submenu-arrow">
				<bl-icon 
					name="right" 
					:size="20"
					color="var(--bl-text-color-secondary, #8c8c8c)"
				></bl-icon>
			</view>
		</view>
		<view 
			:class="['bl-menu__submenu-content', isOpen ? 'bl-menu__submenu--open' : '']"
		>
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'BlSubMenu',
		props: {
			/**
			 * SubMenu key
			 */
			key: {
				type: [String, Number],
				required: true
			},
			/**
			 * SubMenu 标题
			 */
			title: {
				type: String,
				default: ''
			},
			/**
			 * SubMenu 图标
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
			isOpen() {
				return this.menu ? this.menu.isOpen(this.key) : false
			},
			menuDisabled() {
				return this.menu ? this.menu.disabled : false
			},
			submenuStyle() {
				return this.customStyle || ''
			}
		},
		methods: {
			handleTitleClick() {
				if (this.disabled || this.menuDisabled) {
					return
				}
				if (this.menu) {
					this.menu.handleOpenChange(this.key, !this.isOpen)
				}
				this.$emit('openChange', !this.isOpen)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>

