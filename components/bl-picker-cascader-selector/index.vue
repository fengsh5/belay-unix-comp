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
			<view class="bl-pickercascaderselector__trigger">
				<text class="bl-pickercascaderselector__text">{{ displayText }}</text>
				<bl-icon v-if="showArrow" name="arrow-down" class="bl-pickercascaderselector__arrow"></bl-icon>
			</view>
		</slot>
	</picker>
</template>

<script>
/**
 * BlPickerCascaderSelector 级联选择器组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlPickerCascaderSelector',
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
		 * 级联数据
		 */
		options: {
			type: Array,
			default: () => []
		},
		/**
		 * 子级字段名
		 */
		childrenKey: {
			type: String,
			default: 'children'
		},
		/**
		 * 显示字段名
		 */
		labelKey: {
			type: String,
			default: 'label'
		},
		/**
		 * 值字段名
		 */
		valueKey: {
			type: String,
			default: 'value'
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
			const classes = ['bl-pickercascaderselector']
			if (this.disabled) {
				classes.push('bl-pickercascaderselector--disabled')
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
		range() {
			// 将级联数据转换为多列选择器需要的格式
			const columns = []
			let currentOptions = this.options
			for (let i = 0; i < this.value.length + 1; i++) {
				if (!currentOptions || currentOptions.length === 0) break
				columns.push(currentOptions)
				if (i < this.value.length) {
					const selectedValue = this.value[i]
					const selectedOption = currentOptions.find(opt => opt[this.valueKey] === selectedValue)
					if (selectedOption && selectedOption[this.childrenKey]) {
						currentOptions = selectedOption[this.childrenKey]
					} else {
						break
					}
				}
			}
			return columns
		},
		rangeKey() {
			return this.labelKey
		},
		selectedIndex() {
			if (!this.value || this.value.length === 0) {
				return this.range.map(() => 0)
			}
			return this.value.map((val, idx) => {
				const column = this.range[idx]
				if (!column) return 0
				const index = column.findIndex(opt => opt[this.valueKey] === val)
				return index >= 0 ? index : 0
			})
		},
		displayText() {
			if (!this.value || this.value.length === 0) {
				return this.placeholder
			}
			const texts = []
			let currentOptions = this.options
			for (const val of this.value) {
				const option = currentOptions.find(opt => opt[this.valueKey] === val)
				if (!option) break
				texts.push(option[this.labelKey])
				currentOptions = option[this.childrenKey] || []
			}
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
			const values = []
			let currentOptions = this.options
			for (const idx of index) {
				if (!currentOptions || !currentOptions[idx]) break
				const option = currentOptions[idx]
				values.push(option[this.valueKey])
				currentOptions = option[this.childrenKey] || []
			}
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

<style scoped>
.bl-pickercascaderselector {
	display: inline-block;
}

.bl-pickercascaderselector__trigger {
	display: flex;
	align-items: center;
	cursor: pointer;
}

.bl-pickercascaderselector__text {
	flex: 1;
	color: var(--bl-text-color, #333);
	font-size: 14px;
}

.bl-pickercascaderselector__arrow {
	margin-left: 8px;
}

.bl-pickercascaderselector--disabled {
	opacity: 0.5;
	cursor: not-allowed;
}
</style>

