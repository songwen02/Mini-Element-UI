<template>
  <!--  基础用法-->
  <Demo :component="BasicNotify" :desc-component="BasicDesc"></Demo>
  <!--  使用不同类型-->
  <Demo :component="DiffType" :desc-component="DiffTypeDesc"></Demo>
  <!--  自定义消息弹出的位置-->
  <Demo :component="DiffPos" :desc-component="DiffPosDesc"></Demo>
  <!--  有位置偏移的通知栏-->
  <Demo :component="WithOffset" :desc-component="OffsetDesc"></Demo>
  <!--  隐藏关闭按钮-->
  <Demo :component="HideClose" :desc-component="HideCloseDesc"></Demo>
  <!--  单个调用-->
  <Demo :component="SpecificTypeFn" :desc-component="SpecificDesc"></Demo>
  <!--  API详情展示-->
  <api-table index-title="API" :head-title="directiveArr" :body-data="directiveTableContent"></api-table>
</template>

<script lang='ts' setup>
import BasicNotify from '../../components/Notification/BasicNotify.vue';
import BasicDesc from '../../components/Notification/BasicDesc.vue';
import DiffType from '../../components/Notification/DiffType.vue';
import DiffTypeDesc from '../../components/Notification/DiffTypeDesc.vue';
import DiffPos from '../../components/Notification/DiffPos.vue';
import DiffPosDesc from '../../components/Notification/DiffPosDesc.vue';
import WithOffset from '../../components/Notification/WithOffset.vue';
import OffsetDesc from '../../components/Notification/OffsetDesc.vue';
import HideClose from '../../components/Notification/HideClose.vue';
import HideCloseDesc from '../../components/Notification/HideCloseDesc.vue';
import SpecificTypeFn from '../../components/Notification/SpecificTypeFn.vue';
import SpecificDesc from '../../components/Notification/SpecificDesc.vue';

// 指令API详情
const directiveArr = ['属性', '说明', '类型', '可选值', '默认值'];
const directiveTableContent = [
  ['title', `标题`, `<code>string</code>`, `<code>--</code>`, `<code>--</code>`],
  [`message`, `通知栏正文内容`, `<code>string</code>`, `<code>--</code>`, `<code>--</code>`],
  [`type`, `通知的类型`, `<code>string</code>`, `<code>success/warning/info/error</code>`, `<code>--</code>`],
  [`duration`, `显示时间, 单位为毫秒。 值为 0 则不会自动关闭`, `<code>number</code>`, `<code>--</code>`, `<code>4000</code>`],
  [`position`, `自定义弹出位置`, `<code>string</code>`, `<code>top-right/top-left/bottom-right/bottom-left</code>`, `<code>top-right</code>`],
  [`show-close`, `是否显示关闭按钮`, `<code>boolean</code>`, `<code>--</code>`, `<code>true</code>`],
  [`offset`, `相对屏幕顶部的偏移量 偏移的距离`, `<code>number</code>`, `<code>--</code>`, `<code>0</code>`],
  [`zIndex`, `初始 zIndex`, `<code>number</code>`, `<code>--</code>`, `<code>0</code>`],
  [`close`, `关闭时的回调函数`, `<code>function</code>`, `<code>--</code>`, `<code>--</code>`],
];
</script>

<style lang='scss' scoped>

</style>