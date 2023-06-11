<demo>不同类型的通知</demo>
<template>
  <z-button @click="open1">Success</z-button>
  <z-button @click="open2">Warning</z-button>
  <z-button @click="open3">Info</z-button>
  <z-button @click="open4">Error</z-button>
</template>

<script lang='ts' setup>
import Notify from '../../lib/Notification/notify';

const open1 = () => {
  Notify({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
    duration: 5000
  });
};

const open2 = () => {
  Notify({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning',
    duration: 5000
  });
};

const open3 = () => {
  Notify({
    title: 'Info',
    message: 'This is an info message',
    type: 'info',
    duration: 5000
  });
};

const open4 = () => {
  Notify({
    title: 'Error',
    message: 'This is an error message',
    type: 'error',
    duration: 5000
  });
};
</script>

