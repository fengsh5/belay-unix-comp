<template>
	<view 
		:class="hairlineClass"
		:style="hairlineStyle"
	></view>
</template>

<script>
/**
 * BlHairline 细线组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlHairline',
	props: {
		/**
		 * 细线位置，可选值：top | right | bottom | left | all
		 */
		placement: {
			type: [String, Array],
			default: 'bottom'
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
		hairlineClass() {
			const classes = ['bl-hairline']
			const placements = Array.isArray(this.placement) ? this.placement : [this.placement]
			placements.forEach(pos => {
				if (pos) {
					classes.push(`bl-hairline--${pos}`)
				}
			})
			return classes.join(' ')
		},
		hairlineStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		}
	}
}
</script>

<style scoped>
.bl-hairline {
	position: relative;
}

.bl-hairline--top::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 1px;
	background-color: var(--bl-border-color, #eee);
	transform: scaleY(0.5);
}

.bl-hairline--right::after {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	width: 1px;
	background-color: var(--bl-border-color, #eee);
	transform: scaleX(0.5);
}

.bl-hairline--bottom::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 1px;
	background-color: var(--bl-border-color, #eee);
	transform: scaleY(0.5);
}

.bl-hairline--left::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 1px;
	background-color: var(--bl-border-color, #eee);
	transform: scaleX(0.5);
}

.bl-hairline--all::before,
.bl-hairline--all::after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border: 1px solid var(--bl-border-color, #eee);
	transform: scale(0.5);
	transform-origin: 0 0;
}
</style>

