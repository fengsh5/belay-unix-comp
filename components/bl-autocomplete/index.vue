<template>
	<view class="bl-autocomplete" :style="autocompleteStyle">
		<bl-input
			:value="inputValue"
			:placeholder="placeholder"
			:disabled="disabled"
			:readonly="readonly"
			:custom-style="inputStyle"
			@input="handleInput"
			@focus="handleFocus"
			@blur="handleBlur"
		></bl-input>
		<view 
			v-if="showDropdown && filteredOptions.length > 0"
			class="bl-autocomplete__dropdown"
		>
			<view 
				v-for="(option, index) in filteredOptions" 
				:key="index"
				:class="['bl-autocomplete__option', selectedIndex === index ? 'bl-autocomplete__option--selected' : '']"
				@click="handleSelect(option)"
			>
				<slot :option="option">
					<text class="bl-autocomplete__option-label">{{ getOptionLabel(option) }}</text>
				</slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'BlAutoComplete',
		props: {
			/**
			 * 当前值
			 */
			value: {
				type: String,
				default: null
			},
			/**
			 * 默认值
			 */
			defaultValue: {
				type: String,
				default: ''
			},
			/**
			 * 输入框占位符
			 */
			placeholder: {
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
			 * 是否只读
			 */
			readonly: {
				type: Boolean,
				default: false
			},
			/**
			 * 数据源
			 */
			options: {
				type: Array,
				default: () => []
			},
			/**
			 * 是否区分大小写
			 */
			caseSensitive: {
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
		data() {
			return {
				inputValue: '',
				showDropdown: false,
				selectedIndex: -1
			}
		},
		computed: {
			autocompleteStyle() {
				return this.customStyle || ''
			},
			inputStyle() {
				return ''
			},
			filteredOptions() {
				if (!this.inputValue || this.inputValue === '') {
					return []
				}
				
				const input = this.caseSensitive ? this.inputValue : this.inputValue.toLowerCase()
				
				return this.options.filter(option => {
					const optionValue = typeof option === 'string' ? option : option.value
					const compareValue = this.caseSensitive ? optionValue : optionValue.toLowerCase()
					return compareValue.indexOf(input) >= 0
				})
			}
		},
		created() {
			if (this.value == null) {
				this.inputValue = this.defaultValue
			} else {
				this.inputValue = this.value
			}
		},
		watch: {
			value(newVal) {
				if (newVal != null) {
					this.inputValue = newVal
				}
			}
		},
		methods: {
			handleInput(event) {
				const value = event.detail.value
				this.inputValue = value
				this.showDropdown = true
				this.selectedIndex = -1
				
				if (this.value == null) {
					// 非受控模式
				}
				this.$emit('update:value', value)
				this.$emit('change', value)
				this.$emit('search', value)
			},
			handleSelect(option) {
				const optionValue = typeof option === 'string' ? option : option.value
				this.inputValue = optionValue
				this.showDropdown = false
				
				if (this.value == null) {
					// 非受控模式
				}
				this.$emit('update:value', optionValue)
				this.$emit('change', optionValue)
				this.$emit('select', optionValue, option)
			},
			handleFocus() {
				if (this.inputValue && this.filteredOptions.length > 0) {
					this.showDropdown = true
				}
				this.$emit('focus')
			},
			handleBlur() {
				// 延迟隐藏，以便点击选项能够触发
				setTimeout(() => {
					this.showDropdown = false
				}, 200)
				this.$emit('blur')
			},
			getOptionLabel(option) {
				if (typeof option === 'string') {
					return option
				}
				return option.label || option.value
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>

