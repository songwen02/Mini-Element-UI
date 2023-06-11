<template>
  <component-desc>
    <p>
      ZUI注册了 Notify 方法并且它接受一个 Object 作为其参数。 在最简单的情况下，你可以通过设置 <code>title</code> 和 <code>message</code> 属性来设置通知的标题和正文内容。
      默认情况下，通知在4000毫秒后自动关闭，但你可以通过设置 <code>duration</code> 属性来自定义通知的展示时间。 如果你将它设置为 0，那么通知将不会自动关闭。 需要注意的是
      <code>duration</code> 接收一个 Number，单位为毫秒。
    </p>
  </component-desc>
</template>

<script lang='ts' setup>
import ComponentDesc from '../common/ComponentDesc.vue';
</script>
