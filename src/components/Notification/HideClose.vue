<demo>隐藏关闭按钮</demo>
<template>
  <z-button @click="open">Hide close button</z-button>
</template>

<script lang='ts' setup>
import Notify from '../../lib/Notification/notify';

function open() {
  Notify({
    title: 'Info',
    message: 'This is a message without close button',
    showClose: false,
  });
}

</script>

