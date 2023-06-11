<demo>不同的输入框尺寸</demo>
<template>
  <z-input-number v-model="num1" size="large"/>
  <z-input-number v-model="num2" class="mx-4"/>
  <z-input-number v-model="num3" size="small"/>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const num1 = ref(1);
const num2 = ref(2);
const num3 = ref(3);
</script>

<style lang="scss" scoped>
.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>