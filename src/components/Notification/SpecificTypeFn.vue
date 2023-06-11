<demo>单独引用</demo>
<template>
  <z-button @click="Success">open1</z-button>
  <z-button @click="Warning">open2</z-button>
  <z-button @click="Info">open3</z-button>
  <z-button @click="Error">open4</z-button>
</template>

<script lang="ts" setup>
import Notify from '../../lib/Notification/notify';

const Success = () => {
  Notify['success']({
    title: 'Custom Position',
    message: 'I\'m at the top right corner'
  });
};

const Info = () => {
  Notify['info']({
    title: 'Custom Position',
    message: 'I\'m at the bottom right corner',
  });
};

const Warning = () => {
  Notify['warning']({
    title: 'Custom Position',
    message: 'I\'m at the bottom left corner',
  });
};

const Error = () => {
  Notify['error']({
    title: 'Custom Position',
    message: 'I\'m at the top left corner',
  });
};
</script>