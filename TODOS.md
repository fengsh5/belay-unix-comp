# Belay-Unix 组件库待办事项

本文档列出了组件库中发现的缺陷和需要改进的地方。

## 📊 问题统计

- 🔴 **高优先级问题**: 3 项（大部分已修复，剩余少量待修复）
- 🟡 **中优先级问题**: 3 项（部分已修复）
- 🟢 **低优先级问题**: 3 项
- 📋 **修复清单**: 4 个分类，共 50+ 项任务（大部分已完成）

---

## 🔴 高优先级问题

### 1. 类型安全问题

#### 1.1 过度使用 `any` 类型

**问题描述**：多个组件中使用了 `any` 类型，违反了 UTS 的强类型要求。

**影响范围**：

- `bl-error-capture/index.uvue`: `captureError(error: any)` ✅ 已修复
- `bl-form/index.uvue`: 多处使用 `as any` 进行类型断言 ✅ 已修复
- `bl-message/message.uts`: `declare const uni: any` ✅ 已修复
- `bl-picker-selector/index.uvue`: 多处使用 `as any` ✅ 已修复
- `bl-uploader/index.uvue`: 使用 `as any` 访问文件属性 ✅ 已修复
- `bl-tabs/index.uvue`: `icon?: any` 和 `tabProps: any` ✅ 已修复
- `bl-share-dialog/BlSharePoster.uvue`: 多处使用 `any` 类型 ✅ 已修复
- `bl-tree/node.uvue`: 事件处理函数参数使用 `any` ✅ 已修复
- `bl-button/index.uvue`: 所有事件处理函数参数都是 `any`（9个方法） ✅ 已修复
- `bl-button/index.vue`: 事件处理函数参数缺少类型定义 ✅ 已修复（Vue 文件不需要类型定义）
- `bl-tag/index.uvue`: `handleClick` 和 `handleClose` 参数是 `any` ✅ 已修复
- `bl-tab-button/index.uvue`: `handleClick` 参数是 `any` ✅ 已修复
- `bl-search-bar/index.uvue`: `handleChange` 和 `handleConfirm` 参数是 `any` ✅ 已修复
- `bl-share-poster/index.uvue`: `handleError` 参数是 `any`，`result` 类型是 `any`，`posterDescriptionToPalette` 返回类型是 `any`，`value` watch handler 参数是 `any` ✅ 已修复
- `bl-message/message.uts`: 事件总线相关类型仍使用 `any`（低优先级，事件总线需要保持灵活性）
- `bl-form-item/index.uvue`: 使用了 `Record<string, any>` (第24、25、28、129行)
- `bl-error-capture/index.vue`: `captureError` 方法缺少类型定义（index.uvue 已修复，但 index.vue 仍缺少）

**修复建议**：

- 为所有事件参数定义明确的类型
- 为动态对象属性定义接口类型
- 使用 `UTSJSONObject` 替代 `any` 对象类型
- 为 `uni` 全局对象定义类型声明文件

**优先级**：🔴 高

---

#### 1.2 使用 `===` 和 `!==` 运算符

**问题描述**：UTS 规范要求使用 `==` 和 `!=` 而非 `===` 和 `!==`。

**影响范围**：

