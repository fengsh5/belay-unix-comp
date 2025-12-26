<template>
	<view 
		:class="sortTagClass" 
		:style="sortTagStyle"
		@click="handleClick"
	>
		<text class="bl-sorttag__text">
			<slot>{{ text }}</slot>
		</text>
		<view class="bl-sorttag__icons">
			<bl-icon 
				name="arrow-up" 
				:class="upIconClass"
				:color="upIconColor"
			></bl-icon>
			<bl-icon 
				name="arrow-down" 
				:class="downIconClass"
				:color="downIconColor"
			></bl-icon>
		</view>
	</view>
</template>

<script>
/**
 * BlSortTag 排序标签组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlSortTag',
	props: {
		/**
		 * 文本内容
		 */
		text: {
			type: String,
			default: ''
		},
		/**
		 * 排序状态
		 */
		sort: {
			type: String,
			default: '' // '' | 'asc' | 'desc'
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
		sortTagClass() {
			const classes = ['bl-sorttag']
			if (this.sort === 'asc') {
				classes.push('bl-sorttag--asc')
			} else if (this.sort === 'desc') {
				classes.push('bl-sorttag--desc')
			}
			if (this.disabled) {
				classes.push('bl-sorttag--disabled')
			}
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		sortTagStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		upIconClass() {
			const classes = ['bl-sorttag__icon', 'bl-sorttag__icon--up']
			if (this.sort === 'asc') {
				classes.push('bl-sorttag__icon--active')
			}
			return classes.join(' ')
		},
		downIconClass() {
			const classes = ['bl-sorttag__icon', 'bl-sorttag__icon--down']
			if (this.sort === 'desc') {
				classes.push('bl-sorttag__icon--active')
			}
			return classes.join(' ')
		},
		upIconColor() {
			return this.sort === 'asc' ? 'var(--bl-primary-color, #007aff)' : '#969799'
		},
		downIconColor() {
			return this.sort === 'desc' ? 'var(--bl-primary-color, #007aff)' : '#969799'
		}
	},
	methods: {
		handleClick(e) {
			if (this.disabled) {
				return
			}
			let newSort = ''
			if (this.sort === '') {
				newSort = 'asc'
			} else if (this.sort === 'asc') {
				newSort = 'desc'
			} else {
				newSort = ''
			}
			this.$emit('change', newSort)
			this.$emit('click', e)
		}
	}
}
</script>

<style scoped>
.bl-sorttag {
	display: inline-flex;
	flex-direction: row;
	align-items: center;
	padding: 4px 8px;
	cursor: pointer;
}

.bl-sorttag__text {
	margin-right: 4px;
	font-size: 13px;
	color: #606266;
}

.bl-sorttag__icons {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.bl-sorttag__icon {
	font-size: 12px;
	line-height: 1;
	margin: 1px 0;
	color: #969799;
}

.bl-sorttag__icon--active {
	color: var(--bl-primary-color, #007aff);
}

.bl-sorttag--disabled {
	opacity: 0.5;
	cursor: not-allowed;
}
</style>

