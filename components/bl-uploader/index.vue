<template>
	<view :class="uploaderClass" :style="uploaderStyle">
		<view 
			v-for="(file, index) in fileList" 
			:key="index"
			class="bl-uploader__item"
		>
			<bl-image
				v-if="file.url"
				:src="file.url"
				mode="aspectFill"
				class="bl-uploader__preview"
				:style="previewStyle"
				@click="handlePreview(index)"
			></bl-image>
			<view 
				v-if="deletable"
				class="bl-uploader__delete"
				@click.stop="handleDelete(index)"
			>
				<bl-icon name="close" class="bl-uploader__delete-icon"></bl-icon>
			</view>
			<view v-if="file.status === 'uploading'" class="bl-uploader__mask">
				<bl-loading :message="''"></bl-loading>
			</view>
		</view>
		<view 
			v-if="fileList.length < maxCount"
			class="bl-uploader__upload"
			:style="uploadStyle"
			@click="handleChoose"
		>
			<slot name="upload">
				<bl-icon name="plus" class="bl-uploader__upload-icon"></bl-icon>
				<text v-if="uploadText" class="bl-uploader__upload-text">
					{{ uploadText }}
				</text>
			</slot>
		</view>
	</view>
</template>

<script>
/**
 * BlUploader 上传组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlUploader',
	props: {
		/**
		 * 文件列表
		 */
		fileList: {
			type: Array,
			default: () => []
		},
		/**
		 * 最多可以选择的图片张数
		 */
		maxCount: {
			type: Number,
			default: 9
		},
		/**
		 * 是否显示删除按钮
		 */
		deletable: {
			type: Boolean,
			default: true
		},
		/**
		 * 上传提示文本
		 */
		uploadText: {
			type: String,
			default: ''
		},
		/**
		 * 图片预览大小
		 */
		size: {
			type: [Number, String],
			default: 160
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
		uploaderClass() {
			const classes = ['bl-uploader']
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		uploaderStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		},
		previewStyle() {
			const sizeValue = typeof this.size === 'number' ? `${this.size}px` : this.size
			return `width: ${sizeValue}; height: ${sizeValue}`
		},
		uploadStyle() {
			const sizeValue = typeof this.size === 'number' ? `${this.size}px` : this.size
			return `width: ${sizeValue}; height: ${sizeValue}`
		}
	},
	methods: {
		handleChoose() {
			// 选择图片
			uni.chooseImage({
				count: this.maxCount - this.fileList.length,
				success: (res) => {
					const tempFiles = res.tempFiles || []
					tempFiles.forEach((file) => {
						this.$emit('afterRead', {
							url: file.path,
							status: 'ready'
						})
					})
				},
				fail: (err) => {
					this.$emit('error', err)
				}
			})
		},
		handleDelete(index) {
			this.$emit('delete', index)
		},
		handlePreview(index) {
			const urls = this.fileList.map(file => file.url).filter(Boolean)
			uni.previewImage({
				urls: urls,
				current: urls[index] || ''
			})
			this.$emit('preview', index)
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

