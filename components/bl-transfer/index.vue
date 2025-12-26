<template>
	<view class="bl-transfer" :style="transferStyle">
		<view class="bl-transfer__body">
			<!-- 左侧列表 -->
			<view class="bl-transfer__list">
				<view class="bl-transfer__list-header">
					<text class="bl-transfer__list-title">{{ titles[0] }}</text>
					<text class="bl-transfer__list-count">{{ leftDataSource.length }} / {{ dataSource.length }}</text>
				</view>
				<view v-if="showSearch" class="bl-transfer__list-search">
					<bl-input
						:value="leftSearchValue"
						:placeholder="leftSearchPlaceholder"
						@input="handleLeftSearch"
					></bl-input>
				</view>
				<view class="bl-transfer__list-body">
					<view class="bl-transfer__list-content">
						<view 
							v-for="item in leftDataSource" 
							:key="item.key"
							:class="['bl-transfer__item', leftSelectedKeys.indexOf(item.key) >= 0 ? 'bl-transfer__item--selected' : '', item.disabled ? 'bl-transfer__item--disabled' : '']"
							@click="handleLeftItemClick(item)"
						>
							<view class="bl-transfer__item-checkbox">
								<bl-checkbox
									:value="leftSelectedKeys.indexOf(item.key) >= 0"
									:disabled="item.disabled || disabled"
									@change="handleLeftItemCheck(item, $event)"
								></bl-checkbox>
							</view>
							<view class="bl-transfer__item-content">
								<slot name="item" :item="item">
									<text class="bl-transfer__item-title">{{ item.title }}</text>
									<text v-if="item.description" class="bl-transfer__item-description">{{ item.description }}</text>
								</slot>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 操作按钮 -->
			<view class="bl-transfer__operations">
				<bl-button 
					:disabled="leftSelectedKeys.length === 0 || disabled"
					@click="handleMoveToRight"
					class="bl-transfer__operation-btn"
				>
					{{ operations[0] }}
					<bl-icon name="right" :size="16"></bl-icon>
				</bl-button>
				<bl-button 
					:disabled="rightSelectedKeys.length === 0 || disabled"
					@click="handleMoveToLeft"
					class="bl-transfer__operation-btn"
				>
					<bl-icon name="left" :size="16"></bl-icon>
					{{ operations[1] }}
				</bl-button>
			</view>
			
			<!-- 右侧列表 -->
			<view class="bl-transfer__list">
				<view class="bl-transfer__list-header">
					<text class="bl-transfer__list-title">{{ titles[1] }}</text>
					<text class="bl-transfer__list-count">{{ rightDataSource.length }} / {{ dataSource.length }}</text>
				</view>
				<view v-if="showSearch" class="bl-transfer__list-search">
					<bl-input
						:value="rightSearchValue"
						:placeholder="rightSearchPlaceholder"
						@input="handleRightSearch"
					></bl-input>
				</view>
				<view class="bl-transfer__list-body">
					<view class="bl-transfer__list-content">
						<view 
							v-for="item in rightDataSource" 
							:key="item.key"
							:class="['bl-transfer__item', rightSelectedKeys.indexOf(item.key) >= 0 ? 'bl-transfer__item--selected' : '', item.disabled ? 'bl-transfer__item--disabled' : '']"
							@click="handleRightItemClick(item)"
						>
							<view class="bl-transfer__item-checkbox">
								<bl-checkbox
									:value="rightSelectedKeys.indexOf(item.key) >= 0"
									:disabled="item.disabled || disabled"
									@change="handleRightItemCheck(item, $event)"
								></bl-checkbox>
							</view>
							<view class="bl-transfer__item-content">
								<slot name="item" :item="item">
									<text class="bl-transfer__item-title">{{ item.title }}</text>
									<text v-if="item.description" class="bl-transfer__item-description">{{ item.description }}</text>
								</slot>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'BlTransfer',
		props: {
			/**
			 * 数据源
			 */
			dataSource: {
				type: Array,
				default: () => []
			},
			/**
			 * 已选中的 key 列表
			 */
			targetKeys: {
				type: Array,
				default: null
			},
			/**
			 * 默认已选中的 key 列表
			 */
			defaultTargetKeys: {
				type: Array,
				default: () => []
			},
			/**
			 * 左侧标题
			 */
			titles: {
				type: Array,
				default: () => ['源列表', '目标列表']
			},
			/**
			 * 操作按钮文案
			 */
			operations: {
				type: Array,
				default: () => ['', '']
			},
			/**
			 * 是否显示搜索框
			 */
			showSearch: {
				type: Boolean,
				default: false
			},
			/**
			 * 搜索框占位符
			 */
			searchPlaceholder: {
				type: Array,
				default: () => ['请输入搜索内容', '请输入搜索内容']
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
				internalTargetKeys: [],
				leftSelectedKeys: [],
				rightSelectedKeys: [],
				leftSearchValue: '',
				rightSearchValue: ''
			}
		},
		computed: {
			transferStyle() {
				return this.customStyle || ''
			},
			currentTargetKeys() {
				return this.targetKeys != null ? this.targetKeys : this.internalTargetKeys
			},
			leftDataSource() {
				let data = this.dataSource.filter(item => this.currentTargetKeys.indexOf(item.key) < 0)
				if (this.leftSearchValue && this.leftSearchValue !== '') {
					const searchText = this.leftSearchValue.toLowerCase()
					data = data.filter(item => 
						item.title.toLowerCase().indexOf(searchText) >= 0 ||
						(item.description && item.description.toLowerCase().indexOf(searchText) >= 0)
					)
				}
				return data
			},
			rightDataSource() {
				let data = this.dataSource.filter(item => this.currentTargetKeys.indexOf(item.key) >= 0)
				if (this.rightSearchValue && this.rightSearchValue !== '') {
					const searchText = this.rightSearchValue.toLowerCase()
					data = data.filter(item => 
						item.title.toLowerCase().indexOf(searchText) >= 0 ||
						(item.description && item.description.toLowerCase().indexOf(searchText) >= 0)
					)
				}
				return data
			},
			leftSearchPlaceholder() {
				// 如果 searchPlaceholder 是默认值，使用多语言
				if (this.searchPlaceholder.length >= 1 && this.searchPlaceholder[0] === '请输入搜索内容') {
					// 尝试从 i18nProvider 获取翻译
					if (this.$parent && this.$parent.$options.name === 'BlI18nProvider') {
						return this.$parent.t('comp.searchPlaceholder')
					}
					return '请输入搜索内容'
				}
				return this.searchPlaceholder.length >= 1 ? this.searchPlaceholder[0] : '请输入搜索内容'
			},
			rightSearchPlaceholder() {
				// 如果 searchPlaceholder 是默认值，使用多语言
				if (this.searchPlaceholder.length >= 2 && this.searchPlaceholder[1] === '请输入搜索内容') {
					// 尝试从 i18nProvider 获取翻译
					if (this.$parent && this.$parent.$options.name === 'BlI18nProvider') {
						return this.$parent.t('comp.searchPlaceholder')
					}
					return '请输入搜索内容'
				}
				return this.searchPlaceholder.length >= 2 ? this.searchPlaceholder[1] : '请输入搜索内容'
			}
		},
		created() {
			if (this.targetKeys == null) {
				this.internalTargetKeys = this.defaultTargetKeys || []
			}
		},
		watch: {
			targetKeys(newVal) {
				if (newVal != null) {
					this.internalTargetKeys = newVal
				}
			}
		},
		methods: {
			handleLeftItemClick(item) {
				if (item.disabled || this.disabled) {
					return
				}
				this.toggleLeftSelection(item.key)
			},
			handleRightItemClick(item) {
				if (item.disabled || this.disabled) {
					return
				}
				this.toggleRightSelection(item.key)
			},
			handleLeftItemCheck(item, checked) {
				this.toggleLeftSelection(item.key)
			},
			handleRightItemCheck(item, checked) {
				this.toggleRightSelection(item.key)
			},
			toggleLeftSelection(key) {
				const index = this.leftSelectedKeys.indexOf(key)
				if (index >= 0) {
					this.leftSelectedKeys.splice(index, 1)
				} else {
					this.leftSelectedKeys.push(key)
				}
				this.emitSelectChange()
			},
			toggleRightSelection(key) {
				const index = this.rightSelectedKeys.indexOf(key)
				if (index >= 0) {
					this.rightSelectedKeys.splice(index, 1)
				} else {
					this.rightSelectedKeys.push(key)
				}
				this.emitSelectChange()
			},
			handleMoveToRight() {
				if (this.leftSelectedKeys.length === 0 || this.disabled) {
					return
				}
				const newTargetKeys = [...this.currentTargetKeys, ...this.leftSelectedKeys]
				this.updateTargetKeys(newTargetKeys)
				this.leftSelectedKeys = []
				this.emitSelectChange()
				this.$emit('change', newTargetKeys, 'right', this.leftSelectedKeys)
			},
			handleMoveToLeft() {
				if (this.rightSelectedKeys.length === 0 || this.disabled) {
					return
				}
				const newTargetKeys = this.currentTargetKeys.filter(key => this.rightSelectedKeys.indexOf(key) < 0)
				this.updateTargetKeys(newTargetKeys)
				this.rightSelectedKeys = []
				this.emitSelectChange()
				this.$emit('change', newTargetKeys, 'left', this.rightSelectedKeys)
			},
			handleLeftSearch(event) {
				this.leftSearchValue = event.detail.value
				this.$emit('search', 'left', this.leftSearchValue)
			},
			handleRightSearch(event) {
				this.rightSearchValue = event.detail.value
				this.$emit('search', 'right', this.rightSearchValue)
			},
			updateTargetKeys(keys) {
				if (this.targetKeys == null) {
					this.internalTargetKeys = keys
				}
				this.$emit('update:targetKeys', keys)
			},
			emitSelectChange() {
				this.$emit('selectChange', this.leftSelectedKeys, this.rightSelectedKeys)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>

