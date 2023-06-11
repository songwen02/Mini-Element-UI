<demo>
自定义模板
</demo>
<template>
  <z-select v-model="value" placeholder="Select">
    <z-option
        v-for="item in cities"
        :key="item.value"
        :label="item.label"
        :value="item.value"
    >
      <span style="float: left">{{ item.label }}</span>
      <span
          style="
          float: right;
          color: #9a9da2;
          font-size: 13px;
        "
      >{{ item.value }}</span
      >
    </z-option>
  </z-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const cities = [
  {
    value: 'Beijing',
    label: 'Beijing',
  },
  {
    value: 'Shanghai',
    label: 'Shanghai',
  },
  {
    value: 'Nanjing',
    label: 'Nanjing',
  },
  {
    value: 'Chengdu',
    label: 'Chengdu',
  },
  {
    value: 'Shenzhen',
    label: 'Shenzhen',
  },
  {
    value: 'Guangzhou',
    label: 'Guangzhou',
  },
]
</script>
