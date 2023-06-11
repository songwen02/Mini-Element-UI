<demo>
从浮层内关闭
</demo>
<template>
  <z-popover v-model:visible="visible">
    <template #content>
      就是个简单的的数据
      <z-button level="main" @click="close">close</z-button>
    </template>
    <z-button>点我呀</z-button>
  </z-popover>
</template>

<script lang='ts' setup>
import {ref} from 'vue';

const visible = ref(false);

function close() {
  visible.value = false;
}
</script>
