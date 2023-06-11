<template>
  <header class="z-header" :style="style">
    <slot></slot>
  </header>
</template>

<script lang='ts' setup>
import { computed } from 'vue';
const props = defineProps({
  height: {
    type: String,
    'default': null,
  },
});
const style = computed(() => {
  return props.height ? {height: `${props.height}px`} : {};
});
</script>

<style lang='scss' scoped>
.z-header {
  height: 60px;
  padding: 0 20px;
  flex-shrink: 0;
  box-sizing: border-box;
}
</style>
