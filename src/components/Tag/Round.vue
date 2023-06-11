<demo>圆形标签</demo>
<template>
  <div class="flex flex-wrap gap-2 my-2">
    <z-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        class="ml-2"
        effect="dark"
        round
    >
      {{ item.label }}
    </z-tag>
  </div>
  <div class="flex flex-wrap gap-2">
    <z-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        class="ml-2"
        effect="light"
        round
    >
      {{ item.label }}
    </z-tag>
  </div>
  <div class="flex flex-wrap gap-2 my-2">
    <z-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        class="ml-2"
        effect="plain"
        round
    >
      {{ item.label }}
    </z-tag>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const items = ref([
  { type: '', label: 'Tag 1' },
  { type: 'success', label: 'Tag 2' },
  { type: 'info', label: 'Tag 3' },
  { type: 'danger', label: 'Tag 4' },
  { type: 'warning', label: 'Tag 5' },
])
</script>
