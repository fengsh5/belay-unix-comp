/**
 * BelayUnix 组件库 - Web 环境入口
 * 
 * ⚠️ 此文件仅用于类型检查和文档说明
 * 
 * 此组件库专为 uni-app x 项目设计，不能在纯 Web 项目中使用。
 * 
 * 如果您在纯 Web 项目中看到此文件，说明您错误地尝试在 Web 项目中使用此组件库。
 * 
 * 正确的使用方式：
 * 1. 在 uni-app x 项目中使用 easycom 配置（推荐）
 * 2. 在 uni-app x 项目的 main.uts 中使用 app.use(BelayUnix)
 * 
 * 请参考 README.md 了解详细的使用说明。
 */

// 在 Web 环境中，我们不导出任何内容
// 因为组件库使用了 .uts 和 .uvue 文件，需要 uni-app x 编译器处理

const BelayUnix = {
  install() {
    throw new Error(
      'belay-unix 组件库只能在 uni-app x 项目中使用。' +
      '请在 uni-app x 项目中使用 easycom 配置或 app.use(BelayUnix)。' +
      '参考 README.md 了解详细的使用说明。'
    )
  }
}

export default BelayUnix

