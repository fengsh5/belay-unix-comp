<template>
	<video
		:class="videoClass"
		:style="videoStyle"
		:src="src"
		:poster="poster"
		:autoplay="autoplay"
		:loop="loop"
		:muted="muted"
		:controls="controls"
		:show-center-play-btn="showCenterPlayBtn"
		:show-fullscreen-btn="showFullscreenBtn"
		:show-play-btn="showPlayBtn"
		:show-progress="showProgress"
		:show-loading="showLoading"
		:enable-play-gesture="enablePlayGesture"
		:object-fit="objectFit"
		:initial-time="initialTime"
		:playback-rate="playbackRate"
		:direction="direction"
		:enable-progress-gesture="enableProgressGesture"
		:show-screen-lock-button="showScreenLockButton"
		:page-gesture="pageGesture"
		:play-strategy="playStrategy"
		:poster-size="posterSize"
		:header="header"
		:enable-metadata="enableMetadata"
		:enable-picture-in-picture="enablePictureInPicture"
		:enable-auto-rotation="enableAutoRotation"
		@play="handlePlay"
		@pause="handlePause"
		@ended="handleEnded"
		@error="handleError"
		@waiting="handleWaiting"
		@progress="handleProgress"
		@loadedmetadata="handleLoadedMetadata"
		@timeupdate="handleTimeUpdate"
		@fullscreenchange="handleFullscreenChange"
		@useraction="handleUserAction"
	></video>
</template>

<script>
/**
 * BlVideo 视频组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlVideo',
	props: {
		/**
		 * 视频资源地址
		 */
		src: {
			type: String,
			default: ''
		},
		/**
		 * 视频封面的图片网络资源地址或云文件ID
		 */
		poster: {
			type: String,
			default: ''
		},
		/**
		 * 是否自动播放
		 */
		autoplay: {
			type: Boolean,
			default: false
		},
		/**
		 * 是否循环播放
		 */
		loop: {
			type: Boolean,
			default: false
		},
		/**
		 * 是否静音播放
		 */
		muted: {
			type: Boolean,
			default: false
		},
		/**
		 * 是否显示默认播放控件
		 */
		controls: {
			type: Boolean,
			default: true
		},
		/**
		 * 是否显示中央播放按钮
		 */
		showCenterPlayBtn: {
			type: Boolean,
			default: true
		},
		/**
		 * 是否显示全屏按钮
		 */
		showFullscreenBtn: {
			type: Boolean,
			default: true
		},
		/**
		 * 是否显示播放按钮
		 */
		showPlayBtn: {
			type: Boolean,
			default: true
		},
		/**
		 * 是否显示进度条
		 */
		showProgress: {
			type: Boolean,
			default: true
		},
		/**
		 * 是否显示加载中提示
		 */
		showLoading: {
			type: Boolean,
			default: true
		},
		/**
		 * 是否开启播放手势
		 */
		enablePlayGesture: {
			type: Boolean,
			default: false
		},
		/**
		 * 视频缩放模式
		 */
		objectFit: {
			type: String,
			default: 'contain' // contain | fill | cover
		},
		/**
		 * 指定视频初始播放位置
		 */
		initialTime: {
			type: Number,
			default: 0
		},
		/**
		 * 播放速率
		 */
		playbackRate: {
			type: Number,
			default: 1
		},
		/**
		 * 视频播放方向
		 */
		direction: {
			type: Number,
			default: 0
		},
		/**
		 * 是否开启进度手势
		 */
		enableProgressGesture: {
			type: Boolean,
			default: true
		},
		/**
		 * 是否显示锁屏按钮
		 */
		showScreenLockButton: {
			type: Boolean,
			default: false
		},
		/**
		 * 是否开启页面手势
		 */
		pageGesture: {
			type: Boolean,
			default: false
		},
		/**
		 * 播放策略
		 */
		playStrategy: {
			type: Number,
			default: 0
		},
		/**
		 * 封面图大小
		 */
		posterSize: {
			type: String,
			default: 'contain'
		},
		/**
		 * 视频请求的header
		 */
		header: {
			type: Object,
			default: () => ({})
		},
		/**
		 * 是否启用元数据
		 */
		enableMetadata: {
			type: Boolean,
			default: false
		},
		/**
		 * 是否开启画中画
		 */
		enablePictureInPicture: {
			type: Boolean,
			default: false
		},
		/**
		 * 是否开启自动旋转
		 */
		enableAutoRotation: {
			type: Boolean,
			default: false
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
		videoClass() {
			const classes = ['bl-video']
			if (this.customClass) {
				classes.push(this.customClass)
			}
			return classes.join(' ')
		},
		videoStyle() {
			const styles = []
			if (this.customStyle) {
				styles.push(this.customStyle)
			}
			return styles.join('; ')
		}
	},
	methods: {
		handlePlay(e) {
			this.$emit('play', e)
		},
		handlePause(e) {
			this.$emit('pause', e)
		},
		handleEnded(e) {
			this.$emit('ended', e)
		},
		handleError(e) {
			this.$emit('error', e)
		},
		handleWaiting(e) {
			this.$emit('waiting', e)
		},
		handleProgress(e) {
			this.$emit('progress', e)
		},
		handleLoadedMetadata(e) {
			this.$emit('loadedMetadata', e)
		},
		handleTimeUpdate(e) {
			this.$emit('timeUpdate', e)
		},
		handleFullscreenChange(e) {
			this.$emit('fullscreenChange', e)
		},
		handleUserAction(e) {
			this.$emit('userAction', e)
		}
	}
}
</script>

<style lang="scss">
	/* 引入组件样式 */
	@import './index.scss';
</style>

