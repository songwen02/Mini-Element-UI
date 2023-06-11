<template>
  <!--  基本用法-->
  <Demo :component="BasicUse" :desc-component="BasicDesc"></Demo>
  <!--  自定义内容-->
  <Demo :component="CustomContent" :desc-component="CustomDesc"></Demo>
  <!--  API-->
  <api-table index-title="Backtop API" index-sub-title="Backtop 属性" :head-title="titleArr"
             :body-data="tableContent"></api-table>
  <api-table index-sub-title="Backtop 事件" :head-title="eventTitle" :body-data="eventContent"></api-table>
  <api-table index-title="Backtop 插槽" :head-title="slotTitle" :body-data="slotContent"></api-table>
</template>

<script lang='ts' setup>
import BasicUse from '../../components/BackTop/BasicUse.vue';
import BasicDesc from '../../components/BackTop/BasicDesc.vue';
import CustomContent from '../../components/BackTop/CustomContent.vue';
import CustomDesc from '../../components/BackTop/CustomDesc.vue';

const titleArr = ['参数', '说明', '类型', '默认值'];
const tableContent = [
  ['right', `控制其显示位置，距离页面右边距`, 'number', `<code>100</code>`
  ],
  [`bottom`, `控制其显示位置，距离页面底部距离`, `number`, `<code>100</code>`],
  [`target`, `触发滚动的对象`, `string`, `<code>--</code>`],
  [`visibility-height`, `滚动高度达到此参数值才出现`, `number`, `<code>200</code>`],
];

const eventTitle = ['名称', '说明', '回调参数'];
const eventContent = [
  [`<code>click</code>`, `点击按钮触发的事件`, `<code>(evt: MouseEvent) => void</code>`
  ]
];
const slotTitle = ['插槽名', '说明'];
const slotContent = [[`<code>default</code>`, `自定义默认内容`]];
</script>
