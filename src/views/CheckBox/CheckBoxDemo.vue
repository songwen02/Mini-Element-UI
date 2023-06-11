<template>
  <!--  基本用法-->
  <Demo :component="Basic" :desc-component="BasicDesc"></Demo>
  <!--  禁用-->
  <Demo :component="DisableBox" :desc-component="DisableDesc"></Demo>
  <!--  多选框组-->
  <Demo :component="CheckBoxGroup" :desc-component="GroupDesc"></Demo>
  <!--  可选项目数量的限制-->
  <Demo :component="BoxNumLimit" :desc-component="BoxNumLimitDesc"></Demo>
  <!--  带有边框-->
  <Demo :component="WithBorder" :desc-component="WithBorderDesc"></Demo>
  <!--  API内容-->
  <api-table index-title="Checkbox 属性" :head-title="configArr" :body-data="configTableContent"></api-table>
  <api-table index-title="Checkbox 事件" :head-title="CheckboxFnArr" :body-data="CheckboxFnContent"></api-table>
  <api-table index-title="Checkbox 插槽" :head-title="CheckboxSlotArr" :body-data="CheckboxSlotContent"></api-table>
  <api-table index-title="Checkbox-Group 属性" :head-title="checkGroupArr" :body-data="checkGroupContent"></api-table>
  <api-table index-title="Checkbox-Group 事件" :head-title="CheckboxFnArr" :body-data="CheckboxFnContent"></api-table>
  <api-table index-title="Checkbox-Group 插槽" :head-title="CheckboxGroupSlotArr"
             :body-data="CheckboxGroupSlotContent"></api-table>

</template>

<script lang='ts' setup>
import Basic from '../../components/CheckBox/Basic.vue';
import BasicDesc from '../../components/CheckBox/BasicDesc.vue';
import DisableBox from '../../components/CheckBox/DisableBox.vue';
import DisableDesc from '../../components/CheckBox/DisableDesc.vue';
import CheckBoxGroup from '../../components/CheckBox/CheckBoxGroup.vue';
import GroupDesc from '../../components/CheckBox/GroupDesc.vue';
import BoxNumLimit from '../../components/CheckBox/BoxNumLimit.vue';
import BoxNumLimitDesc from '../../components/CheckBox/BoxNumLimitDesc.vue';
import WithBorder from '../../components/CheckBox/WithBorder.vue';
import WithBorderDesc from '../../components/CheckBox/WithBorderDesc.vue';

const configArr = ['属性', '说明', '类型', '可选值', '默认值'];
const configTableContent = [
  ['v-model', `选中项绑定值`, `<code>string / number / boolean</code>`, `<code>--</code>`, `<code>--</code>`
  ],
  [`label`,
    `选中状态的值（只有在<code>checkbox-group</code>或者绑定对象类型为<code>array</code>时有效）`,
    `<code>string / number / boolean / object</code>`, `<code>--</code>`, `<code>--</code>`],
  [`disabled`, `是否禁用`, `<code>boolean</code>`, `<code>--</code>`, `<code>false</code>`],
  [`border`, `是否显示边框`, `<code>boolean</code>`, `<code>--</code>`, `<code>false</code>`],
  [`size`, `Checkbox 的尺寸`, `<code>string</code>`, `<code>large / default / small</code>`, `<code>--</code>`]
];
const CheckboxFnArr = ['属性', '说明', '回调参数'];
const CheckboxFnContent = [
  ['change', `当绑定值变化时触发的事件`, `<code>value</code>`]
];

const CheckboxSlotArr = ['插槽名', '说明'];
const CheckboxSlotContent = [
  ['--', `自定义默认内容`]
];

const checkGroupArr = ['属性', '说明', '类型', '可选值', '默认值'];
const checkGroupContent = [
  ['v-model', `绑定值`, `<code>array</code>`, `<code>--</code>`, `<code>[]</code>`
  ],
  [`min`, `可被勾选的 checkbox 的最小数量`, `<code>number</code>`, `<code>--</code>`, `<code>--</code>`],
  [`max`, `可被勾选的 checkbox 的最大数量`, `<code>number</code>`, `<code>--</code>`, `<code>--</code>`]
];

const CheckboxGroupSlotArr = ['插槽名', '说明', '子标签'];
const CheckboxGroupSlotContent = [
  ['--', `自定义默认内容`, 'CheckBox']
];
</script>
