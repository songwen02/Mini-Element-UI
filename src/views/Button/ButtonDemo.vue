<template>
  <div>
    <!--  Theme示例-->
    <Demo :component="ButtonTheme" :desc-component="ButtonThemeDesc"></Demo>
  </div>
  <div>
    <!-- size示例 -->
    <Demo :component="ButtonDemoSize" :desc-component="ButtonSizeDesc"></Demo>
  </div>
  <!--  level示例-->
  <div>
    <Demo :component="ButtonDemoLevel" :desc-component="ButtonLevelDesc"></Demo>
  </div>
  <!--  按钮置灰-->
  <div>
    <Demo :component="ButtonDemoDisabled" :desc-component="ButtonDisableDesc"></Demo>
  </div>

  <!--  loading-->
  <div>
    <Demo :component="ButtonDemoLoading" :desc-component="ButtonLoadingDesc"></Demo>
  </div>
  <!--  API详情展示-->
  <api-table index-title="API" :head-title="titleArr" :body-data="tableContent"></api-table>
</template>
<script lang="ts" setup>
import Demo from '../../components/common/Demo.vue';
import ButtonTheme from '../../components/Button/ButtonTheme.vue';
import ButtonThemeDesc from '../../components/Button/ButtonThemeDesc.vue';
import ButtonDemoSize from '../../components/Button/ButtonSize.vue';
import ButtonSizeDesc from '../../components/Button/ButtonSizeDesc.vue';
import ButtonDemoLevel from '../../components/Button/ButtonLevel.vue';
import ButtonLevelDesc from '../../components/Button/ButtonLevelDesc.vue';
import ButtonDemoDisabled from '../../components/Button/ButtonDisabled.vue';
import ButtonDisableDesc from '../../components/Button/ButtonDisableDesc.vue';
import ButtonDemoLoading from '../../components/Button/ButtonLoading.vue';
import ButtonLoadingDesc from '../../components/Button/ButtonLoadingDesc.vue';
import ApiTable from '../../components/common/ApiTableContainer.vue';

const titleArr = ['参数', '说明', '类型', '默认值'];
const tableContent = [
  ['theme', `按钮类型`, 'string', `<code>button</code>`
  ],
  [`size`,
    `按钮尺寸`,
    `string`,
    `<code>normal</code>`],
  [`level`, `按钮样式`, `string`, `<code>normal</code>`],
  [`disabled`, `按钮禁用`, `boolean`, `<code>false</code>`],
  [`loading`, `按钮加载`, `boolean`, `<code>false</code>`],
];
</script>