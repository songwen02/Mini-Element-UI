<template>
  <!--  提示的文字内容-->
  <Demo :component="BasicAlert" :desc-component="AlertThemeDesc"></Demo>
  <!--  不同的提示主题-->
  <Demo :component="AlertTheme" :desc-component="BasicAlertDesc"></Demo>
  <!--  展示图标-->
  <Demo :component="ShowAlertIcon" :desc-component="ShowIconDesc"></Demo>
  <!--  文字居中-->
  <Demo :component="AlertCenter" :desc-component="AlertCenterDesc"></Demo>
  <!--  文字描述-->
  <Demo :component="AlertDesc" :desc-component="AlertDescInfo"></Demo>
  <!--  自定义关闭按钮-->
  <Demo :component="AlertCloseText" :desc-component="CloseTextDesc"></Demo>

  <!--  API详情展示-->
  <api-table index-title="API" :head-title="titleArr" :body-data="tableContent"></api-table>
</template>

<script lang='ts' setup>
import AlertTheme from '../../components/Alert/AlertTheme.vue';
import AlertThemeDesc from '../../components/Alert/AlertThemeDesc.vue';
import BasicAlert from '../../components/Alert/BasicAlert.vue';
import BasicAlertDesc from '../../components/Alert/BasicAlertDesc.vue';
import ShowAlertIcon from '../../components/Alert/ShowAlertIcon.vue';
import ShowIconDesc from '../../components/Alert/ShowIconDesc.vue';
import AlertCenter from '../../components/Alert/AlertCenter.vue';
import AlertCenterDesc from '../../components/Alert/AlertCenterDesc.vue';
import AlertDesc from '../../components/Alert/AlertDesc.vue';
import AlertDescInfo from '../../components/Alert/AlertDescInfo.vue';
import AlertCloseText from '../../components/Alert/AlertCloseText.vue';
import CloseTextDesc from '../../components/Alert/CloseTextDesc.vue';

const titleArr = ['参数', '说明', '类型', '默认值'];
const tableContent = [
  ['title', `Alert 标题。`, 'string', `<code>--</code>`
  ],
  [`type`,
    `Alert 类型。`,
    `success | warning | info | error`,
    `<code>success</code>`],
  [`description`, `描述性文本`, `string`, `<code>--</code>`],
  [`closable`, `是否可以关闭`, `boolean`, `<code>true</code>`],
  [`center`, `文字是否居中`, `boolean`, `<code>false</code>`],
  [`close-text`, `自定义关闭按钮文本`, `string`, `<code>--</code>`],
  [`show-icon`, `是否显示类型图标`, `boolean`, `<code>false</code>`]
];
</script>

<style lang='scss' scoped>

</style>