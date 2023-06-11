<demo>
禁用状态
</demo>
<template>
  <z-switch v-model="bool.active" disabled></z-switch>

  <span style="width: 10px; display: inline-block;"></span>

  <z-switch v-model="bool.inactive" disabled></z-switch>
</template>

<script lang='ts' setup>
import {reactive} from 'vue';

const bool = reactive({
  active: true,
  inactive: false
});
</script>
