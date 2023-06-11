<template>
  <!--   控制展示位置-->
  <Demo :component="ToastPosition"></Demo>
  <!--  设计关闭按钮-->
  <Demo :component="CloseButton"></Demo>
  <!--  支持HTML-->
  <Demo :component="EnableHtml"></Demo>
  <!--  设置延时时长-->
  <Demo :component="CloseDelay"></Demo>
  <!--  设置是否自动关闭-->
  <Demo :component="AutoClose"></Demo>
  <!--  API详情展示-->
  <api-table  index-title="API"  :head-title="titleArr" :body-data="tableContent"></api-table>
</template>

<script lang='ts' setup>
import ToastPosition from '../../components/Toast/ToastPosition.vue';
import CloseButton from '../../components/Toast/CloseButton.vue';
import EnableHtml from '../../components/Toast/EnableHtml.vue';
import CloseDelay from '../../components/Toast/CloseDelay.vue';
import AutoClose from '../../components/Toast/AutoClose.vue';
import Demo from '../../components/common/Demo.vue';
import ApiTable from '../../components/common/ApiTableContainer.vue';

const titleArr = ['参数', '说明', '类型', '默认值'];
const tableContent = [
  ['position', `弹窗展示位置：<code>top</code><code>middle</code><code>bottom</code>`, 'string', `<code>top</code>`
  ],
  [`message`, `弹窗展示内容`, `string`, `<code>''</code>`],
  [`closeButton`, `关闭按钮内容及回调`, `object`, `<code>''</code>`],
  [`enableHtml`, `是否支持HTML`, `boolean`, `<code>false</code>`],
  [`autoCloseDelay`, `自动关闭时长`, `number`, `<code>5</code>`],
  [`autoClose`, `是否自动关闭`, `boolean`, `<code>true</code>`]
];
</script>

<style lang='scss' scoped>

</style>