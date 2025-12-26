<template>
	<view :class="gridClass" :style="gridStyle">
		<bl-hairline v-if="!gutter && border" placement="['top']"></bl-hairline>
		<slot></slot>
	</view>
</template>

<script>
/**
 * BlGrid 网格组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlGrid',
	props: {
		/**
		 * 列数
		 */
		columnCount: {
			type: Number,
			default: 4
		},
		/**
		 * 间隔 px
		 */
		gutter: {
			type: Number,
			default: null
		},
		/**
		 * 显示边框
		 */
		border: {
			type: Boolean,
			default: true
		},
		/**
		 * 方形网格
		 */
		square: {
			type: Boolean,
			default: false
		},
		/**
		 * 自定义样式
		 */
		customStyle: {
			type: String,
			default: ''
		}
	},
	provide() {
		return {
			grid: this
		}
	},
	computed: {
		gridClass() {
			return 'bl-grid'
		},
		gridStyle() {
			const styles = []
			if (this.gutter != null) {
				styles.push(`padding-left: ${this.gutter}px`)
			}
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		itemWidth() {
			return `${100 / this.columnCount}%`
		}
	}
}
</script>

<style scoped>
.bl-grid {
	display: flex;
	flex-wrap: wrap;
	box-sizing: border-box;
	position: relative;
}
</style>

