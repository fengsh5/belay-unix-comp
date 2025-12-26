<template>
	<!-- 线性进度条 -->
	<view v-if="type === 'line'" :class="progressClass" :style="progressStyle">
		<view class="bl-progress__outer" :style="outerStyle">
			<view class="bl-progress__inner" :style="innerStyle"></view>
		</view>
		<text v-if="showInfo" class="bl-progress__text" :style="textStyle">
			<slot>{{ percent }}%</slot>
		</text>
	</view>
	<!-- 圆形进度条 -->
	<view v-else :class="progressClass" :style="progressStyle">
		<bl-image :src="circleSvg" :width="widthValue" :height="widthValue" mode="aspectFit"></bl-image>
		<view v-if="showInfo" :class="contentClass" :style="contentStyle">
			<slot>{{ percent }}%</slot>
		</view>
	</view>
</template>

<script>
/**
 * BlProgress 进度条组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlProgress',
	props: {
		/**
		 * 进度条类型
		 */
		type: {
			type: String,
			default: 'line' // circle | line | dashboard
		},
		/**
		 * 进度百分比
		 */
		percent: {
			type: Number,
			default: 0
		},
		/**
		 * 进度条颜色
		 */
		activeColor: {
			type: String,
			default: '#09BB07'
		},
		/**
		 * 进度条背景色
		 */
		backgroundColor: {
			type: String,
			default: '#EBEBEB'
		},
		/**
		 * 进度条宽度（线性）或大小（圆形）
		 */
		width: {
			type: [Number, String],
			default: null
		},
		/**
		 * 进度条高度（仅线性）
		 */
		strokeWidth: {
			type: Number,
			default: 6
		},
		/**
		 * 进度条显示弧形（仅圆形）
		 */
		strokeLinecap: {
			type: String,
			default: 'round'
		},
		/**
		 * 是否显示进度文字
		 */
		showInfo: {
			type: Boolean,
			default: true
		},
		/**
		 * 显示进度内容类名
		 */
		contentClassName: {
			type: String,
			default: ''
		},
		/**
		 * 显示进度内容样式
		 */
		contentStyle: {
			type: String,
			default: ''
		},
		/**
		 * 字体大小
		 */
		fontSize: {
			type: Number,
			default: 16
		},
		/**
		 * 自定义样式
		 */
		customStyle: {
			type: String,
			default: ''
		}
	},
	computed: {
		progressClass() {
			return 'bl-progress'
		},
		progressStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		outerStyle() {
			const styles = []
			styles.push(`background-color: ${this.backgroundColor}`)
			if (this.width) {
				const widthValue = typeof this.width === 'number' ? `${this.width}px` : this.width
				styles.push(`width: ${widthValue}`)
			}
			styles.push(`height: ${this.strokeWidth}px`)
			return styles.join('; ')
		},
		innerStyle() {
			const styles = []
			styles.push(`background-color: ${this.activeColor}`)
			styles.push(`width: ${this.percent}%`)
			styles.push('height: 100%')
			return styles.join('; ')
		},
		textStyle() {
			return `font-size: ${this.fontSize}px`
		},
		contentClass() {
			const classes = ['bl-progress__content']
			if (this.contentClassName) {
				classes.push(this.contentClassName)
			}
			return classes.join(' ')
		},
		widthValue() {
			if (!this.width) {
				return '126px'
			}
			return typeof this.width === 'number' ? `${this.width}px` : this.width
		},
		circleSvg() {
			// 生成圆形进度条的 SVG
			const isDashboard = this.type === 'dashboard'
			const widthNum = typeof this.width === 'number' ? this.width : parseInt(this.width) || 126
			const relativeStrokeWidth = ((this.strokeWidth / widthNum) * 100).toFixed(1)
			const radius = 50 - parseFloat(relativeStrokeWidth) / 2
			const perimeter = 2 * Math.PI * radius
			const rate = isDashboard ? 0.75 : 1
			const strokeDashoffset = `${(-1 * perimeter * (1 - rate)) / 2}px`
			
			const trailPathStyle = `stroke-dasharray:${Math.floor(perimeter * rate)}px, ${Math.floor(perimeter)}px;stroke-dashoffset: ${strokeDashoffset}`
			const circlePathStyle = `stroke-dasharray: ${Math.floor(perimeter * rate * (this.percent / 100))}px, ${Math.floor(perimeter)}px;stroke-dashoffset: ${strokeDashoffset};transition: stroke-dasharray 0.6s ease 0s, stroke 0.6s ease`
			
			const trackPath = `M 50 50 m 0 ${isDashboard ? '' : '-'}${radius} a ${radius} ${radius} 0 1 1 0 ${isDashboard ? '-' : ''}${radius * 2} a ${radius} ${radius} 0 1 1 0 ${isDashboard ? '' : '-'}${radius * 2}`
			
			const svg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="${widthNum}" height="${widthNum}"><path d="${trackPath}" stroke="${this.backgroundColor}" stroke-width="${relativeStrokeWidth}" fill="none" stroke-linecap="${this.strokeLinecap}" style="${trailPathStyle}"></path><path d="${trackPath}" stroke="${this.activeColor}" fill="none" stroke-linecap="${this.strokeLinecap}" stroke-width="${this.percent ? relativeStrokeWidth : 0}" style="${circlePathStyle}"></path></svg>`
			
			return `data:image/svg+xml,${encodeURIComponent(svg)}`
		},
		contentStyle() {
			const styles = []
			if (this.contentStyle) {
				styles.push(this.contentStyle)
			}
			return styles.join('; ')
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