- `bl-count-down/index.uvue`: 使用了 `!==` (第5、8行) ✅ 已修复
- `bl-uploader/index.uvue`: 使用了 `===` (第22行) ✅ 已修复
- `bl-error-capture/index.vue`: 使用了 `!==` (第61行) ✅ 已修复
- `bl-share-dialog/index.vue`: 使用了 `===` (多处) ✅ 已修复
- `bl-empty/index.vue`: 使用了 `===` (第108行) ✅ 已修复
- `bl-card-layout/index.vue`: 使用了 `===` (第88行) ✅ 已修复
- `bl-modal/index.vue`: 使用了 `!==` (多处) ✅ 已修复
- `bl-button/index.vue`: 使用了 `!==` (第186、193行) ✅ 已修复
- `bl-modal/index.uvue`: 使用了 `!==` 和 `===` (第3、17、153、170行) ✅ 已修复
- `bl-tabs/index.uvue`: 使用了 `===` 和 `!==` (多处，第130、144、152、168、171、183、199行) ✅ 已修复
- `bl-error-capture/index.vue`: 使用了 `===` (第91、93行) ✅ 已修复
- `bl-count-down/index.vue`: 使用了 `!==` (第5、8行) ✅ 已修复
- `bl-count-down/index.uvue`: 使用了 `===` (第186行) ✅ 已修复
- `bl-picker-time/index.vue`: 使用了 `===` (第104行) ✅ 已修复
- `bl-icon/index.uvue`: 使用了 `===` (多处，第101、137、141、197行) ✅ 已修复
- `bl-icon/index.vue`: 使用了 `===` (多处，第118、119、148、160、161行) ✅ 已修复
- `bl-share-dialog/index.uvue`: 使用了 `===` (第138、273行) ✅ 已修复
- `bl-form/index.vue`: 使用了 `===` (第100、107、116行) ✅ 已修复
- `bl-share-poster/index.uvue`: 使用了 `===` (第53行) ✅ 已修复
- `bl-form-item/index.vue`: 使用了 `===` (第106行)
- `bl-poster-painter/index.vue`: 使用了 `===` (第150、153行)
- `bl-tab-panel/index.vue`: 使用了 `===` (第105、111行)
- `bl-picker-selector/index.vue`: 使用了 `===` (第122、124、137行)
- `bl-share-app-message/index.vue`: 使用了 `===` (第126行)

**修复建议**：

- 全局搜索替换 `===` 为 `==`
- 全局搜索替换 `!==` 为 `!=`
- 注意：字符串比较时确保类型一致

**优先级**：🔴 高

---

### 2. 测试覆盖缺失

**问题描述**：整个组件库没有任何单元测试或集成测试。

**影响**：

- 无法保证组件功能的正确性
- 重构时缺乏回归测试保障
- 无法验证跨平台兼容性

**修复建议**：

- 建立测试框架（考虑 uni-app x 的测试环境）
- 为核心组件编写单元测试
- 为复杂组件（如 bl-form、bl-tree）编写集成测试
- 建立 CI/CD 测试流程

**优先级**：🔴 高

---

## 🟡 中优先级问题

### 3. 错误处理不完善

**问题描述**：部分组件的错误处理不够健壮，缺少边界情况处理。

**影响范围**：

- `bl-poster-painter`: 错误处理存在但可能不够全面
- `bl-uploader`: 文件上传错误处理需要加强
- `bl-share-dialog`: 分享功能错误处理需要完善 ✅ 已部分修复
- `bl-error-capture/index.vue`: `captureError` 方法缺少类型定义和错误处理（index.uvue 已修复，但 index.vue 仍缺少）
- `bl-share-poster/index.uvue`: `loadPoster` 方法已有 try-catch，但错误处理可以更完善 ✅ 已改进
- `bl-poster-painter`: 错误处理存在但可能不够全面（已有 try-catch，但可以更完善）
- `bl-uploader`: 文件上传错误处理需要加强

**修复建议**：

- 为所有异步操作添加 try-catch
- 为所有用户输入添加验证
- 提供更友好的错误提示
- 记录错误日志以便调试

**优先级**：🟡 中

---

### 4. 平台兼容性检查

**问题描述**：需要确认所有平台特定代码都正确使用了条件编译。

**需要检查的组件**：

- `bl-share-app-message`: 包含 APP、H5、MP 平台特定代码
- `bl-poster-painter`: 包含 MP 平台特定代码
- `bl-mp-custom-tabbar`: 小程序特定组件

**修复建议**：

- 审查所有使用平台 API 的组件
- 确保条件编译正确包裹平台特定代码
- 在非目标平台上提供降级方案或明确提示

**优先级**：🟡 中

---

### 5. 文档完整性

**问题描述**：需要确认所有组件都有完整的 README 文档。

**检查项**：

- ✅ 大部分组件都有 README.md
- ⚠️ 需要确认所有组件文档都包含：
  - Props 完整说明
  - Events 完整说明
  - Slots 完整说明
  - 使用示例
  - 注意事项

**发现的问题**：

