<template>
	<picker
		:class="pickerClass"
		:style="pickerStyle"
		mode="multiSelector"
		:value="selectedIndex"
		:range="range"
		:range-key="rangeKey"
		:disabled="disabled"
		@change="handleChange"
		@columnchange="handleColumnChange"
		@cancel="handleCancel"
	>
		<slot>
			<view class="bl-pickermultiselector__trigger">
				<text class="bl-pickermultiselector__text">{{ displayText }}</text>
				<bl-icon v-if="showArrow" name="arrow-down" class="bl-pickermultiselector__arrow"></bl-icon>
			</view>
		</slot>
	</picker>
</template>

<script>
/**
 * BlPickerMultiSelector 多列选择器组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlPickerMultiSelector',
	model: {
		prop: 'value',
		event: 'change'
	},
	props: {
		/**
		 * 当前选中的值，数组形式
		 */
		value: {
			type: Array,
			default: () => []
		},
		/**
		 * 选项数组，二维数组
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
			const classes = ['bl-pickermultiselector']
			if (this.disabled) {
				classes.push('bl-pickermultiselector--disabled')
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
			if (!this.value || this.value.length === 0) {
				return this.range.map(() => 0)
			}
			return this.value.map((val, idx) => {
				const column = this.range[idx]
				if (!column) return 0
				const index = column.findIndex((item) => {
					if (this.rangeKey) {
						return item[this.rangeKey] === val
					}
					return item === val
				})
				return index >= 0 ? index : 0
			})
		},
		displayText() {
			if (!this.value || this.value.length === 0) {
				return this.placeholder
			}
			const texts = this.value.map((val, idx) => {
				const column = this.range[idx]
				if (!column) return ''
				const selectedItem = column[this.selectedIndex[idx]]
				if (!selectedItem) return ''
				return this.rangeKey ? selectedItem[this.rangeKey] : selectedItem
			}).filter(Boolean)
			const text = texts.join(' / ')
			if (this.formatter && typeof this.formatter === 'function') {
				return this.formatter(text, this.value)
			}
			return text || this.placeholder
		}
	},
	methods: {
		handleChange(e) {
			const index = e.detail?.value || e.detail || []
			const values = index.map((idx, columnIdx) => {
				const column = this.range[columnIdx]
				if (!column || !column[idx]) return null
				const item = column[idx]
				return this.rangeKey ? item[this.rangeKey] : item
			}).filter(val => val != null)
			this.$emit('change', values, index)
			this.$emit('input', values)
		},
		handleColumnChange(e) {
			this.$emit('columnChange', e)
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

