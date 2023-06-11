<template>
  <h1 class="demoHeader">Select 选择器</h1>
  <p style="height: 50px;">当选项过多时，使用下拉菜单展示并选择内容。</p>
  <!--    基本-->
  <Demo :component="Basic" :desc-component="BasicDesc"></Demo>
  <!--  禁用-->
  <Demo :component="Disable" :desc-component="DisableDesc"></Demo>
  <!--清空-->
  <Demo :component="Clearable" :desc-component="ClearableDesc"></Demo>
  <!--  多选-->
  <Demo :component="Multiple" :desc-component="MultipleDesc"></Demo>
  <Demo :component="CustomTemplate" :desc-component="CustomTemplateDesc"></Demo>
  <!---->
  <api-table index-title="Select 属性" :head-title="titleArr" :body-data="tableContent"></api-table>

</template>

<script lang='ts' setup>
import Basic from '../../components/Select/Basic.vue';
import BasicDesc from '../../components/Select/BasicDesc.vue';
import Disable from '../../components/Select/Disable.vue';
import DisableDesc from '../../components/Select/DisableDesc.vue';
import Clearable from '../../components/Select/Clearable.vue';
import ClearableDesc from '../../components/Select/ClearableDesc.vue';
import Multiple from '../../components/Select/Multiple.vue';
import MultipleDesc from '../../components/Select/MultipleDesc.vue';
import CustomTemplate from '../../components/Select/CustomTemplate.vue';
import CustomTemplateDesc from '../../components/Select/CustomTemplateDesc.vue';

const titleArr = ['属性', '说明', '类型', '可选值', '默认值'];
const tableContent = [
  ['model-value / v-model', `选中项绑定值`, `<code>array / string / number / boolean / object</code>`, `<code>--</code>`, `<code>--</code>`],
  ['multiple', `是否多选`, `<code>boolean</code>`, `<code>true/false</code>`, `<code>false</code>`],
  [`disabled`, `是否禁用`, `<code>boolean</code>`, `<code>true/false</code>`, `<code>false</code>`],
  [`size`, `输入框尺寸`, `<code>string</code>`, `<code>large/small</code>`, `<code>--</code>`],
  [`clearable`, `是否可以清空选项`, `<code>boolean</code>`, `<code>true / false</code>`, `<code>false</code>`],
  [`placeholder`, `占位文字`, `<code>string</code>`, `<code>--</code>`, `<code>Select</code>`]
];
</script>
