<demo>
响应式布局
</demo>
<template>
  <z-row>
    <z-col span="12" :ipad="{span:8}" :narrow-pc="{span:6}" :pc="{span:4}" :wide-pc="{span:3}">col</z-col>
    <z-col span="12" :ipad="{span:8}" :narrow-pc="{span:6}" :pc="{span:4}" :wide-pc="{span:3}">col</z-col>
    <z-col span="12" :ipad="{span:8}" :narrow-pc="{span:6}" :pc="{span:4}" :wide-pc="{span:3}">col</z-col>
    <z-col span="12" :ipad="{span:8}" :narrow-pc="{span:6}" :pc="{span:4}" :wide-pc="{span:3}">col</z-col>
    <z-col span="12" :ipad="{span:8}" :narrow-pc="{span:6}" :pc="{span:4}" :wide-pc="{span:3}">col</z-col>
    <z-col span="12" :ipad="{span:8}" :narrow-pc="{span:6}" :pc="{span:4}" :wide-pc="{span:3}">col</z-col>
    <z-col span="12" :ipad="{span:8}" :narrow-pc="{span:6}" :pc="{span:12}" :wide-pc="{span:3}">col</z-col>
    <z-col span="12" :ipad="{span:8,offset:8}" :narrow-pc="{span:6,offset:0}" :pc="{span:10,offset:2}"
           :wide-pc="{span:3,offset:0}">col
    </z-col>
  </z-row>
</template>

