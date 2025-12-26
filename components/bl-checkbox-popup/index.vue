<template>
	<bl-popup
		:visible="visible"
		:overlay-closable="overlayClosable"
		position="bottom"
		:round="round"
		@close="handleClose"
	>
		<view class="bl-checkboxpopup__header" v-if="title">
			<text class="bl-checkboxpopup__title">{{ title }}</text>
			<bl-icon name="close" class="bl-checkboxpopup__close" @click="handleClose"></bl-icon>
		</view>
		<view class="bl-checkboxpopup__content">
			<bl-checkbox-group :value="value" @change="handleChange">
				<view 
					v-for="(option, index) in options" 
					:key="index"
					class="bl-checkboxpopup__item"
				>
					<bl-checkbox
						:value="option.value"
						:label="option.label"
						:disabled="option.disabled || false"
					></bl-checkbox>
				</view>
			</bl-checkbox-group>
		</view>
		<view v-if="showConfirm" class="bl-checkboxpopup__footer">
			<bl-button type="primary" :text="confirmTextValue" @click="handleConfirm"></bl-button>
		</view>
	</bl-popup>
</template>

<script>
/**
 * BlCheckboxPopup 复选框弹窗组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlCheckboxPopup',
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
		 * 选项列表
		 */
		options: {
			type: Array,
			default: () => []
		},
		/**
		 * 当前选中的值数组
		 */
		value: {
			type: Array,
			default: () => []
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
			default: ''
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
			selectedValues: []
		}
	},
	watch: {
		value: {
			handler(newVal) {
				this.selectedValues = [...(newVal || [])]
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
		handleChange(values) {
			this.selectedValues = values || []
			this.$emit('change', this.selectedValues)
			this.$emit('input', this.selectedValues)
		},
		handleConfirm() {
			this.$emit('confirm', this.selectedValues)
			this.handleClose()
		}
	}
}
</script>

<style scoped>
.bl-checkboxpopup__header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 16px;
	border-bottom: 1px solid var(--bl-border-color, #eee);
}

.bl-checkboxpopup__title {
	font-size: 16px;
	font-weight: 600;
	color: var(--bl-text-color-primary, #333);
}

.bl-checkboxpopup__close {
	font-size: 20px;
	color: var(--bl-text-color-secondary, #666);
	cursor: pointer;
}

.bl-checkboxpopup__content {
	max-height: 60vh;
	overflow-y: auto;
	padding: 16px;
}

.bl-checkboxpopup__item {
	padding: 12px 0;
}

.bl-checkboxpopup__footer {
	padding: 16px;
	border-top: 1px solid var(--bl-border-color, #eee);
}
</style>

