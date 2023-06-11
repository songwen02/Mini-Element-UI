<template>
  <ul class="ulContainer">
    <li v-for="(t) in itemArray">{{ t }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    itemArray: {type: Array}
  },
}
</script>

<style lang="scss" scoped>
.ulContainer {
  width: 100px;
  z-index: 1;
  box-shadow: 2px 2px 2px lightgray;

  > li {
    height: 24px;
    cursor: pointer;
  }

  li:hover {
    background-color: lightgray;
  }
}
</style>