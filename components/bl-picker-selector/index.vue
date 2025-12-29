<template>
	<picker
		:class="pickerClass"
		:style="pickerStyle"
		mode="selector"
		:value="selectedIndex"
		:range="range"
		:range-key="rangeKey"
		:disabled="disabled"
		@change="handleChange"
		@cancel="handleCancel"
	>
		<slot>
			<view class="bl-pickerselector__trigger">
				<text class="bl-pickerselector__text">{{ displayText }}</text>
				<bl-icon v-if="showArrow" name="arrow-down" class="bl-pickerselector__arrow"></bl-icon>
			</view>
		</slot>
	</picker>
</template>

<script>
/**
 * BlPickerSelector 选择器组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlPickerSelector',
	model: {
		prop: 'value',
		event: 'change'
	},
	props: {
		/**
		 * 当前选中的值
		 */
		value: {
			type: [String, Number],
			default: null
		},
		/**
		 * 选项数组
		 */
		range: {
			type: Array,
			default: () => []
		},
		/**
		 * 当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容
		 */
		rangeKey: {
			type: String,
			default: ''
		},
		/**
		 * 是否禁用
		 */
		disabled: {
			type: Boolean,
			default: false
		},
		/**
		 * 占位符
		 */
		placeholder: {
			type: String,
			default: '请选择'
		},
		/**
		 * 是否显示箭头
		 */
		showArrow: {
			type: Boolean,
			default: true
		},
		/**
		 * 显示文本格式化函数
		 */
		formatter: {
			type: Function,
			default: null
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
		pickerClass() {
			const classes = ['bl-pickerselector']
			if (this.disabled) {
				classes.push('bl-pickerselector--disabled')
			}
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		pickerStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		selectedIndex() {
			if (this.value == null) {
				return 0
			}
			const index = this.range.findIndex((item, idx) => {
				if (this.rangeKey) {
					return item[this.rangeKey] == this.value
				}
				return item == this.value || idx == this.value
			})
			return index >= 0 ? index : 0
		},
		displayText() {
			if (this.value == null) {
				return this.placeholder
			}
			const selectedItem = this.range[this.selectedIndex]
			if (!selectedItem) {
				return this.placeholder
			}
			const text = this.rangeKey ? selectedItem[this.rangeKey] : selectedItem
			if (this.formatter && typeof this.formatter == 'function') {
				return this.formatter(text, this.value)
			}
			return String(text)
		}
	},
	methods: {
		handleChange(e) {
			const index = e.detail?.value || e.detail || 0
			const selectedItem = this.range[index]
			if (!selectedItem) {
				return
			}
			const value = this.rangeKey ? selectedItem[this.rangeKey] : selectedItem
			this.$emit('change', value, index)
			this.$emit('input', value)
		},
		handleCancel(e) {
			this.$emit('cancel', e)
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

