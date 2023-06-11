<demo>
密码框
</demo>
<template>
  <div>
    <z-input-password v-model:value="textValue" placeholder="password"></z-input-password>
  </div>
</template>

<script lang='ts' setup>
import {ref} from 'vue';

const textValue = ref('');
</script>

