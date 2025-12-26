<template>
	<view class="bl-treeselect" :style="treeselectStyle">
		<view 
			:class="['bl-treeselect__selector', disabled ? 'bl-treeselect__selector--disabled' : '', visible ? 'bl-treeselect__selector--open' : '']"
			@click="handleSelectorClick"
		>
			<view class="bl-treeselect__selector-content">
				<slot>
					<text v-if="displayText" class="bl-treeselect__selector-text">{{ displayText }}</text>
					<text v-else class="bl-treeselect__selector-placeholder">{{ placeholder }}</text>
				</slot>
			</view>
			<view v-if="allowClear && currentValue != null && currentValue !== ''" class="bl-treeselect__selector-clear" @click.stop="handleClear">
				<bl-icon 
					name="close" 
					:size="20"
					color="var(--bl-text-color-secondary, #8c8c8c)"
				></bl-icon>
			</view>
			<view class="bl-treeselect__selector-arrow">
				<bl-icon 
					name="down" 
					:size="20"
					color="var(--bl-text-color-secondary, #8c8c8c)"
				></bl-icon>
			</view>
		</view>
		<view 
			v-if="visible"
			class="bl-treeselect__dropdown"
		>
			<view v-if="showSearch" class="bl-treeselect__search">
				<bl-input
					:value="searchValue"
					:placeholder="searchPlaceholderValue"
					@input="handleSearch"
				></bl-input>
			</view>
			<view class="bl-treeselect__tree">
				<bl-tree
					:tree-data="filteredTreeData"
					:checkable="multiple"
					:show-line="showLine"
					:show-icon="showIcon"
					:selected-keys="multiple ? null : currentValueArray"
					:checked-keys="multiple ? currentValueArray : null"
					@select="handleTreeSelect"
					@check="handleTreeCheck"
				></bl-tree>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'BlTreeSelect',
		props: {
			/**
			 * 当前值
			 */
			value: {
				type: [String, Number, Array],
				default: null
			},
			/**
			 * 默认值
			 */
			defaultValue: {
				type: [String, Number, Array],
				default: null
			},
			/**
			 * 树节点数据
			 */
			treeData: {
				type: Array,
				default: () => []
			},
			/**
			 * 输入框占位符
			 */
			placeholder: {
				type: String,
				default: '请选择'
			},
			/**
			 * 是否禁用
			 */
			disabled: {
				type: Boolean,
				default: false
			},
			/**
			 * 是否允许清除
			 */
			allowClear: {
				type: Boolean,
				default: true
			},
			/**
			 * 是否多选
			 */
			multiple: {
				type: Boolean,
				default: false
			},
			/**
			 * 是否显示搜索框
			 */
			showSearch: {
				type: Boolean,
				default: false
			},
			/**
			 * 是否显示树连接线
			 */
			showLine: {
				type: Boolean,
				default: false
			},
			/**
			 * 是否显示图标
			 */
			showIcon: {
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
				visible: false,
				internalValue: null,
				searchValue: ''
			}
		},
		computed: {
			treeselectStyle() {
				return this.customStyle || ''
			},
			currentValue() {
				return this.value != null ? this.value : this.internalValue
			},
			currentValueArray() {
				if (this.currentValue == null) {
					return []
				}
				if (Array.isArray(this.currentValue)) {
					return this.currentValue
				}
				return [this.currentValue]
			},
			displayText() {
				if (this.currentValue == null) {
					return ''
				}
				if (Array.isArray(this.currentValue)) {
					if (this.currentValue.length === 0) {
						return ''
					}
					return `已选择 ${this.currentValue.length} 项`
				}
				return this.getNodeTitle(this.currentValue) || ''
			},
			filteredTreeData() {
				if (!this.searchValue || this.searchValue === '') {
					return this.treeData
				}
				return this.filterTreeData(this.treeData, this.searchValue.toLowerCase())
			},
			searchPlaceholderValue() {
				// 尝试从 i18nProvider 获取翻译
				if (this.$parent && this.$parent.$options.name === 'BlI18nProvider') {
					return this.$parent.t('comp.search')
				}
				// 如果没有 i18nProvider，返回默认值
				return '搜索'
			}
		},
		created() {
			if (this.value == null && this.defaultValue != null) {
				this.internalValue = this.defaultValue
			}
		},
		watch: {
			value(newVal) {
				if (newVal != null) {
					this.internalValue = newVal
				}
			}
		},
		methods: {
			handleSelectorClick() {
				if (this.disabled) {
					return
				}
				this.visible = !this.visible
			},
			handleClear() {
				this.updateValue(this.multiple ? [] : null)
			},
			handleSearch(event) {
				this.searchValue = event.detail.value
				this.$emit('search', this.searchValue)
			},
			handleTreeSelect(selectedKeys, info) {
				if (this.multiple) {
					return
				}
				const value = selectedKeys.length > 0 ? selectedKeys[0] : null
				this.updateValue(value)
				this.visible = false
			},
			handleTreeCheck(checkedKeys, info) {
				if (!this.multiple) {
					return
				}
				this.updateValue(checkedKeys)
			},
			updateValue(value) {
				if (this.value == null) {
					this.internalValue = value
				}
				this.$emit('update:value', value)
				this.$emit('change', value)
			},
			getNodeTitle(key) {
				return this.findNodeTitle(this.treeData, key) || ''
			},
			findNodeTitle(nodes, key) {
				for (const node of nodes) {
					if (node.key === key) {
						return node.title
					}
					if (node.children && node.children.length > 0) {
						const found = this.findNodeTitle(node.children, key)
						if (found != null) {
							return found
						}
					}
				}
				return null
			},
			filterTreeData(nodes, searchText) {
				const result = []
				for (const node of nodes) {
					const title = node.title.toLowerCase()
					const match = title.indexOf(searchText) >= 0
					const filteredChildren = node.children && node.children.length > 0 ? this.filterTreeData(node.children, searchText) : []
					
					if (match || filteredChildren.length > 0) {
						result.push({
							...node,
							children: filteredChildren.length > 0 ? filteredChildren : node.children
						})
					}
				}
				return result
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>