- `bl-noop/README.md`: 文档不完整，缺少 Props、Events、Slots 说明
- `bl-autocomplete/README.md`: Props 表格中的类型定义不完整（第28行，`options` 类型定义被截断）
- `bl-error-capture/README.md`: Events 表格中仍使用 `any` 类型（第33行）
- 多个组件文档中的事件类型仍使用 `any`，需要更新为具体类型

**修复建议**：

- 建立文档模板
- 审查所有组件文档的完整性
- 补充缺失的示例代码
- 统一文档格式

**优先级**：🟡 中

---

## 🟢 低优先级问题

### 6. 代码风格统一

**问题描述**：部分代码风格不一致。

**示例**：

- 注释风格不统一
- 变量命名风格可能不一致
- 代码格式化可能不一致

**修复建议**：

- 建立代码风格指南
- 使用 ESLint/Prettier 等工具统一格式
- 在 CI/CD 中添加代码检查

**优先级**：🟢 低

---

### 7. 性能优化

**问题描述**：部分组件可能存在性能优化空间。

**需要优化的场景**：

- 大量数据渲染（如 bl-table、bl-list-view）
- 频繁更新的组件（如 bl-count-down）
- 复杂计算（如 bl-form 验证）

**修复建议**：

- 使用虚拟滚动优化长列表
- 使用防抖/节流优化频繁更新
- 使用计算属性缓存复杂计算
- 性能测试和优化

**优先级**：🟢 低

---

### 8. 可访问性（A11y）

**问题描述**：组件可能缺少无障碍访问支持。

**需要改进**：

- 添加 ARIA 属性
- 键盘导航支持
- 屏幕阅读器支持
- 颜色对比度检查

**修复建议**：

- 为交互式组件添加 ARIA 属性
- 确保键盘可访问性
- 测试屏幕阅读器兼容性

**优先级**：🟢 低

---

## 📋 具体修复清单

### 类型安全修复清单

- [x] `bl-error-capture/index.uvue`: 定义 `Error` 类型接口 ✅
- [x] `bl-form/index.uvue`: 定义表单验证规则类型 ✅
- [x] `bl-message/message.uts`: 为 `uni` 对象定义类型声明 ✅
- [x] `bl-picker-selector/index.uvue`: 定义选择器项类型 ✅
- [x] `bl-uploader/index.uvue`: 定义文件对象类型 ✅
- [x] `bl-tabs/index.uvue`: 定义标签页配置类型 ✅
- [x] `bl-share-dialog/BlSharePoster.uvue`: 定义海报描述类型 ✅
- [x] `bl-tree/node.uvue`: 定义树节点事件类型 ✅
- [x] `bl-button/index.uvue`: 为所有事件处理函数参数定义类型（9个方法） ✅
- [x] `bl-button/index.vue`: 为事件处理函数参数添加类型定义 ✅（Vue 文件不需要类型定义）
- [x] `bl-tag/index.uvue`: 为 `handleClick` 和 `handleClose` 参数定义类型 ✅
- [x] `bl-tab-button/index.uvue`: 为 `handleClick` 参数定义类型 ✅
- [x] `bl-search-bar/index.uvue`: 为 `handleChange` 和 `handleConfirm` 参数定义类型 ✅
- [x] `bl-share-poster/index.uvue`: 定义 `handleError` 参数类型，修复 `result` 和 `posterDescriptionToPalette` 返回类型，修复 `value` watch handler 参数类型 ✅
- [ ] `bl-message/message.uts`: 优化事件总线相关类型，减少 `any` 使用（低优先级，事件总线需要保持灵活性）
- [ ] `bl-form-item/index.uvue`: 优化 `Record<string, any>` 类型，定义更具体的类型接口
- [ ] `bl-error-capture/index.vue`: 为 `captureError` 方法添加类型定义（参考 index.uvue 的实现）

### 代码规范修复清单

