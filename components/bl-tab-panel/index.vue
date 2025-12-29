<template>
	<view :class="panelClass" :style="panelStyle">
		<slot></slot>
	</view>
</template>

<script>
/**
 * BlTabPanel 标签页面板组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlTabPanel',
	inject: {
		tabs: {
			default: null
		}
	},
	props: {
		/**
		 * 标题
		 */
		title: {
			type: String,
			default: ''
		},
		/**
		 * 禁用当前tab
		 */
		disabled: {
			type: Boolean,
			default: false
		},
		/**
		 * 图标
		 */
		icon: {
			type: String,
			default: null
		},
		/**
		 * 名称（用于标识）
		 */
		name: {
			type: String,
			default: ''
		},
		/**
		 * 自定义样式
		 */
		customStyle: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			idx: 0,
			active: false
		}
	},
	mounted() {
		// 注册到父组件
		if (this.tabs) {
			// 获取当前组件的索引
			const parent = this.$parent
			if (parent) {
				const children = parent.$children || []
				this.idx = children.indexOf(this)
				
				// 注册到 tabs
				if (this.tabs.register) {
					this.tabs.register(this.idx, {
						title: this.title,
						disabled: this.disabled,
						icon: this.icon,
						name: this.name
					})
				}
			}
		}
	},
	computed: {
		panelClass() {
			const classes = ['bl-tab-panel']
			if (this.active) {
				classes.push('bl-tab-panel--active')
			}
			return classes.join(' ')
		},
		panelStyle() {
			const styles = []
			if (!this.active) {
				styles.push('display: none')
			}
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		}
	},
	watch: {
		'tabs.activeKey'(newVal) {
			const key = this.name || String(this.idx)
			this.active = newVal == key
		}
	},
	mounted() {
		if (this.tabs) {
			const key = this.name || String(this.idx)
			this.active = this.tabs.activeKey == key
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

