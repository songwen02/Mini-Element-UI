<demo>
禁用状态
</demo>
<template>
  <z-check-box v-model="checked1" disabled>Disabled</z-check-box>
  <z-check-box v-model="checked2">Not disabled</z-check-box>
</template>

<script lang='ts' setup>
import {ref} from 'vue';

const checked1 = ref(false);
const checked2 = ref(true);
</script>

