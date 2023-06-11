<template>
  <div id="popoverDemo">
    <Demo :component="DiffPosition" :desc-component="DiffPosDesc"></Demo>
  </div>
  <!--  点击还是hover方式触发-->
  <Demo :component="DiffTrigger" :desc-component="DiffTriggerDesc"></Demo>
  <!--  在浮窗内关闭-->
  <Demo :component="IsVisible" :desc-component="isVisibleDesc"></Demo>

  <!--  API详情展示-->
  <api-table index-title="API" :head-title="titleArr" :body-data="tableContent"></api-table>
</template>

<script lang='ts' setup>
import Demo from '../../components/common/Demo.vue';
import DiffPosition from '../../components/Popover/DiffPosition/diffPosition.vue';
import DiffPosDesc from '../../components/Popover/DiffPosition/DiffPosDesc.vue';
import DiffTrigger from '../../components/Popover/DiffTrigger/DiffTrigger.vue';
import DiffTriggerDesc from '../../components/Popover/DiffTrigger/DiffTriggerDesc.vue';
import IsVisible from '../../components/Popover/isVisible/isVisible.vue';
import isVisibleDesc from '../../components/Popover/isVisible/isVisibleDesc.vue';
import ApiTable from '../../components/common/ApiTableContainer.vue';

const titleArr = ['参数', '说明', '类型', '默认值'];
const tableContent = [
  ['content', `卡片内容`, 'slot', `<code>''</code>`
  ],
  [`position`,
    `浮窗展示位置：<code>top</code><code>left</code><code>right</code><code>bottom</code>`,
    `string`,
    `<code>top</code>`],
  [`trigger`, `触发浮窗显示的方式：<code>click:点击</code><code>hover:悬浮</code>`, `string`, `<code>click</code>`],
  [`visible`, `调用组件时控制浮窗显示`, `boolean`, `<code>false</code>`]
];
</script>

<style lang='scss' scoped>
#popoverDemo {
  :deep(.demo-component) {
    left: 50%;
    position: relative;
    transform: translateX(-25%);
  }

  :deep(.placeTop,) {
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :deep(.placeMiddle,) {
    width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  :deep(.placeBottom,) {
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>