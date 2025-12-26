<template>
	<!-- #ifdef MP -->
	<view 
		v-if="showTabbar"
		:class="tabbarClass" 
		:style="tabbarStyle"
	>
		<bl-tabbar 
			:value="current"
			:fixed="fixed"
			:safe-area-bottom="safeAreaBottom"
			@change="handleChange"
		>
			<bl-tab-button
				v-for="(item, index) in list"
				:key="index"
				:text="item.text"
				:icon="item.iconPath"
				:badge="item.badge"
				:active="current === index"
				@click="handleItemClick(index)"
			></bl-tab-button>
		</bl-tabbar>
	</view>
	<!-- #endif -->
</template>

<script>
/**
 * BlMPCustomTabbar 小程序自定义Tabbar组件
 * 支持 Vue 2 和 Vue 3
 * 仅在小程序端生效
 */
export default {
	name: 'BlMPCustomTabbar',
	props: {
		/**
		 * 当前选中的tab索引
		 */
		current: {
			type: Number,
			default: 0
		},
		/**
		 * tabbar列表
		 */
		list: {
			type: Array,
			default: () => []
		},
		/**
		 * 是否显示tabbar
		 */
		showTabbar: {
			type: Boolean,
			default: true
		},
		/**
		 * 是否固定在底部
		 */
		fixed: {
			type: Boolean,
			default: true
		},
		/**
		 * 是否显示安全区域
		 */
		safeAreaBottom: {
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
	computed: {
		tabbarClass() {
			const classes = ['bl-mpcustomtabbar']
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		tabbarStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		}
	},
	methods: {
		handleChange(index) {
			this.$emit('change', index)
			this.switchTab(index)
		},
		handleItemClick(index) {
			this.handleChange(index)
		},
		switchTab(index) {
			if (index >= 0 && index < this.list.length) {
				const item = this.list[index]
				if (item && item.pagePath) {
					uni.switchTab({
						url: `/${item.pagePath}`,
						success: () => {
							this.$emit('switch', index)
						},
						fail: (err) => {
							console.error('[BlMPCustomTabbar] switchTab fail:', err)
						}
					})
				}
			}
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

