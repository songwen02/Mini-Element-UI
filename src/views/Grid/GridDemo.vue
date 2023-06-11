<template>
  <section id="main-container">
    <!--  区间间隔Gutter-->
    <div>
      <Demo :component="GutterDemo" :desc-component="GutterDesc"></Demo>
    </div>
    <!-- 纵向排版-->
    <div>
      <Demo :component="AlignDemo" :desc-component="AlignDesc"></Demo>
    </div>

    <!-- 横向排版-->
    <div>
      <Demo :component="JustifyDemo" :desc-component="JustifyDesc"></Demo>
    </div>

    <!-- 列偏移-->
    <div>
      <Demo :component="OffsetDemo" :desc-component="OffsetDesc"></Demo>
    </div>

    <!-- 响应式布局-->
    <div>
      <Demo :component="ResponsiveDemo" :desc-component="ResponsiveDesc"></Demo>
    </div>
  </section>
  <!--  API详情展示-->
  <api-table index-title="API" index-sub-title="Row" :head-title="titleArr" :body-data="rowTableContent"></api-table>

  <api-table index-sub-title="Col" :head-title="titleArr" :body-data="colTableContent"></api-table>
</template>

<script lang='ts' setup>
import AlignDemo from '../../components/Grid/Align/AlignDemo.vue';
import AlignDesc from '../../components/Grid/Align/AlignDesc.vue';

import JustifyDemo from '../../components/Grid/Justify/JustifyDemo.vue';
import JustifyDesc from '../../components/Grid/Justify/JustifyDesc.vue';

import GutterDemo from '../../components/Grid/Gutter/GutterDemo.vue';
import GutterDesc from '../../components/Grid/Gutter/GutterDesc.vue';

import OffsetDemo from '../../components/Grid/Offset/OffsetDemo.vue';
import OffsetDesc from '../../components/Grid/Offset/OffsetDesc.vue';

import ResponsiveDemo from '../../components/Grid/Responsive/ResponsiveDemo.vue';
import ResponsiveDesc from '../../components/Grid/Responsive/ResponsiveDesc.vue';


import Demo from '../../components/common/Demo.vue';
import ApiTable from '../../components/common/ApiTableContainer.vue';

const titleArr = ['成员', '说明', '类型', '默认值'];
const rowTableContent = [
  ['align', `flex 布局下的垂直对齐方式：<code>top</code> <code>middle</code><code>bottom</code>`, 'string', `<code>top</code>`
  ],
  [`justify`,
    `flex 布局下的水平排列方式：<code>start</code><code>end</code><code>center</code><code>space-around</code><code>space-between</code>`,
    `string`,
    `<code>start</code>`],
  [`gutter`, `栅格间隔，可以写成像素值来设置水平间隔`, `number/string`, `<code>0</code>`]
];

const colTableContent = [
  [`span`,
    `栅格占位格数，为 0 时相当于 display: none`,
    `number`,
    `-`],
  [`offset`,
    `栅格左侧的间隔格数`,
    `number`,
    `-`],
  [`widePc`,
    `<code>≥1200px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象`,
    `number/object`,
    `-`],
  [`pc`,
    `<code>≥993px</code>响应式栅格，可为栅格数或一个包含其他属性的对象`,
    `number/object`,
    `-`],
  [`narrowPc`,
    `<code>≥769px</code>响应式栅格，可为栅格数或一个包含其他属性的对象`,
    `number/object`,
    `-`],
  [`ipad`,
    `<code>≥576px</code>响应式栅格，可为栅格数或一个包含其他属性的对象`,
    `number/object`,
    `-`]
];
</script>

<style lang='scss' scoped>
#main-container {
  :deep(.gutter-box) {
    padding: 16px 0;
    background: #00a0e9;
    line-height: 32px;
    text-align: center;
  }

  :deep(.z-row>div:not(.gutter-row )) {
    padding: 16px 0;
    text-align: center;
    background-color: #0092ff;
    margin-top: 8px;
    margin-bottom: 8px;

    &:nth-child(2n+1) {
      background: rgba(0, 146, 255, .75);
    }
  }

  :deep(.justifyRow) {
    background: lightgray;

    .justify-box {
      background: #0092ff;

      &:nth-child(2n+1) {
        background: rgba(0, 146, 255, .75);
      }
    }


  }
}


</style>