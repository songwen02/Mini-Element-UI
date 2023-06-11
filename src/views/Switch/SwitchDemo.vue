<template>
  <div>
    <!--    基本使用-->
    <Demo :component="Basic" :desc-component="BasicDesc"/>
    <!--    尺寸-->
    <Demo :component="Size" :desc-component="SizeDesc"></Demo>
    <!--    禁用-->
    <Demo :component="Disabled" :desc-component="DisabledDesc"/>
    <!--    扩展的 value 类型-->
    <Demo :component="ExpandUse" :desc-component="ExpandUseDesc"/>
    <!--    -->
    <api-table index-title="属性" :head-title="titleArr" :body-data="tableContent"></api-table>
    <api-table index-title="事件" :head-title="eventArr" :body-data="eventContent"></api-table>
  </div>
</template>

<script lang="ts" setup>
import Basic from '../../components/Switch/Basic.vue';
import BasicDesc from '../../components/Switch/BasicDesc.vue';
import Disabled from '../../components/Switch/Disabled.vue';
import DisabledDesc from '../../components/Switch/DisabledDesc.vue';
import Size from '../../components/Switch/Size.vue';
import SizeDesc from '../../components/Switch/SizeDesc.vue';
import ExpandUse from '../../components/Switch/ExpandUse.vue';
import ExpandUseDesc from '../../components/Switch/ExpandUseDesc.vue';

const titleArr = ['属性名', '说明', '类型', '可选值', '默认值'];
const tableContent = [
  ['model-value / v-model', `绑定值，必须等于 <code>active-value</code> 或 <code>inactive-value</code>，默认为 <code>Boolean</code> 类型`, 'boolean / string / number', `<code>--</code>`, `<code>--</code>`
  ],
  [`disabled`, `是否禁用`, `boolean`, `<code>--</code>`, `<code>false</code>`],
  [`size`, `switch 的大小`, `string`, `<code>large/small</code>`, `<code>''</code>`],
  [`active-text`, `switch 打开时的文字描述`, `string`, `<code>--</code>`, `<code>--</code>`],
  [`inactive-text`, `switch 的状态为 off 时的文字描述`, `string`, `<code>--</code>`, `<code>--</code>`],
  [`active-value`, `switch 状态为 on 时的值`, `boolean / string / number`, `<code>--</code>`, `<code>true</code>`],
  [`inactive-value`, `switch的状态为 off 时的值`, `boolean / string / number`, `<code>--</code>`, `<code>false</code>`]
];
const eventArr = ['事件名', '说明', '回调参数'];
const eventContent = [
  ['change', `switch 状态发生变化时的回调函数`, 'val，新状态的值']

];
</script>

<style lang="scss" scoped>

</style>