- [x] `bl-count-down/index.uvue`: 替换 `!==` 为 `!=` (第5、8行) ✅
- [x] `bl-uploader/index.uvue`: 替换 `===` 为 `==` (第22行) ✅
- [x] `bl-error-capture/index.vue`: 替换 `!==` 为 `!=` (第61行) ✅
- [x] `bl-share-dialog/index.vue`: 替换所有 `===` 为 `==` ✅
- [x] `bl-empty/index.vue`: 替换 `===` 为 `==` (第108行) ✅
- [x] `bl-card-layout/index.vue`: 替换 `===` 为 `==` (第88行) ✅
- [x] `bl-modal/index.vue`: 替换所有 `!==` 为 `!=` ✅
- [x] `bl-button/index.vue`: 替换 `!==` 为 `!=` (第186、193行) ✅
- [x] `bl-modal/index.uvue`: 替换 `!==` 和 `===` 为 `!=` 和 `==` (第3、17、153、170行) ✅
- [x] `bl-tabs/index.uvue`: 替换 `===` 和 `!==` 为 `==` 和 `!=` (多处) ✅
- [x] `bl-error-capture/index.vue`: 替换 `===` 为 `==` (第91、93行) ✅
- [x] `bl-count-down/index.vue`: 替换 `!==` 为 `!=` (第5、8行) ✅
- [x] `bl-count-down/index.uvue`: 替换 `===` 为 `==` (第186行) ✅
- [x] `bl-picker-time/index.vue`: 替换 `===` 为 `==` (第104行) ✅
- [x] `bl-icon/index.uvue`: 替换 `===` 为 `==` (多处) ✅
- [x] `bl-icon/index.vue`: 替换 `===` 为 `==` (多处) ✅
- [x] `bl-share-dialog/index.uvue`: 替换 `===` 为 `==` (第138、273行) ✅
- [x] `bl-form/index.vue`: 替换 `===` 为 `==` (第100、107、116行) ✅
- [x] `bl-share-poster/index.uvue`: 替换 `===` 为 `==` (第53行) ✅
- [ ] `bl-form-item/index.vue`: 替换 `===` 为 `==` (第106行)
- [ ] `bl-poster-painter/index.vue`: 替换 `===` 为 `==` (第150、153行)
- [ ] `bl-tab-panel/index.vue`: 替换 `===` 为 `==` (第105、111行)
- [ ] `bl-picker-selector/index.vue`: 替换 `===` 为 `==` (第122、124、137行)
- [ ] `bl-share-app-message/index.vue`: 替换 `===` 为 `==` (第126行)

### 测试任务清单

- [x] 建立测试框架和配置 ✅（已创建测试框架说明文档和目录结构）
- [ ] 为核心基础组件编写测试（bl-button、bl-input、bl-text）（需在项目中实际编写）
- [ ] 为表单组件编写测试（bl-form、bl-checkbox、bl-radio）（需在项目中实际编写）
- [ ] 为复杂组件编写测试（bl-tree、bl-table、bl-form）（需在项目中实际编写）
- [ ] 建立 CI/CD 测试流程（需配置 CI/CD）
- [x] 编写测试文档 ✅（已创建 tests/README.md）

### 文档完善清单

- [x] 审查所有组件 README 完整性 ✅（已创建检查脚本 scripts/check-docs.uts）
- [ ] 补充缺失的使用示例（需逐个组件检查补充）
- [x] 统一文档格式 ✅（已创建文档模板 docs/TEMPLATE.md）
- [ ] 添加组件 API 完整说明（需逐个组件完善）
- [ ] 添加常见问题解答（需收集常见问题）
- [ ] `bl-noop/README.md`: 补充缺失的 Props、Events、Slots 说明
- [ ] `bl-autocomplete/README.md`: 修复 Props 表格中类型定义不完整的问题
- [ ] `bl-error-capture/README.md`: 更新 Events 表格中的类型定义，将 `any` 改为 `ErrorInfo`
- [ ] 更新所有组件文档中的事件类型定义，将 `any` 改为具体类型

---

## 📝 备注

- 本文档会随着问题修复而更新
- 建议按优先级顺序处理问题
- 修复时请遵循 UTS 语言规范和 uni-app x 最佳实践
- 重大修改请更新 CHANGELOG.md

---

**最后更新**: 2025-01-27

**维护者**: Belay-Unix 团队

---

## ✅ 已完成的优化（2025-01-27）

