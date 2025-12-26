<template>
	<view :class="checkerClass" :style="checkerStyle" @click="handleClick">
		<bl-checkbox
			v-if="type === 'checkbox'"
			:checked="checked"
			:disabled="disabled"
		></bl-checkbox>
		<bl-radio
			v-else-if="type === 'radio'"
			:checked="checked"
			:disabled="disabled"
		></bl-radio>
		<view class="bl-checker__content">
			<slot></slot>
		</view>
	</view>
</template>

<script>
/**
 * BlChecker 选择器组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlChecker',
	model: {
		prop: 'checked',
		event: 'change'
	},
	props: {
		/**
		 * 类型
		 */
		type: {
			type: String,
			default: 'checkbox' // checkbox | radio
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
		 * 值
		 */
		value: {
			type: [String, Number],
			default: ''
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
		checkerClass() {
			const classes = ['bl-checker']
			if (this.checked) {
				classes.push('bl-checker--checked')
			}
			if (this.disabled) {
				classes.push('bl-checker--disabled')
			}
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		checkerStyle() {
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
.bl-checker {
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 12px 16px;
	background-color: #fff;
	box-sizing: border-box;
	cursor: pointer;
}

.bl-checker--disabled {
	opacity: 0.5;
	cursor: not-allowed;
}

.bl-checker__content {
	flex: 1;
	margin-left: 8px;
}
</style>

