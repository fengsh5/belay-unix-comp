<template>
	<bl-bottom-bar :class="tabbarClass" :style="tabbarStyle" :fixed="fixed" :safe-area-bottom="safeAreaBottom">
		<slot></slot>
	</bl-bottom-bar>
</template>

<script>
/**
 * BlTabbar 底部标签栏组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlTabbar',
	model: {
		prop: 'value',
		event: 'change'
	},
	props: {
		/**
		 * 当前选中的标签索引
		 */
		value: {
			type: Number,
			default: 0
		},
		/**
		 * 是否固定在底部
		 */
		fixed: {
			type: Boolean,
			default: true
		},
		/**
		 * 是否显示底部安全区域
		 */
		safeAreaBottom: {
			type: Boolean,
			default: true
		},
		/**
		 * 背景颜色
		 */
		backgroundColor: {
			type: String,
			default: '#fff'
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
	provide() {
		return {
			tabbar: this
		}
	},
	computed: {
		tabbarClass() {
			const classes = ['bl-tabbar']
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		tabbarStyle() {
			const styles = []
			if (this.backgroundColor) {
				styles.push(`background-color: ${this.backgroundColor}`)
			}
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		}
	},
	methods: {
		handleChange(index) {
			this.$emit('change', index)
			this.$emit('input', index)
		}
	}
}
</script>

<style scoped>
.bl-tabbar {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
}
</style>

