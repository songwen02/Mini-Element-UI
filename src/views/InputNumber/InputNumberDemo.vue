<template>
  <!--  基础用法-->
  <Demo :component="BasicUse" :desc-component="BasicDesc"></Demo>
  <!--  禁用状态-->
  <Demo :component="Disable" :desc-component="DisableDesc"></Demo>
  <!--  步进-->
  <Demo :component="Step" :desc-component="StepDesc"></Demo>
  <!--  严格步进-->
  <Demo :component="stepStrictly" :desc-component="stepStrictlyDesc"></Demo>
  <!--  精度-->
  <Demo :component="Precision" :desc-component="PrecisionDesc"></Demo>
  <!--  不同的输入框尺寸-->
  <Demo :component="DiffSize" :desc-component="DiffSizeDesc"></Demo>
  <!--API-->
  <api-table index-title="属性" :head-title="inputNumberArr" :body-data="inputNumberTableContent"></api-table>
  <api-table index-title="事件" :head-title="eventArr" :body-data="eventTableContent"></api-table>
</template>

<script lang='ts' setup>
import BasicUse from '../../components/InputNumber/BasicUse.vue';
import BasicDesc from '../../components/InputNumber/BasicDesc.vue';
import Disable from '../../components/InputNumber/Disable.vue';
import DisableDesc from '../../components/InputNumber/DisableDesc.vue';
import Step from '../../components/InputNumber/Step.vue';
import StepDesc from '../../components/InputNumber/StepDesc.vue';
import stepStrictly from '../../components/InputNumber/stepStrictly.vue';
import stepStrictlyDesc from '../../components/InputNumber/stepStrictlyDesc.vue';
import Precision from '../../components/InputNumber/Precision.vue';
import PrecisionDesc from '../../components/InputNumber/PrecisionDesc.vue';
import DiffSize from '../../components/InputNumber/DiffSize.vue';
import DiffSizeDesc from '../../components/InputNumber/DiffSizeDesc.vue';

const inputNumberArr = ['属性', '说明', '类型', '可选值', '默认值'];
const inputNumberTableContent = [
  ['model-value / v-model', `选中项绑定值`, `<code>number / undefined</code>`, `<code>--</code>`, `<code>--</code>`],
  [`min`, `设置计数器允许的最小值`, `<code>number</code>`, `<code>--</code>`, `<code>--</code>`],
  [`max`, `设置计数器允许的最大值`, `<code>number</code>`, `<code>--</code>`, `<code>--</code>`],
  [`step`, `计数器步长`, `<code>number</code>`, `<code>--</code>`, `<code>1</code>`],
  [`step-strictly`, `是否只能输入 step 的倍数`, `<code>boolean</code>`, `<code>--</code>`, `<code>false</code>`],
  [`precision`, `数值精度`, `<code>number</code>`, `<code>--</code>`, `<code>--</code>`],
  [`size`, `计数器尺寸`, `<code>string</code>`, `<code>large/small</code>`, `<code>--</code>`],
  [`disabled`, `是否禁用状态`, `<code>boolean</code>`, `<code>--</code>`, `<code>--</code>`],
];
const eventArr = ['事件名', '说明', '回调参数'];
const eventTableContent = [
  ['change', `绑定值被改变时触发`, `(currentValue: number | NaN, oldValue: number | NaN)`],
];
</script>

<style lang='scss' scoped>

</style>