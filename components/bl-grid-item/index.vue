<template>
	<view :class="itemClass" :style="itemStyle">
		<bl-hairline v-if="border && !gutter" placement="['bottom', 'right']"></bl-hairline>
		<view :class="contentClass">
			<bl-hairline v-if="border && gutter != null"></bl-hairline>
			<slot></slot>
		</view>
	</view>
</template>

<script>
/**
 * BlGridItem 网格项组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlGridItem',
	inject: {
		grid: {
			default: null
		}
	},
	props: {
		/**
		 * 自定义样式
		 */
		customStyle: {
			type: String,
			default: ''
		}
	},
	computed: {
		itemClass() {
			return 'bl-grid-item'
		},
		itemStyle() {
			const styles = []
			
			if (this.grid) {
				styles.push(`flex-basis: ${this.grid.itemWidth}`)
				
				if (this.grid.gutter != null) {
					styles.push(`margin: ${this.grid.gutter}px`)
				}
				
				if (this.grid.square) {
					styles.push(`padding-bottom: ${this.grid.itemWidth}`)
				}
			}
			
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			
			return styles.join('; ')
		},
		contentClass() {
			const classes = ['bl-grid-item__content']
			if (this.grid && this.grid.square) {
				classes.push('bl-grid-item__content--square')
			}
			return classes.join(' ')
		},
		border() {
			return this.grid ? this.grid.border : true
		},
		gutter() {
			return this.grid ? this.grid.gutter : null
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

