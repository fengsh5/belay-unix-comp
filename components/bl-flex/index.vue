<template>
	<view 
		:class="flexClass" 
		:style="flexStyle"
	>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'BlFlex',
		props: {
			/**
			 * 主轴对齐方式
			 */
			justify: {
				type: String,
				default: 'start'
			},
			/**
			 * 交叉轴对齐方式
			 */
			align: {
				type: String,
				default: 'start'
			},
			/**
			 * 方向
			 */
			direction: {
				type: String,
				default: 'row'
			},
			/**
			 * 是否自动换行
			 */
			wrap: {
				type: [Boolean, String],
				default: false
			},
			/**
			 * 间距大小
			 */
			gap: {
				type: [Number, String],
				default: 0
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
			flexClass() {
				const classes = ['bl-flex']
				
				// 方向
				if (this.direction) {
					classes.push(`bl-flex--${this.direction}`)
				}
				
				// 主轴对齐
				if (this.justify) {
					classes.push(`bl-flex--justify-${this.justify}`)
				}
				
				// 交叉轴对齐
				if (this.align) {
					classes.push(`bl-flex--align-${this.align}`)
				}
				
				// 换行
				if (this.wrap) {
					if (typeof this.wrap === 'boolean' && this.wrap) {
						classes.push('bl-flex--wrap')
					} else if (typeof this.wrap === 'string') {
						classes.push(`bl-flex--${this.wrap}`)
					}
				} else {
					classes.push('bl-flex--nowrap')
				}
				
				// 间距
				if (typeof this.gap === 'string' && this.gap !== '0') {
					classes.push(`bl-flex--gap-${this.gap}`)
				}
				
				// 自定义类名
				if (this.customClass) {
					classes.push(this.customClass)
				}
				
				return classes.join(' ')
			},
			flexStyle() {
				let style = ''
				
				// 自定义间距
				if (typeof this.gap === 'number' && this.gap > 0) {
					style += `gap: ${this.gap}rpx;`
				}
				
				// 自定义样式
				if (this.customStyle) {
					style += this.customStyle
				}
				
				return style
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>

