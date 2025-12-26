<template>
	<view :class="tabsClass" :style="tabsStyle">
		<view :class="tabsHeaderClass">
			<view 
				v-for="(tab, idx) in filteredTabs" 
				:key="tab.name || idx"
				:class="tabNavClass(idx)"
				@click="handleTabClick(tab.name || String(idx))"
			>
				<view v-if="tab.icon" class="bl-tabs__nav-icon">
					<slot :name="`icon-${idx}`">{{ tab.icon }}</slot>
				</view>
				<text class="bl-tabs__nav-title">{{ tab.title }}</text>
			</view>
		</view>
		<view class="bl-tabs__body">
			<view :class="tabPanelWrapClass" :style="tabPanelWrapStyle">
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
/**
 * BlTabs 标签页组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlTabs',
	model: {
		prop: 'activeKey',
		event: 'activeKeyChange'
	},
	props: {
		/**
		 * 内边距
		 */
		padding: {
			type: [String, Number],
			default: '5px'
		},
		/**
		 * 当前激活的 key
		 */
		activeKey: {
			type: String,
			default: ''
		},
		/**
		 * 切换动画
		 */
		animate: {
			type: Boolean,
			default: true
		},
		/**
		 * tab 标题溢出时滚动
		 */
		scrollable: {
			type: Boolean,
			default: true
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
			active: '',
			tabs: [],
			matchedIndex: 0,
			matchedKey: ''
		}
	},
	provide() {
		return {
			tabs: this
		}
	},
	computed: {
		tabsClass() {
			return 'bl-tabs'
		},
		tabsStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		tabsHeaderClass() {
			const classes = ['bl-tabs__header']
			if (this.scrollable) {
				classes.push('bl-tabs__header--scrollable')
			}
			return classes.join(' ')
		},
		filteredTabs() {
			return this.tabs.filter(tab => tab != null)
		},
		tabPanelWrapClass() {
			const classes = ['bl-tabs__panel-wrap']
			if (this.animate) {
				classes.push('bl-tabs__panel-wrap--animate')
			}
			return classes.join(' ')
		},
		tabPanelWrapStyle() {
			const styles = []
			const paddingValue = typeof this.padding === 'number' ? `${this.padding}px` : this.padding
			styles.push(`padding: ${paddingValue}`)
			return styles.join('; ')
		}
	},
	watch: {
		activeKey(newVal) {
			this.active = newVal || ''
		},
		active(newVal) {
			if (newVal) {
				this.matchedKey = newVal
				const tabIndex = this.tabs.findIndex(tab => (tab && tab.name) === newVal)
				if (tabIndex >= 0) {
					this.matchedIndex = tabIndex
				}
			}
		}
	},
	mounted() {
		this.active = this.activeKey || ''
		// 更新子组件的 active 状态
		this.$nextTick(() => {
			this.updateChildren()
		})
	},
	methods: {
		register(idx, tabProps) {
			const tabs = [...this.tabs]
			tabs[idx] = tabProps
			this.tabs = tabs
			this.$nextTick(() => {
				this.updateChildren()
			})
		},
		tabNavClass(idx) {
			const classes = ['bl-tabs__nav']
			const tab = this.tabs[idx]
			if (tab && tab.disabled) {
				classes.push('bl-tabs__nav--disabled')
			}
			const key = tab && tab.name ? tab.name : String(idx)
			if (this.active === key) {
				classes.push('bl-tabs__nav--active')
			}
			return classes.join(' ')
		},
		handleTabClick(key) {
			const tabIndex = this.tabs.findIndex(tab => (tab && tab.name) === key)
			if (tabIndex >= 0) {
				const tab = this.tabs[tabIndex]
				if (tab && !tab.disabled) {
					this.active = key
					this.$emit('activeKeyChange', key)
					this.$emit('input', key)
					this.updateChildren()
				}
			}
		},
		updateChildren() {
			// 更新子组件的 active 状态
			this.$children.forEach((child, idx) => {
				if (child.$options.name === 'BlTabPanel') {
					const key = child.name || String(idx)
					child.active = this.active === key
				}
			})
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

