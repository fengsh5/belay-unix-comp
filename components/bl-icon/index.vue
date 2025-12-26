<template>
	<view 
		:class="iconClass"
		:style="iconStyle"
		@click="handleClick"
	>
		<!-- 如果是 uni-app 内置图标类型，使用 icon 组件 -->
		<icon 
			v-if="isUniIconType"
			:type="iconType"
			:size="iconSize"
			:color="iconColor"
		></icon>
		<!-- 如果是 HTTP 图片或 data URI，使用 image 组件 -->
		<image 
			v-else-if="isImageUrl"
			:src="iconSource"
			:style="imageStyle"
			mode="aspectFit"
		></image>
		<!-- 如果是 SVG 字符串，转换为 data URI 后使用 image 组件 -->
		<image 
			v-else-if="isSvgString"
			:src="svgDataUri"
			:style="imageStyle"
			mode="aspectFit"
		></image>
	</view>
</template>

<script>
/**
 * SVG 图标染色
 */
function svgDye(svg, color) {
	if (!svg || !color) return svg
	const fillRegexp = /fill=["'][^"']+["']/gi
	const matched = svg.match(fillRegexp)
	if (matched) {
		const uniqueMatches = new Set(matched)
		if (uniqueMatches.size > 1) {
			// 多色图标，不处理
			return svg
		} else {
			return svg.replace(fillRegexp, () => `fill="${color}"`)
		}
	}
	return svg
}

/**
 * 判断是否为有效 URL
 */
function isValidUrl(url) {
	if (!url) return false
	return url.startsWith('http') || url.startsWith('data:') || url.startsWith('.') || url.startsWith('/')
}

/**
 * 将 SVG 转换为 data URI
 */
function transformSvg(svg, color) {
	const dyedSvg = svgDye(svg, color)
	return `data:image/svg+xml,${encodeURIComponent(dyedSvg)}`
}

/**
 * BlIcon 图标组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlIcon',
	props: {
		/**
		 * 自定义样式
		 */
		customStyle: {
			type: String,
			default: ''
		},
		/**
		 * 支持绑定 内置图标名称、http 图片、或 svg 字符串
		 */
		icon: {
			type: String,
			default: ''
		},
		/**
		 * 图标名称（兼容 alias）
		 */
		name: {
			type: String,
			default: ''
		},
		/**
		 * 图标宽度
		 */
		width: {
			type: [Number, String],
			default: '1em'
		},
		/**
		 * 对于多色 SVG 图标和 HTTP 图标无效
		 */
		color: {
			type: String,
			default: ''
		}
	},
	computed: {
		iconClass() {
			return 'bl-icon'
		},
		iconStyle() {
			const styles = []
			const widthValue = this.width
			if (widthValue) {
				styles.push(`width: ${typeof widthValue == 'number' ? widthValue + 'px' : widthValue}`)
				styles.push(`height: ${typeof widthValue == 'number' ? widthValue + 'px' : widthValue}`)
			}
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		iconSource() {
			return this.name || this.icon
		},
		isUniIconType() {
			const source = this.iconSource
			if (!source) return false
			const uniIconTypes = ['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear']
			return uniIconTypes.includes(source)
		},
		isImageUrl() {
			const source = this.iconSource
			return source && isValidUrl(source) && !this.isSvgString
		},
		isSvgString() {
			const source = this.iconSource
			return source && source.trim().startsWith('<svg')
		},
		iconType() {
			return this.iconSource
		},
		iconSize() {
			const widthValue = this.width
			if (typeof widthValue == 'number') {
				return widthValue
			}
			return widthValue
		},
		iconColor() {
			return this.color || '#333'
		},
		imageStyle() {
			const styles = []
			const widthValue = this.width
			if (widthValue) {
				styles.push(`width: ${typeof widthValue == 'number' ? widthValue + 'px' : widthValue}`)
				styles.push(`height: ${typeof widthValue == 'number' ? widthValue + 'px' : widthValue}`)
			}
			return styles.join('; ')
		},
		svgDataUri() {
			const source = this.iconSource
			if (!source || !this.isSvgString) return ''
			return transformSvg(source, this.color || '#333')
		}
	},
	methods: {
		handleClick(e) {
			this.$emit('click', e)
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

