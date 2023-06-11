<demo>
基本使用
</demo>
<template>
  <z-collapse v-model:active-key="activeKey">
    <z-collapse-item :item-key="1" header="标题1">
      上兵伐谋
    </z-collapse-item>
    <z-collapse-item :item-key="2" header="标题2">上兵伐谋</z-collapse-item>
    <z-collapse-item :item-key="3" header="标题3">上兵伐谋</z-collapse-item>
  </z-collapse>
</template>

<script lang='ts' setup>
import {ref} from 'vue';
const activeKey = ref([1]);
</script>
