/**
 * BelayUnix 组件库主入口
 * 
 * ⚠️ 重要提示：此组件库专为 uni-app x 和 uni-app 项目设计，请在 uni-app x 和 uni-app 项目中使用！
 * 
 * 支持通过 app.use(BelayUnix) 方式注册所有组件
 */

// #ifdef VUE3
import type { App } from 'vue'
// #endif

// #ifdef VUE2
import type { VueConstructor } from 'vue'
// #endif

// 导入所有组件
// #ifdef APP || H5 || MP
// uni-app x 环境（vue3）
import BlAmount from './components/bl-amount/index.uvue'
import BlAvatar from './components/bl-avatar/index.uvue'
import BlBadge from './components/bl-badge/index.uvue'
import BlButton from './components/bl-button/index.uvue'
import BlCell from './components/bl-cell/index.uvue'
import BlDivider from './components/bl-divider/index.uvue'
import BlFlex from './components/bl-flex/index.uvue'
import BlGap from './components/bl-gap/index.uvue'
import BlHairline from './components/bl-hairline/index.uvue'
import BlIcon from './components/bl-icon/index.uvue'
import BlImage from './components/bl-image/index.uvue'
import BlMessage from './components/bl-message/index.uvue'
import BlRate from './components/bl-rate/index.uvue'
import BlSegmented from './components/bl-segmented/index.uvue'
import BlText from './components/bl-text/index.uvue'
import BlView from './components/bl-view/index.uvue'
import BlAlert from './components/bl-alert/index.uvue'
import BlAutoComplete from './components/bl-autocomplete/index.uvue'
import BlCheckbox from './components/bl-checkbox/index.uvue'
import BlCheckboxGroup from './components/bl-checkbox-group/index.uvue'
import BlCheckboxPopup from './components/bl-checkbox-popup/index.uvue'
import BlChecker from './components/bl-checker/index.uvue'
import BlCheckerPopup from './components/bl-checker-popup/index.uvue'
import BlForm from './components/bl-form/index.uvue'
import BlFormItem from './components/bl-form-item/index.uvue'
import BlInput from './components/bl-input/index.uvue'
import BlNumberInput from './components/bl-number-input/index.uvue'
import BlRadio from './components/bl-radio/index.uvue'
import BlRadioGroup from './components/bl-radio-group/index.uvue'
import BlRadioPopup from './components/bl-radio-popup/index.uvue'
import BlSearchBar from './components/bl-search-bar/index.uvue'
import BlSlider from './components/bl-slider/index.uvue'
import BlSwitch from './components/bl-switch/index.uvue'
import BlTextarea from './components/bl-textarea/index.uvue'
import BlTreeSelect from './components/bl-treeselect/index.uvue'
import BlUploader from './components/bl-uploader/index.uvue'
import BlDialog from './components/bl-dialog/index.uvue'
import BlDrawer from './components/bl-drawer/index.uvue'
import BlEmpty from './components/bl-empty/index.uvue'
import BlErrorCapture from './components/bl-error-capture/index.uvue'
import BlLoading from './components/bl-loading/index.uvue'
import BlModal from './components/bl-modal/index.uvue'
import BlNoticeBar from './components/bl-notice-bar/index.uvue'
import BlNotification from './components/bl-notification/index.uvue'
import BlPopconfirm from './components/bl-popconfirm/index.uvue'
import BlPopup from './components/bl-popup/index.uvue'
import BlProgress from './components/bl-progress/index.uvue'
import BlSpinner from './components/bl-spinner/index.uvue'
import BlTour from './components/bl-tour/index.uvue'
import BlCalendar from './components/bl-calendar/index.uvue'
import BlCardLayout from './components/bl-card-layout/index.uvue'
import BlCollapse from './components/bl-collapse/index.uvue'
import BlCollapseItem from './components/bl-collapse-item/index.uvue'
import BlCountDown from './components/bl-count-down/index.uvue'
import BlDescriptions from './components/bl-descriptions/index.uvue'
import BlDescriptionsItem from './components/bl-descriptions-item/index.uvue'
import BlFloatButton from './components/bl-float-button/index.uvue'
import BlTag from './components/bl-tag/index.uvue'
import BlCheckTag from './components/bl-check-tag/index.uvue'
import BlSortTag from './components/bl-sort-tag/index.uvue'
import BlQRCode from './components/bl-qrcode/index.uvue'
import BlResult from './components/bl-result/index.uvue'
import BlSkeleton from './components/bl-skeleton/index.uvue'
import BlStatistic from './components/bl-statistic/index.uvue'
import BlTable from './components/bl-table/index.uvue'
import BlTimeline from './components/bl-timeline/index.uvue'
import BlTransfer from './components/bl-transfer/index.uvue'
import BlTree from './components/bl-tree/index.uvue'
import BlWatermark from './components/bl-watermark/index.uvue'
import BlBackTop from './components/bl-back-top/index.uvue'
import BlCustomNavigationBar from './components/bl-custom-navigation-bar/index.uvue'
import BlTabbar from './components/bl-tabbar/index.uvue'
import BlTabButton from './components/bl-tab-button/index.uvue'
import BlTabPanel from './components/bl-tab-panel/index.uvue'
import BlTabs from './components/bl-tabs/index.uvue'
import BlMPCustomTabbar from './components/bl-mp-custom-tabbar/index.uvue'
import BlMenu from './components/bl-menu/index.uvue'
import BlPagination from './components/bl-pagination/index.uvue'
import BlBottomBar from './components/bl-bottom-bar/index.uvue'
import BlCol from './components/bl-col/index.uvue'
import BlFilter from './components/bl-filter/index.uvue'
import BlFilterItem from './components/bl-filter-item/index.uvue'
import BlGrid from './components/bl-grid/index.uvue'
import BlGridItem from './components/bl-grid-item/index.uvue'
import BlPage from './components/bl-page/index.uvue'
import BlPageStyle from './components/bl-page-style/index.uvue'
import BlRow from './components/bl-row/index.uvue'
import BlScrollView from './components/bl-scroll-view/index.uvue'
// #ifdef APP
import BlListView from './components/bl-list-view/index.uvue'
// #endif
// #ifdef H5 || MP
import BlListView from './components/bl-list-view/index.vue'
// #endif
import BlSpace from './components/bl-space/index.uvue'
import BlPopover from './components/bl-popover/index.uvue'
import BlTooltip from './components/bl-tooltip/index.uvue'
import BlPickerCascaderSelector from './components/bl-picker-cascader-selector/index.uvue'
import BlPickerDate from './components/bl-picker-date/index.uvue'
import BlPickerMultiSelector from './components/bl-picker-multi-selector/index.uvue'
import BlPickerSelector from './components/bl-picker-selector/index.uvue'
import BlPickerTime from './components/bl-picker-time/index.uvue'
import BlPortal from './components/bl-portal/index.uvue'
import BlPosterPainter from './components/bl-poster-painter/index.uvue'
import BlPreviewContext from './components/bl-preview-context/index.uvue'
import BlShareAppMessage from './components/bl-share-app-message/index.uvue'
import BlShareDialog from './components/bl-share-dialog/index.uvue'
import BlSharePoster from './components/bl-share-poster/index.uvue'
import BlStep from './components/bl-step/index.uvue'
import BlSteps from './components/bl-steps/index.uvue'
import BlSwiper from './components/bl-swiper/index.uvue'
import BlTheme from './components/bl-theme/index.uvue'
import BlThemeProvider from './components/bl-theme-provider/index.uvue'
import BlThemeRoot from './components/bl-theme-root/index.uvue'
import BlI18nProvider from './components/bl-i18n-provider/index.uvue'
import BlVideo from './components/bl-video/index.uvue'
// #endif

