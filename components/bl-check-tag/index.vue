<template>
	<view 
		:class="checkTagClass" 
		:style="checkTagStyle"
		@click="handleClick"
	>
		<text class="bl-checktag__text">
			<slot>{{ text }}</slot>
		</text>
	</view>
</template>

<script>
/**
 * BlCheckTag 可选标签组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlCheckTag',
	model: {
		prop: 'checked',
		event: 'change'
	},
	props: {
		/**
		 * 文本内容
		 */
		text: {
			type: String,
			default: ''
		},
		/**
		 * 是否选中
		 */
		checked: {
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
		 * 标签大小
		 */
		size: {
			type: String,
			default: 'medium' // small | medium | large
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
		checkTagClass() {
			const classes = ['bl-checktag']
			classes.push(`bl-checktag--${this.size}`)
			if (this.checked) {
				classes.push('bl-checktag--checked')
			}
			if (this.disabled) {
				classes.push('bl-checktag--disabled')
			}
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		checkTagStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		}
	},
	methods: {
		handleClick(e) {
			if (this.disabled) {
				return
			}
			const newChecked = !this.checked
			this.$emit('change', newChecked)
			this.$emit('input', newChecked)
			this.$emit('click', e)
		}
	}
}
</script>

<style scoped>
.bl-checktag {
	display: inline-flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 4px 12px;
	border: 1px solid #dcdfe6;
	border-radius: 16px;
	background-color: #fff;
	color: #606266;
	font-size: 13px;
	box-sizing: border-box;
	cursor: pointer;
}

.bl-checktag--small {
	padding: 2px 8px;
	font-size: 11px;
}

.bl-checktag--large {
	padding: 6px 16px;
	font-size: 15px;
}

.bl-checktag--checked {
	border-color: var(--bl-primary-color, #007aff);
	background-color: var(--bl-primary-color, #007aff);
	color: #fff;
}

.bl-checktag--disabled {
	opacity: 0.5;
	cursor: not-allowed;
}

.bl-checktag__text {
	font-size: inherit;
	color: inherit;
}
</style>

