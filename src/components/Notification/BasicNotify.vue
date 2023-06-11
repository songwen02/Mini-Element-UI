<demo>基础用法</demo>
<template>
  <z-button @click="autoClose">自动关闭</z-button>
  <z-button @click="keepOpen">不自动关闭</z-button>
</template>

<script lang='ts' setup>
import Notify from '../../lib/Notification/notify';

function autoClose() {
  Notify({
    title: '自动关闭',
    message: 'simple message',
  });
}

function keepOpen() {
  Notify({
    title: '不自动关闭',
    message: 'simple message',
    duration: 0
  });
}
</script>

