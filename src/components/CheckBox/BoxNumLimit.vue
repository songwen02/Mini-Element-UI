<demo>
可选项目数量的限制
</demo>
<template>
  <z-check-box-group v-model="checkedCities" :min="2" :max="4">
    <z-check-box v-for="city in cities" :key="city" :label="city">
      {{ city }}
    </z-check-box>
  </z-check-box-group>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const checkedCities = ref(['Shanghai', 'Beijing']);
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen', 'ChengDu'];
</script>

