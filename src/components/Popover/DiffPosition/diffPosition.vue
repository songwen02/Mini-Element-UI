<demo>
不同位置的展示
</demo>
<template>
  <!--    -->
  <div class="placeTop">
    <Popover position="top">
      <template #content>
        这是个简单的弹出内容
      </template>
      <!--    -->
      <Button>top</Button>
    </Popover>

  </div>
  <!--  -->
  <div class="placeMiddle">
    <Popover position="left">
      <template #content>
        这是个简单的弹出内容
      </template>
      <Button>left</Button>
    </Popover>
    <!--    -->
    <Popover position="right">
      <template #content>
        这是个简单的弹出内容
      </template>
      <!--    -->
      <Button>right</Button>
    </Popover>

  </div>
  <!--  -->
  <div class="placeBottom">
    <Popover position="bottom">
      <template #content>
        这是个简单的弹出内容
      </template>
      <!--    -->
      <Button>bottom</Button>
    </Popover>
  </div>
</template>

<script lang='ts' setup>
import Popover from '../../../lib/popover/popover.vue';
import Button from '../../../lib/Button.vue';

</script>
