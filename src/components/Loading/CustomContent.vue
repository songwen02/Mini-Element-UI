<demo>
自定义加载中组件内容
</demo>
<template>
  <z-button @click="showLoading" v-loading.fullscreen="fullScreen">默认效果</z-button>
  <z-button @click="showCustomLoading" v-loading.fullscreen="customLoading" z-loading-text="loading"
            :z-loading-svg="svg"
            z-loading-background="rgba(122, 122, 122, 0.9)">自定义内容效果
  </z-button>
</template>

<script lang='ts' setup>
import {ref} from 'vue';

const fullScreen = ref(false);
const customLoading = ref(false);
const svg = `<svg>
          <use xlink:href="#icon-loading2"></use>
        </svg>`;

function showLoading() {
  fullScreen.value = true;
  setTimeout(() => {
    fullScreen.value = false;
  }, 2000);
}

function showCustomLoading() {
  customLoading.value = true;
  setTimeout(() => {
    customLoading.value = false;
  }, 2000);
}
</script>

