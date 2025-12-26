<template>
	<view 
		:class="viewClass" 
		:style="viewStyle"
		@click="handleClick"
		@touchstart="handleTouchStart"
		@touchend="handleTouchEnd"
		@touchmove="handleTouchMove"
	>
		<slot></slot>
	</view>
</template>

<script>
/**
 * BlView 视图容器组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlView',
	props: {
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
		viewClass() {
			const classes = ['bl-view']
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		viewStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		}
	},
	methods: {
		handleClick(e) {
			this.$emit('click', e)
		},
		handleTouchStart(e) {
			this.$emit('touchStart', e)
		},
		handleTouchEnd(e) {
			this.$emit('touchEnd', e)
		},
		handleTouchMove(e) {
			this.$emit('touchMove', e)
		}
	}
}
</script>

<style scoped>
.bl-view {
	box-sizing: border-box;
}
</style>

