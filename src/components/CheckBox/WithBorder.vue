<demo>
带有边框
</demo>
<template>
  <div>
    <z-check-box v-model="checked1" label="Option1" size="large" border/>
    <z-check-box v-model="checked2" label="Option2" size="large" border/>
  </div>
  <div class="mt-4">
    <z-check-box v-model="checked3" label="Option1" border/>
    <z-check-box v-model="checked4" label="Option2" border/>
  </div>
  <div class="mt-4">
    <z-check-box-group v-model="checkboxGroup1" size="small">
      <z-check-box label="Option1" border/>
      <z-check-box label="Option2" border/>
    </z-check-box-group>
  </div>
  <div class="mt-4">
    <z-check-box-group v-model="checkboxGroup1" size="small">
      <z-check-box label="Option1" border disabled/>
      <z-check-box label="Option2" border disabled/>
    </z-check-box-group>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(true);
const checkboxGroup1 = ref(['Option1']);
</script>