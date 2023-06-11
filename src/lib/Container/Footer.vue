<template>
  <footer class="z-footer" :style="style">
    <slot></slot>
  </footer>
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
  return props.height ? {height: `${props.height }px`} : {};
});
</script>

<style lang='scss' scoped>
.z-footer {
  box-sizing: border-box;
  padding: 0 20px;
  height: 60px;
  flex-shrink: 0; // 不缩小
  text-align: center;
}
</style>