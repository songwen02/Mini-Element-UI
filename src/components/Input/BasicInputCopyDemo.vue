<demo>
常规用法
</demo>
<template>
  <div>
    <z-input v-model:value="textValue" placeholder="Basic Usage"></z-input>
  </div>
</template>

<script lang='ts' setup>
import {ref} from 'vue';
const textValue = ref('');
</script>

