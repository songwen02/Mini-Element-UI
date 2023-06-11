<template>
  <!--  复制-编辑类型-->
  <div>
    <Demo :component="TPDemo"></Demo>
  </div>

</template>

<script lang='ts'>
import TPDemo from '../../components/typography/TPCopyDemo.vue';
import Demo from '../../components/common/Demo.vue';

export default {
  components: {Demo},
  setup() {
    return {TPDemo};
  }
};
</script>

<style lang='scss' scoped>

</style>