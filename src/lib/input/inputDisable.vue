<template>
  <div>
    <input class="gulu-input" type="password" :value="value" :placeholder="placeholder" @input="inputDebounce"/>
  </div>
</template>

<script lang='ts'>

export default {
  props: {
    value: String,
    placeholder: {type: String, default: '请输入'}
  },
  setup(props, context) {
    const inputDebounce = (e) => {
      context.emit('update:value', e.currentTarget.value);
    };
    return {inputDebounce};
  }
};
</script>

<style lang="scss">

</style>