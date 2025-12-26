<template>
	<view 
		:class="['bl-back-top', visible ? 'bl-back-top--visible' : '']"
		:style="backTopStyle"
		@click="handleClick"
	>
		<view class="bl-back-top__button">
			<slot>
				<bl-icon 
					name="up" 
					:size="40"
					color="var(--bl-text-color-inverse, #fff)"
					class="bl-back-top__icon"
				></bl-icon>
			</slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'BlBackTop',
		props: {
			/**
			 * 滚动高度达到此值才显示
			 */
			visibilityHeight: {
				type: Number,
				default: 400
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
				visible: false,
				scrollTop: 0
			}
		},
		computed: {
			backTopStyle() {
				return this.customStyle || ''
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
			this.visible = e.scrollTop >= this.visibilityHeight
		},
		methods: {
			handleClick() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				})
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>

