/**
 * Belay-Unix 组件库 TypeScript 类型定义
 * 
 * 此文件提供组件库的完整 TypeScript 类型定义，用于代码提示和类型检查
 * 
 * 注意：
 * - 实际类型定义在 .uts 文件中，此文件仅用于 TypeScript 类型提示
 * - 在 uni-app x 项目中，请直接使用 .uts 文件中的类型定义
 * - 组件类型定义来自各组件的 type.uts，已直接迁移到此文件
 * - 此文件由 scripts/migrate-types-to-index.js 自动生成，请勿手动修改
 */

import type { App, DefineComponent } from 'vue'
import type { VueConstructor } from 'vue'

// ==================== 初始化函数类型 ====================
/**
 * 初始化组件库（从代码中加载）
 * 自动注册默认语言资源，并从本地存储恢复用户设置
 */
export declare function initBlComponents(): void

/**
 * 初始化组件库（从本地文件加载）
 * 优先从 JSON 文件加载配置，失败则使用代码中的默认值
 */
export declare function initBlComponentsFromFile(): Promise<void>

// ==================== 插件配置选项 ====================
export interface BelayUnixOptions {
	/**
	 * 是否自动初始化默认主题和语言资源
	 * @default true
	 */
	autoInit?: boolean
	
	/**
	 * 是否从本地文件加载配置（优先从文件加载，失败则使用代码中的默认值）
	 * @default false
	 */
	loadFromFile?: boolean
}

// ==================== Vue 插件类型 ====================
export interface BelayUnixPlugin {
	install(app: App, options?: BelayUnixOptions): void
}

export interface BelayUnixPluginVue2 {
	install(Vue: VueConstructor, options?: BelayUnixOptions): void
}


// ==================== 额外类型定义 ====================
export type AlertType = 'success' | 'info' | 'warning' | 'error'
export type AlertSize = 'small' | 'default' | 'large'
export type CalendarMode = 'month' | 'year'
export enum DialogAction {
	cancel = 'cancel',
	confirm = 'confirm'
}
export type DrawerPlacement = 'top' | 'right' | 'bottom' | 'left'
export type FlexAlign = 'start' | 'end' | 'center' | 'baseline' | 'stretch'
export type FlexJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'
export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'
export type FloatButtonType = 'default' | 'primary'
export type FloatButtonShape = 'circle' | 'square'
export type MenuMode = 'vertical' | 'horizontal' | 'inline'
export type MenuTheme = 'light' | 'dark'
export type MessageType = 'success' | 'error' | 'info' | 'warning' | 'loading'
export type MessageConfig = {
	content: string
	type?: MessageType | null
	duration?: number | null
	icon?: string | null
	customStyle?: string | null
	onClose?: (() => void) | null
}
export type MessageInstance = {
	close: () => void
}
export type NotificationType = 'success' | 'error' | 'info' | 'warning'
export type PaginationSize = 'default' | 'small'
export type PopoverPlacement = 'top' | 'topLeft' | 'topRight' | 'left' | 'leftTop' | 'leftBottom' | 'right' | 'rightTop' | 'rightBottom' | 'bottom' | 'bottomLeft' | 'bottomRight'
export enum PopupPosition {
	top = 'top',
	left = 'left',
	bottom = 'bottom',
	right = 'right',
	center = 'center'
}
export type ResultStatus = 'success' | 'error' | 'info' | 'warning' | '404' | '403' | '500'
export type SharePlatform = 'weixin' | 'qq' | 'sina' | 'copy'
export type PosterText = string | PosterTextDetail
export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline'
export type SpaceDirection = 'horizontal' | 'vertical'
export type TimelineMode = 'left' | 'alternate' | 'right'
export type TooltipPlacement = 'top' | 'topLeft' | 'topRight' | 'left' | 'leftTop' | 'leftBottom' | 'right' | 'rightTop' | 'rightBottom' | 'bottom' | 'bottomLeft' | 'bottomRight'

// 按钮相关
export type BlButtonType = 'primary' | 'default' | 'success' | 'warning' | 'danger'
export type BlButtonSize = 'large' | 'medium' | 'default' | 'small' | 'mini'

// 输入框相关
export type BlInputType = 'text' | 'number' | 'idcard' | 'digit' | 'tel' | 'safe-password' | 'nickname'
export type BlInputConfirmType = 'send' | 'search' | 'next' | 'go' | 'done'

// 标签相关
export type BlTagType = 'primary' | 'default' | 'success' | 'warning' | 'danger'
export type BlTagSize = 'small' | 'medium' | 'large'
export type BlTagEffect = 'dark' | 'light' | 'plain'

// 对话框相关
export type BlDialogTheme = 'default' | 'round-button'

// Picker 相关
export type BlPickerDateFields = 'year' | 'month' | 'day'

// 图片/视频相关
export type ImageMode = 'scaleToFill' | 'aspectFit' | 'aspectFill' | 'widthFix' | 'heightFix' | 'top' | 'bottom' | 'center' | 'left' | 'right' | 'top left' | 'top right' | 'bottom left' | 'bottom right'
export type VideoObjectFit = 'contain' | 'fill' | 'cover'

// 滚动视图相关
export type BlScrollViewRefresherDefaultStyle = 'black' | 'white' | 'none'

// 主题相关
export type BlThemeMode = 'light' | 'dark'

// 导航栏相关
export type BlNavigationBarTextStyle = 'black' | 'white'

// 开关相关
export type BlSwitchType = 'switch' | 'checkbox'

// 进度条相关
export type BlProgressType = 'circle' | 'line' | 'dashboard'

// 复选框/单选框相关
export type CheckerType = 'checkbox' | 'radio'

// 步骤条相关
export type BlStepsDirection = 'horizontal' | 'vertical'

// 评分相关
export type QRCodeErrorCorrectLevel = 'L' | 'M' | 'Q' | 'H'

// 触发行为相关
export type TriggerType = 'hover' | 'focus' | 'click' | 'contextMenu'

// 对齐方式相关
export type AlignType = 'left' | 'center' | 'right'
export type TextAlign = 'left' | 'center' | 'right'

// 空格类型
export type SpaceType = 'ensp' | 'emsp' | 'nbsp' | ''

// 尺寸类型（通用）
export type ComponentSize = 'small' | 'middle' | 'large'
export type ComponentSizeWithDefault = 'default' | 'middle' | 'small'

// 形状类型
export type ShapeType = 'circle' | 'square'

// 方向类型
export type DirectionType = 'horizontal' | 'vertical'

// 金额相关
export type AmountSize = 'small' | 'medium' | 'large'

// 头像相关
export type AvatarShape = 'circle' | 'square'

// 描述列表相关
export type DescriptionsSize = 'default' | 'middle' | 'small'

// 分段控制器相关
export type SegmentedSize = 'small' | 'middle' | 'large'

// 评分相关
export type RateCharacter = string

// 骨架屏相关
export type SkeletonAvatarSize = number | 'large' | 'small' | 'default'
export type SkeletonAvatarShape = 'circle' | 'square'

// 表格相关
export type TableSize = 'default' | 'middle' | 'small'
export type TableAlign = 'left' | 'center' | 'right'
export type TableFixed = 'left' | 'right'

// 选项卡相关
export type TabPanelKey = string

// 浮动按钮相关
export type FloatButtonSize = 'default' | 'large' | 'small'

// 空状态相关
export type EmptyType = 'error' | 'network' | 'empty' | 'default' | 'search' | 'custom'

// 单选框相关
export type CheckboxOption = {
	label: string
	value: string | number
	disabled?: boolean
}

export type RadioOption = {
	label: string
	value: string | number
	disabled?: boolean
}

export type CheckerOption = {
	label: string
	value: string | number
	disabled?: boolean
}

// 级联选择器相关
export type CascaderOption = {
	label: string
	value: string | number
	children?: Array<CascaderOption>
	disabled?: boolean
}

// 树形控件相关
export type TreeNodeData = {
	key: string | number
	title: string
	children?: Array<TreeNodeData>
	disabled?: boolean
	icon?: string
	selectable?: boolean
	checkable?: boolean
}

// 穿梭框相关
export type TransferItem = {
	key: string | number
	title: string
	description?: string
	disabled?: boolean
}

// 上传相关
export type UploadFile = {
	url: string
	name?: string
	size?: number
	type?: string
}

// 分享相关
export type SharePayload = {
	title?: string
	path?: string
	href?: string
	imageUrl?: string
	content?: string
	summary?: string
}

// 海报相关
export type PosterTextDetail = {
	text: string
	fontSize?: number
	color?: string
	x?: number
	y?: number
}
export type BlPosterDescription = {
	background?: string
	[key: string]: any
}
export type ShareAppMessageReturn = {
	title?: string
	path?: string
	imageUrl?: string
	[key: string]: any
}

export type Palette = {
	width: number
	height: number
	background?: string
	views?: Array<PaletteView>
}

export type PaletteView = {
	type: string
	url?: string
	text?: string
	css?: Record<string, any>
}

// 倒计时相关
export type CountDownSeparateData = {
	day?: string
	hour?: string
	minute?: string
	second?: string
}

export type CountDownData = {
	d: string
	h: string
	m: string
	s: string
}

// 标签栏相关
export type TabbarItem = {
	text: string
	icon?: string
	iconActive?: string
	path?: string
	badge?: string | number
}

// 国际化相关
export type Locale = {
	locale: string
	[key: string]: any
}

export type LanguageResources = Record<string, Locale>

// 主题相关
export type ThemeConfig = {
	colorPrimary?: string
	colorSuccess?: string
	colorWarning?: string
	colorError?: string
	colorInfo?: string
	colorTextBase?: string
	colorBgBase?: string
	[key: string]: any
}

// 水印相关
export type WatermarkFont = {
	color?: string
	fontSize?: number
	fontWeight?: string | number
	fontFamily?: string
	fontStyle?: string
}

// 引导相关
export type TourStep = {
	target: string
	title?: string
	description?: string
	placement?: string
}

// 表格列相关
export type TableColumn = {
	title: string
	dataIndex: string
	width?: number | string
	align?: TableAlign
	fixed?: TableFixed
	render?: (value: any, record: any, index: number) => any
}

export type TableColumnSlot = (params: { column: TableColumn, record: Record<string, any>, index: number }) => any

