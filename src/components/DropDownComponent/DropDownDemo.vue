<template>
  <Demo :component="DropDownBasic"></Demo>
</template>

<script lang="ts">
import Demo from '../common/Demo.vue';
import DropDownBasic from './DropDownBasic.vue'
export default {
  components: {Demo},
  setup() {
    return {DropDownBasic};
  },
};
</script>