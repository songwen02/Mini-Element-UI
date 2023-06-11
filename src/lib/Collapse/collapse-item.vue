<template>
  <div id="z-collapseItem">
    <div class="z-collapse-header" @click="toggle()">
      <span class="z-collapse-arrow">
        <svg ref="svgRef">
            <use xlink:href="#icon-arrow-right"></use>
          </svg>
      </span>
      <span>{{ header }}</span>
    </div>
    <div class="z-collapse-content" v-if="isExtend">
      <div class="z-collapse-content-box">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import {defineEmits, defineProps, inject, onUnmounted, ref} from 'vue';
import Mitt from '../../store/mitt.js';

const props = defineProps({
  header: {type: String, required: true},
  itemKey: {type: Number, required: true}
});
const collapseId = inject('collapseId');
const svgRef = ref<HTMLElement>();
const isExtend = ref(false);
Mitt.on(`changeCollapseKey${collapseId}`, listenCollapseKey);

function listenCollapseKey(val) {
  isExtend.value = val.includes(props.itemKey);
  setSvgAngle();
}

function toggle() {
  Mitt.emit(isExtend.value ? `closeCollapse${collapseId}` : `openCollapse${collapseId}`, props.itemKey);
  setSvgAngle();
}

function setSvgAngle() {
  svgRef.value.style.transform = `rotate(${isExtend.value ? 90 : 0}deg)`;
}

onUnmounted(() => {
  Mitt.off(`closeCollapse${collapseId}`);
  Mitt.off(`openCollapse${collapseId}`);
  Mitt.off(`changeCollapseKey${collapseId}`, listenCollapseKey);
});

</script>

<style lang='scss' scoped>
#z-collapseItem {
  border-bottom: 1px solid #d9d9d9;

  .z-collapse-header {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    padding: 12px 16px;
    color: #000000d9;
    line-height: 1.5715;
    cursor: pointer;
    transition: all .3s, visibility 0s;
    background-color: #fafafa;
  }

  .z-collapse-arrow {
    svg {
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-right: 12px;
      vertical-align: -1px;
      transition: transform 0.24s;
    }
  }

  .z-collapse-content {
    color: #000000d9;
    background-color: #fff;
    border-top: 1px solid #d9d9d9;

    .z-collapse-content-box {
      padding: 16px;
    }
  }
}
</style>