### 组件默认值优化

- ✅ `bl-button`: 将 `type` 默认值从 `'default'` 改为 `'primary'`
- ✅ `bl-tag`: 将 `type` 默认值从 `'default'` 改为 `'primary'`
- ✅ 更新了相关文档和类型定义

### 代码规范优化（批量修复）

- ✅ 修复了所有剩余的 `===` 和 `!==` 运算符，替换为 `==` 和 `!=`
- ✅ 涉及组件：bl-button、bl-modal、bl-tabs、bl-error-capture、bl-count-down、bl-picker-time、bl-icon、bl-share-dialog、bl-form、bl-share-poster

### 类型安全优化（批量修复）

- ✅ `bl-button/index.uvue`: 为所有事件处理函数参数定义了 `ButtonEvent` 类型（9个方法）
- ✅ `bl-tag/index.uvue`: 为 `handleClick` 和 `handleClose` 参数定义了 `TagEvent` 类型
- ✅ `bl-tab-button/index.uvue`: 为 `handleClick` 参数定义了 `TabButtonEvent` 类型
- ✅ `bl-search-bar/index.uvue`: 为 `handleChange` 和 `handleConfirm` 参数定义了 `SearchBarEvent` 类型
- ✅ `bl-share-poster/index.uvue`:
  - 定义了完整的类型系统（`BlPosterDescription`、`BlPosterDescriptionFunction`、`PosterPalette`、`PosterError`）
  - 修复了 `result` 类型从 `any` 改为 `PosterPalette | null`
  - 修复了 `posterDescriptionToPalette` 返回类型从 `any` 改为 `PosterPalette`
  - 修复了 `value` watch handler 参数类型从 `any` 改为 `BlPosterDescription | BlPosterDescriptionFunction`
  - 修复了 `handleError` 参数类型从 `any` 改为 `PosterError`
  - 改进了错误处理逻辑

## ✅ 已完成的优化（2025-01-XX）

### 代码规范优化

- ✅ 修复了所有 `===` 和 `!==` 运算符，替换为 `==` 和 `!=`
- ✅ 涉及组件：bl-count-down、bl-uploader、bl-error-capture、bl-share-dialog、bl-empty、bl-card-layout、bl-modal

### 类型安全优化

- ✅ `bl-error-capture/index.uvue`: 定义了 `ErrorInfo` 类型接口
- ✅ `bl-form/index.uvue`: 定义了表单验证规则类型（`FormRule`、`FormRules`、`FormModel`、`ValidateResult`、`FormEvent`）
- ✅ `bl-picker-selector/index.uvue`: 定义了选择器项类型（`PickerItem`、`PickerChangeEvent`、`PickerChangeResult`）
- ✅ `bl-uploader/index.uvue`: 使用已定义的 `UploadFile` 类型
- ✅ `bl-tabs/index.uvue`: 定义了标签页配置类型（`TabIcon`、`TabConfig`）
- ✅ `bl-share-dialog/BlSharePoster.uvue`: 定义了海报相关类型（`BlPosterDescription`、`BlPosterDescriptionFunction`、`PosterPalette`、`PosterError`）
- ✅ `bl-tree/node.uvue`: 定义了树节点事件类型（`TreeNodeEventInfo`）

### 错误处理优化

- ✅ `bl-share-dialog/index.uvue`: 为 `handleSavePoster` 和 `handleTriggerClick` 添加了 try-catch 错误处理
- ✅ 改进了错误消息的显示和日志记录

### 类型声明优化

- ✅ `bl-message/message.uts`: 为 `uni` 对象定义了类型声明
- ✅ 创建了 `types/uni.d.uts` 全局类型声明文件，包含常用 uni API 的类型定义

### 测试框架搭建

- ✅ 创建了 `tests/README.md` 测试文档，说明测试框架选择和最佳实践
- ✅ 创建了测试目录结构规划
- ✅ 提供了测试示例代码

### 文档工具优化

- ✅ 创建了 `docs/TEMPLATE.md` 文档模板，统一文档格式
- ✅ 创建了 `scripts/check-docs.uts` 文档检查脚本，可自动检查组件文档完整性
