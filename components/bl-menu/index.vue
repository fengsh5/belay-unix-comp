<template>
	<view 
		:class="['bl-menu', `bl-menu--${mode}`, theme !== 'light' ? `bl-menu--${theme}` : '']"
		:style="menuStyle"
	>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'BlMenu',
		props: {
			/**
			 * 当前选中的菜单项 key
			 */
			selectedKeys: {
				type: Array,
				default: null
			},
			/**
			 * 默认选中的菜单项 key
			 */
			defaultSelectedKeys: {
				type: Array,
				default: () => []
			},
			/**
			 * 当前打开的 SubMenu key
			 */
			openKeys: {
				type: Array,
				default: null
			},
			/**
			 * 默认打开的 SubMenu key
			 */
			defaultOpenKeys: {
				type: Array,
				default: () => []
			},
			/**
			 * 菜单模式
			 */
			mode: {
				type: String,
				default: 'vertical'
			},
			/**
			 * 菜单主题
			 */
			theme: {
				type: String,
				default: 'light'
			},
			/**
			 * 是否允许选中多个菜单项
			 */
			multiple: {
				type: Boolean,
				default: false
			},
			/**
			 * 是否允许取消选中
			 */
			allowDeselect: {
				type: Boolean,
				default: false
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
		data() {
			return {
				internalSelectedKeys: [],
				internalOpenKeys: []
			}
		},
		provide() {
			return {
				menu: this
			}
		},
		computed: {
			currentSelectedKeys() {
				return this.selectedKeys != null ? this.selectedKeys : this.internalSelectedKeys
			},
			currentOpenKeys() {
				return this.openKeys != null ? this.openKeys : this.internalOpenKeys
			},
			menuStyle() {
				return this.customStyle || ''
			}
		},
		created() {
			if (this.selectedKeys == null) {
				this.internalSelectedKeys = this.defaultSelectedKeys || []
			}
			if (this.openKeys == null) {
				this.internalOpenKeys = this.defaultOpenKeys || []
			}
		},
		methods: {
			handleSelect(key) {
				if (this.disabled) {
					return
				}
				
				let newKeys
				const index = this.currentSelectedKeys.indexOf(key)
				
				if (this.multiple) {
					// 多选模式
					if (index >= 0) {
						if (this.allowDeselect) {
							newKeys = [...this.currentSelectedKeys]
							newKeys.splice(index, 1)
						} else {
							newKeys = this.currentSelectedKeys
						}
					} else {
						newKeys = [...this.currentSelectedKeys, key]
					}
				} else {
					// 单选模式
					if (index >= 0 && this.allowDeselect) {
						newKeys = []
					} else {
						newKeys = [key]
					}
				}
				
				if (this.selectedKeys == null) {
					this.internalSelectedKeys = newKeys
				}
				this.$emit('update:selectedKeys', newKeys)
				this.$emit('select', newKeys)
			},
			handleOpenChange(key, open) {
				if (this.disabled) {
					return
				}
				
				let newOpenKeys
				const index = this.currentOpenKeys.indexOf(key)
				
				if (open) {
					if (index < 0) {
						newOpenKeys = [...this.currentOpenKeys, key]
					} else {
						newOpenKeys = this.currentOpenKeys
					}
				} else {
					if (index >= 0) {
						newOpenKeys = [...this.currentOpenKeys]
						newOpenKeys.splice(index, 1)
					} else {
						newOpenKeys = this.currentOpenKeys
					}
				}
				
				if (this.openKeys == null) {
					this.internalOpenKeys = newOpenKeys
				}
				this.$emit('update:openKeys', newOpenKeys)
				this.$emit('openChange', newOpenKeys)
			},
			isSelected(key) {
				return this.currentSelectedKeys.indexOf(key) >= 0
			},
			isOpen(key) {
				return this.currentOpenKeys.indexOf(key) >= 0
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>