// ==================== 组件类型定义 ====================
export type BlAlertProps = {
	/**
	 * 指定警告提示的样式类型
	 */
	type?: AlertType
	
	/**
	 * 警告提示内容
	 */
	message?: string
	
	/**
	 * 警告提示的辅助性文字介绍
	 */
	description?: string
	
	/**
	 * 是否显示辅助图标
	 */
	showIcon?: boolean
	
	/**
	 * 自定义图标
	 */
	icon?: string
	
	/**
	 * 是否可关闭
	 */
	closable?: boolean
	
	/**
	 * 关闭按钮自定义文字
	 */
	closeText?: string
	
	/**
	 * 警告提示的尺寸
	 */
	size?: AlertSize
	
	/**
	 * 关闭时触发的回调函数
	 */
	onClose?: () => void
	
	/**
	 * 点击 Alert 时触发的回调函数
	 */
	onClick?: () => void
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlAlertEvents = {
	/**
	 * 关闭事件
	 */
	close?: () => void
	
	/**
	 * 点击事件
	 */
	click?: () => void
}
export type BlAlertSlots = {
	/**
	 * 默认插槽，警告提示内容
	 */
	default?: () => any
	
	/**
	 * 自定义图标
	 */
	icon?: () => any
	
	/**
	 * 自定义关闭按钮
	 */
	closeIcon?: () => any
	
	/**
	 * 自定义描述内容
	 */
	description?: () => any
}
export type BlAlertInstance = {
	// BlAlert 组件没有暴露的公共方法
}

export type BlAmountProps = {
	/**
	 * 金额数值
	 */
	value?: number | string
	
	/**
	 * 是否显示货币符号
	 */
	showSymbol?: boolean
	
	/**
	 * 货币符号
	 */
	symbol?: string
	
	/**
	 * 小数位数
	 */
	decimals?: number
	
	/**
	 * 是否使用千分位分隔符
	 */
	thousandSeparator?: boolean
	
	/**
	 * 千分位分隔符
	 */
	separator?: string
	
	/**
	 * 金额大小
	 */
	size?: AmountSize
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlAmountEvents = {
	// BlAmount 组件没有事件
}
export type BlAmountSlots = {
	// BlAmount 组件没有插槽
}
export type BlAmountInstance = {
	// BlAmount 组件没有暴露的公共方法
}

export type BlAutocompleteProps = {
	/**
	 * 当前值
	 */
	value?: string
	
	/**
	 * 默认值
	 */
	defaultValue?: string
	
	/**
	 * 输入框占位符
	 */
	placeholder?: string
	
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	
	/**
	 * 是否只读
	 */
	readonly?: boolean
	
	/**
	 * 数据源
	 */
	options?: Array<string | { value: string, label?: string }>
	
	/**
	 * 是否区分大小写
	 */
	caseSensitive?: boolean
	
	/**
	 * 自定义过滤函数
	 */
	filterOption?: (inputValue: string, option: string | { value: string, label?: string }) => boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlAutocompleteEvents = {
	/**
	 * 值改变事件
	 */
	change?: (value: string) => void
	
	/**
	 * 选择选项事件
	 */
	select?: (value: string, option: string | { value: string, label?: string }) => void
	
	/**
	 * 搜索事件
	 */
	search?: (value: string) => void
	
	/**
	 * 聚焦事件
	 */
	focus?: () => void
	
	/**
	 * 失焦事件
	 */
	blur?: () => void
}
export type BlAutocompleteSlots = {
	/**
	 * 默认插槽，自定义选项内容
	 */
	default?: (option: string | { value: string, label?: string }) => any
}
export type BlAutocompleteInstance = {
	/**
	 * 聚焦
	 */
	focus?: () => void
	
	/**
	 * 失焦
	 */
	blur?: () => void
}

export type BlAvatarProps = {
	/**
	 * 头像图片地址
	 */
	src?: string
	
	/**
	 * 是否为圆形
	 */
	round?: boolean
	
	/**
	 * 头像大小，支持数字（px）或字符串（如 'small', 'medium', 'large'）
	 */
	size?: number | string
	
	/**
	 * 图片裁剪、缩放的模式
	 */
	mode?: ImageMode
	
	/**
	 * 图片加载失败时的默认图
	 */
	errorImageSrc?: string
	
	/**
	 * 占位符文本（当没有图片时显示）
	 */
	placeholderText?: string
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlAvatarEvents = {
	/**
	 * 图片加载错误事件
	 */
	error?: (event: any) => void
	
	/**
	 * 图片加载完成事件
	 */
	load?: (event: any) => void
}
export type BlAvatarSlots = {
	/**
	 * 默认插槽，当没有图片时显示的内容
	 */
	default?: () => any
}
export type BlAvatarInstance = {
	// BlAvatar 组件没有暴露的公共方法
}

export type BlBackTopProps = {
	/**
	 * 滚动高度达到此值才显示
	 */
	visibilityHeight?: number
	
	/**
	 * 点击按钮的回调
	 */
	onClick?: () => void
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlBackTopEvents = {
	/**
	 * 点击事件
	 */
	click?: () => void
}
export type BlBackTopSlots = {
	/**
	 * 默认插槽，自定义按钮内容
	 */
	default?: () => any
}
export type BlBackTopInstance = {
	// BlBackTop 组件没有暴露的公共方法
}

export type BlBadgeProps = {
	/**
	 * 徽章显示值，为空时显示红点
	 */
	value?: string | number
	
	/**
	 * 徽章显示的最大值，超过时显示 value+
	 */
	max?: number
	
	/**
	 * 是否为红点模式（不显示数字）
	 */
	dot?: boolean
	
	/**
	 * 徽章颜色
	 */
	color?: string
	
	/**
	 * 徽章位置偏移量
	 */
	offset?: number[]
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlBadgeEvents = {
	// BlBadge 组件没有事件
}
export type BlBadgeSlots = {
	/**
	 * 默认插槽，徽章包裹的内容
	 */
	default?: () => any
}
export type BlBadgeInstance = {
	// BlBadge 组件没有暴露的公共方法
}

export type BlBottomBarProps = {
	/**
	 * 是否固定在底部
	 */
	fixed?: boolean
	
	/**
	 * 是否显示安全区域
	 */
	safeAreaBottom?: boolean
	
	/**
	 * 背景颜色
	 */
	backgroundColor?: string
	
	/**
	 * 高度
	 */
	height?: number | string
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlBottomBarEvents = {
	// BlBottomBar 组件没有事件
}
export type BlBottomBarSlots = {
	/**
	 * 默认插槽
	 */
	default?: () => any
}
export type BlBottomBarInstance = {
	// BlBottomBar 组件没有暴露的公共方法
}

export type BlButtonProps = {
	/**
	 * 按钮的样式类型
	 */
	type?: BlButtonType
	
	/**
	 * 按钮的大小
	 */
	size?: BlButtonSize
	
	/**
	 * 按钮是否镂空，背景色透明
	 */
	plain?: boolean
	
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	
	/**
	 * 名称前是否带 loading 图标
	 */
	loading?: boolean
	
	/**
	 * 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
	 */
	formType?: string
	
	/**
	 * 微信开放能力
	 */
	openType?: string
	
	/**
	 * 指定按钮按下去的样式类
	 */
	hoverClass?: string
	
	/**
	 * 按住后多久出现点击态，单位毫秒
	 */
	hoverStartTime?: number
	
	/**
	 * 手指松开后点击态保留时间，单位毫秒
	 */
	hoverStayTime?: number
	
	/**
	 * 打开 APP 时，向 APP 传递的参数
	 */
	appParameter?: string
	
	/**
	 * 指定是否阻止本节点的祖先节点出现点击态
	 */
	hoverStopPropagation?: boolean
	
	/**
	 * 指定返回用户信息的语言
	 */
	lang?: string
	
	/**
	 * 会话来源
	 */
	sessionFrom?: string
	
	/**
	 * 会话内消息卡片标题
	 */
	sendMessageTitle?: string
	
	/**
	 * 会话内消息卡片点击跳转小程序路径
	 */
	sendMessagePath?: string
	
	/**
	 * 会话内消息卡片图片
	 */
	sendMessageImg?: string
	
	/**
	 * 是否显示会话内消息卡片
	 */
	showMessageCard?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlButtonEvents = {
	/**
	 * 点击事件
	 */
	click?: (event: any) => void
	
	/**
	 * 获取用户信息事件
	 */
	getUserInfo?: (event: any) => void
	
	/**
	 * 联系客服事件
	 */
	contact?: (event: any) => void
	
	/**
	 * 获取手机号事件
	 */
	getPhoneNumber?: (event: any) => void
	
	/**
	 * 错误事件
	 */
	error?: (event: any) => void
	
	/**
	 * 打开 APP 事件
	 */
	launchApp?: (event: any) => void
	
	/**
	 * 打开设置事件
	 */
	openSetting?: (event: any) => void
	
	/**
	 * 选择头像事件
	 */
	chooseAvatar?: (event: any) => void
	
	/**
	 * 获取实时手机号事件
	 */
	getRealtimePhoneNumber?: (event: any) => void
}
export type BlButtonSlots = {
	/**
	 * 默认插槽，按钮内容
	 */
	default?: () => any
}
export type BlButtonInstance = {
	// BlButton 组件没有暴露的公共方法
}

export type BlCalendarProps = {
	/**
	 * 当前日期
	 */
	value?: Date | string
	
	/**
	 * 默认日期
	 */
	defaultValue?: Date | string
	
	/**
	 * 日历模式
	 */
	mode?: CalendarMode
	
	/**
	 * 是否全屏显示
	 */
	fullscreen?: boolean
	
	/**
	 * 自定义日期单元格内容
	 */
	dateCellRender?: (date: Date) => any
	
	/**
	 * 自定义月份单元格内容
	 */
	monthCellRender?: (date: Date) => any
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlCalendarEvents = {
	/**
	 * 日期选择事件
	 */
	select?: (date: Date) => void
	
	/**
	 * 面板改变事件
	 */
	panelChange?: (date: Date, mode: CalendarMode) => void
}
export type BlCalendarSlots = {
	/**
	 * 默认插槽，自定义日历内容
	 */
	default?: () => any
	
	/**
	 * 自定义日期单元格内容
	 */
	dateCell?: (date: Date) => any
	
	/**
	 * 自定义月份单元格内容
	 */
	monthCell?: (date: Date) => any
}
export type BlCalendarInstance = {
	// BlCalendar 组件没有暴露的公共方法
}

export type BlCardLayoutProps = {
	/**
	 * 是否显示边框
	 */
	border?: boolean
	
	/**
	 * 边框颜色
	 */
	borderColor?: string
	
	/**
	 * 是否显示圆角
	 */
	round?: boolean
	
	/**
	 * 圆角大小
	 */
	radius?: number
	
	/**
	 * 内边距
	 */
	padding?: number | string
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlCardLayoutEvents = {
	// BlCardLayout 组件没有事件
}
export type BlCardLayoutSlots = {
	/**
	 * 默认插槽
	 */
	default?: () => any
}
export type BlCardLayoutInstance = {
	// BlCardLayout 组件没有暴露的公共方法
}

export type BlCellProps = {
	/**
	 * 左侧标题
	 */
	title?: string
	
	/**
	 * 右侧内容
	 */
	value?: string
	
	/**
	 * 左侧图标
	 */
	icon?: string
	
	/**
	 * 左侧图标颜色
	 */
	iconColor?: string
	
	/**
	 * 是否显示右侧箭头
	 */
	arrow?: boolean
	
	/**
	 * 是否为链接（点击跳转）
	 */
	isLink?: boolean
	
	/**
	 * 箭头颜色
	 */
	arrowColor?: string
	
	/**
	 * 右侧内容颜色
	 */
	valueColor?: string
	
	/**
	 * 是否使用内边距
	 */
	padding?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlCellEvents = {
	/**
	 * 点击事件
	 */
	click?: (event: any) => void
}
export type BlCellSlots = {
	/**
	 * 默认插槽
	 */
	default?: () => any
	
	/**
	 * 右侧内容插槽
	 */
	value?: () => any
}
export type BlCellInstance = {
	// BlCell 组件没有暴露的公共方法
}

export type BlCheckTagProps = {
	/**
	 * 文本内容
	 */
	text?: string
	
	/**
	 * 是否选中
	 */
	checked?: boolean
	
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	
	/**
	 * 标签大小
	 */
	size?: ComponentSize
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlCheckTagEvents = {
	/**
	 * 值变化事件
	 */
	change?: (checked: boolean) => void
	
	/**
	 * 点击事件
	 */
	click?: (event: any) => void
}
export type BlCheckTagSlots = {
	/**
	 * 默认插槽，标签文本内容
	 */
	default?: () => any
}
export type BlCheckTagInstance = {
	// BlCheckTag 组件没有暴露的公共方法
}

export type BlCheckboxProps = {
	/**
	 * 选中状态
	 */
	checked?: boolean
	
	/**
	 * 禁用
	 */
	disabled?: boolean
	
	/**
	 * 选中颜色
	 */
	color?: string
	
	/**
	 * 只支持BlCheckboxGroup中使用
	 */
	value?: string | number | null
	
	/**
	 * 改变文本位置
	 */
	reverse?: boolean
	
	/**
	 * 文本
	 */
	label?: string
	
	/**
	 * label的颜色是否可变
	 */
	labelColorVariable?: boolean
	
	/**
	 * 圆形模式
	 */
	round?: boolean
	
	/**
	 * 设置大小
	 */
	width?: string | number | null
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlCheckboxEvents = {
	/**
	 * 值变化事件
	 */
	change?: (event: { detail: { checked: boolean } }) => void
}
export type BlCheckboxSlots = {
	/**
	 * 默认插槽，复选框标签内容
	 */
	default?: () => any
}
export type BlCheckboxInstance = {
	// BlCheckbox 组件没有暴露的公共方法
}

export type BlCheckboxGroupProps = {
	/**
	 * 选中值
	 */
	value?: Array<string | number>
	
	/**
	 * 禁用
	 */
	disabled?: boolean
	
	/**
	 * 选中颜色
	 */
	color?: string
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlCheckboxGroupEvents = {
	/**
	 * 值变化事件
	 */
	change?: (value: Array<string | number>) => void
}
export type BlCheckboxGroupSlots = {
	/**
	 * 默认插槽，BlCheckbox 组件
	 */
	default?: () => any
}
export type BlCheckboxGroupInstance = {
	// BlCheckboxGroup 组件没有暴露的公共方法
}

export type BlCheckboxPopupProps = {
	/**
	 * 是否显示
	 */
	visible?: boolean
	
	/**
	 * 标题
	 */
	title?: string
	
	/**
	 * 选项列表
	 */
	options?: Array<CheckboxOption>
	
	/**
	 * 当前选中的值数组
	 */
	value?: Array<string | number>
	
	/**
	 * 是否显示圆角
	 */
	round?: boolean
	
	/**
	 * 是否显示确认按钮
	 */
	showConfirm?: boolean
	
	/**
	 * 确认按钮文本
	 */
	confirmText?: string
	
	/**
	 * 点击遮罩层是否可关闭
	 */
	overlayClosable?: boolean
}
export type BlCheckboxPopupEvents = {
	/**
	 * 关闭事件
	 */
	close?: () => void
	
	/**
	 * 值变化事件
	 */
	change?: (value: Array<string | number>) => void
	
	/**
	 * 确认事件
	 */
	confirm?: (value: Array<string | number>) => void
	
	/**
	 * 更新 visible 事件（用于 v-model）
	 */
	'update:visible'?: (visible: boolean) => void
}
export type BlCheckboxPopupSlots = {
	// BlCheckboxPopup 组件没有插槽
}
export type BlCheckboxPopupInstance = {
	// BlCheckboxPopup 组件没有暴露的公共方法
}

export type BlCheckerProps = {
	/**
	 * 类型
	 */
	type?: CheckerType
	
	/**
	 * 是否选中
	 */
	checked?: boolean
	
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	
	/**
	 * 值
	 */
	value?: string | number
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlCheckerEvents = {
	/**
	 * 值变化事件
	 */
	change?: (checked: boolean) => void
	
	/**
	 * 点击事件
	 */
	click?: (event: any) => void
}
export type BlCheckerSlots = {
	/**
	 * 默认插槽
	 */
	default?: () => any
}
export type BlCheckerInstance = {
	// BlChecker 组件没有暴露的公共方法
}

export type BlCheckerPopupProps = {
	/**
	 * 是否显示
	 */
	visible?: boolean
	
	/**
	 * 标题
	 */
	title?: string
	
	/**
	 * 类型
	 */
	type?: CheckerType
	
	/**
	 * 选项列表
	 */
	options?: Array<CheckerOption>
	
	/**
	 * 当前选中的值（radio为单个值，checkbox为数组）
	 */
	value?: string | number | Array<string | number> | null
	
	/**
	 * 是否显示圆角
	 */
	round?: boolean
	
	/**
	 * 是否显示确认按钮
	 */
	showConfirm?: boolean
	
	/**
	 * 确认按钮文本
	 */
	confirmText?: string
	
	/**
	 * 点击遮罩层是否可关闭
	 */
	overlayClosable?: boolean
}
export type BlCheckerPopupEvents = {
	/**
	 * 关闭事件
	 */
	close?: () => void
	
	/**
	 * 值变化事件
	 */
	change?: (value: string | number | Array<string | number>) => void
	
	/**
	 * 确认事件
	 */
	confirm?: (value: string | number | Array<string | number>) => void
	
	/**
	 * 更新 visible 事件（用于 v-model）
	 */
	'update:visible'?: (visible: boolean) => void
}
export type BlCheckerPopupSlots = {
	// BlCheckerPopup 组件没有插槽
}
export type BlCheckerPopupInstance = {
	// BlCheckerPopup 组件没有暴露的公共方法
}

export type BlColProps = {
	/**
	 * 占用比例（24栅格）
	 */
	span?: number
	
	/**
	 * 偏移位置
	 */
	offset?: number
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlColEvents = {
	// BlCol 组件没有事件
}
export type BlColSlots = {
	/**
	 * 默认插槽
	 */
	default?: () => any
}
export type BlColInstance = {
	// BlCol 组件没有暴露的公共方法
}

export type BlCollapseProps = {
	/**
	 * 当前激活的面板 key
	 */
	activeKey?: string | number | Array<string | number>
	
	/**
	 * 默认激活的面板 key
	 */
	defaultActiveKey?: string | number | Array<string | number>
	
	/**
	 * 是否手风琴模式（同时只能展开一个）
	 */
	accordion?: boolean
	
	/**
	 * 是否显示边框
	 */
	bordered?: boolean
	
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlCollapseEvents = {
	/**
	 * 面板切换事件
	 */
	change?: (activeKey: string | number | Array<string | number>) => void
}
export type BlCollapseSlots = {
	/**
	 * 默认插槽，CollapsePanel 组件
	 */
	default?: () => any
}
export type BlCollapseInstance = {
	// BlCollapse 组件没有暴露的公共方法
}

export type BlCountDownProps = {
	/**
	 * 组件中item的类名
	 */
	itemClassName?: string
	
	/**
	 * 组件中item的样式
	 */
	itemStyle?: string
	
	/**
	 * 组件中分割线的类名
	 */
	delimiterClassName?: string
	
	/**
	 * 组件中分割线的样式
	 */
	delimiterStyle?: string
	
	/**
	 * 延时多久执行一次定时操作（单位：ms）
	 */
	duration?: number
	
	/**
	 * 自定义分隔符
	 */
	separateData?: CountDownSeparateData
	
	/**
	 * 表示 futureTime 为毫秒形式的剩余时间
	 */
	isRemainTime?: boolean
	
	/**
	 * 目标时间
	 */
	futureTime?: number | string | Date | null
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlCountDownEvents = {
	/**
	 * 倒计时结束事件
	 */
	finish?: () => void
}
export type BlCountDownSlots = {
	/**
	 * 默认插槽，自定义倒计时显示内容
	 */
	default?: (props: { data: CountDownData }) => any
}
export type BlCountDownInstance = {
	// BlCountDown 组件没有暴露的公共方法
}

export type BlCustomNavigationBarProps = {
	/**
	 * 标题
	 */
	title?: string
	
	/**
	 * 是否显示返回按钮
	 */
	showBack?: boolean
	
	/**
	 * 背景颜色
	 */
	backgroundColor?: string
	
	/**
	 * 文字颜色
	 */
	textColor?: string
	
	/**
	 * 是否固定在顶部
	 */
	fixed?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlCustomNavigationBarEvents = {
	/**
	 * 返回按钮点击事件
	 */
	back?: () => void
}
export type BlCustomNavigationBarSlots = {
	/**
	 * 中间内容插槽
	 */
	center?: () => any
	
	/**
	 * 右侧内容插槽
	 */
	right?: () => any
}
export type BlCustomNavigationBarInstance = {
	// BlCustomNavigationBar 组件没有暴露的公共方法
}

export type BlDescriptionsProps = {
	/**
	 * 标题
	 */
	title?: string
	
	/**
	 * 是否显示边框
	 */
	bordered?: boolean
	
	/**
	 * 一行显示多少列
	 */
	column?: number
	
	/**
	 * 尺寸
	 */
	size?: DescriptionsSize
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlDescriptionsEvents = {
	// Descriptions 组件没有事件
}
export type BlDescriptionsSlots = {
	/**
	 * 默认插槽，DescriptionsItem 组件
	 */
	default?: () => any
	
	/**
	 * 标题插槽
	 */
	title?: () => any
}
export type BlDescriptionsInstance = {
	// BlDescriptions 组件没有暴露的公共方法
}

export type BlDialogProps = {
	/**
	 * 是否显示
	 */
	visible?: boolean
	
	/**
	 * 弹窗容器宽度
	 */
	width?: number | string
	
	/**
	 * 标题
	 */
	title?: string
	
	/**
	 * 标题样式
	 */
	titleStyle?: string
	
	/**
	 * 内容
	 */
	message?: string
	
	/**
	 * 内容样式
	 */
	messageStyle?: string
	
	/**
	 * 按钮主题
	 */
	theme?: BlDialogTheme
	
	/**
	 * 是否显示关闭图标
	 */
	showCloseIcon?: boolean
	
	/**
	 * 是否显示取消按钮
	 */
	showCancelButton?: boolean
	
	/**
	 * 是否显示确认按钮
	 */
	showConfirmButton?: boolean
	
	/**
	 * 底部显示区域
	 */
	footer?: string | null
	
	/**
	 * 底部确认按钮内容
	 */
	confirmText?: string
	
	/**
	 * 底部取消按钮内容
	 */
	cancelText?: string
	
	/**
	 * 点击遮罩层是否可关闭
	 */
	overlayClosable?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlDialogEvents = {
	/**
	 * 关闭事件
	 */
	close?: (action: DialogAction) => void
	
	/**
	 * 取消事件
	 */
	cancel?: () => void
	
	/**
	 * 确认事件
	 */
	confirm?: () => void
	
	/**
	 * 点击遮罩层事件
	 */
	clickOverlay?: () => void
	
	/**
	 * 关闭前事件
	 */
	beforeClose?: (action: DialogAction, done: () => void, cancel: () => void) => void
}
export type BlDialogSlots = {
	/**
	 * 默认插槽，对话框内容
	 */
	default?: () => any
	
	/**
	 * 底部插槽
	 */
	footer?: () => any
}
export type BlDialogInstance = {
	// BlDialog 组件没有暴露的公共方法
}

export type BlDividerProps = {
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 虚线样式
	 */
	dashed?: boolean
	
	/**
	 * 分割线中间文字
	 */
	tip?: string
}
export type BlDividerEvents = {
	// BlDivider 组件没有事件
}
export type BlDividerSlots = {
	// BlDivider 组件没有插槽
}
export type BlDividerInstance = {
	// BlDivider 组件没有暴露的公共方法
}

export type BlDrawerProps = {
	/**
	 * 是否显示
	 */
	visible?: boolean
	
	/**
	 * 抽屉位置
	 */
	placement?: DrawerPlacement
	
	/**
	 * 标题
	 */
	title?: string
	
	/**
	 * 宽度（placement 为 left 或 right 时）
	 */
	width?: number | string
	
	/**
	 * 高度（placement 为 top 或 bottom 时）
	 */
	height?: number | string
	
	/**
	 * 是否显示遮罩层
	 */
	mask?: boolean
	
	/**
	 * 点击遮罩层是否可关闭
	 */
	maskClosable?: boolean
	
	/**
	 * 是否显示关闭按钮
	 */
	closable?: boolean
	
	/**
	 * 关闭时销毁子节点
	 */
	destroyOnClose?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlDrawerEvents = {
	/**
	 * 关闭事件
	 */
	close?: () => void
	
	/**
	 * 点击遮罩层事件
	 */
	clickMask?: () => void
}
export type BlDrawerSlots = {
	/**
	 * 默认插槽，抽屉内容
	 */
	default?: () => any
	
	/**
	 * 标题插槽
	 */
	title?: () => any
	
	/**
	 * 额外操作插槽
	 */
	extra?: () => any
}
export type BlDrawerInstance = {
	// BlDrawer 组件没有暴露的公共方法
}

export type BlEmptyProps = {
	/**
	 * 类型
	 */
	type?: EmptyType
	
	/**
	 * 自定义图标
	 */
	url?: string
	
	/**
	 * 是否显示提示图
	 */
	showImg?: boolean
	
	/**
	 * 描述
	 */
	desc?: string
	
	/**
	 * 详情
	 */
	detail?: string
	
	/**
	 * 重试文本
	 */
	retryText?: string
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlEmptyEvents = {
	/**
	 * 重试事件
	 */
	retry?: () => void
}
export type BlEmptySlots = {
	// BlEmpty 组件没有插槽
}
export type BlEmptyInstance = {
	// BlEmpty 组件没有暴露的公共方法
}

export type BlErrorCaptureProps = {
	/**
	 * 错误信息
	 */
	error?: string
	
	/**
	 * 是否显示错误
	 */
	showError?: boolean
	
	/**
	 * 错误提示文本
	 */
	errorMessage?: string
	
	/**
	 * 重试按钮文本
	 */
	retryText?: string
}
export type BlErrorCaptureEvents = {
	/**
	 * 重试事件
	 */
	retry?: () => void
	
	/**
	 * 错误事件
	 */
	error?: (error: any) => void
}
export type BlErrorCaptureSlots = {
	/**
	 * 默认插槽，正常显示的内容
	 */
	default?: () => any
}
export type BlErrorCaptureInstance = {
	/**
	 * 捕获错误
	 */
	captureError?: (error: any) => void
}

export type BlFilterProps = {
	/**
	 * 是否固定在顶部
	 */
	fixed?: boolean
	
	/**
	 * 背景颜色
	 */
	backgroundColor?: string
	
	/**
	 * 高度
	 */
	height?: number | string
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlFilterEvents = {
	// BlFilter 组件没有事件
}
export type BlFilterSlots = {
	/**
	 * 默认插槽，筛选器内容
	 */
	default?: () => any
}
export type BlFilterInstance = {
	// BlFilter 组件没有暴露的公共方法
}

export type BlFlexProps = {
	/**
	 * 主轴对齐方式
	 */
	justify?: FlexJustify
	
	/**
	 * 交叉轴对齐方式
	 */
	align?: FlexAlign
	
	/**
	 * 方向
	 */
	direction?: FlexDirection
	
	/**
	 * 是否自动换行
	 */
	wrap?: boolean | 'wrap' | 'nowrap' | 'wrap-reverse'
	
	/**
	 * 间距大小
	 */
	gap?: number | 'small' | 'middle' | 'large'
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlFlexEvents = {
	// Flex 组件没有事件
}
export type BlFlexSlots = {
	/**
	 * 默认插槽，子元素
	 */
	default?: () => any
}
export type BlFlexInstance = {
	// BlFlex 组件没有暴露的公共方法
}

export type BlFloatButtonProps = {
	/**
	 * 按钮类型
	 */
	type?: FloatButtonType
	
	/**
	 * 按钮形状
	 */
	shape?: FloatButtonShape
	
	/**
	 * 按钮大小
	 */
	size?: FloatButtonSize
	
	/**
	 * 按钮图标
	 */
	icon?: string
	
	/**
	 * 按钮描述
	 */
	description?: string
	
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlFloatButtonEvents = {
	/**
	 * 点击事件
	 */
	click?: () => void
}
export type BlFloatButtonSlots = {
	/**
	 * 默认插槽，自定义按钮内容
	 */
	default?: () => any
	
	/**
	 * 图标插槽
	 */
	icon?: () => any
}
export type BlFloatButtonInstance = {
	// BlFloatButton 组件没有暴露的公共方法
}

export type BlFormProps = {
	/**
	 * 表单数据对象
	 */
	model?: Record<string, any>
	
	/**
	 * 表单验证规则
	 */
	rules?: Record<string, any>
	
	/**
	 * 表单标签宽度
	 */
	labelWidth?: number | string
	
	/**
	 * 是否显示必填标识
	 */
	showRequired?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlFormEvents = {
	/**
	 * 表单提交事件
	 */
	submit?: (model: Record<string, any>) => void
	
	/**
	 * 表单重置事件
	 */
	reset?: (event: any) => void
	
	/**
	 * 表单验证事件
	 */
	validate?: (valid: boolean, errors: string[]) => void
}
export type BlFormSlots = {
	/**
	 * 默认插槽，表单项组件
	 */
	default?: () => any
}
export type BlFormInstance = {
	/**
	 * 验证表单
	 */
	validate?: (callback: (valid: boolean) => void) => void
	
	/**
	 * 重置表单
	 */
	resetFields?: () => void
}

export type BlGapProps = {
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlGapEvents = {
	// BlGap 组件没有事件
}
export type BlGapSlots = {
	// BlGap 组件没有插槽
}
export type BlGapInstance = {
	// BlGap 组件没有暴露的公共方法
}

export type BlGridProps = {
	/**
	 * 列数
	 */
	columnCount?: number
	
	/**
	 * 间隔 px
	 */
	gutter?: number | null
	
	/**
	 * 显示边框
	 */
	border?: boolean
	
	/**
	 * 方形网格
	 */
	square?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlGridEvents = {
	// BlGrid 组件没有事件
}
export type BlGridSlots = {
	/**
	 * 默认插槽，BlGridItem 组件
	 */
	default?: () => any
}
export type BlGridInstance = {
	// BlGrid 组件没有暴露的公共方法
}

export type BlGridItemProps = {
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlGridItemEvents = {
	// BlGridItem 组件没有事件
}
export type BlGridItemSlots = {
	/**
	 * 默认插槽
	 */
	default?: () => any
}
export type BlGridItemInstance = {
	// BlGridItem 组件没有暴露的公共方法
}

export type BlHairlineProps = {
	/**
	 * 边框位置，支持 'top' | 'bottom' | 'left' | 'right'
	 */
	placement?: Array<'top' | 'bottom' | 'left' | 'right'>
	
	/**
	 * 边框颜色
	 */
	color?: string
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlHairlineEvents = {
	// BlHairline 组件没有事件
}
export type BlHairlineSlots = {
	/**
	 * 默认插槽
	 */
	default?: () => any
}
export type BlHairlineInstance = {
	// BlHairline 组件没有暴露的公共方法
}

export type BlI18nProviderProps = {
	/**
	 * 语言配置对象（参考 antd 的 ConfigProvider locale 属性）
	 * 可以传递 Locale 对象，类似 antd 的 zhCN、enUS 等
	 */
	locale?: Locale | null
	
	/**
	 * 是否自动初始化默认语言
	 */
	autoInit?: boolean
	
	/**
	 * 是否从本地文件加载语言资源（优先从文件加载，失败则使用代码中的默认值）
	 */
	loadFromFile?: boolean
}
export type BlI18nProviderEvents = {
	// BlI18nProvider 组件没有事件
}
export type BlI18nProviderSlots = {
	/**
	 * 默认插槽
	 */
	default?: () => any
}
export type BlI18nProviderInstance = {
	// BlI18nProvider 组件没有暴露的公共方法
}

export type BlIconProps = {
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 支持绑定 内置图标名称、http 图片、或 svg 字符串
	 */
	icon?: string
	
	/**
	 * 图标宽度
	 */
	width?: number | string
	
	/**
	 * 对于多色 SVG 图标和 HTTP 图标无效
	 */
	color?: string
}
export type BlIconEvents = {
	/**
	 * 点击事件
	 */
	click?: (event: any) => void
}
export type BlIconSlots = {
	// BlIcon 组件没有插槽
}
export type BlIconInstance = {
	// BlIcon 组件没有暴露的公共方法
}

export type BlImageProps = {
	/**
	 * 图片资源地址
	 */
	src?: string
	
	/**
	 * 图片裁剪、缩放的模式
	 */
	mode?: ImageMode
	
	/**
	 * 图片懒加载，在即将进入一定范围（上下三屏）时才开始加载
	 */
	lazyLoad?: boolean
	
	/**
	 * 是否开启淡入效果
	 */
	fadeShow?: boolean
	
	/**
	 * 是否开启 WebP 格式支持
	 */
	webp?: boolean
	
	/**
	 * 是否开启长按图片显示识别小程序码菜单
	 */
	showMenuByLongpress?: boolean
	
	/**
	 * 是否允许拖拽
	 */
	draggable?: boolean
	
	/**
	 * 图片的引用地址策略
	 */
	referrerPolicy?: string
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlImageEvents = {
	/**
	 * 错误事件
	 */
	error?: (event: any) => void
	
	/**
	 * 加载完成事件
	 */
	load?: (event: any) => void
	
	/**
	 * 点击事件
	 */
	click?: (event: any) => void
}
export type BlImageSlots = {
	// BlImage 组件没有插槽
}
export type BlImageInstance = {
	// BlImage 组件没有暴露的公共方法
}

export type BlInputProps = {
	/**
	 * 输入框的初始内容
	 */
	value?: string
	
	/**
	 * input 的类型
	 */
	type?: BlInputType
	
	/**
	 * 是否是密码类型
	 */
	password?: boolean
	
	/**
	 * 输入框为空时占位符
	 */
	placeholder?: string
	
	/**
	 * 指定 placeholder 的样式
	 */
	placeholderStyle?: string
	
	/**
	 * 指定 placeholder 的样式类
	 */
	placeholderClass?: string
	
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	
	/**
	 * 最大输入长度，设置为 -1 的时候不限制最大长度
	 */
	maxlength?: number
	
	/**
	 * 指定光标与键盘的距离，单位 px
	 */
	cursorSpacing?: number
	
	/**
	 * 是否自动聚焦
	 */
	focus?: boolean
	
	/**
	 * 设置键盘右下角按钮的文字
	 */
	confirmType?: BlInputConfirmType
	
	/**
	 * 点击键盘右下角按钮时是否保持键盘不收起
	 */
	confirmHold?: boolean
	
	/**
	 * 指定 focus 时的光标位置
	 */
	cursor?: number
	
	/**
	 * 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用
	 */
	selectionStart?: number
	
	/**
	 * 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用
	 */
	selectionEnd?: number
	
	/**
	 * 键盘弹起时，是否自动上推页面
	 */
	adjustPosition?: boolean
	
	/**
	 * focus 时，点击页面的时候不收起键盘
	 */
	holdKeyboard?: boolean
	
	/**
	 * 是否自动聚焦
	 */
	autoFocus?: boolean
	
	/**
	 * 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态
	 */
	alwaysEmbed?: boolean
	
	/**
	 * 是否在键盘收起时自动失去焦点
	 */
	autoBlur?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlInputEvents = {
	/**
	 * 输入事件
	 */
	input?: (event: any) => void
	
	/**
	 * 聚焦事件
	 */
	focus?: (event: any) => void
	
	/**
	 * 失焦事件
	 */
	blur?: (event: any) => void
	
	/**
	 * 确认事件
	 */
	confirm?: (event: any) => void
	
	/**
	 * 键盘高度变化事件
	 */
	keyboardHeightChange?: (event: any) => void
}
export type BlInputSlots = {
	// BlInput 组件没有插槽
}
export type BlInputInstance = {
	// BlInput 组件没有暴露的公共方法
}

export type BlListViewProps = {
	/**
	 * 列表数据
	 */
	data?: Array<any>
	
	/**
	 * 列表中每项的key，用于优化渲染性能
	 */
	itemKey?: string
	
	/**
	 * 是否开启下拉刷新
	 */
	refresherEnabled?: boolean
	
	/**
	 * 设置自定义下拉刷新阈值
	 */
	refresherThreshold?: number
	
	/**
	 * 设置自定义下拉刷新默认样式，支持设置 black | white | none
	 */
	refresherDefaultStyle?: BlScrollViewRefresherDefaultStyle
	
	/**
	 * 设置自定义下拉刷新区域背景颜色
	 */
	refresherBackground?: string
	
	/**
	 * 设置当前下拉刷新状态
	 */
	refresherTriggered?: boolean
	
	/**
	 * 距底部/右边多远时，触发 scrolltolower 事件
	 */
	lowerThreshold?: number
	
	/**
	 * 距顶部/左边多远时，触发 scrolltoupper 事件
	 */
	upperThreshold?: number
	
	/**
	 * iOS 点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部
	 */
	enableBackToTop?: boolean
	
	/**
	 * 控制 scroll 事件触发的频率，单位为 ms
	 */
	offsetAccuracy?: number
	
	/**
	 * 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素
	 */
	scrollIntoView?: string
	
	/**
	 * 设置竖向滚动条位置
	 */
	scrollTop?: number
	
	/**
	 * 开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效
	 */
	scrollAnchoring?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlListViewEvents = {
	/**
	 * 滚动事件
	 */
	scroll?: (event: any) => void
	
	/**
	 * 滚动到底部/右边事件
	 */
	scrollToLower?: (event: any) => void
	
	/**
	 * 滚动到顶部/左边事件
	 */
	scrollToUpper?: (event: any) => void
	
	/**
	 * 下拉刷新事件
	 */
	refresherRefresh?: (event: any) => void
	
	/**
	 * 下拉刷新恢复事件
	 */
	refresherRestore?: (event: any) => void
	
	/**
	 * 下拉刷新中止事件
	 */
	refresherAbort?: (event: any) => void
}
export type BlListViewSlots = {
	/**
	 * 默认插槽，列表项内容
	 */
	default?: () => any
	
	/**
	 * 列表项插槽
	 */
	item?: (props: { item: any, index: number }) => any
}
export type BlListViewInstance = {
	// BlListView 组件没有暴露的公共方法
}

export type BlLoadingProps = {
	/**
	 * 自定义图标的插槽
	 */
	icon?: string | null
	
	/**
	 * loading描述的插槽
	 */
	message?: string
	
	/**
	 * 默认loading的style
	 */
	spinStyle?: string
	
	/**
	 * 默认loading的className
	 */
	spinClassName?: string
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlLoadingEvents = {
	// BlLoading 组件没有事件
}
export type BlLoadingSlots = {
	/**
	 * 图标插槽
	 */
	icon?: () => any
	
	/**
	 * 默认插槽
	 */
	default?: () => any
}
export type BlLoadingInstance = {
	// BlLoading 组件没有暴露的公共方法
}

export type BlMenuProps = {
	/**
	 * 当前选中的菜单项 key
	 */
	selectedKeys?: Array<string | number>
	
	/**
	 * 默认选中的菜单项 key
	 */
	defaultSelectedKeys?: Array<string | number>
	
	/**
	 * 当前打开的 SubMenu key
	 */
	openKeys?: Array<string | number>
	
	/**
	 * 默认打开的 SubMenu key
	 */
	defaultOpenKeys?: Array<string | number>
	
	/**
	 * 菜单模式
	 */
	mode?: MenuMode
	
	/**
	 * 菜单主题
	 */
	theme?: MenuTheme
	
	/**
	 * 是否允许选中多个菜单项
	 */
	multiple?: boolean
	
	/**
	 * 是否允许取消选中
	 */
	allowDeselect?: boolean
	
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlMenuEvents = {
	/**
	 * 选中菜单项事件
	 */
	select?: (keys: Array<string | number>) => void
	
	/**
	 * 打开/关闭 SubMenu 事件
	 */
	openChange?: (openKeys: Array<string | number>) => void
}
export type BlMenuSlots = {
	/**
	 * 默认插槽，MenuItem 或 SubMenu 组件
	 */
	default?: () => any
}
export type BlMenuInstance = {
	// BlMenu 组件没有暴露的公共方法
}

export type BlMessageProps = Record<string, never>
export type BlMessageEvents = Record<string, never>
export type BlMessageSlots = Record<string, never>
export type BlMessageInstance = Record<string, never>

export type BlModalProps = {
	/**
	 * 是否显示Modal
	 */
	visible?: boolean
	
	/**
	 * 遮罩层类名
	 */
	overlayClassName?: string
	
	/**
	 * 遮罩层样式
	 */
	overlayStyle?: string
	
	/**
	 * 点击遮罩层是否可关闭
	 */
	overlayClosable?: boolean
	
	/**
	 * 弹窗类名
	 */
	contentClassName?: string
	
	/**
	 * 弹窗样式
	 */
	contentStyle?: string
	
	/**
	 * 关闭弹窗时销毁子节点
	 */
	destroyOnClose?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlModalEvents = {
	/**
	 * 关闭事件
	 */
	close?: () => void
	
	/**
	 * 点击遮罩层事件
	 */
	clickOverlay?: () => void
	
	/**
	 * 关闭前事件
	 */
	beforeClose?: (done: () => void, cancel: () => void) => void
}
export type BlModalSlots = {
	/**
	 * 默认插槽，弹窗内容
	 */
	default?: () => any
}
export type BlModalInstance = {
	// BlModal 组件没有暴露的公共方法
}

export type BlMpCustomTabbarProps = {
	/**
	 * 当前选中的tab索引
	 */
	current?: number
	
	/**
	 * tabbar列表
	 */
	list?: Array<TabbarItem>
	
	/**
	 * 是否显示tabbar
	 */
	showTabbar?: boolean
	
	/**
	 * 是否固定在底部
	 */
	fixed?: boolean
	
	/**
	 * 是否显示安全区域
	 */
	safeAreaBottom?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlMpCustomTabbarEvents = {
	/**
	 * 值变化事件
	 */
	change?: (index: number) => void
	
	/**
	 * 切换事件
	 */
	switch?: (index: number, item: TabbarItem) => void
}
export type BlMpCustomTabbarSlots = {
	// BlMPCustomTabbar 组件没有插槽
}
export type BlMpCustomTabbarInstance = {
	// BlMPCustomTabbar 组件没有暴露的公共方法
}

export type BlNoopProps = {
	// BlNoop 组件没有 props
}
export type BlNoopEvents = {
	// BlNoop 组件没有事件
}
export type BlNoopSlots = {
	// BlNoop 组件没有插槽
}
export type BlNoopInstance = {
	// BlNoop 组件没有暴露的公共方法
}

export type BlNoticeBarProps = {
	/**
	 * 通知栏文本
	 */
	text?: string
	
	/**
	 * 是否可滚动
	 */
	scrollable?: boolean
	
	/**
	 * 滚动时是否使用动画
	 */
	scrollWithAnimation?: boolean
	
	/**
	 * 左侧图标
	 */
	icon?: string
	
	/**
	 * 左侧图标颜色
	 */
	iconColor?: string
	
	/**
	 * 是否显示关闭按钮
	 */
	closable?: boolean
	
	/**
	 * 文本颜色
	 */
	color?: string
	
	/**
	 * 背景颜色
	 */
	background?: string
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlNoticeBarEvents = {
	/**
	 * 关闭事件
	 */
	close?: (event: any) => void
	
	/**
	 * 点击事件
	 */
	click?: (event: any) => void
}
export type BlNoticeBarSlots = {
	/**
	 * 默认插槽，通知栏文本内容
	 */
	default?: () => any
}
export type BlNoticeBarInstance = {
	// BlNoticeBar 组件没有暴露的公共方法
}

export type BlNotificationProps = Record<string, never>
export type BlNotificationEvents = Record<string, never>
export type BlNotificationSlots = Record<string, never>
export type BlNotificationInstance = Record<string, never>

export type BlNumberInputProps = {
	/**
	 * 当前值
	 */
	value?: number
	
	/**
	 * 最小值
	 */
	min?: number
	
	/**
	 * 最大值
	 */
	max?: number
	
	/**
	 * 步长，每次点击时改变的值
	 */
	step?: number
	
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	
	/**
	 * 是否可编辑
	 */
	editable?: boolean
	
	/**
	 * 是否显示减少按钮
	 */
	showMinus?: boolean
	
	/**
	 * 是否显示增加按钮
	 */
	showPlus?: boolean
	
	/**
	 * 占位符
	 */
	placeholder?: string
	
	/**
	 * 输入框宽度
	 */
	width?: number | string
	
	/**
	 * 按钮大小
	 */
	buttonSize?: number
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlNumberInputEvents = {
	/**
	 * 值变化事件
	 */
	change?: (value: number) => void
	
	/**
	 * 输入事件
	 */
	input?: (value: number) => void
	
	/**
	 * 失焦事件
	 */
	blur?: (event: any) => void
	
	/**
	 * 聚焦事件
	 */
	focus?: (event: any) => void
	
	/**
	 * 增加按钮点击事件
	 */
	plus?: (value: number) => void
	
	/**
	 * 减少按钮点击事件
	 */
	minus?: (value: number) => void
}
export type BlNumberInputSlots = {
	// BlNumberInput 组件没有插槽
}
export type BlNumberInputInstance = {
	// BlNumberInput 组件没有暴露的公共方法
}

export type BlPageProps = {
	/**
	 * 背景颜色
	 */
	backgroundColor?: string
	
	/**
	 * 是否显示导航栏
	 */
	showNavBar?: boolean
	
	/**
	 * 是否显示底部安全区域
	 */
	safeAreaBottom?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlPageEvents = {
	// BlPage 组件没有事件
}
export type BlPageSlots = {
	/**
	 * 默认插槽，页面内容
	 */
	default?: () => any
}
export type BlPageInstance = {
	// BlPage 组件没有暴露的公共方法
}

export type BlPageStyleProps = {
	/**
	 * 页面背景颜色
	 */
	backgroundColor?: string
	
	/**
	 * 导航栏标题颜色
	 */
	navigationBarTextStyle?: BlNavigationBarTextStyle
	
	/**
	 * 导航栏背景颜色
	 */
	navigationBarBackgroundColor?: string
}
export type BlPageStyleEvents = {
	// BlPageStyle 组件没有事件
}
export type BlPageStyleSlots = {
	// BlPageStyle 组件没有插槽
}
export type BlPageStyleInstance = {
	// BlPageStyle 组件没有暴露的公共方法
}

export type BlPaginationProps = {
	/**
	 * 当前页码
	 */
	current?: number
	
	/**
	 * 默认页码
	 */
	defaultCurrent?: number
	
	/**
	 * 每页条数
	 */
	pageSize?: number
	
	/**
	 * 默认每页条数
	 */
	defaultPageSize?: number
	
	/**
	 * 数据总数
	 */
	total?: number
	
	/**
	 * 是否显示总数
	 */
	showTotal?: boolean
	
	/**
	 * 是否显示每页条数选择器
	 */
	showSizeChanger?: boolean
	/**
	 * 每页条数选项
	 */
	pageSizeOptions?: Array<number>
	
	/**
	 * 是否显示快速跳转
	 */
	showQuickJumper?: boolean
	
	/**
	 * 是否显示上一页/下一页按钮
	 */
	showPrevNext?: boolean
	
	/**
	 * 是否简单模式（只显示上一页/下一页）
	 */
	simple?: boolean
	
	/**
	 * 尺寸
	 */
	size?: PaginationSize
	
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlPaginationEvents = {
	/**
	 * 页码改变事件
	 */
	change?: (page: number, pageSize: number) => void
	
	/**
	 * 每页条数改变事件
	 */
	pageSizeChange?: (current: number, size: number) => void
}
export type BlPaginationSlots = {
	/**
	 * 自定义总数显示
	 */
	total?: (total: number, range: [number, number]) => any
}
export type BlPaginationInstance = {
	// BlPagination 组件没有暴露的公共方法
}

export type BlPickerCascaderSelectorProps = {
	/**
	 * 当前选中的值，数组形式
	 */
	value?: Array<string | number>
	
	/**
	 * 级联数据
	 */
	options?: Array<CascaderOption>
	
	/**
	 * 子级字段名
	 */
	childrenKey?: string
	
	/**
	 * 显示字段名
	 */
	labelKey?: string
	
	/**
	 * 值字段名
	 */
	valueKey?: string
	
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	
	/**
	 * 占位符
	 */
	placeholder?: string
	
	/**
	 * 是否显示箭头
	 */
	showArrow?: boolean
	
	/**
	 * 显示文本格式化函数
	 */
	formatter?: ((labels: string[], items: Array<CascaderOption>, indices: number[]) => string) | null
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlPickerCascaderSelectorEvents = {
	/**
	 * 值变化事件
	 */
	change?: (value: Array<string | number>, items: Array<CascaderOption>, indices: number[]) => void
	
	/**
	 * 列变化事件
	 */
	columnChange?: (event: { column: number, value: number }) => void
	
	/**
	 * 取消选择事件
	 */
	cancel?: () => void
}
export type BlPickerCascaderSelectorSlots = {
	/**
	 * 默认插槽，自定义触发元素
	 */
	default?: () => any
}
export type BlPickerCascaderSelectorInstance = {
	// BlPickerCascaderSelector 组件没有暴露的公共方法
}

export type BlPickerDateProps = {
	/**
	 * 当前选中的值
	 */
	value?: string
	
	/**
	 * 可选的最小日期
	 */
	start?: string
	
	/**
	 * 可选的最大日期
	 */
	end?: string
	
	/**
	 * 选择器的粒度
	 */
	fields?: BlPickerDateFields
	
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	
	/**
	 * 占位符
	 */
	placeholder?: string
	
	/**
	 * 是否显示箭头
	 */
	showArrow?: boolean
	
	/**
	 * 日期格式化函数
	 */
	formatter?: ((value: string) => string) | null
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlPickerDateEvents = {
	/**
	 * 值变化事件
	 */
	change?: (value: string) => void
	
	/**
	 * 取消选择事件
	 */
	cancel?: () => void
}
export type BlPickerDateSlots = {
	/**
	 * 默认插槽，自定义触发元素
	 */
	default?: () => any
}
export type BlPickerDateInstance = {
	// BlPickerDate 组件没有暴露的公共方法
}

export type BlPickerMultiSelectorProps = {
	/**
	 * 当前选中的值，数组形式
	 */
	value?: Array<any>
	
	/**
	 * 选项数组，二维数组
	 */
	range?: Array<Array<any>>
	
	/**
	 * 当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容
	 */
	rangeKey?: string
	
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	
	/**
	 * 占位符
	 */
	placeholder?: string
	
	/**
	 * 是否显示箭头
	 */
	showArrow?: boolean
	
	/**
	 * 显示文本格式化函数
	 */
	formatter?: ((texts: string[], items: Array<any>, indices: number[]) => string) | null
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlPickerMultiSelectorEvents = {
	/**
	 * 值变化事件
	 */
	change?: (value: Array<any>, items: Array<any>, indices: number[]) => void
	
	/**
	 * 列变化事件
	 */
	columnChange?: (event: { column: number, value: number }) => void
	
	/**
	 * 取消选择事件
	 */
	cancel?: () => void
}
export type BlPickerMultiSelectorSlots = {
	/**
	 * 默认插槽，自定义触发元素
	 */
	default?: () => any
}
export type BlPickerMultiSelectorInstance = {
	// BlPickerMultiSelector 组件没有暴露的公共方法
}

export type BlPickerSelectorProps = {
	/**
	 * 当前选中的值
	 */
	value?: string | number | null
	
	/**
	 * 选项数组
	 */
	range?: Array<any>
	
	/**
	 * 当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容
	 */
	rangeKey?: string
	
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	
	/**
	 * 占位符
	 */
	placeholder?: string
	
	/**
	 * 是否显示箭头
	 */
	showArrow?: boolean
	
	/**
	 * 显示文本格式化函数
	 */
	formatter?: ((text: string, item: any, index: number) => string) | null
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlPickerSelectorEvents = {
	/**
	 * 值变化事件
	 */
	change?: (value: string | number, item: any, index: number) => void
	
	/**
	 * 取消选择事件
	 */
	cancel?: () => void
}
export type BlPickerSelectorSlots = {
	/**
	 * 默认插槽，自定义触发元素
	 */
	default?: () => any
}
export type BlPickerSelectorInstance = {
	// BlPickerSelector 组件没有暴露的公共方法
}

export type BlPickerTimeProps = {
	/**
	 * 当前选中的值，格式为 HH:mm
	 */
	value?: string
	
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	
	/**
	 * 占位符
	 */
	placeholder?: string
	
	/**
	 * 是否显示箭头
	 */
	showArrow?: boolean
	
	/**
	 * 时间格式化函数
	 */
	formatter?: ((value: string) => string) | null
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlPickerTimeEvents = {
	/**
	 * 值变化事件
	 */
	change?: (value: string) => void
	
	/**
	 * 取消选择事件
	 */
	cancel?: () => void
}
export type BlPickerTimeSlots = {
	/**
	 * 默认插槽，自定义触发元素
	 */
	default?: () => any
}
export type BlPickerTimeInstance = {
	// BlPickerTime 组件没有暴露的公共方法
}

export type BlPopconfirmProps = {
	/**
	 * 确认框标题
	 */
	title?: string
	
	/**
	 * 确认框描述
	 */
	description?: string
	
	/**
	 * 确认按钮文字
	 */
	okText?: string
	
	/**
	 * 取消按钮文字
	 */
	cancelText?: string
	
	/**
	 * 确认按钮类型
	 */
	okType?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
	
	/**
	 * 是否显示确认框
	 */
	visible?: boolean
	
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlPopconfirmEvents = {
	/**
	 * 确认事件
	 */
	confirm?: () => void
	
	/**
	 * 取消事件
	 */
	cancel?: () => void
	
	/**
	 * 可见性改变事件
	 */
	visibleChange?: (visible: boolean) => void
}
export type BlPopconfirmSlots = {
	/**
	 * 默认插槽，触发元素
	 */
	default?: () => any
	
	/**
	 * 标题插槽
	 */
	title?: () => any
	
	/**
	 * 描述插槽
	 */
	description?: () => any
}
export type BlPopconfirmInstance = {
	// BlPopconfirm 组件没有暴露的公共方法
}

export type BlPopoverProps = {
	/**
	 * 卡片标题
	 */
	title?: string
	
	/**
	 * 卡片内容
	 */
	content?: string
	
	/**
	 * 气泡框位置
	 */
	placement?: PopoverPlacement
	
	/**
	 * 触发行为
	 */
	trigger?: 'hover' | 'focus' | 'click'
	
	/**
	 * 是否显示箭头
	 */
	arrow?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlPopoverEvents = {
	/**
	 * 显示状态改变时触发
	 */
	visibleChange?: (visible: boolean) => void
}
export type BlPopoverSlots = {
	/**
	 * 默认插槽，触发元素
	 */
	default?: () => any
	
	/**
	 * 自定义标题
	 */
	title?: () => any
	
	/**
	 * 自定义内容
	 */
	content?: () => any
}
export type BlPopoverInstance = {
	// BlPopover 组件没有暴露的公共方法
}

export type BlPopupProps = {
	/**
	 * 是否显示
	 */
	visible?: boolean
	
	/**
	 * 弹窗容器宽度
	 */
	width?: number | string
	
	/**
	 * 是否有圆角
	 */
	round?: boolean
	
	/**
	 * 抽屉展示位置
	 */
	position?: 'top' | 'left' | 'bottom' | 'right' | 'center'
	
	/**
	 * 点击遮罩层是否可关闭
	 */
	overlayClosable?: boolean
	
	/**
	 * 关闭弹窗时销毁子节点
	 */
	destroyOnClose?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlPopupEvents = {
	/**
	 * 关闭事件
	 */
	close?: () => void
	
	/**
	 * 点击遮罩层事件
	 */
	clickOverlay?: () => void
}
export type BlPopupSlots = {
	/**
	 * 默认插槽，弹窗内容
	 */
	default?: () => any
}
export type BlPopupInstance = {
	// BlPopup 组件没有暴露的公共方法
}

export type BlPortalProps = {
	/**
	 * 目标容器选择器
	 */
	target?: string
}
export type BlPortalEvents = {
	// BlPortal 组件没有事件
}
export type BlPortalSlots = {
	/**
	 * 默认插槽，要传送的内容
	 */
	default?: () => any
}
export type BlPortalInstance = {
	// BlPortal 组件没有暴露的公共方法
}

export type BlPosterPainterProps = {
	/**
	 * 海报绘制配置
	 */
	palette?: Palette | null
	
	/**
	 * 画布宽度
	 */
	width?: number | string
	
	/**
	 * 画布高度
	 */
	height?: number | string
	
	/**
	 * 缩放比例
	 */
	scaleRatio?: number
	
	/**
	 * Canvas ID
	 */
	canvasId?: string
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlPosterPainterEvents = {
	/**
	 * 绘制完成事件
	 */
	complete?: (imagePath: string) => void
	
	/**
	 * 绘制失败事件
	 */
	fail?: (error: any) => void
	
	/**
	 * 图片加载成功事件
	 */
	imgOk?: (event: any) => void
	
	/**
	 * 图片加载失败事件
	 */
	imgErr?: (error: any) => void
}
export type BlPosterPainterSlots = {
	/**
	 * 默认插槽
	 */
	default?: () => any
}
export type BlPosterPainterInstance = {
	/**
	 * 渲染海报
	 */
	render?: () => Promise<void>
	
	/**
	 * 预览海报
	 */
	preview?: () => void
	
	/**
	 * 保存海报到相册
	 */
	save?: () => Promise<void>
}

export type BlPreviewContextProps = {
	/**
	 * 图片列表
	 */
	urls?: Array<string>
	
	/**
	 * 当前显示的图片索引
	 */
	current?: number
}
export type BlPreviewContextEvents = {
	// BlPreviewContext 组件没有事件
}
export type BlPreviewContextSlots = {
	// BlPreviewContext 组件没有插槽
}
export type BlPreviewContextInstance = {
	/**
	 * 预览图片
	 */
	preview?: (urls?: string[], current?: number) => void
	
	/**
	 * 预览单个图片
	 */
	previewSingle?: (url: string) => void
}

export type BlProgressProps = {
	/**
	 * 进度条类型
	 */
	type?: BlProgressType
	
	/**
	 * 进度百分比
	 */
	percent?: number
	
	/**
	 * 进度条颜色
	 */
	activeColor?: string
	
	/**
	 * 进度条背景色
	 */
	backgroundColor?: string
	
	/**
	 * 进度条宽度（线性）或大小（圆形）
	 */
	width?: number | string | null
	
	/**
	 * 进度条高度（仅线性）
	 */
	strokeWidth?: number
	
	/**
	 * 进度条显示弧形（仅圆形）
	 */
	strokeLinecap?: string
	
	/**
	 * 是否显示进度文字
	 */
	showInfo?: boolean
	
	/**
	 * 显示进度内容类名
	 */
	contentClassName?: string
	
	/**
	 * 显示进度内容样式
	 */
	contentStyle?: string
	
	/**
	 * 字体大小
	 */
	fontSize?: number
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlProgressEvents = {
	// BlProgress 组件没有事件
}
export type BlProgressSlots = {
	/**
	 * 默认插槽，进度文字内容
	 */
	default?: () => any
}
export type BlProgressInstance = {
	// BlProgress 组件没有暴露的公共方法
}

export type BlQrcodeProps = {
	/**
	 * 二维码内容
	 */
	value?: string
	
	/**
	 * 二维码大小
	 */
	size?: number
	
	/**
	 * 二维码颜色
	 */
	color?: string
	
	/**
	 * 二维码背景颜色
	 */
	backgroundColor?: string
	
	/**
	 * 二维码容错级别
	 */
	errorCorrectLevel?: QRCodeErrorCorrectLevel
	
	/**
	 * 是否显示边框
	 */
	bordered?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlQrcodeEvents = {
	/**
	 * 点击事件
	 */
	click?: () => void
}
export type BlQrcodeSlots = {
	/**
	 * 默认插槽，自定义二维码下方内容
	 */
	default?: () => any
}
export type BlQrcodeInstance = {
	/**
	 * 导出二维码为图片
	 */
	exportImage?: (options?: { fileName?: string, quality?: number }) => Promise<string>
}

export type BlRadioProps = {
	/**
	 * 选中状态
	 */
	checked?: boolean
	
	/**
	 * 禁用
	 */
	disabled?: boolean
	
	/**
	 * 选中颜色
	 */
	color?: string
	
	/**
	 * 只支持BlRadioGroup中使用
	 */
	value?: string | number | null
	
	/**
	 * 改变文本位置
	 */
	reverse?: boolean
	
	/**
	 * 文本
	 */
	label?: string
	
	/**
	 * label的颜色是否可变
	 */
	labelColorVariable?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlRadioEvents = {
	/**
	 * 值变化事件
	 */
	change?: (event: { detail: { checked: boolean } }) => void
}
export type BlRadioSlots = {
	/**
	 * 默认插槽，单选框标签内容
	 */
	default?: () => any
}
export type BlRadioInstance = {
	// BlRadio 组件没有暴露的公共方法
}

export type BlRadioGroupProps = {
	/**
	 * 选中的值
	 */
	value?: string | number | null
	
	/**
	 * 禁用
	 */
	disabled?: boolean
	
	/**
	 * 选中颜色
	 */
	color?: string
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlRadioGroupEvents = {
	/**
	 * 值变化事件
	 */
	change?: (event: { detail: { value: string | number } }) => void
}
export type BlRadioGroupSlots = {
	/**
	 * 默认插槽，BlRadio 组件
	 */
	default?: () => any
}
export type BlRadioGroupInstance = {
	// BlRadioGroup 组件没有暴露的公共方法
}

export type BlRadioPopupProps = {
	/**
	 * 是否显示
	 */
	visible?: boolean
	
	/**
	 * 标题
	 */
	title?: string
	
	/**
	 * 选项列表
	 */
	options?: Array<RadioOption>
	
	/**
	 * 当前选中的值
	 */
	value?: string | number | null
	
	/**
	 * 是否显示圆角
	 */
	round?: boolean
	
	/**
	 * 点击遮罩层是否可关闭
	 */
	overlayClosable?: boolean
}
export type BlRadioPopupEvents = {
	/**
	 * 关闭事件
	 */
	close?: () => void
	
	/**
	 * 值变化事件
	 */
	change?: (value: string | number) => void
	
	/**
	 * 更新 visible 事件（用于 v-model）
	 */
	'update:visible'?: (visible: boolean) => void
}
export type BlRadioPopupSlots = {
	// BlRadioPopup 组件没有插槽
}
export type BlRadioPopupInstance = {
	// BlRadioPopup 组件没有暴露的公共方法
}

export type BlRateProps = {
	/**
	 * 当前值
	 */
	value?: number
	
	/**
	 * 默认值
	 */
	defaultValue?: number
	
	/**
	 * 星星总数
	 */
	count?: number
	
	/**
	 * 是否允许半选
	 */
	allowHalf?: boolean
	
	/**
	 * 是否允许清除
	 */
	allowClear?: boolean
	
	/**
	 * 是否只读
	 */
	readonly?: boolean
	
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	
	/**
	 * 自定义字符
	 */
	character?: string
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlRateEvents = {
	/**
	 * 值改变事件
	 */
	change?: (value: number) => void
	
	/**
	 * 鼠标悬停事件（移动端不支持）
	 */
	hoverChange?: (value: number) => void
}
export type BlRateSlots = {
	/**
	 * 自定义字符插槽
	 */
	character?: (item: { index: number, value: number }) => any
}
export type BlRateInstance = {
	// BlRate 组件没有暴露的公共方法
}

export type BlResultProps = {
	/**
	 * 结果状态
	 */
	status?: ResultStatus
	
	/**
	 * 标题
	 */
	title?: string
	
	/**
	 * 副标题
	 */
	subTitle?: string
	
	/**
	 * 自定义图标
	 */
	icon?: string
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlResultEvents = {
	// Result 组件没有事件
}
export type BlResultSlots = {
	/**
	 * 默认插槽，额外操作
	 */
	default?: () => any
	
	/**
	 * 图标插槽
	 */
	icon?: () => any
	
	/**
	 * 标题插槽
	 */
	title?: () => any
	
	/**
	 * 副标题插槽
	 */
	subTitle?: () => any
	
	/**
	 * 额外操作插槽
	 */
	extra?: () => any
}
export type BlResultInstance = {
	// BlResult 组件没有暴露的公共方法
}

export type BlRowProps = {
	/**
	 * 水平行间距
	 */
	gutterHorizontal?: number | string | null
	
	/**
	 * 垂直行间距
	 */
	gutterVertical?: number | string | null
	
	/**
	 * 水平对齐方式
	 */
	align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
	
	/**
	 * 垂直对齐方式
	 */
	justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
	
	/**
	 * 是否支持换行
	 */
	wrap?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlRowEvents = {
	// BlRow 组件没有事件
}
export type BlRowSlots = {
	/**
	 * 默认插槽，BlCol 组件
	 */
	default?: () => any
}
export type BlRowInstance = {
	// BlRow 组件没有暴露的公共方法
}

export type BlScrollViewProps = {
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 允许横向滚动
	 */
	scrollX?: boolean
	
	/**
	 * 允许纵向滚动
	 */
	scrollY?: boolean
	
	/**
	 * 距顶部/左边多远时，触发 scrolltoupper 事件
	 */
	upperThreshold?: number
	
	/**
	 * 距底部/右边多远时，触发 scrolltolower 事件
	 */
	lowerThreshold?: number
	
	/**
	 * 设置竖向滚动条位置
	 */
	scrollTop?: number
	
	/**
	 * 设置横向滚动条位置
	 */
	scrollLeft?: number
	
	/**
	 * 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素
	 */
	scrollIntoView?: string
	
	/**
	 * 在设置滚动条位置时使用动画过渡
	 */
	scrollWithAnimation?: boolean
	
	/**
	 * iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向
	 */
	enableBackToTop?: boolean
	
	/**
	 * 启用 flexbox 布局。开启后，当前节点声明了 display: flex 就会成为 flex container，并作用于其孩子节点。
	 */
	enableFlex?: boolean
	
	/**
	 * 开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效，安卓下可参考 CSS overflow-anchor 属性
	 */
	scrollAnchoring?: boolean
	
	/**
	 * 开启自定义下拉刷新
	 */
	refresherEnabled?: boolean
	
	/**
	 * 设置自定义下拉刷新阈值
	 */
	refresherThreshold?: number
	
	/**
	 * 设置自定义下拉刷新默认样式，支持设置 black | white | none， none 表示不使用默认样式
	 */
	refresherDefaultStyle?: 'black' | 'white' | 'none'
	
	/**
	 * 设置自定义下拉刷新区域背景颜色
	 */
	refresherBackground?: string
	
	/**
	 * 设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发
	 */
	refresherTriggered?: boolean
	
	/**
	 * 启用增强特性
	 */
	enhanced?: boolean
	
	/**
	 * iOS 下支持，是否回弹
	 */
	bounces?: boolean
	
	/**
	 * 是否显示滚动条
	 */
	showScrollbar?: boolean
	
	/**
	 * 是否开启分页模式
	 */
	pagingEnabled?: boolean
	
	/**
	 * 是否开启快速滑动
	 */
	fastDeceleration?: boolean
}
export type BlScrollViewEvents = {
	/**
	 * 滚动事件
	 */
	scroll?: (event: any) => void
	
	/**
	 * 滚动到顶部/左边事件
	 */
	scrollToUpper?: (event: any) => void
	
	/**
	 * 滚动到底部/右边事件
	 */
	scrollToLower?: (event: any) => void
	
	/**
	 * 下拉刷新事件
	 */
	refresherRefresh?: (event: any) => void
	
	/**
	 * 下拉刷新恢复事件
	 */
	refresherRestore?: (event: any) => void
	
	/**
	 * 下拉刷新中止事件
	 */
	refresherAbort?: (event: any) => void
}
export type BlScrollViewSlots = {
	/**
	 * 默认插槽，滚动内容
	 */
	default?: () => any
}
export type BlScrollViewInstance = {
	// BlScrollView 组件没有暴露的公共方法
}

export type BlSearchBarProps = {
	/**
	 * 当前值
	 */
	value?: string
	
	/**
	 * 占位符
	 */
	placeholder?: string
	
	/**
	 * 搜索框外左侧插槽
	 */
	before?: string | null
	
	/**
	 * 搜索框外右侧插槽
	 */
	after?: string | null
	
	/**
	 * 自定义搜索图标
	 */
	searchIcon?: string | null
	
	/**
	 * 清空按钮
	 */
	clearable?: boolean
	
	/**
	 * 文字对齐方式
	 */
	align?: AlignType
	
	/**
	 * 防抖时间，单位ms
	 */
	debounceTime?: number
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlSearchBarEvents = {
	/**
	 * 值变化事件
	 */
	change?: (value: string) => void
	
	/**
	 * 搜索事件（防抖后触发）
	 */
	search?: (value: string) => void
	
	/**
	 * 清空事件
	 */
	clear?: () => void
}
export type BlSearchBarSlots = {
	/**
	 * 搜索框外左侧插槽
	 */
	before?: () => any
	
	/**
	 * 搜索框外右侧插槽
	 */
	after?: () => any
	
	/**
	 * 自定义搜索图标插槽
	 */
	searchIcon?: () => any
}
export type BlSearchBarInstance = {
	// BlSearchBar 组件没有暴露的公共方法
}

export type BlSegmentedProps = {
	/**
	 * 当前选中的值
	 */
	value?: string | number
	
	/**
	 * 默认选中的值
	 */
	defaultValue?: string | number
	
	/**
	 * 选项数据
	 */
	options?: Array<string | number | { label: string, value: string | number, disabled?: boolean, icon?: string }>
	
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	
	/**
	 * 尺寸
	 */
	size?: SegmentedSize
	
	/**
	 * 是否块级元素
	 */
	block?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlSegmentedEvents = {
	/**
	 * 值改变事件
	 */
	change?: (value: string | number) => void
}
export type BlSegmentedSlots = {
	/**
	 * 默认插槽，自定义选项内容
	 */
	default?: () => any
}
export type BlSegmentedInstance = {
	// BlSegmented 组件没有暴露的公共方法
}

export type BlShareAppMessageProps = {
	/**
	 * 分享配置对象或函数
	 */
	payload?: SharePayload | ((...args: any[]) => SharePayload) | null
	
	/**
	 * 分享标题
	 */
	title?: string
	
	/**
	 * 分享路径（小程序）
	 */
	path?: string
	
	/**
	 * 分享链接（H5/APP）
	 */
	href?: string
	
	/**
	 * 分享图片
	 */
	imageUrl?: string
	
	/**
	 * 分享内容（APP）
	 */
	content?: string
	
	/**
	 * 分享摘要（APP）
	 */
	summary?: string
	
	/**
	 * APP端支持的分享平台
	 */
	platforms?: Array<SharePlatform>
	
	/**
	 * 是否显示分享按钮（APP/H5）
	 */
	showShareButton?: boolean
	
	/**
	 * 分享按钮文本
	 */
	shareButtonText?: string
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlShareAppMessageEvents = {
	/**
	 * 分享成功事件
	 */
	success?: (event: any) => void
	
	/**
	 * 分享失败事件
	 */
	fail?: (event: any) => void
}
export type BlShareAppMessageSlots = {
	/**
	 * 触发分享的按钮插槽
	 */
	trigger?: () => any
}
export type BlShareAppMessageInstance = {
	// BlShareAppMessage 组件没有暴露的公共方法
}

export type BlShareDialogProps = Record<string, never>
export type BlShareDialogEvents = Record<string, never>
export type BlShareDialogSlots = Record<string, never>
export type BlShareDialogInstance = Record<string, never>

export type BlSkeletonProps = {
	/**
	 * 是否显示动画效果
	 */
	active?: boolean
	
	/**
	 * 是否显示头像占位图
	 */
	avatar?: boolean
	
	/**
	 * 头像占位图大小
	 */
	avatarSize?: SkeletonAvatarSize
	
	/**
	 * 头像占位图形状
	 */
	avatarShape?: SkeletonAvatarShape
	
	/**
	 * 是否显示标题占位图
	 */
	title?: boolean
	
	/**
	 * 标题占位图宽度
	 */
	titleWidth?: number | string
	
	/**
	 * 是否显示段落占位图
	 */
	paragraph?: boolean
	
	/**
	 * 段落占位图行数
	 */
	paragraphRows?: number
	
	/**
	 * 段落占位图宽度
	 */
	paragraphWidth?: number | string | Array<number | string>
	
	/**
	 * 是否显示圆角
	 */
	round?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlSkeletonEvents = {
	// Skeleton 组件没有事件
}
export type BlSkeletonSlots = {
	/**
	 * 默认插槽，自定义骨架屏内容
	 */
	default?: () => any
}
export type BlSkeletonInstance = {
	// BlSkeleton 组件没有暴露的公共方法
}

export type BlSliderProps = {
	/**
	 * 当前值
	 */
	value?: number
	
	/**
	 * 最小值
	 */
	min?: number
	
	/**
	 * 最大值
	 */
	max?: number
	
	/**
	 * 步长
	 */
	step?: number
	
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	
	/**
	 * 滑块颜色
	 */
	activeColor?: string
	
	/**
	 * 滑块背景色
	 */
	backgroundColor?: string
	
	/**
	 * 滑块大小
	 */
	blockSize?: number
	
	/**
	 * 滑块颜色
	 */
	blockColor?: string
	
	/**
	 * 是否显示当前值
	 */
	showValue?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlSliderEvents = {
	/**
	 * 值变化事件（拖拽结束）
	 */
	change?: (value: number) => void
	
	/**
	 * 值正在变化事件（拖拽中）
	 */
	changing?: (value: number) => void
}
export type BlSliderSlots = {
	// BlSlider 组件没有插槽
}
export type BlSliderInstance = {
	// BlSlider 组件没有暴露的公共方法
}

export type BlSortTagProps = {
	/**
	 * 文本内容
	 */
	text?: string
	
	/**
	 * 排序状态
	 */
	sort?: '' | 'asc' | 'desc'
	
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlSortTagEvents = {
	/**
	 * 排序状态变化事件
	 */
	change?: (sort: '' | 'asc' | 'desc') => void
	
	/**
	 * 点击事件
	 */
	click?: (event: any) => void
}
export type BlSortTagSlots = {
	/**
	 * 默认插槽，标签文本内容
	 */
	default?: () => any
}
export type BlSortTagInstance = {
	// BlSortTag 组件没有暴露的公共方法
}

export type BlSpaceProps = {
	/**
	 * 间距大小
	 */
	size?: number | 'small' | 'middle' | 'large'
	
	/**
	 * 间距方向
	 */
	direction?: SpaceDirection
	
	/**
	 * 对齐方式
	 */
	align?: SpaceAlign
	
	/**
	 * 是否自动换行，仅在 horizontal 时有效
	 */
	wrap?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlSpaceEvents = {
	// Space 组件没有事件
}
export type BlSpaceSlots = {
	/**
	 * 默认插槽，子元素
	 */
	default?: () => any
}
export type BlSpaceInstance = {
	// BlSpace 组件没有暴露的公共方法
}

export type BlSpinnerProps = {
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlSpinnerEvents = {
	// BlSpinner 组件没有事件
}
export type BlSpinnerSlots = {
	// BlSpinner 组件没有插槽
}
export type BlSpinnerInstance = {
	// BlSpinner 组件没有暴露的公共方法
}

export type BlStatisticProps = {
	/**
	 * 数值
	 */
	value?: number | string
	
	/**
	 * 数值的样式
	 */
	valueStyle?: string
	
	/**
	 * 数值前缀
	 */
	prefix?: string
	
	/**
	 * 数值后缀
	 */
	suffix?: string
	
	/**
	 * 标题
	 */
	title?: string
	
	/**
	 * 数值精度
	 */
	precision?: number
	
	/**
	 * 千分位标识符
	 */
	groupSeparator?: string
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlStatisticEvents = {
	// Statistic 组件没有事件
}
export type BlStatisticSlots = {
	/**
	 * 默认插槽，自定义数值显示
	 */
	default?: () => any
	
	/**
	 * 前缀插槽
	 */
	prefix?: () => any
	
	/**
	 * 后缀插槽
	 */
	suffix?: () => any
	
	/**
	 * 标题插槽
	 */
	title?: () => any
}
export type BlStatisticInstance = {
	// BlStatistic 组件没有暴露的公共方法
}

export type BlStepProps = {
	/**
	 * 自定义激活状态图标
	 */
	activeIcon?: string | null
	
	/**
	 * 自定义未激活状态图标
	 */
	inactiveIcon?: string | null
	
	/**
	 * 自定义已完成步骤对应的底部图标
	 */
	finishIcon?: string | null
	
	/**
	 * 步骤索引（由父组件自动设置）
	 */
	stepIndex?: number
	
	/**
	 * 是否为最后一个（由父组件自动设置）
	 */
	isLast?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlStepEvents = {
	/**
	 * 点击事件
	 */
	click?: (event: any) => void
}
export type BlStepSlots = {
	/**
	 * 默认插槽，步骤显示内容
	 */
	default?: () => any
}
export type BlStepInstance = {
	// BlStep 组件没有暴露的公共方法
}

export type BlStepsProps = {
	/**
	 * 显示方向
	 */
	direction?: BlStepsDirection
	
	/**
	 * 当前步骤（激活状态）
	 */
	active?: number | string
	
	/**
	 * 结束步骤
	 */
	finish?: number | string | null
	
	/**
	 * 激活状态颜色
	 */
	activeColor?: string
	
	/**
	 * 未激活状态颜色
	 */
	inactiveColor?: string
	
	/**
	 * 激活状态底部图标
	 */
	activeIcon?: string
	
	/**
	 * 未激活状态底部图标
	 */
	inactiveIcon?: string | null
	
	/**
	 * 已完成步骤对应的底部图标
	 */
	finishIcon?: string | null
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlStepsEvents = {
	/**
	 * 点击事件
	 */
	click?: (event: any) => void
}
export type BlStepsSlots = {
	/**
	 * 默认插槽，BlStep 组件
	 */
	default?: () => any
}
export type BlStepsInstance = {
	// BlSteps 组件没有暴露的公共方法
}

export type BlSwiperProps = {
	/**
	 * 当前显示的滑块索引
	 */
	current?: number
	
	/**
	 * 是否显示指示点
	 */
	indicatorDots?: boolean
	
	/**
	 * 指示点颜色
	 */
	indicatorColor?: string
	
	/**
	 * 当前选中的指示点颜色
	 */
	indicatorActiveColor?: string
	
	/**
	 * 是否自动播放
	 */
	autoplay?: boolean
	
	/**
	 * 自动播放时间间隔
	 */
	interval?: number
	
	/**
	 * 滑动动画时长
	 */
	duration?: number
	
	/**
	 * 是否采用衔接滑动
	 */
	circular?: boolean
	
	/**
	 * 滑动方向是否为纵向
	 */
	vertical?: boolean
	
	/**
	 * 前边距
	 */
	previousMargin?: string
	
	/**
	 * 后边距
	 */
	nextMargin?: string
	
	/**
	 * 同时显示的滑块数量
	 */
	displayMultipleItems?: number
	
	/**
	 * 是否跳过未显示的滑块布局
	 */
	skipHiddenItemLayout?: boolean
	
	/**
	 * 数据列表（用于自动生成 swiper-item）
	 * 如果提供了此属性，组件会自动将每个数据项包裹在 swiper-item 中
	 * 如果不提供，则使用默认插槽，用户需要自己提供 swiper-item
	 */
	items?: Array<any> | null
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlSwiperEvents = {
	/**
	 * 当前滑块索引变化事件
	 */
	change?: (event: { detail: { current: number } }) => void
	
	/**
	 * 滑动动画过渡事件
	 */
	transition?: (event: any) => void
	
	/**
	 * 滑动动画完成事件
	 */
	animationfinish?: (event: { detail: { current: number } }) => void
}
export type BlSwiperSlots = {
	/**
	 * 默认插槽，swiper-item 组件或使用 items 时渲染的内容
	 */
	default?: (props?: { item?: any, index?: number }) => any
}
export type BlSwiperInstance = {
	// BlSwiper 组件没有暴露的公共方法
}

export type BlSwitchProps = {
	/**
	 * 是否选中
	 */
	checked?: boolean
	
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	
	/**
	 * 样式类型，有效值：switch | checkbox
	 */
	type?: BlSwitchType
	
	/**
	 * switch 的颜色，同 css 的 color
	 */
	color?: string
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlSwitchEvents = {
	/**
	 * 值变化事件
	 */
	change?: (event: any) => void
}
export type BlSwitchSlots = {
	// BlSwitch 组件没有插槽
}
export type BlSwitchInstance = {
	// BlSwitch 组件没有暴露的公共方法
}

export type BlTabButtonProps = {
	/**
	 * 按钮文本
	 */
	text?: string
	
	/**
	 * 图标名称
	 */
	icon?: string
	
	/**
	 * 图标颜色
	 */
	iconColor?: string
	
	/**
	 * 徽章值
	 */
	badge?: string | number
	
	/**
	 * 是否选中
	 */
	active?: boolean
	
	/**
	 * 选中时的图标颜色
	 */
	activeIconColor?: string
	
	/**
	 * 选中时的文字颜色
	 */
	activeTextColor?: string
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlTabButtonEvents = {
	/**
	 * 点击事件
	 */
	click?: (event: any) => void
}
export type BlTabButtonSlots = {
	// BlTabButton 组件没有插槽
}
export type BlTabButtonInstance = {
	// BlTabButton 组件没有暴露的公共方法
}

export type BlTabPanelProps = {
	/**
	 * 标题
	 */
	title?: string
	
	/**
	 * 禁用当前tab
	 */
	disabled?: boolean
	
	/**
	 * 图标
	 */
	icon?: string | null
	
	/**
	 * 名称（用于标识）
	 */
	name?: string
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlTabPanelEvents = {
	// BlTabPanel 组件没有事件
}
export type BlTabPanelSlots = {
	/**
	 * 默认插槽，Tab 面板内容
	 */
	default?: () => any
}
export type BlTabPanelInstance = {
	// BlTabPanel 组件没有暴露的公共方法
}

export type BlTabbarProps = {
	/**
	 * 当前选中的标签索引
	 */
	value?: number
	
	/**
	 * 是否固定在底部
	 */
	fixed?: boolean
	
	/**
	 * 是否显示底部安全区域
	 */
	safeAreaBottom?: boolean
	
	/**
	 * 背景颜色
	 */
	backgroundColor?: string
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlTabbarEvents = {
	/**
	 * 值变化事件
	 */
	change?: (index: number) => void
}
export type BlTabbarSlots = {
	/**
	 * 默认插槽，BlTabButton 组件
	 */
	default?: () => any
}
export type BlTabbarInstance = {
	// BlTabbar 组件没有暴露的公共方法
}

export type BlTableProps = {
	/**
	 * 表格列配置
	 */
	columns?: Array<TableColumn>
	
	/**
	 * 数据源
	 */
	dataSource?: Array<Record<string, any>>
	
	/**
	 * 是否显示边框
	 */
	bordered?: boolean
	
	/**
	 * 是否显示表头
	 */
	showHeader?: boolean
	
	/**
	 * 是否显示斑马纹
	 */
	striped?: boolean
	
	/**
	 * 尺寸
	 */
	size?: TableSize
	
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlTableEvents = {
	/**
	 * 行点击事件
	 */
	rowClick?: (record: Record<string, any>, index: number) => void
}
export type BlTableSlots = {
	/**
	 * 默认插槽，自定义表格内容
	 */
	default?: () => any
	
	/**
	 * 自定义列内容插槽（通过索引签名支持动态列名）
	 * 注意：UTS 不支持索引签名，实际使用时通过插槽名称匹配
	 */
	[key: string]: (() => any) | TableColumnSlot | undefined
}
export type BlTableInstance = {
	// BlTable 组件没有暴露的公共方法
}

export type BlTabsProps = {
	/**
	 * 内边距
	 */
	padding?: string | number
	
	/**
	 * 当前激活的 key
	 */
	activeKey?: string
	
	/**
	 * 切换动画
	 */
	animate?: boolean
	
	/**
	 * tab 标题溢出时滚动
	 */
	scrollable?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlTabsEvents = {
	/**
	 * 激活的 key 变化事件
	 */
	activeKeyChange?: (key: string) => void
}
export type BlTabsSlots = {
	/**
	 * 默认插槽，TabPanel 组件
	 */
	default?: () => any
	
	/**
	 * 图标插槽，动态插槽名 icon-{index}
	 */
	[key: `icon-${number}`]: () => any
}
export type BlTabsInstance = {
	// BlTabs 组件没有暴露的公共方法
}

export type BlTagProps = {
	/**
	 * 标签类型
	 */
	type?: BlTagType
	
	/**
	 * 标签大小
	 */
	size?: BlTagSize
	
	/**
	 * 标签样式效果
	 */
	effect?: BlTagEffect
	
	/**
	 * 是否为圆角
	 */
	round?: boolean
	
	/**
	 * 是否可关闭
	 */
	closeable?: boolean
	
	/**
	 * 图标名称
	 */
	icon?: string
	
	/**
	 * 图标颜色
	 */
	iconColor?: string
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlTagEvents = {
	/**
	 * 关闭事件
	 */
	close?: (event: any) => void
	
	/**
	 * 点击事件
	 */
	click?: (event: any) => void
}
export type BlTagSlots = {
	/**
	 * 默认插槽，标签内容
	 */
	default?: () => any
}
export type BlTagInstance = {
	// BlTag 组件没有暴露的公共方法
}

export type BlTextProps = {
	/**
	 * 文本是否可选
	 */
	selectable?: boolean
	
	/**
	 * 是否允许用户选择文本
	 */
	userSelect?: boolean
	
	/**
	 * 显示连续空格，可选值：ensp(中文字符空格一半大小)、emsp(中文字符空格大小)、nbsp(根据字体设置的空格大小)
	 */
	space?: SpaceType
	
	/**
	 * 是否解码
	 */
	decode?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlTextEvents = {
	/**
	 * 点击事件
	 */
	click?: (event: any) => void
}
export type BlTextSlots = {
	/**
	 * 默认插槽，文本内容
	 */
	default?: () => any
}
export type BlTextInstance = {
	// BlText 组件没有暴露的公共方法
}

export type BlTextareaProps = {
	/**
	 * 输入值
	 */
	value?: string
	
	/**
	 * 占位符
	 */
	placeholder?: string
	
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	
	/**
	 * 最大长度
	 */
	maxlength?: number
	
	/**
	 * 是否自动聚焦
	 */
	autoFocus?: boolean
	
	/**
	 * 是否聚焦
	 */
	focus?: boolean
	
	/**
	 * 是否自动增高
	 */
	autoHeight?: boolean
	
	/**
	 * 是否固定
	 */
	fixed?: boolean
	
	/**
	 * 指定光标与键盘的距离
	 */
	cursorSpacing?: number
	
	/**
	 * 指定focus时的光标位置
	 */
	cursor?: number
	
	/**
	 * 是否显示键盘上方带有"完成"按钮那一栏
	 */
	showConfirmBar?: boolean
	
	/**
	 * 光标起始位置
	 */
	selectionStart?: number
	
	/**
	 * 光标结束位置
	 */
	selectionEnd?: number
	
	/**
	 * 是否保持键盘不收起
	 */
	holdKeyboard?: boolean
	
	/**
	 * 键盘弹起时，是否自动上推页面
	 */
	adjustPosition?: boolean
	
	/**
	 * 文本对齐
	 */
	inputAlign?: TextAlign
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
}
export type BlTextareaEvents = {
	/**
	 * 输入事件
	 */
	input?: (value: string) => void
	
	/**
	 * 值变化事件
	 */
	change?: (value: string) => void
	
	/**
	 * 聚焦事件
	 */
	focus?: (event: any) => void
	
	/**
	 * 失焦事件
	 */
	blur?: (event: any) => void
	
	/**
	 * 确认事件
	 */
	confirm?: (event: any) => void
	
	/**
	 * 行高变化事件
	 */
	linechange?: (event: any) => void
	
	/**
	 * 键盘高度变化事件
	 */
	keyboardheightchange?: (event: any) => void
}
export type BlTextareaSlots = {
	// BlTextarea 组件没有插槽
}
export type BlTextareaInstance = {
	// BlTextarea 组件没有暴露的公共方法
}

export type BlThemeProps = {
	/**
	 * 主题名称
	 */
	name?: string
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlThemeEvents = {
	// BlTheme 组件没有事件
}
export type BlThemeSlots = {
	/**
	 * 默认插槽
	 */
	default?: () => any
}
export type BlThemeInstance = {
	// BlTheme 组件没有暴露的公共方法
}

export type BlThemeProviderProps = {
	/**
	 * 主题配置对象（参考 antd 的 ConfigProvider theme 属性）
	 * 可以传递部分主题变量，会自动与默认主题合并
	 */
	theme?: ThemeConfig | null
	
	/**
	 * 预设主题名称（'light' | 'dark'）
	 * 当 theme 属性为空时，使用预设主题
	 */
	presetTheme?: BlThemeMode | null
}
export type BlThemeProviderEvents = {
	// BlThemeProvider 组件没有事件
}
export type BlThemeProviderSlots = {
	/**
	 * 默认插槽
	 */
	default?: () => any
}
export type BlThemeProviderInstance = {
	// BlThemeProvider 组件没有暴露的公共方法
}

export type BlThemeRootProps = {
	/**
	 * 主题名称
	 */
	theme?: BlThemeMode
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlThemeRootEvents = {
	// BlThemeRoot 组件没有事件
}
export type BlThemeRootSlots = {
	/**
	 * 默认插槽
	 */
	default?: () => any
}
export type BlThemeRootInstance = {
	// BlThemeRoot 组件没有暴露的公共方法
}

export type BlTimelineProps = {
	/**
	 * 时间轴模式
	 */
	mode?: TimelineMode
	
	/**
	 * 是否显示最后一条时间轴的尾部
	 */
	pending?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlTimelineEvents = {
	// Timeline 组件没有事件
}
export type BlTimelineSlots = {
	/**
	 * 默认插槽，TimelineItem 组件
	 */
	default?: () => any
	
	/**
	 * 待处理项插槽
	 */
	pending?: () => any
}
export type BlTimelineInstance = {
	// BlTimeline 组件没有暴露的公共方法
}

export type BlTooltipProps = {
	/**
	 * 提示文字
	 */
	title?: string
	
	/**
	 * 气泡框位置
	 */
	placement?: TooltipPlacement
	
	/**
	 * 触发行为
	 */
	trigger?: TriggerType
	
	/**
	 * 是否显示箭头
	 */
	arrow?: boolean
	
	/**
	 * 背景颜色
	 */
	color?: string
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlTooltipEvents = {
	/**
	 * 显示状态改变时触发
	 */
	visibleChange?: (visible: boolean) => void
}
export type BlTooltipSlots = {
	/**
	 * 默认插槽，触发元素
	 */
	default?: () => any
	
	/**
	 * 自定义提示内容
	 */
	title?: () => any
}
export type BlTooltipInstance = {
	// BlTooltip 组件没有暴露的公共方法
}

export type BlTourProps = {
	/**
	 * 是否显示引导
	 */
	open?: boolean
	
	/**
	 * 引导步骤
	 */
	steps?: Array<TourStep>
	
	/**
	 * 当前步骤索引
	 */
	current?: number
	
	/**
	 * 默认当前步骤索引
	 */
	defaultCurrent?: number
	
	/**
	 * 是否显示遮罩层
	 */
	mask?: boolean
	
	/**
	 * 遮罩层样式
	 */
	maskStyle?: Record<string, any>
	
	/**
	 * 是否显示关闭按钮
	 */
	closable?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlTourEvents = {
	/**
	 * 关闭事件
	 */
	close?: () => void
	
	/**
	 * 步骤改变事件
	 */
	change?: (current: number) => void
	
	/**
	 * 完成事件
	 */
	finish?: () => void
}
export type BlTourSlots = {
	/**
	 * 默认插槽，自定义引导内容
	 */
	default?: (step: TourStep, current: number) => any
	
	/**
	 * 自定义步骤内容
	 */
	step?: (step: TourStep, current: number) => any
}
export type BlTourInstance = {
	/**
	 * 下一步
	 */
	next?: () => void
	
	/**
	 * 上一步
	 */
	prev?: () => void
	
	/**
	 * 跳转到指定步骤
	 */
	goTo?: (step: number) => void
}

export type BlTransferProps = {
	/**
	 * 数据源
	 */
	dataSource?: Array<TransferItem>
	
	/**
	 * 已选中的 key 列表
	 */
	targetKeys?: Array<string | number>
	
	/**
	 * 默认已选中的 key 列表
	 */
	defaultTargetKeys?: Array<string | number>
	
	/**
	 * 左侧标题
	 */
	titles?: [string, string]
	
	/**
	 * 操作按钮文案
	 */
	operations?: [string, string]
	
	/**
	 * 是否显示搜索框
	 */
	showSearch?: boolean
	
	/**
	 * 搜索框占位符
	 */
	searchPlaceholder?: [string, string]
	
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlTransferEvents = {
	/**
	 * 选中项改变事件
	 */
	change?: (targetKeys: Array<string | number>, direction: 'left' | 'right', moveKeys: Array<string | number>) => void
	
	/**
	 * 搜索事件
	 */
	search?: (direction: 'left' | 'right', value: string) => void
	
	/**
	 * 选中项改变事件
	 */
	selectChange?: (sourceSelectedKeys: Array<string | number>, targetSelectedKeys: Array<string | number>) => void
}
export type BlTransferSlots = {
	/**
	 * 默认插槽，自定义穿梭框内容
	 */
	default?: () => any
	
	/**
	 * 自定义列表项内容
	 */
	item?: (item: TransferItem) => any
}
export type BlTransferInstance = {
	// BlTransfer 组件没有暴露的公共方法
}

export type BlTreeProps = {
	/**
	 * 树节点数据
	 */
	treeData?: Array<TreeNodeData>
	
	/**
	 * 是否显示复选框
	 */
	checkable?: boolean
	
	/**
	 * 是否默认展开所有节点
	 */
	defaultExpandAll?: boolean
	
	/**
	 * 默认展开的节点 key
	 */
	defaultExpandedKeys?: Array<string | number>
	
	/**
	 * 当前展开的节点 key（受控）
	 */
	expandedKeys?: Array<string | number>
	
	/**
	 * 默认选中的节点 key
	 */
	defaultSelectedKeys?: Array<string | number>
	
	/**
	 * 当前选中的节点 key（受控）
	 */
	selectedKeys?: Array<string | number>
	
	/**
	 * 默认勾选的节点 key
	 */
	defaultCheckedKeys?: Array<string | number>
	
	/**
	 * 当前勾选的节点 key（受控）
	 */
	checkedKeys?: Array<string | number>
	
	/**
	 * 是否显示连接线
	 */
	showLine?: boolean
	
	/**
	 * 是否显示图标
	 */
	showIcon?: boolean
	
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlTreeEvents = {
	/**
	 * 节点展开/收起事件
	 */
	expand?: (expandedKeys: Array<string | number>, info: { expanded: boolean, node: TreeNodeData }) => void
	
	/**
	 * 节点选中事件
	 */
	select?: (selectedKeys: Array<string | number>, info: { selected: boolean, node: TreeNodeData }) => void
	
	/**
	 * 节点勾选事件
	 */
	check?: (checkedKeys: Array<string | number>, info: { checked: boolean, node: TreeNodeData }) => void
}
export type BlTreeSlots = {
	/**
	 * 默认插槽，自定义树节点内容
	 */
	default?: (node: TreeNodeData) => any
	
	/**
	 * 图标插槽
	 */
	icon?: (node: TreeNodeData) => any
	
	/**
	 * 标题插槽
	 */
	title?: (node: TreeNodeData) => any
}
export type BlTreeInstance = {
	// BlTree 组件没有暴露的公共方法
}

export type BlTreeselectProps = {
	/**
	 * 当前值
	 */
	value?: string | number | Array<string | number>
	
	/**
	 * 默认值
	 */
	defaultValue?: string | number | Array<string | number>
	
	/**
	 * 树节点数据
	 */
	treeData?: Array<TreeNodeData>
	
	/**
	 * 输入框占位符
	 */
	placeholder?: string
	
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	
	/**
	 * 是否允许清除
	 */
	allowClear?: boolean
	
	/**
	 * 是否多选
	 */
	multiple?: boolean
	
	/**
	 * 是否显示搜索框
	 */
	showSearch?: boolean
	
	/**
	 * 是否显示树连接线
	 */
	showLine?: boolean
	
	/**
	 * 是否显示图标
	 */
	showIcon?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlTreeselectEvents = {
	/**
	 * 值改变事件
	 */
	change?: (value: string | number | Array<string | number>) => void
	
	/**
	 * 搜索事件
	 */
	search?: (value: string) => void
	
	/**
	 * 展开/收起事件
	 */
	expand?: (expandedKeys: Array<string | number>) => void
}
export type BlTreeselectSlots = {
	/**
	 * 默认插槽，自定义选择器内容
	 */
	default?: () => any
}
export type BlTreeselectInstance = {
	/**
	 * 聚焦
	 */
	focus?: () => void
	
	/**
	 * 失焦
	 */
	blur?: () => void
}

export type BlUploaderProps = {
	/**
	 * 文件列表
	 */
	fileList?: Array<UploadFile>
	
	/**
	 * 最多可以选择的图片张数
	 */
	maxCount?: number
	
	/**
	 * 是否显示删除按钮
	 */
	deletable?: boolean
	
	/**
	 * 上传提示文本
	 */
	uploadText?: string
	
	/**
	 * 图片预览大小
	 */
	size?: number | string
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlUploaderEvents = {
	/**
	 * 选择文件后触发
	 */
	afterRead?: (files: Array<UploadFile>) => void
	
	/**
	 * 删除文件时触发
	 */
	delete?: (event: { index: number, file: UploadFile }) => void
	
	/**
	 * 预览图片时触发
	 */
	preview?: (event: { index: number, url: string }) => void
}
export type BlUploaderSlots = {
	/**
	 * 上传按钮插槽
	 */
	upload?: () => any
}
export type BlUploaderInstance = {
	// BlUploader 组件没有暴露的公共方法
}

export type BlVideoProps = {
	/**
	 * 视频资源地址
	 */
	src?: string
	
	/**
	 * 视频封面的图片网络资源地址或云文件ID
	 */
	poster?: string
	
	/**
	 * 是否自动播放
	 */
	autoplay?: boolean
	
	/**
	 * 是否循环播放
	 */
	loop?: boolean
	
	/**
	 * 是否静音播放
	 */
	muted?: boolean
	
	/**
	 * 是否显示默认播放控件
	 */
	controls?: boolean
	
	/**
	 * 是否显示中央播放按钮
	 */
	showCenterPlayBtn?: boolean
	
	/**
	 * 是否显示全屏按钮
	 */
	showFullscreenBtn?: boolean
	
	/**
	 * 是否显示播放按钮
	 */
	showPlayBtn?: boolean
	
	/**
	 * 是否显示进度条
	 */
	showProgress?: boolean
	
	/**
	 * 是否显示加载中提示
	 */
	showLoading?: boolean
	
	/**
	 * 是否开启播放手势
	 */
	enablePlayGesture?: boolean
	
	/**
	 * 视频缩放模式
	 */
	objectFit?: VideoObjectFit
	
	/**
	 * 指定视频初始播放位置
	 */
	initialTime?: number
	
	/**
	 * 播放速率
	 */
	playbackRate?: number
	
	/**
	 * 视频播放方向
	 */
	direction?: number
	
	/**
	 * 是否开启进度手势
	 */
	enableProgressGesture?: boolean
	
	/**
	 * 是否显示锁屏按钮
	 */
	showScreenLockButton?: boolean
	
	/**
	 * 是否开启页面手势
	 */
	pageGesture?: boolean
	
	/**
	 * 播放策略
	 */
	playStrategy?: number
	
	/**
	 * 封面图大小
	 */
	posterSize?: string
	
	/**
	 * 视频请求的header
	 */
	header?: Record<string, any>
	
	/**
	 * 是否启用元数据
	 */
	enableMetadata?: boolean
	
	/**
	 * 是否开启画中画
	 */
	enablePictureInPicture?: boolean
	
	/**
	 * 是否开启自动旋转
	 */
	enableAutoRotation?: boolean
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlVideoEvents = {
	/**
	 * 播放事件
	 */
	play?: (event: any) => void
	
	/**
	 * 暂停事件
	 */
	pause?: (event: any) => void
	
	/**
	 * 播放结束事件
	 */
	ended?: (event: any) => void
	
	/**
	 * 错误事件
	 */
	error?: (event: any) => void
	
	/**
	 * 等待事件
	 */
	waiting?: (event: any) => void
	
	/**
	 * 进度事件
	 */
	progress?: (event: any) => void
	
	/**
	 * 元数据加载完成事件
	 */
	loadedMetadata?: (event: any) => void
	
	/**
	 * 时间更新事件
	 */
	timeUpdate?: (event: any) => void
	
	/**
	 * 全屏变化事件
	 */
	fullscreenChange?: (event: any) => void
	
	/**
	 * 用户操作事件
	 */
	userAction?: (event: any) => void
}
export type BlVideoSlots = {
	/**
	 * 默认插槽
	 */
	default?: () => any
}
export type BlVideoInstance = {
	// BlVideo 组件没有暴露的公共方法
}

export type BlViewProps = {
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlViewEvents = {
	/**
	 * 点击事件
	 */
	click?: (event: any) => void
	
	/**
	 * 触摸开始事件
	 */
	touchStart?: (event: any) => void
	
	/**
	 * 触摸结束事件
	 */
	touchEnd?: (event: any) => void
	
	/**
	 * 触摸移动事件
	 */
	touchMove?: (event: any) => void
}
export type BlViewSlots = {
	/**
	 * 默认插槽
	 */
	default?: () => any
}
export type BlViewInstance = {
	// BlView 组件没有暴露的公共方法
}

export type BlWatermarkProps = {
	/**
	 * 水印内容
	 */
	content?: string | Array<string>
	
	/**
	 * 水印宽度
	 */
	width?: number
	
	/**
	 * 水印高度
	 */
	height?: number
	
	/**
	 * 水印图片地址
	 */
	image?: string
	
	/**
	 * 水印文字样式
	 */
	font?: WatermarkFont
	
	/**
	 * 水印旋转角度
	 */
	rotate?: number
	
	/**
	 * 水印透明度
	 */
	opacity?: number
	
	/**
	 * 水印间距
	 */
	gap?: [number, number]
	
	/**
	 * 水印偏移量
	 */
	offset?: [number, number]
	
	/**
	 * 自定义样式
	 */
	customStyle?: string
	
	/**
	 * 自定义类名
	 */
	customClass?: string
}
export type BlWatermarkEvents = {
	// Watermark 组件没有事件
}
export type BlWatermarkSlots = {
	/**
	 * 默认插槽，需要添加水印的内容
	 */
	default?: () => any
}
export type BlWatermarkInstance = {
	// BlWatermark 组件没有暴露的公共方法
}

// ==================== 组件类型声明 ====================
// 注意：这些是类型声明，实际组件在运行时从 .uvue 或 .vue 文件加载
// 每个组件都使用完整的 DefineComponent 类型，包括：
// - Props: 组件属性类型
// - Emits: 组件事件类型
// - Slots: 组件插槽类型
// - Instance: 组件实例方法类型（通过 ref 访问）

declare const BlAlert: DefineComponent<
  BlAlertProps,
  any,
  any,
  any,
  any,
  BlAlertEvents,
  any,
  any,
  any,
  BlAlertInstance
>

declare const BlAmount: DefineComponent<
  BlAmountProps,
  any,
  any,
  any,
  any,
  BlAmountEvents,
  any,
  any,
  any,
  BlAmountInstance
>

declare const BlAutocomplete: DefineComponent<
  BlAutocompleteProps,
  any,
  any,
  any,
  any,
  BlAutocompleteEvents,
  any,
  any,
  any,
  BlAutocompleteInstance
>

declare const BlAvatar: DefineComponent<
  BlAvatarProps,
  any,
  any,
  any,
  any,
  BlAvatarEvents,
  any,
  any,
  any,
  BlAvatarInstance
>

declare const BlBackTop: DefineComponent<
  BlBackTopProps,
  any,
  any,
  any,
  any,
  BlBackTopEvents,
  any,
  any,
  any,
  BlBackTopInstance
>

declare const BlBadge: DefineComponent<
  BlBadgeProps,
  any,
  any,
  any,
  any,
  BlBadgeEvents,
  any,
  any,
  any,
  BlBadgeInstance
>

declare const BlBottomBar: DefineComponent<
  BlBottomBarProps,
  any,
  any,
  any,
  any,
  BlBottomBarEvents,
  any,
  any,
  any,
  BlBottomBarInstance
>

declare const BlButton: DefineComponent<
  BlButtonProps,
  any,
  any,
  any,
  any,
  BlButtonEvents,
  any,
  any,
  any,
  BlButtonInstance
>

declare const BlCalendar: DefineComponent<
  BlCalendarProps,
  any,
  any,
  any,
  any,
  BlCalendarEvents,
  any,
  any,
  any,
  BlCalendarInstance
>

declare const BlCardLayout: DefineComponent<
  BlCardLayoutProps,
  any,
  any,
  any,
  any,
  BlCardLayoutEvents,
  any,
  any,
  any,
  BlCardLayoutInstance
>

declare const BlCell: DefineComponent<
  BlCellProps,
  any,
  any,
  any,
  any,
  BlCellEvents,
  any,
  any,
  any,
  BlCellInstance
>

declare const BlCheckTag: DefineComponent<
  BlCheckTagProps,
  any,
  any,
  any,
  any,
  BlCheckTagEvents,
  any,
  any,
  any,
  BlCheckTagInstance
>

declare const BlCheckbox: DefineComponent<
  BlCheckboxProps,
  any,
  any,
  any,
  any,
  BlCheckboxEvents,
  any,
  any,
  any,
  BlCheckboxInstance
>

declare const BlCheckboxGroup: DefineComponent<
  BlCheckboxGroupProps,
  any,
  any,
  any,
  any,
  BlCheckboxGroupEvents,
  any,
  any,
  any,
  BlCheckboxGroupInstance
>

declare const BlCheckboxPopup: DefineComponent<
  BlCheckboxPopupProps,
  any,
  any,
  any,
  any,
  BlCheckboxPopupEvents,
  any,
  any,
  any,
  BlCheckboxPopupInstance
>

declare const BlChecker: DefineComponent<
  BlCheckerProps,
  any,
  any,
  any,
  any,
  BlCheckerEvents,
  any,
  any,
  any,
  BlCheckerInstance
>

declare const BlCheckerPopup: DefineComponent<
  BlCheckerPopupProps,
  any,
  any,
  any,
  any,
  BlCheckerPopupEvents,
  any,
  any,
  any,
  BlCheckerPopupInstance
>

declare const BlCol: DefineComponent<
  BlColProps,
  any,
  any,
  any,
  any,
  BlColEvents,
  any,
  any,
  any,
  BlColInstance
>

declare const BlCollapse: DefineComponent<
  BlCollapseProps,
  any,
  any,
  any,
  any,
  BlCollapseEvents,
  any,
  any,
  any,
  BlCollapseInstance
>

declare const BlCountDown: DefineComponent<
  BlCountDownProps,
  any,
  any,
  any,
  any,
  BlCountDownEvents,
  any,
  any,
  any,
  BlCountDownInstance
>

declare const BlCustomNavigationBar: DefineComponent<
  BlCustomNavigationBarProps,
  any,
  any,
  any,
  any,
  BlCustomNavigationBarEvents,
  any,
  any,
  any,
  BlCustomNavigationBarInstance
>

declare const BlDescriptions: DefineComponent<
  BlDescriptionsProps,
  any,
  any,
  any,
  any,
  BlDescriptionsEvents,
  any,
  any,
  any,
  BlDescriptionsInstance
>

declare const BlDialog: DefineComponent<
  BlDialogProps,
  any,
  any,
  any,
  any,
  BlDialogEvents,
  any,
  any,
  any,
  BlDialogInstance
>

declare const BlDivider: DefineComponent<
  BlDividerProps,
  any,
  any,
  any,
  any,
  BlDividerEvents,
  any,
  any,
  any,
  BlDividerInstance
>

declare const BlDrawer: DefineComponent<
  BlDrawerProps,
  any,
  any,
  any,
  any,
  BlDrawerEvents,
  any,
  any,
  any,
  BlDrawerInstance
>

declare const BlEmpty: DefineComponent<
  BlEmptyProps,
  any,
  any,
  any,
  any,
  BlEmptyEvents,
  any,
  any,
  any,
  BlEmptyInstance
>

declare const BlErrorCapture: DefineComponent<
  BlErrorCaptureProps,
  any,
  any,
  any,
  any,
  BlErrorCaptureEvents,
  any,
  any,
  any,
  BlErrorCaptureInstance
>

declare const BlFilter: DefineComponent<
  BlFilterProps,
  any,
  any,
  any,
  any,
  BlFilterEvents,
  any,
  any,
  any,
  BlFilterInstance
>

declare const BlFlex: DefineComponent<
  BlFlexProps,
  any,
  any,
  any,
  any,
  BlFlexEvents,
  any,
  any,
  any,
  BlFlexInstance
>

declare const BlFloatButton: DefineComponent<
  BlFloatButtonProps,
  any,
  any,
  any,
  any,
  BlFloatButtonEvents,
  any,
  any,
  any,
  BlFloatButtonInstance
>

declare const BlForm: DefineComponent<
  BlFormProps,
  any,
  any,
  any,
  any,
  BlFormEvents,
  any,
  any,
  any,
  BlFormInstance
>

declare const BlGap: DefineComponent<
  BlGapProps,
  any,
  any,
  any,
  any,
  BlGapEvents,
  any,
  any,
  any,
  BlGapInstance
>

declare const BlGrid: DefineComponent<
  BlGridProps,
  any,
  any,
  any,
  any,
  BlGridEvents,
  any,
  any,
  any,
  BlGridInstance
>

declare const BlGridItem: DefineComponent<
  BlGridItemProps,
  any,
  any,
  any,
  any,
  BlGridItemEvents,
  any,
  any,
  any,
  BlGridItemInstance
>

declare const BlHairline: DefineComponent<
  BlHairlineProps,
  any,
  any,
  any,
  any,
  BlHairlineEvents,
  any,
  any,
  any,
  BlHairlineInstance
>

declare const BlI18nProvider: DefineComponent<
  BlI18nProviderProps,
  any,
  any,
  any,
  any,
  BlI18nProviderEvents,
  any,
  any,
  any,
  BlI18nProviderInstance
>

declare const BlIcon: DefineComponent<
  BlIconProps,
  any,
  any,
  any,
  any,
  BlIconEvents,
  any,
  any,
  any,
  BlIconInstance
>

declare const BlImage: DefineComponent<
  BlImageProps,
  any,
  any,
  any,
  any,
  BlImageEvents,
  any,
  any,
  any,
  BlImageInstance
>

declare const BlInput: DefineComponent<
  BlInputProps,
  any,
  any,
  any,
  any,
  BlInputEvents,
  any,
  any,
  any,
  BlInputInstance
>

declare const BlListView: DefineComponent<
  BlListViewProps,
  any,
  any,
  any,
  any,
  BlListViewEvents,
  any,
  any,
  any,
  BlListViewInstance
>

declare const BlLoading: DefineComponent<
  BlLoadingProps,
  any,
  any,
  any,
  any,
  BlLoadingEvents,
  any,
  any,
  any,
  BlLoadingInstance
>

declare const BlMenu: DefineComponent<
  BlMenuProps,
  any,
  any,
  any,
  any,
  BlMenuEvents,
  any,
  any,
  any,
  BlMenuInstance
>

declare const BlMessage: DefineComponent<
  BlMessageProps,
  any,
  any,
  any,
  any,
  BlMessageEvents,
  any,
  any,
  any,
  BlMessageInstance
>

declare const BlModal: DefineComponent<
  BlModalProps,
  any,
  any,
  any,
  any,
  BlModalEvents,
  any,
  any,
  any,
  BlModalInstance
>

declare const BlMpCustomTabbar: DefineComponent<
  BlMpCustomTabbarProps,
  any,
  any,
  any,
  any,
  BlMpCustomTabbarEvents,
  any,
  any,
  any,
  BlMpCustomTabbarInstance
>

declare const BlNoop: DefineComponent<
  BlNoopProps,
  any,
  any,
  any,
  any,
  BlNoopEvents,
  any,
  any,
  any,
  BlNoopInstance
>

declare const BlNoticeBar: DefineComponent<
  BlNoticeBarProps,
  any,
  any,
  any,
  any,
  BlNoticeBarEvents,
  any,
  any,
  any,
  BlNoticeBarInstance
>

declare const BlNotification: DefineComponent<
  BlNotificationProps,
  any,
  any,
  any,
  any,
  BlNotificationEvents,
  any,
  any,
  any,
  BlNotificationInstance
>

declare const BlNumberInput: DefineComponent<
  BlNumberInputProps,
  any,
  any,
  any,
  any,
  BlNumberInputEvents,
  any,
  any,
  any,
  BlNumberInputInstance
>

declare const BlPage: DefineComponent<
  BlPageProps,
  any,
  any,
  any,
  any,
  BlPageEvents,
  any,
  any,
  any,
  BlPageInstance
>

declare const BlPageStyle: DefineComponent<
  BlPageStyleProps,
  any,
  any,
  any,
  any,
  BlPageStyleEvents,
  any,
  any,
  any,
  BlPageStyleInstance
>

declare const BlPagination: DefineComponent<
  BlPaginationProps,
  any,
  any,
  any,
  any,
  BlPaginationEvents,
  any,
  any,
  any,
  BlPaginationInstance
>

declare const BlPickerCascaderSelector: DefineComponent<
  BlPickerCascaderSelectorProps,
  any,
  any,
  any,
  any,
  BlPickerCascaderSelectorEvents,
  any,
  any,
  any,
  BlPickerCascaderSelectorInstance
>

declare const BlPickerDate: DefineComponent<
  BlPickerDateProps,
  any,
  any,
  any,
  any,
  BlPickerDateEvents,
  any,
  any,
  any,
  BlPickerDateInstance
>

declare const BlPickerMultiSelector: DefineComponent<
  BlPickerMultiSelectorProps,
  any,
  any,
  any,
  any,
  BlPickerMultiSelectorEvents,
  any,
  any,
  any,
  BlPickerMultiSelectorInstance
>

declare const BlPickerSelector: DefineComponent<
  BlPickerSelectorProps,
  any,
  any,
  any,
  any,
  BlPickerSelectorEvents,
  any,
  any,
  any,
  BlPickerSelectorInstance
>

declare const BlPickerTime: DefineComponent<
  BlPickerTimeProps,
  any,
  any,
  any,
  any,
  BlPickerTimeEvents,
  any,
  any,
  any,
  BlPickerTimeInstance
>

declare const BlPopconfirm: DefineComponent<
  BlPopconfirmProps,
  any,
  any,
  any,
  any,
  BlPopconfirmEvents,
  any,
  any,
  any,
  BlPopconfirmInstance
>

declare const BlPopover: DefineComponent<
  BlPopoverProps,
  any,
  any,
  any,
  any,
  BlPopoverEvents,
  any,
  any,
  any,
  BlPopoverInstance
>

declare const BlPopup: DefineComponent<
  BlPopupProps,
  any,
  any,
  any,
  any,
  BlPopupEvents,
  any,
  any,
  any,
  BlPopupInstance
>

declare const BlPortal: DefineComponent<
  BlPortalProps,
  any,
  any,
  any,
  any,
  BlPortalEvents,
  any,
  any,
  any,
  BlPortalInstance
>

declare const BlPosterPainter: DefineComponent<
  BlPosterPainterProps,
  any,
  any,
  any,
  any,
  BlPosterPainterEvents,
  any,
  any,
  any,
  BlPosterPainterInstance
>

declare const BlPreviewContext: DefineComponent<
  BlPreviewContextProps,
  any,
  any,
  any,
  any,
  BlPreviewContextEvents,
  any,
  any,
  any,
  BlPreviewContextInstance
>

declare const BlProgress: DefineComponent<
  BlProgressProps,
  any,
  any,
  any,
  any,
  BlProgressEvents,
  any,
  any,
  any,
  BlProgressInstance
>

declare const BlQrcode: DefineComponent<
  BlQrcodeProps,
  any,
  any,
  any,
  any,
  BlQrcodeEvents,
  any,
  any,
  any,
  BlQrcodeInstance
>

declare const BlRadio: DefineComponent<
  BlRadioProps,
  any,
  any,
  any,
  any,
  BlRadioEvents,
  any,
  any,
  any,
  BlRadioInstance
>

declare const BlRadioGroup: DefineComponent<
  BlRadioGroupProps,
  any,
  any,
  any,
  any,
  BlRadioGroupEvents,
  any,
  any,
  any,
  BlRadioGroupInstance
>

declare const BlRadioPopup: DefineComponent<
  BlRadioPopupProps,
  any,
  any,
  any,
  any,
  BlRadioPopupEvents,
  any,
  any,
  any,
  BlRadioPopupInstance
>

declare const BlRate: DefineComponent<
  BlRateProps,
  any,
  any,
  any,
  any,
  BlRateEvents,
  any,
  any,
  any,
  BlRateInstance
>

declare const BlResult: DefineComponent<
  BlResultProps,
  any,
  any,
  any,
  any,
  BlResultEvents,
  any,
  any,
  any,
  BlResultInstance
>

declare const BlRow: DefineComponent<
  BlRowProps,
  any,
  any,
  any,
  any,
  BlRowEvents,
  any,
  any,
  any,
  BlRowInstance
>

declare const BlScrollView: DefineComponent<
  BlScrollViewProps,
  any,
  any,
  any,
  any,
  BlScrollViewEvents,
  any,
  any,
  any,
  BlScrollViewInstance
>

declare const BlSearchBar: DefineComponent<
  BlSearchBarProps,
  any,
  any,
  any,
  any,
  BlSearchBarEvents,
  any,
  any,
  any,
  BlSearchBarInstance
>

declare const BlSegmented: DefineComponent<
  BlSegmentedProps,
  any,
  any,
  any,
  any,
  BlSegmentedEvents,
  any,
  any,
  any,
  BlSegmentedInstance
>

declare const BlShareAppMessage: DefineComponent<
  BlShareAppMessageProps,
  any,
  any,
  any,
  any,
  BlShareAppMessageEvents,
  any,
  any,
  any,
  BlShareAppMessageInstance
>

declare const BlShareDialog: DefineComponent<
  BlShareDialogProps,
  any,
  any,
  any,
  any,
  BlShareDialogEvents,
  any,
  any,
  any,
  BlShareDialogInstance
>

declare const BlSkeleton: DefineComponent<
  BlSkeletonProps,
  any,
  any,
  any,
  any,
  BlSkeletonEvents,
  any,
  any,
  any,
  BlSkeletonInstance
>

declare const BlSlider: DefineComponent<
  BlSliderProps,
  any,
  any,
  any,
  any,
  BlSliderEvents,
  any,
  any,
  any,
  BlSliderInstance
>

declare const BlSortTag: DefineComponent<
  BlSortTagProps,
  any,
  any,
  any,
  any,
  BlSortTagEvents,
  any,
  any,
  any,
  BlSortTagInstance
>

declare const BlSpace: DefineComponent<
  BlSpaceProps,
  any,
  any,
  any,
  any,
  BlSpaceEvents,
  any,
  any,
  any,
  BlSpaceInstance
>

declare const BlSpinner: DefineComponent<
  BlSpinnerProps,
  any,
  any,
  any,
  any,
  BlSpinnerEvents,
  any,
  any,
  any,
  BlSpinnerInstance
>

declare const BlStatistic: DefineComponent<
  BlStatisticProps,
  any,
  any,
  any,
  any,
  BlStatisticEvents,
  any,
  any,
  any,
  BlStatisticInstance
>

declare const BlStep: DefineComponent<
  BlStepProps,
  any,
  any,
  any,
  any,
  BlStepEvents,
  any,
  any,
  any,
  BlStepInstance
>

declare const BlSteps: DefineComponent<
  BlStepsProps,
  any,
  any,
  any,
  any,
  BlStepsEvents,
  any,
  any,
  any,
  BlStepsInstance
>

declare const BlSwiper: DefineComponent<
  BlSwiperProps,
  any,
  any,
  any,
  any,
  BlSwiperEvents,
  any,
  any,
  any,
  BlSwiperInstance
>

declare const BlSwitch: DefineComponent<
  BlSwitchProps,
  any,
  any,
  any,
  any,
  BlSwitchEvents,
  any,
  any,
  any,
  BlSwitchInstance
>

declare const BlTabButton: DefineComponent<
  BlTabButtonProps,
  any,
  any,
  any,
  any,
  BlTabButtonEvents,
  any,
  any,
  any,
  BlTabButtonInstance
>

declare const BlTabPanel: DefineComponent<
  BlTabPanelProps,
  any,
  any,
  any,
  any,
  BlTabPanelEvents,
  any,
  any,
  any,
  BlTabPanelInstance
>

declare const BlTabbar: DefineComponent<
  BlTabbarProps,
  any,
  any,
  any,
  any,
  BlTabbarEvents,
  any,
  any,
  any,
  BlTabbarInstance
>

declare const BlTable: DefineComponent<
  BlTableProps,
  any,
  any,
  any,
  any,
  BlTableEvents,
  any,
  any,
  any,
  BlTableInstance
>

declare const BlTabs: DefineComponent<
  BlTabsProps,
  any,
  any,
  any,
  any,
  BlTabsEvents,
  any,
  any,
  any,
  BlTabsInstance
>

declare const BlTag: DefineComponent<
  BlTagProps,
  any,
  any,
  any,
  any,
  BlTagEvents,
  any,
  any,
  any,
  BlTagInstance
>

declare const BlText: DefineComponent<
  BlTextProps,
  any,
  any,
  any,
  any,
  BlTextEvents,
  any,
  any,
  any,
  BlTextInstance
>

declare const BlTextarea: DefineComponent<
  BlTextareaProps,
  any,
  any,
  any,
  any,
  BlTextareaEvents,
  any,
  any,
  any,
  BlTextareaInstance
>

declare const BlTheme: DefineComponent<
  BlThemeProps,
  any,
  any,
  any,
  any,
  BlThemeEvents,
  any,
  any,
  any,
  BlThemeInstance
>

declare const BlThemeProvider: DefineComponent<
  BlThemeProviderProps,
  any,
  any,
  any,
  any,
  BlThemeProviderEvents,
  any,
  any,
  any,
  BlThemeProviderInstance
>

declare const BlThemeRoot: DefineComponent<
  BlThemeRootProps,
  any,
  any,
  any,
  any,
  BlThemeRootEvents,
  any,
  any,
  any,
  BlThemeRootInstance
>

declare const BlTimeline: DefineComponent<
  BlTimelineProps,
  any,
  any,
  any,
  any,
  BlTimelineEvents,
  any,
  any,
  any,
  BlTimelineInstance
>

declare const BlTooltip: DefineComponent<
  BlTooltipProps,
  any,
  any,
  any,
  any,
  BlTooltipEvents,
  any,
  any,
  any,
  BlTooltipInstance
>

declare const BlTour: DefineComponent<
  BlTourProps,
  any,
  any,
  any,
  any,
  BlTourEvents,
  any,
  any,
  any,
  BlTourInstance
>

declare const BlTransfer: DefineComponent<
  BlTransferProps,
  any,
  any,
  any,
  any,
  BlTransferEvents,
  any,
  any,
  any,
  BlTransferInstance
>

declare const BlTree: DefineComponent<
  BlTreeProps,
  any,
  any,
  any,
  any,
  BlTreeEvents,
  any,
  any,
  any,
  BlTreeInstance
>

declare const BlTreeselect: DefineComponent<
  BlTreeselectProps,
  any,
  any,
  any,
  any,
  BlTreeselectEvents,
  any,
  any,
  any,
  BlTreeselectInstance
>

declare const BlUploader: DefineComponent<
  BlUploaderProps,
  any,
  any,
  any,
  any,
  BlUploaderEvents,
  any,
  any,
  any,
  BlUploaderInstance
>

declare const BlVideo: DefineComponent<
  BlVideoProps,
  any,
  any,
  any,
  any,
  BlVideoEvents,
  any,
  any,
  any,
  BlVideoInstance
>

declare const BlView: DefineComponent<
  BlViewProps,
  any,
  any,
  any,
  any,
  BlViewEvents,
  any,
  any,
  any,
  BlViewInstance
>

declare const BlWatermark: DefineComponent<
  BlWatermarkProps,
  any,
  any,
  any,
  any,
  BlWatermarkEvents,
  any,
  any,
  any,
  BlWatermarkInstance
>

// ==================== 导出所有组件 ====================
export {
	BlAlert,
	BlAmount,
	BlAutocomplete,
	BlAvatar,
	BlBackTop,
	BlBadge,
	BlBottomBar,
	BlButton,
	BlCalendar,
	BlCardLayout,
	BlCell,
	BlCheckTag,
	BlCheckbox,
	BlCheckboxGroup,
	BlCheckboxPopup,
	BlChecker,
	BlCheckerPopup,
	BlCol,
	BlCollapse,
	BlCountDown,
	BlCustomNavigationBar,
	BlDescriptions,
	BlDialog,
	BlDivider,
	BlDrawer,
	BlEmpty,
	BlErrorCapture,
	BlFilter,
	BlFlex,
	BlFloatButton,
	BlForm,
	BlGap,
	BlGrid,
	BlGridItem,
	BlHairline,
	BlI18nProvider,
	BlIcon,
	BlImage,
	BlInput,
	BlListView,
	BlLoading,
	BlMenu,
	BlMessage,
	BlModal,
	BlMpCustomTabbar,
	BlNoop,
	BlNoticeBar,
	BlNotification,
	BlNumberInput,
	BlPage,
	BlPageStyle,
	BlPagination,
	BlPickerCascaderSelector,
	BlPickerDate,
	BlPickerMultiSelector,
	BlPickerSelector,
	BlPickerTime,
	BlPopconfirm,
	BlPopover,
	BlPopup,
	BlPortal,
	BlPosterPainter,
	BlPreviewContext,
	BlProgress,
	BlQrcode,
	BlRadio,
	BlRadioGroup,
	BlRadioPopup,
	BlRate,
	BlResult,
	BlRow,
	BlScrollView,
	BlSearchBar,
	BlSegmented,
	BlShareAppMessage,
	BlShareDialog,
	BlSkeleton,
	BlSlider,
	BlSortTag,
	BlSpace,
	BlSpinner,
	BlStatistic,
	BlStep,
	BlSteps,
	BlSwiper,
	BlSwitch,
	BlTabButton,
	BlTabPanel,
	BlTabbar,
	BlTable,
	BlTabs,
	BlTag,
	BlText,
	BlTextarea,
	BlTheme,
	BlThemeProvider,
	BlThemeRoot,
	BlTimeline,
	BlTooltip,
	BlTour,
	BlTransfer,
	BlTree,
	BlTreeselect,
	BlUploader,
	BlVideo,
	BlView,
	BlWatermark
}

// ==================== 导出默认插件 ====================
declare const BelayUnix: BelayUnixPlugin & BelayUnixPluginVue2
export default BelayUnix
