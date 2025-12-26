<template>
	<view 
		:class="rateClass" 
		:style="rateStyle"
	>
		<view 
			v-for="(item, index) in starList" 
			:key="index"
			:class="['bl-rate__item', item.disabled ? 'bl-rate__item--disabled' : '', item.readonly ? 'bl-rate__item--readonly' : '']"
			@click="handleClick(index)"
		>
			<view 
				v-if="allowHalf"
				:class="['bl-rate__star', item.isHalf ? 'bl-rate__star--half' : item.isFull ? 'bl-rate__star--full' : 'bl-rate__star--zero']"
			>
				<view v-if="item.isHalf" class="bl-rate__star-front">
					<slot name="character" :index="index" :value="currentValue">
						<text>{{ character }}</text>
					</slot>
				</view>
				<view :class="['bl-rate__star-back', item.isHalf ? '' : item.isFull ? '' : 'bl-rate__star--zero']">
					<slot name="character" :index="index" :value="currentValue">
						<text>{{ character }}</text>
					</slot>
				</view>
			</view>
			<view 
				v-else
				:class="['bl-rate__star', item.isFull ? 'bl-rate__star--full' : 'bl-rate__star--zero']"
			>
				<slot name="character" :index="index" :value="currentValue">
					<text>{{ character }}</text>
				</slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'BlRate',
		props: {
			/**
			 * 当前值
			 */
			value: {
				type: Number,
				default: 0
			},
			/**
			 * 默认值
			 */
			defaultValue: {
				type: Number,
				default: 0
			},
			/**
			 * 星星总数
			 */
			count: {
				type: Number,
				default: 5
			},
			/**
			 * 是否允许半选
			 */
			allowHalf: {
				type: Boolean,
				default: false
			},
			/**
			 * 是否允许清除
			 */
			allowClear: {
				type: Boolean,
				default: true
			},
			/**
			 * 是否只读
			 */
			readonly: {
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
			 * 自定义字符
			 */
			character: {
				type: String,
				default: '★'
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
				internalValue: 0
			}
		},
		computed: {
			currentValue() {
				return this.value != null ? this.value : this.internalValue
			},
			rateClass() {
				const classes = ['bl-rate']
				if (this.disabled) {
					classes.push('bl-rate--disabled')
				}
				if (this.readonly) {
					classes.push('bl-rate--readonly')
				}
				if (this.customClass) {
					classes.push(this.customClass)
				}
				return classes.join(' ')
			},
			rateStyle() {
				return this.customStyle || ''
			},
			starList() {
				const list = []
				const value = this.currentValue
				const count = this.count || 5
				
				for (let i = 0; i < count; i++) {
					const starValue = i + 1
					const isFull = starValue <= value
					const isHalf = this.allowHalf && starValue - 0.5 <= value && value < starValue
					
					list.push({
						isFull,
						isHalf,
						disabled: this.disabled,
						readonly: this.readonly
					})
				}
				
				return list
			}
		},
		created() {
			if (this.value == null) {
				this.internalValue = this.defaultValue || 0
			}
		},
		methods: {
			handleClick(index) {
				if (this.disabled || this.readonly) {
					return
				}
				
				const newValue = index + 1
				
				// 如果允许清除且点击的是当前值，则清除
				if (this.allowClear && newValue === this.currentValue) {
					this.updateValue(0)
					return
				}
				
				this.updateValue(newValue)
			},
			updateValue(value) {
				if (this.value == null) {
					this.internalValue = value
				}
				this.$emit('update:value', value)
				this.$emit('change', value)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>

