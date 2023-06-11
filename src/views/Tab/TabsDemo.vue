<template>
  <Demo :component="TabsCopyDemo"></Demo>
</template>

<script lang="ts">
import Demo from '../../components/common/Demo.vue';
import TabsCopyDemo from '../../components/Tab/TabsCopyDemo.vue';

export default {
  components: {Demo},
  setup() {
    return {TabsCopyDemo};
  },
};
</script>