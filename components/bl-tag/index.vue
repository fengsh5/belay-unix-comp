<template>
	<view 
		:class="tagClass" 
		:style="tagStyle"
		@click="handleClick"
	>
		<bl-icon 
			v-if="icon" 
			:name="icon" 
			:class="iconClass"
			:color="iconColor"
		></bl-icon>
		<text class="bl-tag__text">
		<slot></slot>
		</text>
		<bl-icon 
			v-if="closeable" 
			name="close" 
			class="bl-tag__close"
			@click.stop="handleClose"
		></bl-icon>
	</view>
</template>

<script>
/**
 * BlTag 标签组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlTag',
	props: {
		/**
		 * 标签类型
		 */
		type: {
			type: String,
			default: 'primary' // primary | default | success | warning | danger
		},
		/**
		 * 标签大小
		 */
		size: {
			type: String,
			default: 'medium' // small | medium | large
		},
		/**
		 * 标签样式效果
		 */
		effect: {
			type: String,
			default: 'light' // dark | light | plain
		},
		/**
		 * 是否为圆角
		 */
		round: {
			type: Boolean,
			default: false
		},
		/**
		 * 是否可关闭
		 */
		closeable: {
			type: Boolean,
			default: false
		},
		/**
		 * 图标名称
		 */
		icon: {
			type: String,
			default: ''
		},
		/**
		 * 图标颜色
		 */
		iconColor: {
			type: String,
			default: ''
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
		tagClass() {
			const classes = ['bl-tag']
			classes.push(`bl-tag--${this.type}`)
			classes.push(`bl-tag--${this.size}`)
			classes.push(`bl-tag--${this.effect}`)
			if (this.round) {
				classes.push('bl-tag--round')
			}
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		tagStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		iconClass() {
			return 'bl-tag__icon'
		}
	},
	methods: {
		handleClick(e) {
			this.$emit('click', e)
		},
		handleClose(e) {
			this.$emit('close', e)
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

