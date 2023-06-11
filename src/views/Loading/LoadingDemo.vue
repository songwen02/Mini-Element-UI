<template>
  <!--  不同区域展示加载-->
  <Demo :component="DiffArea" :desc-component="DiffAreaDesc"></Demo>
  <!--  自定义加载组件的内容-->
  <Demo :component="CustomContent" :desc-component="CustomContentDesc"></Demo>
  <!--  API详情展示-->
  <api-table index-title="指令" :head-title="directiveArr" :body-data="directiveTableContent"></api-table>
  <!--  配置项详情展示-->
  <api-table index-title="配置项" :head-title="configArr" :body-data="configTableContent"></api-table>
</template>

<script lang="ts" setup>
import DiffArea from '../../components/Loading/DiffArea.vue';
import DiffAreaDesc from '../../components/Loading/DiffAreaDesc.vue';
import CustomContent from '../../components/Loading/CustomContent.vue';
import CustomContentDesc from '../../components/Loading/CustomContentDesc.vue';
// 指令API详情
const directiveArr = ['名称', '说明', '类型'];
const directiveTableContent = [
  ['v-loading', `是否显示动画`, `<code>boolean</code>`
  ],
  [`z-loading-text`,
    `显示在加载图标下方的加载文案`,
    `<code>string</code>`],
  [`z-loading-svg`, `自定义加载图标`, `<code>string</code>`],
  [`z-loading-background`, `背景遮罩的颜色`, `<code>string</code>`]
];
// 配置项内容
const configArr = ['属性', '说明', '类型', '默认值'];
const configTableContent = [
  ['fullscreen', `同 <code>v-loading</code> 指令中的 <code>fullscreen</code> 修饰符`, `<code>boolean</code>`, `<code>false</code>`
  ],
  [`lock`,
    `锁定屏幕的滚动`,
    `<code>boolean</code>`, `<code>false</code>`],
  [`text`, `显示在加载图标下方的加载文案`, `<code>string</code>`, `<code>--</code>`],
  [`spinner`, `自定义加载图标类名`, `<code>string</code>`, `<code>--</code>`],
  [`background`, `背景遮罩的颜色`, `<code>string</code>`, `<code>--</code>`]
];
</script>
