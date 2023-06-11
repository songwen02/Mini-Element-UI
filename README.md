# Mini-  UI 文档

Mini-Element UI 是一个轻量级、可定制的前端 UI 框架，基于 Vue.js 和 Element UI 构建。它提供了丰富的组件和工具，帮助开发者快速搭建美观、高效的用户界面。

[English Version](./README_EN.md) | 中文版本

## 特点

- 简洁轻量：Mini-Element UI 提供了一套简洁、轻量级的组件，遵循现代化的设计风格。
- 可定制化：您可以根据项目的需求，灵活定制和扩展 Mini-Element UI 的组件和样式。
- 兼容性强：Mini-Element UI 兼容各种现代浏览器，并提供了响应式布局，适应不同的屏幕尺寸。

## 安装

您可以通过 npm 或 yarn 安装 Mini-Element UI：

```shell
npm install mini-element-ui
# 或
yarn add mini-element-ui

```
## 快速开始

以下是一个简单的示例，演示如何使用 Mini-Element UI 的 Button 组件：


```
<template>
  <div>
    <m-button type="primary">点击我</m-button>
  </div>
</template>

<script>
import { Button } from 'mini-element-ui';

export default {
  components: {
    'm-button': Button
  }
}
</script>


```


## 文档

详细的使用文档和组件示例可以在 [Mini-Element UI](https://songwen02.github.io/mini-el/#/) 文档网站 中找到。