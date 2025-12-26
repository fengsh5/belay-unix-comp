<!--
  Belay-Unix 组件库入口组件 (Vue2 兼容版本)
  
  这是一个占位组件，用于满足 HBuilderX 插件发布规范
  实际使用时，请直接使用各个独立组件，如：
  - <bl-button>
  - <bl-input>
  - <bl-dialog>
  - 等等...
  
  详细使用说明请参考 README.md
-->
<template>
	<view class="belay-unix">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'BelayUnix',
		props: {
			/**
			 * 自定义样式
			 */
			customStyle: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style>
	.belay-unix {
		/* 入口组件样式 */
	}
</style>

