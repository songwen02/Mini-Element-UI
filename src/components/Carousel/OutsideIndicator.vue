<demo>指示器</demo>
<template>
  <z-carousel indicator-position="outside">
    <z-carousel-item v-for="item in 5" :key="item">
      <h3 style="text-align: center;vertical-align: middle;">{{ item }}</h3>
    </z-carousel-item>
  </z-carousel>
  <div style="width: 100%;height: 100px;"></div>
  <z-carousel indicator-position="none">
    <z-carousel-item v-for="item in 4" :key="item">
      <h3 style="text-align: center;vertical-align: middle;">{{ item }}</h3>
    </z-carousel-item>
  </z-carousel>
</template>

<script lang='ts' setup>

</script>

<style lang='scss' scoped>
.z-carousel-item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.z-carousel-item:nth-child(2n) {
  background-color: #99a9bf;
}

.z-carousel-item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>