<!--
 * @Author: your Name
 * @Date: 2022-12-07 15:26:27
 * @LastEditors: your Name
 * @LastEditTime: 2023-06-11 22:30:42
 * @Description: 
-->
Mini-Element UI

Mini-Element UI 是一套基于 Vue.js 的前端 UI 组件库，提供了一系列美观实用的 UI 组件，帮助开发者快速构建现代化的 Web 应用程序。

特性

• 响应式设计，适配不同的屏幕尺寸
• 兼容主流的浏览器
• 注重可访问性设计
• 可定制化和主题化
• 易于使用和集成到您的项目中

如何使用

Mini-Element UI 可以与您喜欢的前端框架一起使用，也可以作为独立的 UI 组件库使用，使用 Mini-Element UI，您需要：

1. 使用您喜欢的包管理器，如 NPM 或 Yarn，安装 Mini-Element UI：
npm install mini-element-ui

或者：
yarn add mini-element-ui

2. 在您的应用程序中导入您需要的组件：
import { Button, Input, Select } from 'mini-element-ui';

3. 在 HTML 或 Vue/React/Angular 模板中使用组件：
<me-button type="primary">点击我</me-button>

或者在 Vue 模板中：
<template>
  <me-select v-model="selected" :options="options"></me-select>
</template>
<script>
  export default {
    data() {
      return {
        options: [
          { value: 'option1', label: '选项 1' },
          { value: 'option2', label: '选项 2' },
          { value: 'option3', label: '选项 3' },
        ],
        selected: '',
      }
    },
  }
</script>


可用组件

• Button 按钮
• Input 输入框
• Select 下拉选择框
• Checkbox 复选框
• Radio 单选框
• Switch 开关按钮
• Table 表格
• Pagination 分页
• Form 表单
• Dialog 模态框
• Tooltip 文字提示
• Popover 弹出框
• Collapse 折叠面板
• Tabs 标签页
• Notification 通知
• Loading 加载中

文档

有关每个组件及其属性的详细文档，请参阅 Mini-Element UI 官方文档。

贡献

Mini-Element UI 欢迎社区贡献，如果您有疑问或想做出贡献，请参阅 贡献指南。