<template>
  <!--  基础用法-->
  <Demo :component="BasicUse" :desc-component="BasicDesc"/>
  <!--  垂直分布-->
  <Demo :component="VerticalLayout" :desc-component="VerticalLayoutDesc"/>
  <!--  切换箭头-->
  <Demo :component="ArrowDisplay" :desc-component="ArrowDisplayDesc"/>
  <!--  指示器位置-->
  <Demo :component="OutsideIndicator" :desc-component="OutsideIndicatorDesc"/>
  <!--  API-->
  <api-table index-title="Carousel 属性" :head-title="CarouselArr" :body-data="CarouselTableContent"></api-table>

</template>

<script lang='ts' setup>
import BasicUse from '../../components/Carousel/BasicUse.vue';
import BasicDesc from '../../components/Carousel/BasicDesc.vue';
import VerticalLayout from '../../components/Carousel/VerticalLayout.vue';
import VerticalLayoutDesc from '../../components/Carousel/VerticalLayoutDesc.vue';
import ArrowDisplay from '../../components/Carousel/ArrowDisplay.vue';
import ArrowDisplayDesc from '../../components/Carousel/ArrowDisplayDesc.vue';
import OutsideIndicator from '../../components/Carousel/OutsideIndicator.vue';
import OutsideIndicatorDesc from '../../components/Carousel/OutsideIndicatorDesc.vue';

const CarouselArr = ['属性', '说明', '类型', '可选值', '默认值'];
const CarouselTableContent = [
  ['height', `carousel 的高度`, `<code>string/number</code>`, `<code>--</code>`],
  [`trigger`, `指示器的触发方式`, `<code>string</code>`, `<code>hover/click</code>`, `<code>hover</code>`],
  [`indicator-position`, `指示器的位置`, `<code>string</code>`, `<code>outside/none</code>`, `<code>--</code>`],
  [`arrow`, `切换箭头的显示时机`, `<code>string</code>`, `<code>always/hover/never</code>`, `<code>hover</code>`],
  [`direction`, `展示的方向`, `<code>string</code>`, `<code>horizontal/vertical</code>`, `<code>horizontal</code>`]
];
</script>

<style lang='scss' scoped>

</style>