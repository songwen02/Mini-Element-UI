<template>
  <component-desc>
    <p>
      你可以设置 <code>Alert</code> 组件是否为可关闭状态， 关闭按钮的内容以及关闭时的回调函数同样可以定制。 <code>closable</code> 属性决定 <code>Alert</code>
      组件是否可关闭， 该属性接受一个 <code>Boolean</code>，默认为 <code>false</code>。 你可以设置 <code>close-text</code> 属性来代替右侧的关闭图标， 需要注意的是
      <code>close-text</code> 必须是一个字符串。 当 <code>Alert</code> 组件被关闭时会触发 <code>close</code> 事件。
    </p>
  </component-desc>
</template>

<script lang='ts' setup>
import ComponentDesc from '../common/ComponentDesc.vue';
</script>
