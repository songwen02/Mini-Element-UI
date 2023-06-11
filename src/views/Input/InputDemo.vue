<template>
  <div>
    <!--    普通案例-->
    <Demo :component="InputCopyDemo"/>
    <!--    密码输入框-->
    <Demo :component="InputPassword"></Demo>
    <!--    禁用输入框-->
    <Demo :component="DisableInput"></Demo>
    <!--    自适应多行文本-->
    <Demo :component="TextAreaInput" :desc-component="textareaDesc"/>
    <!--  API详情展示-->
    <api-table index-title="API" index-sub-title="Input" :head-title="titleArr" :body-data="inputTableContent"></api-table>

    <api-table index-sub-title="TextArea" :head-title="titleArr" :body-data="textareaTableContent"></api-table>
  </div>
</template>

<script lang='ts' setup>
import InputCopyDemo from '../../components/Input/BasicInputCopyDemo.vue';
import InputPassword from '../../components/Input/PasswordCopyDemo.vue';
import DisableInput from '../../components/Input/DisableCopyDemo.vue';
import TextAreaInput from '../../components/Input/TextAreaCopyDemo.vue';
import textareaDesc from '../../lib/input/textAreaDesc.vue';
import Demo from '../../components/common/Demo.vue';
import ApiTable from '../../components/common/ApiTableContainer.vue';

const titleArr = ['成员', '说明', '类型', '默认值'];
const inputTableContent = [
  ['value', `当前输入框的值`, 'string', `<code>''</code>`
  ],
  [`placeholder`,
    `占位符`,
    `string`,
    `<code>''</code>`],
  [`disabled`, `输入框是否禁用`, `boolean`, `<code>false</code>`]
];
// 多行文本框
const textareaTableContent = [
  ['autoSize', `开启自适应高度:传对象时，需设置自适应的最小和最大行数`, 'boolean/object', `<code>''</code>`
  ],
];
</script>

<style lang='scss' scoped>

</style>