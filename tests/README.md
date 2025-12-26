# Belay-Unix 组件库测试

本文档说明如何为 Belay-Unix 组件库编写和运行测试。

## 📋 测试框架

由于 uni-app x 的特殊性，目前测试框架的选择有限。建议使用以下方案：

### 方案一：手动测试（当前推荐）

在 `docs-site` 项目中为每个组件创建示例页面，通过实际运行来验证组件功能。

### 方案二：单元测试框架（待实现）

考虑使用以下测试框架：
- **Vitest**: 支持 TypeScript/UTS，但需要适配 uni-app x 环境
- **Jest**: 需要大量配置才能支持 uni-app x
- **自定义测试工具**: 基于 uni-app x 运行时编写测试工具

## 📁 测试目录结构

```
tests/
├── README.md              # 测试说明文档
├── unit/                  # 单元测试
│   ├── components/        # 组件单元测试
│   └── utils/             # 工具类单元测试
├── integration/           # 集成测试
└── e2e/                   # 端到端测试（待实现）
```

## 🧪 编写测试

### 单元测试示例

```typescript
// tests/unit/components/bl-button.test.uts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BlButton from '@/uni_modules/belay-unix/components/bl-button/index.uvue'

describe('BlButton', () => {
  it('应该正确渲染', () => {
    const wrapper = mount(BlButton, {
      props: {
        type: 'primary'
      },
      slots: {
        default: '按钮文本'
      }
    })
    
    expect(wrapper.text()).toBe('按钮文本')
    expect(wrapper.classes()).toContain('bl-button--primary')
  })
  
  it('应该触发点击事件', async () => {
    const wrapper = mount(BlButton)
    await wrapper.trigger('click')
    
    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
```

### 集成测试示例

```typescript
// tests/integration/bl-form.test.uts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BlForm from '@/uni_modules/belay-unix/components/bl-form/index.uvue'
import BlInput from '@/uni_modules/belay-unix/components/bl-input/index.uvue'

describe('BlForm 集成测试', () => {
  it('应该正确验证表单', async () => {
    const wrapper = mount(BlForm, {
      props: {
        model: { name: '', email: '' },
        rules: {
          name: { required: true, message: '姓名不能为空' },
          email: { required: true, message: '邮箱不能为空' }
        }
      },
      slots: {
        default: [
          mount(BlInput, { props: { modelValue: 'name' } }),
          mount(BlInput, { props: { modelValue: 'email' } })
        ]
      }
    })
    
    const result = await wrapper.vm.validate()
    expect(result.valid).toBe(false)
    expect(result.errors.length).toBeGreaterThan(0)
  })
})
```

## 🚀 运行测试

### 安装依赖

```bash
npm install --save-dev vitest @vue/test-utils
```

### 运行测试

```bash
# 运行所有测试
npm run test

# 运行特定测试
npm run test bl-button

# 监听模式
npm run test:watch

# 生成覆盖率报告
npm run test:coverage
```

## 📊 测试覆盖率目标

- **单元测试覆盖率**: ≥ 80%
- **集成测试覆盖率**: ≥ 60%
- **核心组件**: 100% 覆盖

## 🔄 CI/CD 集成

在 CI/CD 流程中添加测试步骤：

```yaml
# .github/workflows/test.yml
name: Test

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm install
      - run: npm run test
      - run: npm run test:coverage
```

## 📝 测试最佳实践

1. **测试命名**: 使用描述性的测试名称
2. **测试隔离**: 每个测试应该独立运行
3. **测试数据**: 使用模拟数据，避免依赖外部资源
4. **断言清晰**: 使用明确的断言，便于理解测试意图
5. **覆盖率**: 关注关键路径和边界情况

## 🐛 已知问题

- uni-app x 环境下的测试框架支持有限
- 某些平台特定 API 难以在测试环境中模拟
- 需要手动验证跨平台兼容性

## 📚 相关资源

- [Vitest 文档](https://vitest.dev/)
- [Vue Test Utils 文档](https://test-utils.vuejs.org/)
- [uni-app x 测试指南](https://doc.dcloud.net.cn/uni-app-x/)

