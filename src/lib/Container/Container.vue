<template>
  <section class="z-container" :class="{'is-vertical':isVertical}">
    <slot></slot>
  </section>
</template>

<script lang='ts' setup>
import { computed, useSlots } from 'vue';
import Footer from './Footer.vue';
import Header from './Header.vue';

const props = defineProps({
  direction: String,
});
const isVertical = computed(() => {
  const Map = {
    'vertical': true,
    'horizontal': false,
  };
  if (props.direction) {
    return Map[props.direction];
  }
  return useSlots().default?.()?.some(node => {
    return node.type === Header || node.type === Footer;
  });
});

</script>

<style lang='scss' scoped>
.z-container {
  display: flex;
  flex-direction: row;
  flex: 1;
  box-sizing: border-box;
  flex-basis: auto;
  min-width: 0;

  &.is-vertical {
    flex-direction: column;
  }
}
</style>