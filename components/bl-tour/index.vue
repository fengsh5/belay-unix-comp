<template>
	<view v-if="visible" class="bl-tour" :style="tourStyle">
		<view 
			v-if="showMask"
			class="bl-tour__mask"
			:style="maskStyleComputed"
			@click="handleMaskClick"
		></view>
		<view 
			v-if="currentStep"
			:class="['bl-tour__popup', `bl-tour__popup--${currentStep.placement || 'bottom'}`]"
			:style="popupStyle"
		>
			<view class="bl-tour__header">
				<text v-if="currentStep.title" class="bl-tour__title">{{ currentStep.title }}</text>
				<view v-if="closable" class="bl-tour__close" @click="handleClose">
					<bl-icon 
						name="close" 
						:size="20"
						color="var(--bl-text-color-secondary, #8c8c8c)"
					></bl-icon>
				</view>
			</view>
			<view class="bl-tour__content">
				<slot name="step" :step="currentStep" :current="currentIndex">
					<slot :step="currentStep" :current="currentIndex">
						<text v-if="currentStep.description">{{ currentStep.description }}</text>
						<text v-else-if="currentStep.content">{{ currentStep.content }}</text>
					</slot>
				</slot>
			</view>
			<view class="bl-tour__footer">
				<view class="bl-tour__indicators">
					<view 
						v-for="(step, index) in steps" 
						:key="index"
						:class="['bl-tour__indicator', index === currentIndex ? 'bl-tour__indicator--active' : '']"
					></view>
				</view>
				<view class="bl-tour__actions">
					<bl-button 
						v-if="currentIndex > 0"
						size="small"
						@click="handlePrev"
					>
						{{ prevTextValue }}
					</bl-button>
					<bl-button 
						v-if="currentIndex < steps.length - 1"
						type="primary"
						size="small"
						@click="handleNext"
					>
						{{ nextTextValue }}
					</bl-button>
					<bl-button 
						v-else
						type="primary"
						size="small"
						@click="handleFinish"
					>
						{{ finishTextValue }}
					</bl-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 注意：Vue2 版本需要从 i18nProvider 获取 t 函数
	// 或者使用全局的 t 函数（如果可用）
	export default {
		name: 'BlTour',
		props: {
			/**
			 * 是否显示引导
			 */
			open: {
				type: Boolean,
				default: false
			},
			/**
			 * 引导步骤
			 */
			steps: {
				type: Array,
				default: () => []
			},
			/**
			 * 当前步骤索引
			 */
			current: {
				type: Number,
				default: null
			},
			/**
			 * 默认当前步骤索引
			 */
			defaultCurrent: {
				type: Number,
				default: 0
			},
			/**
			 * 是否显示遮罩层
			 */
			mask: {
				type: Boolean,
				default: true
			},
			/**
			 * 遮罩层样式
			 */
			maskStyle: {
				type: Object,
				default: () => ({})
			},
			/**
			 * 是否显示关闭按钮
			 */
			closable: {
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
		data() {
			return {
				visible: false,
				internalCurrent: 0
			}
		},
		computed: {
			tourStyle() {
				return this.customStyle || ''
			},
			showMask() {
				if (typeof this.mask === 'boolean') {
					return this.mask
				}
				return true
			},
			maskStyleComputed() {
				const style = []
				if (this.maskStyle && typeof this.mask === 'object') {
					// 处理遮罩层样式
				}
				return style.join('; ')
			},
			currentIndex() {
				return this.current != null ? this.current : this.internalCurrent
			},
			currentStep() {
				if (this.steps.length === 0 || this.currentIndex < 0 || this.currentIndex >= this.steps.length) {
					return null
				}
				return this.steps[this.currentIndex]
			},
			popupStyle() {
				if (this.currentStep && this.currentStep.style) {
					const style = []
					for (const key in this.currentStep.style) {
						style.push(`${key}: ${this.currentStep.style[key]}`)
					}
					return style.join('; ')
				}
				return ''
			},
			prevTextValue() {
				// 尝试从 i18nProvider 获取翻译
				if (this.$parent && this.$parent.$options.name === 'BlI18nProvider') {
					return this.$parent.t('comp.prev')
				}
				// 如果没有 i18nProvider，返回默认值
				return '上一步'
			},
			nextTextValue() {
				if (this.$parent && this.$parent.$options.name === 'BlI18nProvider') {
					return this.$parent.t('comp.next')
				}
				return '下一步'
			},
			finishTextValue() {
				if (this.$parent && this.$parent.$options.name === 'BlI18nProvider') {
					return this.$parent.t('comp.finish')
				}
				return '完成'
			}
		},
		watch: {
			open(newVal) {
				this.visible = newVal
			},
			current(newVal) {
				if (newVal != null) {
					this.internalCurrent = newVal
				}
			}
		},
		created() {
			this.visible = this.open
			if (this.current == null) {
				this.internalCurrent = this.defaultCurrent
			}
		},
		methods: {
			handleClose() {
				this.visible = false
				if (this.open == null) {
					// 非受控模式
				}
				this.$emit('update:open', false)
				this.$emit('close')
			},
			handleMaskClick() {
				// 点击遮罩层不关闭，需要点击关闭按钮
			},
			handleNext() {
				if (this.currentIndex < this.steps.length - 1) {
					const nextIndex = this.currentIndex + 1
					this.updateCurrent(nextIndex)
				}
			},
			handlePrev() {
				if (this.currentIndex > 0) {
					const prevIndex = this.currentIndex - 1
					this.updateCurrent(prevIndex)
				}
			},
			handleFinish() {
				this.handleClose()
				this.$emit('finish')
			},
			updateCurrent(index) {
				if (this.current == null) {
					this.internalCurrent = index
				}
				this.$emit('update:current', index)
				this.$emit('change', index)
			},
			next() {
				this.handleNext()
			},
			prev() {
				this.handlePrev()
			},
			goTo(step) {
				if (step >= 0 && step < this.steps.length) {
					this.updateCurrent(step)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>

