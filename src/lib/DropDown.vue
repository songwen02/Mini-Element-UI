<template>
  <div id="allContainer" :ref="el=>{allContainerDom=el}">
    <!--  展示内容-->
    <div id="displayData" :ref="el=>{hoverNameDom=el}">
      <slot/>
    </div>
    <!-- 内部下拉项 -->
    <div id="overlayContainer" :ref="el=>{overlayContainerDom=el}" v-show="showOverlay">
      <slot name="overlay"></slot>
    </div>
  </div>
</template>

<script lang="ts">

import {onMounted, ref} from "vue";

export default {

  setup() {
    const showOverlay = ref(false)
    const hoverNameDom = ref<HTMLDivElement>(null);
    const allContainerDom = ref<HTMLDivElement>(null);
    const overlayContainerDom = ref<HTMLDivElement>(null)
    onMounted(() => {
      const container = allContainerDom.value;
      container.onmouseover = function () {
        showOverlay.value = true;
      }
      container.onmouseleave = () => {
        showOverlay.value = false
      }
    })
    return {showOverlay, hoverNameDom, overlayContainerDom, allContainerDom}
  }
}

</script>

<style lang="scss" scoped>
#allContainer {
  display: inline-block;
}
</style>