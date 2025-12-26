<template>
	<view class="bl-watermark" :style="watermarkStyle">
		<canvas 
			:canvas-id="canvasId"
			:id="canvasId"
			class="bl-watermark__canvas"
			:style="canvasStyle"
		></canvas>
		<view class="bl-watermark__wrapper">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'BlWatermark',
		props: {
			/**
			 * 水印内容
			 */
			content: {
				type: [String, Array],
				default: ''
			},
			/**
			 * 水印宽度
			 */
			width: {
				type: Number,
				default: 120
			},
			/**
			 * 水印高度
			 */
			height: {
				type: Number,
				default: 64
			},
			/**
			 * 水印图片地址
			 */
			image: {
				type: String,
				default: ''
			},
			/**
			 * 水印文字样式
			 */
			font: {
				type: Object,
				default: () => ({
					color: 'rgba(0, 0, 0, 0.15)',
					fontSize: 16,
					fontFamily: 'sans-serif',
					fontWeight: 'normal'
				})
			},
			/**
			 * 水印旋转角度
			 */
			rotate: {
				type: Number,
				default: -22
			},
			/**
			 * 水印透明度
			 */
			opacity: {
				type: Number,
				default: 1
			},
			/**
			 * 水印间距
			 */
			gap: {
				type: Array,
				default: () => [100, 100]
			},
			/**
			 * 水印偏移量
			 */
			offset: {
				type: Array,
				default: () => [0, 0]
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
				canvasId: `watermark-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
			}
		},
		computed: {
			watermarkStyle() {
				return this.customStyle || ''
			},
			canvasStyle() {
				return 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0;'
			}
		},
		mounted() {
			this.drawWatermark()
		},
		watch: {
			content() {
				this.drawWatermark()
			},
			image() {
				this.drawWatermark()
			}
		},
		methods: {
			drawWatermark() {
				// 在 uni-app 中，需要使用 canvas 绘制水印
				// 这里简化处理，实际需要根据 content 或 image 绘制
				const ctx = uni.createCanvasContext(this.canvasId, this)
				
				// TODO: 实际需要使用 canvas API 绘制水印图案
				// 这里只是占位实现
				
				ctx.draw(false, () => {
					// 绘制完成
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>

