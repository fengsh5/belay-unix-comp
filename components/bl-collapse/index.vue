<template>
	<view 
		:class="['bl-collapse', bordered ? 'bl-collapse--bordered' : '']"
		:style="collapseStyle"
	>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'BlCollapse',
		props: {
			/**
			 * 当前激活的面板 key
			 */
			activeKey: {
				type: [String, Number, Array],
				default: null
			},
			/**
			 * 默认激活的面板 key
			 */
			defaultActiveKey: {
				type: [String, Number, Array],
				default: null
			},
			/**
			 * 是否手风琴模式（同时只能展开一个）
			 */
			accordion: {
				type: Boolean,
				default: false
			},
			/**
			 * 是否显示边框
			 */
			bordered: {
				type: Boolean,
				default: true
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
				internalActiveKey: null
			}
		},
		provide() {
			return {
				collapse: this
			}
		},
		computed: {
			currentActiveKey() {
				return this.activeKey != null ? this.activeKey : this.internalActiveKey
			},
			collapseStyle() {
				return this.customStyle || ''
			}
		},
		created() {
			if (this.activeKey == null && this.defaultActiveKey != null) {
				this.internalActiveKey = this.defaultActiveKey
			}
		},
		methods: {
			handlePanelChange(key) {
				if (this.disabled) {
					return
				}
				
				let newActiveKey
				
				if (this.accordion) {
					// 手风琴模式
					const currentKey = Array.isArray(this.currentActiveKey) ? this.currentActiveKey[0] : this.currentActiveKey
					newActiveKey = currentKey === key ? null : key
				} else {
					// 非手风琴模式
					const currentKeys = Array.isArray(this.currentActiveKey) ? this.currentActiveKey : (this.currentActiveKey != null ? [this.currentActiveKey] : [])
					const index = currentKeys.indexOf(key)
					if (index >= 0) {
						currentKeys.splice(index, 1)
					} else {
						currentKeys.push(key)
					}
					newActiveKey = currentKeys
				}
				
				if (this.activeKey == null) {
					this.internalActiveKey = newActiveKey
				}
				this.$emit('update:activeKey', newActiveKey)
				this.$emit('change', newActiveKey)
			},
			isPanelActive(key) {
				if (this.currentActiveKey == null) {
					return false
				}
				if (Array.isArray(this.currentActiveKey)) {
					return this.currentActiveKey.indexOf(key) >= 0
				}
				return this.currentActiveKey === key
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>

