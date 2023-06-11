<demo>
禁用输入框
</demo>
<template>
  <div>
    <z-input v-model:value="textValue" placeholder="disable" disabled></z-input>
  </div>
</template>

<script lang='ts'>
import {ref} from 'vue';

export default {
  setup() {
    const textValue = ref('');
    return {
      textValue
    };
  }
};
</script>

<style lang='scss' scoped>
</style>