<demo>自定义内容</demo>
<template>
  Scroll down to see the bottom-right button.
  <z-back-top @click="handleClick" :right="30" :bottom="100" visibility-height="300">
    <div
        style="
        height: 100%;
        width: 100%;
        background-color: #fff;
        box-shadow: 0 0 6px rgba(0, 0, 0, .12);;
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      "
    >
      UP
    </div>
  </z-back-top>
</template>
<script lang="ts" setup>
function handleClick(e) {
  console.log(`I'm clicked`);
}
</script>
