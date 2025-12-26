<template>
	<view 
		:class="['bl-table', bordered ? 'bl-table--bordered' : '', size !== 'default' ? `bl-table--${size}` : '', 'bl-table--mobile']"
		:style="tableStyle"
	>
		<!-- 移动端卡片式布局 -->
		<view class="bl-table__body">
			<view 
				v-for="(record, rowIndex) in dataSource" 
				:key="rowIndex"
				:class="['bl-table__row', striped && rowIndex % 2 === 1 ? 'bl-table__row--striped' : '', disabled ? 'bl-table__row--disabled' : '']"
				@click="handleRowClick(record, rowIndex)"
			>
				<view 
					v-for="(column, colIndex) in columns" 
					:key="colIndex"
					class="bl-table__cell"
					:style="getCellStyle(column)"
				>
					<view class="bl-table__cell-label">{{ column.title }}</view>
					<view class="bl-table__cell-value">
						<slot 
							:name="column.dataIndex" 
							:column="column" 
							:record="record" 
							:index="rowIndex"
						>
							{{ record[column.dataIndex] }}
						</slot>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'BlTable',
		props: {
			/**
			 * 表格列配置
			 */
			columns: {
				type: Array,
				default: () => []
			},
			/**
			 * 数据源
			 */
			dataSource: {
				type: Array,
				default: () => []
			},
			/**
			 * 是否显示边框
			 */
			bordered: {
				type: Boolean,
				default: true
			},
			/**
			 * 是否显示表头
			 */
			showHeader: {
				type: Boolean,
				default: true
			},
			/**
			 * 是否显示斑马纹
			 */
			striped: {
				type: Boolean,
				default: false
			},
			/**
			 * 尺寸
			 */
			size: {
				type: String,
				default: 'default'
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
		computed: {
			tableStyle() {
				return this.customStyle || ''
			}
		},
		methods: {
			getCellStyle(column) {
				const styles = []
				if (column.width) {
					const widthValue = typeof column.width === 'number' ? `${column.width}rpx` : column.width
					styles.push(`width: ${widthValue}`)
				}
				if (column.align) {
					styles.push(`text-align: ${column.align}`)
				}
				return styles.join('; ')
			},
			handleRowClick(record, index) {
				if (this.disabled) {
					return
				}
				this.$emit('rowClick', record, index)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>

