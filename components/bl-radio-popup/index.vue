<template>
	<bl-popup
		:visible="visible"
		:overlay-closable="overlayClosable"
		position="bottom"
		:round="round"
		@close="handleClose"
	>
		<view class="bl-radiopopup__header" v-if="title">
			<text class="bl-radiopopup__title">{{ title }}</text>
			<bl-icon name="close" class="bl-radiopopup__close" @click="handleClose"></bl-icon>
		</view>
		<view class="bl-radiopopup__content">
			<bl-radio-group :value="value" @change="handleChange">
				<view 
					v-for="(option, index) in options" 
					:key="index"
					class="bl-radiopopup__item"
				>
					<bl-radio
						:value="option.value"
						:label="option.label"
						:disabled="option.disabled || false"
					></bl-radio>
				</view>
			</bl-radio-group>
		</view>
	</bl-popup>
</template>

<script>
/**
 * BlRadioPopup 单选框弹窗组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlRadioPopup',
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
		 * 当前选中的值
		 */
		value: {
			type: [String, Number],
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
		 * 点击遮罩层是否可关闭
		 */
		overlayClosable: {
			type: Boolean,
			default: true
		}
	},
	methods: {
		handleClose() {
			this.$emit('update:visible', false)
			this.$emit('close')
		},
		handleChange(value) {
			this.$emit('change', value)
			this.$emit('input', value)
			this.handleClose()
		}
	}
}
</script>

<style scoped>
.bl-radiopopup__header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 16px;
	border-bottom: 1px solid var(--bl-border-color, #eee);
}

.bl-radiopopup__title {
	font-size: 16px;
	font-weight: 600;
	color: var(--bl-text-color-primary, #333);
}

.bl-radiopopup__close {
	font-size: 20px;
	color: var(--bl-text-color-secondary, #666);
	cursor: pointer;
}

.bl-radiopopup__content {
	max-height: 60vh;
	overflow-y: auto;
	padding: 16px;
}

.bl-radiopopup__item {
	padding: 12px 0;
}
</style>

