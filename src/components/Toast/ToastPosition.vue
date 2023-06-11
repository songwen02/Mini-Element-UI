<demo>
设置弹出位置
</demo>
<template>
  <z-button level="main" @click="showToast({position:'top'})">上方弹出</z-button>
  <z-button level="main" @click="showToast({position:'middle'})">中间弹出</z-button>
  <z-button level="main" @click="showToast({position:'bottom'})">下方弹出</z-button>
</template>

<script lang='ts' setup>
import {getCurrentInstance} from 'vue';

const {$toast} = getCurrentInstance().appContext.config.globalProperties;

function showToast({position}) {
  $toast({
    message: '提示信息',
    position
  });
}
</script>
