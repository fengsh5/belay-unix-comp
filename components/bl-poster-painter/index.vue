<template>
	<view :class="posterPainterClass" :style="posterPainterStyle">
		<!-- #ifdef APP || H5 -->
		<canvas
			:id="canvasId"
			type="2d"
			:style="canvasStyle"
			:disable-scroll="true"
			@touchstart="handleTouchStart"
			@touchmove="handleTouchMove"
			@touchend="handleTouchEnd"
		></canvas>
		<!-- #endif -->
		
		<!-- #ifdef MP -->
		<canvas
			:canvas-id="canvasId"
			:style="canvasStyle"
			:disable-scroll="true"
			@touchstart="handleTouchStart"
			@touchmove="handleTouchMove"
			@touchend="handleTouchEnd"
		></canvas>
		<!-- #endif -->
		<slot></slot>
	</view>
</template>

<script>
/**
 * BlPosterPainter 海报绘制组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlPosterPainter',
	props: {
		/**
		 * 海报绘制配置
		 */
		palette: {
			type: Object,
			default: null
		},
		/**
		 * 画布宽度
		 */
		width: {
			type: [Number, String],
			default: 750
		},
		/**
		 * 画布高度
		 */
		height: {
			type: [Number, String],
			default: 1334
		},
		/**
		 * 缩放比例
		 */
		scaleRatio: {
			type: Number,
			default: 2
		},
		/**
		 * Canvas ID
		 */
		canvasId: {
			type: String,
			default: 'posterCanvas'
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
			ctx: null,
			canvasEl: null,
			isDrawing: false,
			currentPalette: null
		}
	},
	watch: {
		palette: {
			handler(newVal) {
				if (newVal) {
					this.currentPalette = newVal
					this.$nextTick(() => {
						this.render()
					})
				}
			},
			immediate: true
		}
	},
	mounted() {
		this.initCanvas()
		if (this.palette) {
			this.$nextTick(() => {
				this.render()
			})
		}
	},
	computed: {
		posterPainterClass() {
			const classes = ['bl-posterpainter']
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		posterPainterStyle() {
			const styles = []
			styles.push('position: relative')
			styles.push('width: 100%')
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		canvasStyle() {
			const w = this.canvasWidth
			const h = this.canvasHeight
			return `width: ${w}px; height: ${h}px; display: block;`
		},
		canvasWidth() {
			return this.getPixelValue(this.width)
		},
		canvasHeight() {
			return this.getPixelValue(this.height)
		}
	},
	methods: {
		/**
		 * 获取像素值
		 */
		getPixelValue(value) {
			if (typeof value == 'number') {
				return value
			}
			if (typeof value == 'string') {
				if (value.endsWith('px')) {
					const num = Number(value.replace('px', ''))
					if (!isNaN(num)) {
						return num
					}
				}
			}
			return 750
		},
		/**
		 * 初始化Canvas
		 */
		initCanvas() {
			// #ifdef APP || H5
			// APP/H5端使用 type="2d" 的canvas
			this.$nextTick(() => {
				const query = uni.createSelectorQuery().in(this)
				query.select(`#${this.canvasId}`)
					.fields({ node: true, size: true })
					.exec((res) => {
						if (res && res[0]) {
							const canvas = res[0].node
							const ctx = canvas.getContext('2d')
							const dpr = this.scaleRatio || 2
							canvas.width = this.canvasWidth * dpr
							canvas.height = this.canvasHeight * dpr
							ctx.scale(dpr, dpr)
							this.canvasEl = canvas
							this.ctx = ctx
							if (this.currentPalette) {
								this.render()
							}
						}
					})
			})
			// #endif
			
			// #ifdef MP
			// 小程序端使用 canvas-id
			this.ctx = uni.createCanvasContext(this.canvasId, this)
			// #endif
		},
		/**
		 * 渲染海报
		 */
		async render() {
			if (!this.currentPalette || !this.ctx) {
				return
			}
			
			try {
				this.isDrawing = true
				const palette = this.currentPalette
				
				// 设置画布背景
				if (palette.background) {
					this.drawRect({
						top: 0,
						left: 0,
						width: this.canvasWidth,
						height: this.canvasHeight,
						background: palette.background,
						borderRadius: palette.borderRadius || 0
					})
				}
				
				// 绘制所有视图
				if (palette.views && Array.isArray(palette.views)) {
					for (const view of palette.views) {
						await this.drawView(view)
					}
				}
				
				// 小程序端需要调用draw方法
				// #ifdef MP
				this.ctx.draw(false, () => {
					this.isDrawing = false
					this.exportImage()
				})
				// #endif
				
				// APP/H5端直接导出
				// #ifndef MP
				this.isDrawing = false
				this.exportImage()
				// #endif
			} catch (error) {
				console.error('[BlPosterPainter] render error:', error)
				this.isDrawing = false
				this.$emit('fail', error)
			}
		},
		/**
		 * 绘制单个视图
		 */
		async drawView(view) {
			if (!view || !this.ctx) {
				return
			}
			
			switch (view.type) {
				case 'image':
					await this.drawImage(view)
					break
				case 'text':
					this.drawText(view)
					break
				case 'rect':
					this.drawRect(view)
					break
				case 'circle':
					this.drawCircle(view)
					break
				case 'line':
					this.drawLine(view)
					break
				default:
					console.warn(`[BlPosterPainter] Unknown view type: ${view.type}`)
			}
		},
		/**
		 * 绘制图片
		 */
		async drawImage(view) {
			return new Promise((resolve, reject) => {
				// #ifdef APP || H5
				const img = this.canvasEl.createImage()
				img.onload = () => {
					const x = this.getPixelValue(view.left || 0)
					const y = this.getPixelValue(view.top || 0)
					const w = this.getPixelValue(view.width || 0)
					const h = this.getPixelValue(view.height || 0)
					
					if (view.borderRadius) {
						const r = this.getPixelValue(view.borderRadius)
						this.ctx.save()
						this.ctx.beginPath()
						this.ctx.moveTo(x + r, y)
						this.ctx.arcTo(x + w, y, x + w, y + h, r)
						this.ctx.arcTo(x + w, y + h, x, y + h, r)
						this.ctx.arcTo(x, y + h, x, y, r)
						this.ctx.arcTo(x, y, x + w, y, r)
						this.ctx.closePath()
						this.ctx.clip()
					}
					
					this.ctx.drawImage(img, x, y, w, h)
					if (view.borderRadius) {
						this.ctx.restore()
					}
					this.$emit('imgOk')
					resolve()
				}
				img.onerror = (error) => {
					this.$emit('imgErr', error)
					reject(error)
				}
				img.src = view.url || ''
				// #endif
				
				// #ifdef MP
				uni.getImageInfo({
					src: view.url || '',
					success: (res) => {
						const x = this.getPixelValue(view.left || 0)
						const y = this.getPixelValue(view.top || 0)
						const w = this.getPixelValue(view.width || 0)
						const h = this.getPixelValue(view.height || 0)
						
						if (view.borderRadius) {
							const r = this.getPixelValue(view.borderRadius)
							this.ctx.save()
							this.ctx.beginPath()
							this.ctx.arc(x + r, y + r, r, Math.PI, Math.PI * 1.5)
							this.ctx.arc(x + w - r, y + r, r, Math.PI * 1.5, Math.PI * 2)
							this.ctx.arc(x + w - r, y + h - r, r, 0, Math.PI * 0.5)
							this.ctx.arc(x + r, y + h - r, r, Math.PI * 0.5, Math.PI)
							this.ctx.closePath()
							this.ctx.clip()
						}
						
						this.ctx.drawImage(res.path, x, y, w, h)
						if (view.borderRadius) {
							this.ctx.restore()
						}
						this.$emit('imgOk')
						resolve()
					},
					fail: (error) => {
						this.$emit('imgErr', error)
						reject(error)
					}
				})
				// #endif
			})
		},
		/**
		 * 绘制文本
		 */
		drawText(view) {
			const x = this.getPixelValue(view.left || 0)
			const y = this.getPixelValue(view.top || 0)
			const fontSize = this.getPixelValue(view.fontSize || 16)
			const color = view.color || '#000000'
			const text = view.text || ''
			const textAlign = view.textAlign || 'left'
			
			// #ifdef APP || H5
			this.ctx.save()
			this.ctx.font = `${fontSize}px sans-serif`
			this.ctx.fillStyle = color
			this.ctx.textAlign = textAlign
			this.ctx.fillText(text, x, y)
			this.ctx.restore()
			// #endif
			
			// #ifdef MP
			this.ctx.setFontSize(fontSize)
			this.ctx.setFillColor(color)
			this.ctx.setTextAlign(textAlign)
			this.ctx.fillText(text, x, y)
			// #endif
		},
		/**
		 * 绘制矩形
		 */
		drawRect(view) {
			const x = this.getPixelValue(view.left || 0)
			const y = this.getPixelValue(view.top || 0)
			const w = this.getPixelValue(view.width || 0)
			const h = this.getPixelValue(view.height || 0)
			const background = view.background || '#ffffff'
			const borderRadius = view.borderRadius ? this.getPixelValue(view.borderRadius) : 0
			
			// #ifdef APP || H5
			this.ctx.save()
			if (borderRadius > 0) {
				this.ctx.beginPath()
				this.ctx.moveTo(x + borderRadius, y)
				this.ctx.arcTo(x + w, y, x + w, y + h, borderRadius)
				this.ctx.arcTo(x + w, y + h, x, y + h, borderRadius)
				this.ctx.arcTo(x, y + h, x, y, borderRadius)
				this.ctx.arcTo(x, y, x + w, y, borderRadius)
				this.ctx.closePath()
				this.ctx.fillStyle = background
				this.ctx.fill()
			} else {
				this.ctx.fillStyle = background
				this.ctx.fillRect(x, y, w, h)
			}
			this.ctx.restore()
			// #endif
			
			// #ifdef MP
			this.ctx.setFillStyle(background)
			if (borderRadius > 0) {
				this.ctx.beginPath()
				this.ctx.arc(x + borderRadius, y + borderRadius, borderRadius, Math.PI, Math.PI * 1.5)
				this.ctx.arc(x + w - borderRadius, y + borderRadius, borderRadius, Math.PI * 1.5, Math.PI * 2)
				this.ctx.arc(x + w - borderRadius, y + h - borderRadius, borderRadius, 0, Math.PI * 0.5)
				this.ctx.arc(x + borderRadius, y + h - borderRadius, borderRadius, Math.PI * 0.5, Math.PI)
				this.ctx.closePath()
				this.ctx.fill()
			} else {
				this.ctx.fillRect(x, y, w, h)
			}
			// #endif
		},
		/**
		 * 绘制圆形
		 */
		drawCircle(view) {
			const x = this.getPixelValue(view.left || 0) + (this.getPixelValue(view.r || 0))
			const y = this.getPixelValue(view.top || 0) + (this.getPixelValue(view.r || 0))
			const r = this.getPixelValue(view.r || 0)
			const background = view.background || '#000000'
			
			// #ifdef APP || H5
			this.ctx.save()
			this.ctx.beginPath()
			this.ctx.arc(x, y, r, 0, Math.PI * 2)
			this.ctx.fillStyle = background
			this.ctx.fill()
			if (view.borderWidth && view.borderColor) {
				this.ctx.strokeStyle = view.borderColor
				this.ctx.lineWidth = view.borderWidth
				this.ctx.stroke()
			}
			this.ctx.restore()
			// #endif
			
			// #ifdef MP
			this.ctx.beginPath()
			this.ctx.arc(x, y, r, 0, Math.PI * 2)
			this.ctx.setFillStyle(background)
			this.ctx.fill()
			if (view.borderWidth && view.borderColor) {
				this.ctx.setStrokeStyle(view.borderColor)
				this.ctx.setLineWidth(view.borderWidth)
				this.ctx.stroke()
			}
			// #endif
		},
		/**
		 * 绘制线条
		 */
		drawLine(view) {
			const x1 = this.getPixelValue(view.x || 0)
			const y1 = this.getPixelValue(view.y || 0)
			const x2 = this.getPixelValue(view.x2 || 0)
			const y2 = this.getPixelValue(view.y2 || 0)
			const color = view.color || '#000000'
			const lineWidth = this.getPixelValue(view.width || 1)
			
			// #ifdef APP || H5
			this.ctx.save()
			this.ctx.beginPath()
			this.ctx.moveTo(x1, y1)
			this.ctx.lineTo(x2, y2)
			this.ctx.strokeStyle = color
			this.ctx.lineWidth = lineWidth
			this.ctx.stroke()
			this.ctx.restore()
			// #endif
			
			// #ifdef MP
			this.ctx.beginPath()
			this.ctx.moveTo(x1, y1)
			this.ctx.lineTo(x2, y2)
			this.ctx.setStrokeStyle(color)
			this.ctx.setLineWidth(lineWidth)
			this.ctx.stroke()
			// #endif
		},
		/**
		 * 导出图片
		 */
		exportImage() {
			if (!this.ctx) {
				return
			}
			
			// #ifdef APP || H5
			this.$nextTick(() => {
				uni.canvasToTempFilePath({
					canvasId: this.canvasId,
					canvas: this.canvasEl,
					success: (res) => {
						this.$emit('complete', res.tempFilePath)
					},
					fail: (error) => {
						console.error('[BlPosterPainter] exportImage fail:', error)
						this.$emit('fail', error)
					}
				}, this)
			})
			// #endif
			
			// #ifdef MP
			uni.canvasToTempFilePath({
				canvasId: this.canvasId,
				success: (res) => {
					this.$emit('complete', res.tempFilePath)
				},
				fail: (error) => {
					console.error('[BlPosterPainter] exportImage fail:', error)
					this.$emit('fail', error)
				}
			}, this)
			// #endif
		},
		handleTouchStart(e) {
			// 触摸开始
			this.$emit('touchstart', e)
		},
		handleTouchMove(e) {
			// 触摸移动
			this.$emit('touchmove', e)
		},
		handleTouchEnd(e) {
			// 触摸结束
			this.$emit('touchend', e)
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

