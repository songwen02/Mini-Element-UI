<demo>
Tabs示例
</demo>
<template>
  <div>
    <z-tabs v-model:selected="currentSelected">
      <z-tab title="导航1">内容1</z-tab>
      <z-tab title="导航2222">内容2</z-tab>
    </z-tabs>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
const currentSelected = ref('导航1');
</script>