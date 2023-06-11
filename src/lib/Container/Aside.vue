<template>
  <aside class="z-aside" :style="style">
    <slot></slot>
  </aside>
</template>

<script lang='ts' setup>
import { computed } from 'vue';
const props = defineProps({
  width: {
    type: String,
    'default': null,
  },
});
const style = computed(() => {
  return props.width ? {width: `${props.width}px`} : {};
});
</script>

<style lang='scss' scoped>
.z-aside {
  text-align: center;
  overflow: auto;
  flex-shrink: 0;
  width: 300px;
  box-sizing: border-box;
}
</style>
