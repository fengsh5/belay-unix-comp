<template>
	<button 
		:class="buttonClass" 
		:style="buttonStyle"
		:type="type"
		:size="size"
		:plain="plain"
		:disabled="disabled"
		:loading="loading"
		:form-type="formType"
		:open-type="openType"
		:hover-class="hoverClass"
		:hover-start-time="hoverStartTime"
		:hover-stay-time="hoverStayTime"
		:app-parameter="appParameter"
		:hover-stop-propagation="hoverStopPropagation"
		:lang="lang"
		:session-from="sessionFrom"
		:send-message-title="sendMessageTitle"
		:send-message-path="sendMessagePath"
		:send-message-img="sendMessageImg"
		:show-message-card="showMessageCard"
		@click="handleClick"
		@getuserinfo="handleGetUserInfo"
		@contact="handleContact"
		@getphonenumber="handleGetPhoneNumber"
		@error="handleError"
		@launchapp="handleLaunchApp"
		@opensetting="handleOpenSetting"
		@chooseavatar="handleChooseAvatar"
		@getrealtimephonenumber="handleGetRealtimePhoneNumber"
	>
		<slot></slot>
	</button>
</template>

<script>
/**
 * BlButton 按钮组件
 * 支持 Vue 2 和 Vue 3
 */
export default {
	name: 'BlButton',
	props: {
		/**
		 * 按钮的样式类型
		 * @type {'primary' | 'default' | 'success' | 'warning' | 'danger'}
		 */
		type: {
			type: String,
			default: 'primary'
		},
		/**
		 * 按钮的大小
		 * @type {'large' | 'medium' | 'default' | 'small' | 'mini'}
		 */
		size: {
			type: String,
			default: 'default'
		},
		/**
		 * 按钮是否镂空，背景色透明
		 */
		plain: {
			type: Boolean,
			default: false
		},
		/**
		 * 是否禁用
		 */
		disabled: {
			type: Boolean,
			default: false
		},
		/**
		 * 名称前是否带 loading 图标
		 */
		loading: {
			type: Boolean,
			default: false
		},
		/**
		 * 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
		 */
		formType: {
			type: String,
			default: ''
		},
		/**
		 * 微信开放能力
		 */
		openType: {
			type: String,
			default: ''
		},
		/**
		 * 指定按钮按下去的样式类
		 */
		hoverClass: {
			type: String,
			default: 'button-hover'
		},
		/**
		 * 按住后多久出现点击态，单位毫秒
		 */
		hoverStartTime: {
			type: Number,
			default: 20
		},
		/**
		 * 手指松开后点击态保留时间，单位毫秒
		 */
		hoverStayTime: {
			type: Number,
			default: 70
		},
		/**
		 * 打开 APP 时，向 APP 传递的参数
		 */
		appParameter: {
			type: String,
			default: ''
		},
		/**
		 * 指定是否阻止本节点的祖先节点出现点击态
		 */
		hoverStopPropagation: {
			type: Boolean,
			default: false
		},
		/**
		 * 指定返回用户信息的语言
		 */
		lang: {
			type: String,
			default: 'en'
		},
		/**
		 * 会话来源
		 */
		sessionFrom: {
			type: String,
			default: ''
		},
		/**
		 * 会话内消息卡片标题
		 */
		sendMessageTitle: {
			type: String,
			default: ''
		},
		/**
		 * 会话内消息卡片点击跳转小程序路径
		 */
		sendMessagePath: {
			type: String,
			default: ''
		},
		/**
		 * 会话内消息卡片图片
		 */
		sendMessageImg: {
			type: String,
			default: ''
		},
		/**
		 * 显示会话内消息卡片
		 */
		showMessageCard: {
			type: Boolean,
			default: false
		},
		/**
		 * 按钮文字
		 */
		text: {
			type: String,
			default: ''
		}
	},
	computed: {
		buttonClass() {
			const classes = ['bl-button']
			
			// 按钮类型
			if (this.type && this.type != '') {
				classes.push(`bl-button--${this.type}`)
			} else {
				classes.push('bl-button--primary')
			}
			
			// 按钮尺寸
			if (this.size && this.size != 'default') {
				classes.push(`bl-button--${this.size}`)
			} else {
				classes.push('bl-button--default')
			}
			
			// 镂空按钮
			if (this.plain) {
				classes.push('bl-button--plain')
			}
			
			// 禁用状态
			if (this.disabled) {
				classes.push('bl-button--disabled')
			}
			
			// 加载状态
			if (this.loading) {
				classes.push('bl-button--loading')
			}
			
			return classes.join(' ')
		},
		buttonStyle() {
			return {}
		}
	},
	methods: {
		handleClick(e) {
			if (!this.disabled) {
				this.$emit('click', e)
			}
		},
		handleGetUserInfo(e) {
			this.$emit('getUserInfo', e)
		},
		handleContact(e) {
			this.$emit('contact', e)
		},
		handleGetPhoneNumber(e) {
			this.$emit('getPhoneNumber', e)
		},
		handleError(e) {
			this.$emit('error', e)
		},
		handleLaunchApp(e) {
			this.$emit('launchApp', e)
		},
		handleOpenSetting(e) {
			this.$emit('openSetting', e)
		},
		handleChooseAvatar(e) {
			this.$emit('chooseAvatar', e)
		},
		handleGetRealtimePhoneNumber(e) {
			this.$emit('getRealtimePhoneNumber', e)
		}
	}
}
</script>

<style lang="scss" scoped>
/* 引入组件样式 */
@import './index.scss';
</style>

