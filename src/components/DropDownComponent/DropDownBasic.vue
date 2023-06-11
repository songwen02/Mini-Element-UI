<demo>
基本下拉菜单示例
</demo>
<template>
  <DropDown>
    <a href="">Hover me</a>
    <!-- -->
    <template #overlay>
      <overlay :itemArray="items"></overlay>
    </template>
  </DropDown>
</template>

<script>
import DropDown from "../../lib/DropDown.vue";
import overlay from "./overlay.vue";

export default {
  components: {DropDown, overlay},
  data() {
    return {
      items: [1, 2, 3, 4]
    }
  }
}
</script>
<style scoped>
</style>