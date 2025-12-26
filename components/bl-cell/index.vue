<template>
	<view 
		:class="cellClass" 
		:style="cellStyle"
		@click="handleClick"
	>
		<view v-if="title" class="bl-cell__title">
			<bl-icon 
				v-if="icon" 
				:name="icon" 
				class="bl-cell__icon"
				:color="iconColor"
			></bl-icon>
			<text>{{ title }}</text>
		</view>
		<view class="bl-cell__value">
			<slot name="value">
				<text v-if="value" :style="valueStyle">{{ value }}</text>
			</slot>
		</view>
		<view v-if="isLink || arrow" class="bl-cell__right-icon">
			<bl-icon name="arrow-right" :color="arrowColor"></bl-icon>
		</view>
	</view>
</template>

<script>
/**
 * BlCell 单元格组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlCell',
	props: {
		/**
		 * 左侧标题
		 */
		title: {
			type: String,
			default: ''
		},
		/**
		 * 右侧内容
		 */
		value: {
			type: String,
			default: ''
		},
		/**
		 * 左侧图标
		 */
		icon: {
			type: String,
			default: ''
		},
		/**
		 * 左侧图标颜色
		 */
		iconColor: {
			type: String,
			default: ''
		},
		/**
		 * 是否显示右侧箭头
		 */
		arrow: {
			type: Boolean,
			default: false
		},
		/**
		 * 是否为链接（点击跳转）
		 */
		isLink: {
			type: Boolean,
			default: false
		},
		/**
		 * 箭头颜色
		 */
		arrowColor: {
			type: String,
			default: '#969799'
		},
		/**
		 * 右侧内容颜色
		 */
		valueColor: {
			type: String,
			default: '#969799'
		},
		/**
		 * 是否使用内边距
		 */
		padding: {
			type: Boolean,
			default: true
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
		cellClass() {
			const classes = ['bl-cell']
			if (this.isLink || this.arrow) {
				classes.push('bl-cell--link')
			}
			if (!this.padding) {
				classes.push('bl-cell--no-padding')
			}
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		cellStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		valueStyle() {
			const styles = []
			if (this.valueColor) {
				styles.push(`color: ${this.valueColor}`)
			}
			return styles.join('; ')
		}
	},
	methods: {
		handleClick(e) {
			this.$emit('click', e)
		}
	}
}
</script>

<style scoped>
.bl-cell {
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 12px 16px;
	background-color: #fff;
	box-sizing: border-box;
}

.bl-cell--no-padding {
	padding: 0;
}

.bl-cell__title {
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-shrink: 0;
	color: var(--bl-text-color-primary, #323233);
	font-size: 14px;
}

.bl-cell__icon {
	margin-right: 8px;
}

.bl-cell__value {
	flex: 1;
	text-align: right;
	color: #969799;
	font-size: 14px;
}

.bl-cell__right-icon {
	margin-left: 8px;
	flex-shrink: 0;
}

.bl-cell--link {
	cursor: pointer;
}
</style>

