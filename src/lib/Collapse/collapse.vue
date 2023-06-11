<template>
  <div id="z-collapse">
    <slot></slot>
  </div>
</template>

<script lang='ts' setup>
import {defineProps, onMounted, provide, watch} from 'vue';
import Mitt from '../../store/mitt.js';

// 用唯一的id标识这些组件触发的总线，避免多个相同组件之间触发总线时的互相干扰
const collapseId = Math.random();
provide('collapseId', collapseId);

const props = defineProps({
  activeKey: Array,
  accordion: {type: Boolean, default: false}
});
const emits = defineEmits(['update:activeKey']);

function openCollapseEmit() {
  Mitt.on(`openCollapse${collapseId}`, (val) => {
    let selectedItem;
    selectedItem = props.accordion ? [val] : props.activeKey.concat(val);
    updateActiveKey(selectedItem);
  });
}

function updateActiveKey(val) {
  emits('update:activeKey', val);
}

function closeCollapseEmit() {
  Mitt.on(`closeCollapse${collapseId}`, (val) => {
    let selectedItem = JSON.parse(JSON.stringify(props.activeKey));
    const index = selectedItem.indexOf(val);
    selectedItem.splice(index, 1);
    updateActiveKey(selectedItem);
  });
}

function changeCollapseEmit(val) {
  Mitt.emit(`changeCollapseKey${collapseId}`, val);
}
watch(()=>props.activeKey,(val)=>{
  changeCollapseEmit(val);
})

onMounted(() => {
  changeCollapseEmit(props.activeKey);
  openCollapseEmit();
  closeCollapseEmit();
});
</script>

<style lang='scss' scoped>
$border-radius: 2px;
#z-collapse {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #000000d9;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: "tnum";
  background-color: #fafafa;
  border: 1px solid #d9d9d9;
  border-bottom: 0;
  border-radius: 2px;
}
</style>