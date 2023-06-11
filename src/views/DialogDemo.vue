<template>
  <Demo :component="BasicUse"></Demo>
  <!--  -->
  <api-table index-title="属性" :head-title="titleArr" :body-data="tableContent"></api-table>
</template>

<script lang="ts" setup>
import BasicUse from '../components/Dialog/BasicUse.vue';

const titleArr = ['属性名', '说明', '类型', '默认值'];
const tableContent = [
  ['model-value / v-model', `是否显示 Dialog`, 'boolean', `<code>false</code>`
  ],
  [`title`, `Dialog 对话框 Dialog 的标题`, `string`, `<code>--</code>`],
  [`closeOnClickOverlay`, `是否可以通过点击 遮罩层 关闭 Dialog`, `boolean`, `<code>false</code>`],
  [`confirmCallback`, `点击确定时触发的回调`, `Function`, `<code>--</code>`],
  [`cancelCallback`, `点击取消或×号时触发的回调`, `Function`, `<code>--</code>`]
];
</script>