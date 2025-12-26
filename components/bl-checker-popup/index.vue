<template>
	<bl-popup
		:visible="visible"
		:overlay-closable="overlayClosable"
		position="bottom"
		:round="round"
		@close="handleClose"
	>
		<view class="bl-checkerpopup__header" v-if="title">
			<text class="bl-checkerpopup__title">{{ title }}</text>
			<bl-icon name="close" class="bl-checkerpopup__close" @click="handleClose"></bl-icon>
		</view>
		<view class="bl-checkerpopup__content">
			<bl-checker
				v-for="(option, index) in options" 
				:key="index"
				:type="type"
				:value="option.value"
				:checked="isChecked(option.value)"
				:disabled="option.disabled || false"
				@change="handleItemChange(option.value, $event)"
			>
				<text>{{ option.label }}</text>
			</bl-checker>
		</view>
		<view v-if="showConfirm" class="bl-checkerpopup__footer">
			<bl-button type="primary" :text="confirmTextValue" @click="handleConfirm"></bl-button>
		</view>
	</bl-popup>
</template>

<script>
/**
 * BlCheckerPopup 选择器弹窗组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlCheckerPopup',
	model: {
		prop: 'visible',
		event: 'update:visible'
	},
	props: {
		/**
		 * 是否显示
		 */
		visible: {
			type: Boolean,
			default: false
		},
		/**
		 * 标题
		 */
		title: {
			type: String,
			default: ''
		},
		/**
		 * 类型
		 */
		type: {
			type: String,
			default: 'checkbox' // checkbox | radio
		},
		/**
		 * 选项列表
		 */
		options: {
			type: Array,
			default: () => []
		},
		/**
		 * 当前选中的值（radio为单个值，checkbox为数组）
		 */
		value: {
			type: [String, Number, Array],
			default: null
		},
		/**
		 * 是否显示圆角
		 */
		round: {
			type: Boolean,
			default: true
		},
		/**
		 * 是否显示确认按钮
		 */
		showConfirm: {
			type: Boolean,
			default: true
		},
		/**
		 * 确认按钮文本
		 */
		confirmText: {
			type: String,
			default: '确定'
		},
		/**
		 * 点击遮罩层是否可关闭
		 */
		overlayClosable: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			currentValue: null
		}
	},
	watch: {
		value: {
			handler(newVal) {
				this.currentValue = newVal
			},
			immediate: true
		}
	},
	computed: {
		confirmTextValue() {
			return this.confirmText || '确定'
		}
	},
	methods: {
		handleClose() {
			this.$emit('update:visible', false)
			this.$emit('close')
		},
		isChecked(value) {
			if (this.type === 'radio') {
				return this.currentValue == value
			} else {
				const values = Array.isArray(this.currentValue) ? this.currentValue : []
				return values.includes(value)
			}
		},
		handleItemChange(value, checked) {
			if (this.type === 'radio') {
				this.currentValue = checked ? value : null
				this.$emit('change', this.currentValue)
				this.$emit('input', this.currentValue)
			} else {
				let values = Array.isArray(this.currentValue) ? [...this.currentValue] : []
				if (checked) {
					if (!values.includes(value)) {
						values.push(value)
					}
				} else {
					const index = values.indexOf(value)
					if (index > -1) {
						values.splice(index, 1)
					}
				}
				this.currentValue = values
				this.$emit('change', this.currentValue)
				this.$emit('input', this.currentValue)
			}
		},
		handleConfirm() {
			this.$emit('confirm', this.currentValue)
			this.handleClose()
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

