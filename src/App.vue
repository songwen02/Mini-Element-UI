<template>
<!--  路由要展示的组件直接展示到这即可！-->
  <router-view/>
</template>

<script lang="ts">

import {provide, ref} from 'vue';
import {router} from './router';

export default {
  name: 'App',
  setup(){
    const width=document.documentElement.clientWidth
    //menuVisible是个ref也就是个盒子，括号里设置的就是盒子里的值,width>500等同于width<=500?false:true
    const menuVisible = ref(width > 510);
    provide('menuVisible',menuVisible) //给menuVisible取名为menuVisible，子组件就可以通过menuVisible这个名字来获取到menuVisible的值
    router.afterEach(()=>{
      if (document.documentElement.clientWidth <= 510) { //即手机端去做这个事，PC端就不用切换了
        menuVisible.value = false;
      }
    })
  }
}
</script>