// #ifndef APP || H5 || MP
// uni-app 环境（vue2）
import BlAmount from './components/bl-amount/index.vue'
import BlAvatar from './components/bl-avatar/index.vue'
import BlBadge from './components/bl-badge/index.vue'
import BlButton from './components/bl-button/index.vue'
import BlCell from './components/bl-cell/index.vue'
import BlDivider from './components/bl-divider/index.vue'
import BlFlex from './components/bl-flex/index.vue'
import BlGap from './components/bl-gap/index.vue'
import BlHairline from './components/bl-hairline/index.vue'
import BlIcon from './components/bl-icon/index.vue'
import BlImage from './components/bl-image/index.vue'
import BlMessage from './components/bl-message/index.vue'
import BlRate from './components/bl-rate/index.vue'
import BlSegmented from './components/bl-segmented/index.vue'
import BlText from './components/bl-text/index.vue'
import BlView from './components/bl-view/index.vue'
import BlAlert from './components/bl-alert/index.vue'
import BlAutoComplete from './components/bl-autocomplete/index.vue'
import BlCheckbox from './components/bl-checkbox/index.vue'
import BlCheckboxGroup from './components/bl-checkbox-group/index.vue'
import BlCheckboxPopup from './components/bl-checkbox-popup/index.vue'
import BlChecker from './components/bl-checker/index.vue'
import BlCheckerPopup from './components/bl-checker-popup/index.vue'
import BlForm from './components/bl-form/index.vue'
import BlFormItem from './components/bl-form-item/index.vue'
import BlInput from './components/bl-input/index.vue'
import BlNumberInput from './components/bl-number-input/index.vue'
import BlRadio from './components/bl-radio/index.vue'
import BlRadioGroup from './components/bl-radio-group/index.vue'
import BlRadioPopup from './components/bl-radio-popup/index.vue'
import BlSearchBar from './components/bl-search-bar/index.vue'
import BlSlider from './components/bl-slider/index.vue'
import BlSwitch from './components/bl-switch/index.vue'
import BlTextarea from './components/bl-textarea/index.vue'
import BlTreeSelect from './components/bl-treeselect/index.vue'
import BlUploader from './components/bl-uploader/index.vue'
import BlDialog from './components/bl-dialog/index.vue'
import BlDrawer from './components/bl-drawer/index.vue'
import BlEmpty from './components/bl-empty/index.vue'
import BlErrorCapture from './components/bl-error-capture/index.vue'
import BlLoading from './components/bl-loading/index.vue'
import BlModal from './components/bl-modal/index.vue'
import BlNoticeBar from './components/bl-notice-bar/index.vue'
import BlNotification from './components/bl-notification/index.vue'
import BlPopconfirm from './components/bl-popconfirm/index.vue'
import BlPopup from './components/bl-popup/index.vue'
import BlProgress from './components/bl-progress/index.vue'
import BlSpinner from './components/bl-spinner/index.vue'
import BlTour from './components/bl-tour/index.vue'
import BlCalendar from './components/bl-calendar/index.vue'
import BlCardLayout from './components/bl-card-layout/index.vue'
import BlCollapse from './components/bl-collapse/index.vue'
import BlCollapseItem from './components/bl-collapse-item/index.vue'
import BlCountDown from './components/bl-count-down/index.vue'
import BlDescriptions from './components/bl-descriptions/index.vue'
import BlDescriptionsItem from './components/bl-descriptions-item/index.vue'
import BlFloatButton from './components/bl-float-button/index.vue'
import BlTag from './components/bl-tag/index.vue'
import BlCheckTag from './components/bl-check-tag/index.vue'
import BlSortTag from './components/bl-sort-tag/index.vue'
import BlQRCode from './components/bl-qrcode/index.vue'
import BlResult from './components/bl-result/index.vue'
import BlSkeleton from './components/bl-skeleton/index.vue'
import BlStatistic from './components/bl-statistic/index.vue'
import BlTable from './components/bl-table/index.vue'
import BlTimeline from './components/bl-timeline/index.vue'
import BlTransfer from './components/bl-transfer/index.vue'
import BlTree from './components/bl-tree/index.vue'
import BlWatermark from './components/bl-watermark/index.vue'
import BlBackTop from './components/bl-back-top/index.vue'
import BlCustomNavigationBar from './components/bl-custom-navigation-bar/index.vue'
import BlTabbar from './components/bl-tabbar/index.vue'
import BlTabButton from './components/bl-tab-button/index.vue'
import BlTabPanel from './components/bl-tab-panel/index.vue'
import BlTabs from './components/bl-tabs/index.vue'
import BlMPCustomTabbar from './components/bl-mp-custom-tabbar/index.vue'
import BlMenu from './components/bl-menu/index.vue'
import BlPagination from './components/bl-pagination/index.vue'
import BlBottomBar from './components/bl-bottom-bar/index.vue'
import BlCol from './components/bl-col/index.vue'
import BlFilter from './components/bl-filter/index.vue'
import BlFilterItem from './components/bl-filter-item/index.vue'
import BlGrid from './components/bl-grid/index.vue'
import BlGridItem from './components/bl-grid-item/index.vue'
import BlPage from './components/bl-page/index.vue'
import BlPageStyle from './components/bl-page-style/index.vue'
import BlRow from './components/bl-row/index.vue'
import BlScrollView from './components/bl-scroll-view/index.vue'
import BlListView from './components/bl-list-view/index.vue'
import BlSpace from './components/bl-space/index.vue'
import BlPopover from './components/bl-popover/index.vue'
import BlTooltip from './components/bl-tooltip/index.vue'
import BlPickerCascaderSelector from './components/bl-picker-cascader-selector/index.vue'
import BlPickerDate from './components/bl-picker-date/index.vue'
import BlPickerMultiSelector from './components/bl-picker-multi-selector/index.vue'
import BlPickerSelector from './components/bl-picker-selector/index.vue'
import BlPickerTime from './components/bl-picker-time/index.vue'
import BlPortal from './components/bl-portal/index.vue'
import BlPosterPainter from './components/bl-poster-painter/index.vue'
import BlPreviewContext from './components/bl-preview-context/index.vue'
import BlShareAppMessage from './components/bl-share-app-message/index.vue'
import BlShareDialog from './components/bl-share-dialog/index.vue'
import BlStep from './components/bl-step/index.vue'
import BlSteps from './components/bl-steps/index.vue'
import BlSwiper from './components/bl-swiper/index.vue'
import BlTheme from './components/bl-theme/index.vue'
import BlThemeProvider from './components/bl-theme-provider/index.vue'
import BlThemeRoot from './components/bl-theme-root/index.vue'
import BlI18nProvider from './components/bl-i18n-provider/index.vue'
import BlVideo from './components/bl-video/index.vue'
// #endif

