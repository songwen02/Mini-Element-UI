<demo>扩展的 value 类型</demo>
<template>
  <z-popover position="right" :trigger="'hover'">
    <template #content>
      {{ 'Switch value: ' + value }}
    </template>
    <z-switch
        v-model="value"
        active-value="100"
        inactive-value="0"
    />
  </z-popover>

</template>

<script lang="ts" setup>
import {ref} from 'vue';

const value = ref('100');
</script>