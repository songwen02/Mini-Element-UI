<demo>
多选框组
</demo>
<template>
  <z-check-box-group v-model="checkList">
    <z-check-box label="Option A"/>
    <z-check-box label="Option B"/>
    <z-check-box label="Option C"/>
    <z-check-box label="disabled" disabled/>
    <z-check-box label="selected and disabled" disabled/>
  </z-check-box-group>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const checkList = ref(['selected and disabled', 'Option A']);
</script>