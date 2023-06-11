<demo>
不同触发方式
</demo>
<template>
  <!--  点击触发-->
  <z-popover :trigger="'click'" style="margin-right: 10px">
    <template #content>
      点击触发的内容
    </template>
    <z-button>
      点击
    </z-button>
  </z-popover>
  <!--  悬浮触发-->
  <z-popover :trigger="'hover'">
    <template #content>
      hover触发的内容
    </template>
    <z-button>
      hover me
    </z-button>
  </z-popover>
</template>
