<template>
  <div ref="carouselItemRef" class="z-carousel-item" :class="{'isAnimated':isAnimated}" :style="customStyle">
    <slot/>
  </div>
</template>

<script lang='ts' setup>
import {computed} from 'vue';
import {useCarouselItem} from '../../use/carousel/useCarouselItem';

const {carouselItemRef, translate, isAnimated, isVertical} = useCarouselItem();

const customStyle = computed(() => {
  const direction = isVertical ? 'Y' : 'X';
  const transform = `translate${direction}(${translate.value}px)`;
  return {transform};
});
</script>

<style lang='scss' scoped>
.z-carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  overflow: hidden;
  background-color: green;

  &.isAnimated {
    transition: transform 0.5s ease-in-out;
  }

}
</style>