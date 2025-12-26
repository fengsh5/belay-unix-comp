<template>
	<slider
		:class="sliderClass"
		:style="sliderStyle"
		:value="value"
		:min="min"
		:max="max"
		:step="step"
		:disabled="disabled"
		:activeColor="activeColorValue"
		:backgroundColor="backgroundColor"
		:block-size="blockSize"
		:block-color="blockColor"
		:show-value="showValue"
		@change="handleChange"
		@changing="handleChanging"
	></slider>
</template>

<script>
/**
 * BlSlider 滑块组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlSlider',
	model: {
		prop: 'value',
		event: 'change'
	},
	props: {
		/**
		 * 当前值
		 */
		value: {
			type: Number,
			default: 0
		},
		/**
		 * 最小值
		 */
		min: {
			type: Number,
			default: 0
		},
		/**
		 * 最大值
		 */
		max: {
			type: Number,
			default: 100
		},
		/**
		 * 步长
		 */
		step: {
			type: Number,
			default: 1
		},
		/**
		 * 是否禁用
		 */
		disabled: {
			type: Boolean,
			default: false
		},
		/**
		 * 滑块颜色
		 */
		activeColor: {
			type: String,
			default: '#09BB07'
		},
		/**
		 * 滑块背景色
		 */
		backgroundColor: {
			type: String,
			default: '#EBEBEB'
		},
		/**
		 * 滑块大小
		 */
		blockSize: {
			type: Number,
			default: 15
		},
		/**
		 * 滑块颜色
		 */
		blockColor: {
			type: String,
			default: '#ffffff'
		},
		/**
		 * 是否显示当前值
		 */
		showValue: {
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
	computed: {
		sliderClass() {
			const classes = ['bl-slider']
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		sliderStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		activeColorValue() {
			return this.activeColor || '#09BB07'
		}
	},
	methods: {
		handleChange(e) {
			const value = e.detail?.value !== undefined ? e.detail.value : (e.target?.value || 0)
			this.$emit('change', value)
			this.$emit('input', value)
		},
		handleChanging(e) {
			const value = e.detail?.value !== undefined ? e.detail.value : (e.target?.value || 0)
			this.$emit('changing', value)
		}
	}
}
</script>

<style scoped>
.bl-slider {
	width: 100%;
	height: 100%;
}
</style>

