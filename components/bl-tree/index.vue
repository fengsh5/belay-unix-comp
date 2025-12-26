<template>
	<view class="bl-tree" :style="treeStyle">
		<BlTreeNode
			v-for="(node, index) in treeData"
			:key="node.key"
			:node="node"
			:level="0"
			:checkable="checkable"
			:show-icon="showIcon"
			:show-line="showLine"
			:expanded-keys="currentExpandedKeys"
			:selected-keys="currentSelectedKeys"
			:checked-keys="currentCheckedKeys"
			:disabled="disabled"
			@expand="handleExpand"
			@select="handleSelect"
			@check="handleCheck"
		></BlTreeNode>
	</view>
</template>

<script>
	import BlTreeNode from './node.vue'
	
	export default {
		name: 'BlTree',
		components: {
			BlTreeNode
		},
		props: {
			/**
			 * 树节点数据
			 */
			treeData: {
				type: Array,
				default: () => []
			},
			/**
			 * 是否显示复选框
			 */
			checkable: {
				type: Boolean,
				default: false
			},
			/**
			 * 是否默认展开所有节点
			 */
			defaultExpandAll: {
				type: Boolean,
				default: false
			},
			/**
			 * 默认展开的节点 key
			 */
			defaultExpandedKeys: {
				type: Array,
				default: () => []
			},
			/**
			 * 当前展开的节点 key（受控）
			 */
			expandedKeys: {
				type: Array,
				default: null
			},
			/**
			 * 默认选中的节点 key
			 */
			defaultSelectedKeys: {
				type: Array,
				default: () => []
			},
			/**
			 * 当前选中的节点 key（受控）
			 */
			selectedKeys: {
				type: Array,
				default: null
			},
			/**
			 * 默认勾选的节点 key
			 */
			defaultCheckedKeys: {
				type: Array,
				default: () => []
			},
			/**
			 * 当前勾选的节点 key（受控）
			 */
			checkedKeys: {
				type: Array,
				default: null
			},
			/**
			 * 是否显示连接线
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
			 * 是否禁用
			 */
			disabled: {
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
				internalExpandedKeys: [],
				internalSelectedKeys: [],
				internalCheckedKeys: []
			}
		},
		computed: {
			currentExpandedKeys() {
				if (this.expandedKeys != null) {
					return this.expandedKeys
				}
				if (this.defaultExpandAll) {
					return this.getAllKeys(this.treeData)
				}
				return this.internalExpandedKeys.length > 0 ? this.internalExpandedKeys : this.defaultExpandedKeys
			},
			currentSelectedKeys() {
				return this.selectedKeys != null ? this.selectedKeys : this.internalSelectedKeys.length > 0 ? this.internalSelectedKeys : this.defaultSelectedKeys
			},
			currentCheckedKeys() {
				return this.checkedKeys != null ? this.checkedKeys : this.internalCheckedKeys.length > 0 ? this.internalCheckedKeys : this.defaultCheckedKeys
			},
			treeStyle() {
				return this.customStyle || ''
			}
		},
		created() {
			if (this.defaultExpandAll) {
				this.internalExpandedKeys = this.getAllKeys(this.treeData)
			} else if (this.expandedKeys == null) {
				this.internalExpandedKeys = this.defaultExpandedKeys || []
			}
			if (this.selectedKeys == null) {
				this.internalSelectedKeys = this.defaultSelectedKeys || []
			}
			if (this.checkedKeys == null) {
				this.internalCheckedKeys = this.defaultCheckedKeys || []
			}
		},
		methods: {
			getAllKeys(nodes) {
				const keys = []
				nodes.forEach(node => {
					keys.push(node.key)
					if (node.children && node.children.length > 0) {
						keys.push(...this.getAllKeys(node.children))
					}
				})
				return keys
			},
			handleExpand(expandedKeys, info) {
				if (this.expandedKeys == null) {
					this.internalExpandedKeys = expandedKeys
				}
				this.$emit('update:expandedKeys', expandedKeys)
				this.$emit('expand', expandedKeys, info)
			},
			handleSelect(selectedKeys, info) {
				if (this.selectedKeys == null) {
					this.internalSelectedKeys = selectedKeys
				}
				this.$emit('update:selectedKeys', selectedKeys)
				this.$emit('select', selectedKeys, info)
			},
			handleCheck(checkedKeys, info) {
				if (this.checkedKeys == null) {
					this.internalCheckedKeys = checkedKeys
				}
				this.$emit('update:checkedKeys', checkedKeys)
				this.$emit('check', checkedKeys, info)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>