// 导入初始化函数
// 注意：这些导入只能在 uni-app x 环境中使用
// 在纯 Web 环境中，这些导入会报错
// 因此，我们使用条件编译来处理
// #ifdef APP || H5 || MP
import { initBlComponents, initBlComponentsFromFile } from './init.uts'
// #endif

// #ifndef APP || H5 || MP
// 在非 uni-app x 环境中，提供空实现以避免错误
// 注意：这不会真正工作，只是为了避免编译错误
// 实际使用时，请在 uni-app x 项目中使用此组件库
const initBlComponents = () => {
  console.warn('[BelayUnix] 此组件库只能在 uni-app x 项目中使用')
}
const initBlComponentsFromFile = () => {
  console.warn('[BelayUnix] 此组件库只能在 uni-app x 项目中使用')
  return Promise.resolve()
}
// bl-share-poster 仅在 uni-app x 环境中可用
const BlSharePoster = null as any
// #endif

/**
 * 组件列表
 * 组件名使用 kebab-case（如 bl-button）
 */
const components = [
	{ name: 'bl-alert', component: BlAlert },
	{ name: 'bl-amount', component: BlAmount },
	{ name: 'bl-avatar', component: BlAvatar },
	{ name: 'bl-badge', component: BlBadge },
	{ name: 'bl-button', component: BlButton },
	{ name: 'bl-cell', component: BlCell },
	{ name: 'bl-divider', component: BlDivider },
	{ name: 'bl-flex', component: BlFlex },
	{ name: 'bl-gap', component: BlGap },
	{ name: 'bl-hairline', component: BlHairline },
	{ name: 'bl-icon', component: BlIcon },
	{ name: 'bl-image', component: BlImage },
	{ name: 'bl-message', component: BlMessage },
	{ name: 'bl-rate', component: BlRate },
	{ name: 'bl-segmented', component: BlSegmented },
	{ name: 'bl-text', component: BlText },
	{ name: 'bl-view', component: BlView },
	{ name: 'bl-autocomplete', component: BlAutoComplete },
	{ name: 'bl-checkbox', component: BlCheckbox },
	{ name: 'bl-checkbox-group', component: BlCheckboxGroup },
	{ name: 'bl-checkbox-popup', component: BlCheckboxPopup },
	{ name: 'bl-checker', component: BlChecker },
	{ name: 'bl-checker-popup', component: BlCheckerPopup },
	{ name: 'bl-form', component: BlForm },
	{ name: 'bl-form-item', component: BlFormItem },
	{ name: 'bl-input', component: BlInput },
	{ name: 'bl-number-input', component: BlNumberInput },
	{ name: 'bl-radio', component: BlRadio },
	{ name: 'bl-radio-group', component: BlRadioGroup },
	{ name: 'bl-radio-popup', component: BlRadioPopup },
	{ name: 'bl-search-bar', component: BlSearchBar },
	{ name: 'bl-slider', component: BlSlider },
	{ name: 'bl-switch', component: BlSwitch },
	{ name: 'bl-textarea', component: BlTextarea },
	{ name: 'bl-treeselect', component: BlTreeSelect },
	{ name: 'bl-uploader', component: BlUploader },
	{ name: 'bl-dialog', component: BlDialog },
	{ name: 'bl-drawer', component: BlDrawer },
	{ name: 'bl-empty', component: BlEmpty },
	{ name: 'bl-error-capture', component: BlErrorCapture },
	{ name: 'bl-loading', component: BlLoading },
	{ name: 'bl-modal', component: BlModal },
	{ name: 'bl-notice-bar', component: BlNoticeBar },
	{ name: 'bl-notification', component: BlNotification },
	{ name: 'bl-popconfirm', component: BlPopconfirm },
	{ name: 'bl-popup', component: BlPopup },
	{ name: 'bl-progress', component: BlProgress },
	{ name: 'bl-spinner', component: BlSpinner },
	{ name: 'bl-tour', component: BlTour },
	{ name: 'bl-calendar', component: BlCalendar },
	{ name: 'bl-card-layout', component: BlCardLayout },
	{ name: 'bl-collapse', component: BlCollapse },
	{ name: 'bl-collapse-item', component: BlCollapseItem },
	{ name: 'bl-count-down', component: BlCountDown },
	{ name: 'bl-descriptions', component: BlDescriptions },
	{ name: 'bl-descriptions-item', component: BlDescriptionsItem },
	{ name: 'bl-float-button', component: BlFloatButton },
	{ name: 'bl-tag', component: BlTag },
	{ name: 'bl-check-tag', component: BlCheckTag },
	{ name: 'bl-sort-tag', component: BlSortTag },
	{ name: 'bl-qrcode', component: BlQRCode },
	{ name: 'bl-result', component: BlResult },
	{ name: 'bl-skeleton', component: BlSkeleton },
	{ name: 'bl-statistic', component: BlStatistic },
	{ name: 'bl-table', component: BlTable },
	{ name: 'bl-timeline', component: BlTimeline },
	{ name: 'bl-transfer', component: BlTransfer },
	{ name: 'bl-tree', component: BlTree },
	{ name: 'bl-watermark', component: BlWatermark },
	{ name: 'bl-back-top', component: BlBackTop },
	{ name: 'bl-custom-navigation-bar', component: BlCustomNavigationBar },
	{ name: 'bl-tabbar', component: BlTabbar },
	{ name: 'bl-tab-button', component: BlTabButton },
	{ name: 'bl-tab-panel', component: BlTabPanel },
	{ name: 'bl-tabs', component: BlTabs },
	{ name: 'bl-mp-custom-tabbar', component: BlMPCustomTabbar },
	{ name: 'bl-menu', component: BlMenu },
	{ name: 'bl-pagination', component: BlPagination },
	{ name: 'bl-bottom-bar', component: BlBottomBar },
	{ name: 'bl-col', component: BlCol },
	{ name: 'bl-filter', component: BlFilter },
	{ name: 'bl-filter-item', component: BlFilterItem },
	{ name: 'bl-grid', component: BlGrid },
	{ name: 'bl-grid-item', component: BlGridItem },
	{ name: 'bl-page', component: BlPage },
	{ name: 'bl-page-style', component: BlPageStyle },
	{ name: 'bl-row', component: BlRow },
	{ name: 'bl-scroll-view', component: BlScrollView },
	{ name: 'bl-list-view', component: BlListView },
	{ name: 'bl-space', component: BlSpace },
	{ name: 'bl-popover', component: BlPopover },
	{ name: 'bl-tooltip', component: BlTooltip },
	{ name: 'bl-picker-cascader-selector', component: BlPickerCascaderSelector },
	{ name: 'bl-picker-date', component: BlPickerDate },
	{ name: 'bl-picker-multi-selector', component: BlPickerMultiSelector },
	{ name: 'bl-picker-selector', component: BlPickerSelector },
	{ name: 'bl-picker-time', component: BlPickerTime },
	{ name: 'bl-portal', component: BlPortal },
	{ name: 'bl-poster-painter', component: BlPosterPainter },
	{ name: 'bl-preview-context', component: BlPreviewContext },
	{ name: 'bl-share-app-message', component: BlShareAppMessage },
	{ name: 'bl-share-dialog', component: BlShareDialog },
	// #ifdef APP || H5 || MP
	{ name: 'bl-share-poster', component: BlSharePoster },
	// #endif
	{ name: 'bl-step', component: BlStep },
	{ name: 'bl-steps', component: BlSteps },
	{ name: 'bl-swiper', component: BlSwiper },
	{ name: 'bl-theme', component: BlTheme },
	{ name: 'bl-theme-provider', component: BlThemeProvider },
	{ name: 'bl-theme-root', component: BlThemeRoot },
	{ name: 'bl-i18n-provider', component: BlI18nProvider },
	{ name: 'bl-video', component: BlVideo }
]

