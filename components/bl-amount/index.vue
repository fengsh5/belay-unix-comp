<template>
	<text :class="amountClass" :style="amountStyle">{{ displayAmount }}</text>
</template>

<script>
/**
 * BlAmount 金额组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlAmount',
	props: {
		/**
		 * 金额值
		 */
		value: {
			type: [Number, String],
			default: 0
		},
		/**
		 * 小数位数
		 */
		decimals: {
			type: Number,
			default: 2
		},
		/**
		 * 是否显示货币符号
		 */
		showSymbol: {
			type: Boolean,
			default: true
		},
		/**
		 * 货币符号
		 */
		symbol: {
			type: String,
			default: '¥'
		},
		/**
		 * 是否显示千分位分隔符
		 */
		thousandSeparator: {
			type: Boolean,
			default: true
		},
		/**
		 * 千分位分隔符
		 */
		separator: {
			type: String,
			default: ','
		},
		/**
		 * 金额大小
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
		amountClass() {
			const classes = ['bl-amount']
			classes.push(`bl-amount--${this.size}`)
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		amountStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		displayAmount() {
			let num = 0
			if (typeof this.value === 'number') {
				num = this.value
			} else if (typeof this.value === 'string') {
				num = Number(this.value) || 0
			}
			
			// 处理负数
			const isNegative = num < 0
			if (isNegative) {
				num = -num
			}
			
			// 格式化小数
			let formatted = num.toFixed(this.decimals)
			
			// 添加千分位分隔符
			if (this.thousandSeparator) {
				const parts = formatted.split('.')
				parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.separator)
				formatted = parts.join('.')
			}
			
			// 添加符号
			let result = formatted
			if (this.showSymbol) {
				result = `${this.symbol}${formatted}`
			}
			
			// 处理负数
			if (isNegative) {
				result = `-${result}`
			}
			
			return result
		}
	}
}
</script>

<style scoped>
.bl-amount {
	color: var(--bl-text-color-primary, #323233);
	font-weight: 500;
}

.bl-amount--small {
	font-size: 12px;
}

.bl-amount--medium {
	font-size: 16px;
}

.bl-amount--large {
	font-size: 24px;
	font-weight: 600;
}
</style>

