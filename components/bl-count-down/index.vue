<template>
	<view :class="countDownClass" :style="countDownStyle">
		<slot v-if="renderContent" :data="countDownData"></slot>
		<template v-else>
			<view v-if="countDownData.day != '00'" :class="itemClass" :style="itemStyleValue">
				<text>{{ countDownData.day }}</text>
			</view>
			<text v-if="countDownData.day != '00' && separateData.dayUnit" :class="delimiterClass" :style="delimiterStyleValue">{{ separateData.dayUnit }}</text>
			<view :class="itemClass" :style="itemStyleValue">
				<text>{{ countDownData.hour }}</text>
			</view>
			<text v-if="separateData.hourUnit" :class="delimiterClass" :style="delimiterStyleValue">{{ separateData.hourUnit }}</text>
			<view :class="itemClass" :style="itemStyleValue">
				<text>{{ countDownData.minute }}</text>
			</view>
			<text v-if="separateData.minuteUnit" :class="delimiterClass" :style="delimiterStyleValue">{{ separateData.minuteUnit }}</text>
			<view :class="itemClass" :style="itemStyleValue">
				<text>{{ countDownData.second }}</text>
			</view>
			<text v-if="separateData.secondUnit" :class="delimiterClass" :style="delimiterStyleValue">{{ separateData.secondUnit }}</text>
		</template>
	</view>
</template>

<script>
/**
 * BlCountDown 倒计时组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlCountDown',
	props: {
		/**
		 * 组件中item的类名
		 */
		itemClassName: {
			type: String,
			default: ''
		},
		/**
		 * 组件中item的样式
		 */
		itemStyle: {
			type: String,
			default: ''
		},
		/**
		 * 组件中分割线的类名
		 */
		delimiterClassName: {
			type: String,
			default: ''
		},
		/**
		 * 组件中分割线的样式
		 */
		delimiterStyle: {
			type: String,
			default: ''
		},
		/**
		 * 延时多久执行一次定时操作（单位：ms）
		 */
		duration: {
			type: Number,
			default: 1000
		},
		/**
		 * 自定义分隔符
		 */
		separateData: {
			type: Object,
			default: () => ({
				dayUnit: ' ',
				hourUnit: ':',
				minuteUnit: ':',
				secondUnit: ''
			})
		},
		/**
		 * 表示 futureTime 为毫秒形式的剩余时间
		 */
		isRemainTime: {
			type: Boolean,
			default: false
		},
		/**
		 * 目标时间
		 */
		futureTime: {
			type: [Number, String, Date],
			default: null
		},
		/**
		 * 自定义样式
		 */
		customStyle: {
			type: String,
			default: ''
		},
		/**
		 * 自定义渲染内容函数
		 */
		renderContent: {
			type: Function,
			default: null
		}
	},
	data() {
		return {
			remainingTime: 0,
			timer: null,
			countDownData: {
				day: '00',
				hour: '00',
				minute: '00',
				second: '00'
			}
		}
	},
	computed: {
		countDownClass() {
			return 'bl-countdown'
		},
		countDownStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		itemClass() {
			const classes = ['bl-countdown__item']
			if (this.itemClassName) {
				classes.push(this.itemClassName)
			}
			return classes.join(' ')
		},
		itemStyleValue() {
			const styles = []
			if (this.itemStyle) {
				styles.push(this.itemStyle)
			}
			return styles.join('; ')
		},
		delimiterClass() {
			const classes = ['bl-countdown__delimiter']
			if (this.delimiterClassName) {
				classes.push(this.delimiterClassName)
			}
			return classes.join(' ')
		},
		delimiterStyleValue() {
			const styles = []
			if (this.delimiterStyle) {
				styles.push(this.delimiterStyle)
			}
			return styles.join('; ')
		}
	},
	methods: {
		formatTime(ms) {
			const totalSeconds = Math.floor(ms / 1000)
			const day = Math.floor(totalSeconds / 86400)
			const hour = Math.floor((totalSeconds % 86400) / 3600)
			const minute = Math.floor((totalSeconds % 3600) / 60)
			const second = totalSeconds % 60
			
			return {
				day: String(day).padStart(2, '0'),
				hour: String(hour).padStart(2, '0'),
				minute: String(minute).padStart(2, '0'),
				second: String(second).padStart(2, '0')
			}
		},
		startCountDown() {
			if (this.timer) {
				clearInterval(this.timer)
			}
			
			const update = () => {
				if (this.isRemainTime) {
					this.remainingTime = this.futureTime
				} else {
					const future = new Date(this.futureTime).getTime()
					const now = Date.now()
					this.remainingTime = Math.max(0, future - now)
				}
				
				if (this.remainingTime <= 0) {
					clearInterval(this.timer)
					this.$emit('finish')
					return
				}
				
				this.countDownData = this.formatTime(this.remainingTime)
				this.$emit('change', this.countDownData)
			}
			
			update()
			this.timer = setInterval(update, this.duration)
		},
		stop() {
			if (this.timer) {
				clearInterval(this.timer)
				this.timer = null
			}
		},
		reset() {
			this.stop()
			this.remainingTime = 0
			this.countDownData = {
				day: '00',
				hour: '00',
				minute: '00',
				second: '00'
			}
		}
	},
	watch: {
		futureTime: {
			handler() {
				this.startCountDown()
			},
			immediate: true
		}
	},
	beforeDestroy() {
		this.stop()
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