/**
 * 插件配置选项
 */
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

/**
 * Vue 插件安装函数
 */
// #ifdef VUE3
function install(app: App, options?: BelayUnixOptions): void {
	// 注册所有组件
	components.forEach(({ name, component }) => {
		// 注册为 kebab-case（如 bl-button）
		app.component(name, component)
		// 同时注册为 PascalCase（如 BlButton），以支持两种写法
		// 将 kebab-case 转换为 PascalCase：bl-button -> BlButton
		const pascalName = name.split('-').map(part => 
			part.charAt(0).toUpperCase() + part.slice(1)
		).join('')
		app.component(pascalName, component)
	})
	
	// 自动初始化
	if (options?.autoInit !== false) {
		if (options?.loadFromFile === true) {
			initBlComponentsFromFile().catch((error) => {
				console.error('[BelayUnix] 初始化失败:', error)
			})
		} else {
			initBlComponents()
		}
	}
}
// #endif

// #ifdef VUE2
function install(Vue: VueConstructor, options?: BelayUnixOptions): void {
	// 注册所有组件
	components.forEach(({ name, component }) => {
		// 注册为 kebab-case（如 bl-button）
		Vue.component(name, component)
		// 同时注册为 PascalCase（如 BlButton），以支持两种写法
		// 将 kebab-case 转换为 PascalCase：bl-button -> BlButton
		const pascalName = name.split('-').map(part => 
			part.charAt(0).toUpperCase() + part.slice(1)
		).join('')
		Vue.component(pascalName, component)
	})
	
	// 自动初始化
	if (options?.autoInit !== false) {
		if (options?.loadFromFile === true) {
			initBlComponentsFromFile().catch((error) => {
				console.error('[BelayUnix] 初始化失败:', error)
			})
		} else {
			initBlComponents()
		}
	}
}
// #endif

