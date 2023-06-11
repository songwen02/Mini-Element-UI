<demo>
子元素垂直对齐
</demo>
<template>

  <p>Align Top</p>
  <z-row justify="center" align="top">
    <z-col :span="4">
      <p class="height-100">col-4</p>
    </z-col>
    <z-col :span="4">
      <p class="height-50">col-4</p>
    </z-col>
    <z-col :span="4">
      <p class="height-120">col-4</p>
    </z-col>
    <z-col :span="4">
      <p class="height-80">col-4</p>
    </z-col>
  </z-row>

  <p>Align Center</p>
  <z-row justify="space-around" align="middle">
    <z-col :span="4">
      <p class="height-100">col-4</p>
    </z-col>
    <z-col :span="4">
      <p class="height-50">col-4</p>
    </z-col>
    <z-col :span="4">
      <p class="height-120">col-4</p>
    </z-col>
    <z-col :span="4">
      <p class="height-80">col-4</p>
    </z-col>
  </z-row>

  <p>Align Bottom</p>
  <z-row justify="space-around" align="bottom">
    <z-col :span="4">
      <p class="height-100">col-4</p>
    </z-col>
    <z-col :span="4">
      <p class="height-50">col-4</p>
    </z-col>
    <z-col :span="4">
      <p class="height-120">col-4</p>
    </z-col>
    <z-col :span="4">
      <p class="height-80">col-4</p>
    </z-col>
  </z-row>
</template>

