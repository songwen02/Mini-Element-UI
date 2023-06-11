<template>
  <h1 class="demoHeader">Container 布局容器</h1>
  <p>用于布局的容器组件，方便快速搭建页面的基本结构：</p>

  <p><code>&lt;z-container&gt;</code>：外层容器。 当子元素中包含 <code>&lt;z-header&gt;</code> 或 <code>&lt;z-footer&gt;</code>
    时，全部子元素会垂直上下排列， 否则会水平左右排列。</p>

  <p><code>&lt;z-header&gt;</code>：顶栏容器。</p>

  <p><code>&lt;z-aside&gt;</code>：侧边栏容器。</p>

  <p><code>&lt;z-main&gt;</code>：主要区域容器。</p>

  <p><code>&lt;z-footer&gt;</code>：底栏容器。</p>
  <Demo :component="HM"></Demo>
  <Demo :component="HMF"></Demo>
  <Demo :component="AM"></Demo>
  <Demo :component="HAM"></Demo>
  <Demo :component="HAMF"></Demo>
  <Demo :component="AHM"></Demo>
  <Demo :component="AHMF"></Demo>

  <api-table index-title="Container API" index-sub-title="Container Attributes" :head-title="containerTitle"
             :body-data="containerContent"></api-table>
  <api-table index-sub-title="Container Slots" :head-title="containerSlotsTitle"
             :body-data="containerSlotsContent"></api-table>

  <api-table index-title="Header API" index-sub-title="Header Attributes" :head-title="headerTitle"
             :body-data="headerContent"></api-table>
  <api-table index-sub-title="Header Slots" :head-title="headerSlotsTitle"
             :body-data="headerSlotsContent"></api-table>

  <api-table index-title="Aside API" index-sub-title="Aside  Attributes" :head-title="asideTitle"
             :body-data="asideContent"></api-table>
  <api-table index-sub-title="Aside Slots" :head-title="headerSlotsTitle"
             :body-data="headerSlotsContent"></api-table>

  <api-table index-title="Main API" index-sub-title="Main  Slots" :head-title="headerSlotsTitle"
             :body-data="headerSlotsContent"></api-table>

  <api-table index-title="Footer API" index-sub-title="Footer Attributes" :head-title="footerTitle"
             :body-data="footerContent"></api-table>
  <api-table index-sub-title="Footer Slots" :head-title="headerSlotsTitle"
             :body-data="headerSlotsContent"></api-table>

</template>


<script lang="ts" setup>
import HM from '../../components/Container/HM.vue';
import HMF from '../../components/Container/HMF.vue';
import AM from '../../components/Container/AM.vue';
import HAM from '../../components/Container/HAM.vue';
import HAMF from '../../components/Container/HAMF.vue';
import AHM from '../../components/Container/AHM.vue';
import AHMF from '../../components/Container/AHMF.vue';

const containerTitle = ['属性', '说明', '类型', '默认值'];
const containerContent = [
  [`direction`, `子元素的排列方向`, `<code>string</code>`, `子元素中有 <code>z-header </code>或 <code>z-footer</code> 时为 vertical，否则为 horizontal`]
];
const containerSlotsTitle = ['属性', '说明'];
const containerSlotsContent = [[`default`, `自定义默认内容`]];

const headerTitle = ['属性', '说明', '类型', '默认值'];
const headerContent = [
  [`height`, `顶栏高度`, `<code>string</code>`, `<code>60px</code>`]
];
const headerSlotsTitle = ['属性', '说明'];
const headerSlotsContent = [[`default`, `自定义默认内容`]];

const asideTitle = ['属性', '说明', '类型', '默认值'];
const asideContent = [
  [`width`, `侧边栏宽度`, `<code>string</code>`, `<code>300px</code>`]
];
const footerTitle = ['属性', '说明', '类型', '默认值'];
const footerContent = [
  [`height`, `底栏高度`, `<code>string</code>`, `<code>60px</code>`]
];
</script>

<style lang="scss">
p {
  margin: 1rem 0;
  font-size: 18px;
  font-weight: 400;
}
</style>