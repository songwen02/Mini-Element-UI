<demo>
设置关闭按钮
</demo>

<template>
  <z-button level="main" @click="showToast">上方弹出</z-button>
</template>

<script lang='ts' setup>
import {getCurrentInstance} from 'vue';

const {$toast} = getCurrentInstance().appContext.config.globalProperties;

function showToast() {
  $toast({
    message: '提示信息',
    closeButton: {
      text: '自己设置关闭按钮内容',
      callback: () => {
        console.log('有事启奏，无事退朝');
      }
    }
  });
}
</script>