/**
 * BelayUnix 组件库插件
 */
const BelayUnix = {
	install
}

// 导出插件
export default BelayUnix

// 导出所有组件（支持按需导入）
export {
	BlAlert,
	BlAmount,
	BlAvatar,
	BlBadge,
	BlButton,
	BlCell,
	BlDivider,
	BlFlex,
	BlGap,
	BlHairline,
	BlIcon,
	BlImage,
	BlMessage,
	BlRate,
	BlSegmented,
	BlText,
	BlView,
	BlAutoComplete,
	BlCheckbox,
	BlCheckboxGroup,
	BlCheckboxPopup,
	BlChecker,
	BlCheckerPopup,
	BlForm,
	BlFormItem,
	BlInput,
	BlNumberInput,
	BlRadio,
	BlRadioGroup,
	BlRadioPopup,
	BlSearchBar,
	BlSlider,
	BlSwitch,
	BlTextarea,
	BlTreeSelect,
	BlUploader,
	BlDialog,
	BlDrawer,
	BlEmpty,
	BlErrorCapture,
	BlLoading,
	BlModal,
	BlNoticeBar,
	BlNotification,
	BlPopconfirm,
	BlPopup,
	BlProgress,
	BlSpinner,
	BlTour,
	BlCalendar,
	BlCardLayout,
	BlCollapse,
	BlCollapseItem,
	BlCountDown,
	BlDescriptions,
	BlDescriptionsItem,
	BlFloatButton,
	BlTag,
	BlCheckTag,
	BlSortTag,
	BlQRCode,
	BlResult,
	BlSkeleton,
	BlStatistic,
	BlTable,
	BlTimeline,
	BlTransfer,
	BlTree,
	BlWatermark,
	BlBackTop,
	BlCustomNavigationBar,
	BlMenu,
	BlPagination,
	BlTabbar,
	BlTabButton,
	BlTabPanel,
	BlTabs,
	BlMPCustomTabbar,
	BlBottomBar,
	BlCol,
	BlFilter,
	BlFilterItem,
	BlGrid,
	BlGridItem,
	BlPage,
	BlPageStyle,
	BlRow,
	BlScrollView,
	BlListView,
	BlSpace,
	BlPopover,
	BlTooltip,
	BlPickerCascaderSelector,
	BlPickerDate,
	BlPickerMultiSelector,
	BlPickerSelector,
	BlPickerTime,
	BlPortal,
	BlPosterPainter,
	BlPreviewContext,
	BlShareAppMessage,
	BlShareDialog,
	// #ifdef APP || H5 || MP
	BlSharePoster,
	// #endif
	BlStep,
	BlSteps,
	BlSwiper,
	BlTheme,
	BlThemeProvider,
	BlThemeRoot,
	BlI18nProvider,
	BlVideo
}

// 导出初始化函数
// 注意：这些函数只能在 uni-app x 环境中使用
// #ifdef APP || H5 || MP
export { initBlComponents, initBlComponentsFromFile }
// #endif

// #ifndef APP || H5 || MP
// 在非 uni-app x 环境中，导出空实现
export { initBlComponents, initBlComponentsFromFile }
// #endif

// 导出类型定义
// 注意：这些导出只能在 uni-app x 环境中使用
// 在纯 Web 环境中，这些导出会报错（因为 .uts 文件需要 uni-app x 编译器处理）
// 因此，我们不在 index.ts 中直接导出 .uts 文件
// 类型定义应该通过其他方式提供，或者用户应该使用 easycom 配置

// #ifdef APP || H5 || MP
// 仅在 uni-app x 环境中导出类型定义
// export * from './components/index.uts'
// export * from './utils/index.uts'
// #endif

// TypeScript 类型导出
// 为了提供 TypeScript 代码提示，我们通过 components.d.ts 导出类型
// 用户可以通过以下方式导入类型：
// import type { BlButtonProps } from '@/uni_modules/belay-unix/components'

