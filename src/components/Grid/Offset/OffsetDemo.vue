<demo>
列偏移
</demo>
<template>
  <z-row>
    <z-col :span="8">col-8</z-col>
    <z-col :span="8" offset="8">col-8</z-col>
  </z-row>

  <z-row>
    <z-col :span="6" offset="6">col-6-offset-6</z-col>
    <z-col :span="6" offset="6">col-6-offset-6</z-col>
  </z-row>

  <z-row>
    <z-col :span="12" offset="6">col-12-offset-6</z-col>
  </z-row>
</template>
