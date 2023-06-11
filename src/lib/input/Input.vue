<template>
  <div class="z-input" :class="{'is-disabled':disabled}">
    <input :class="{'z-input-disabled':disabled}" type="text" :value="value"
           :placeholder="placeholder" @input="inputDebounce"
           :disabled="disabled"/>
  </div>
</template>

<script lang='ts'>

export default {
  props: {
    value: String,
    placeholder: {type: String, default: ''},
    disabled: {type: Boolean, default: false}
  },
  setup(props, context) {
    const inputDebounce = (e) => {
      context.emit('update:value', e.currentTarget.value);
    };
    return {inputDebounce};
  }
};
</script>

<style lang="scss" scoped>
.z-input {
  position: relative;
  width: 100%;
  min-width: 0;
  color: #000000d9;
  font-size: 14px;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all .3s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1px 11px;
  line-height: 32px;
  vertical-align: middle;

  &.is-disabled {
    background-color: #f5f7fa;
  }

  > input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    -webkit-appearance: none;
    height: 30px;
  }
}

.z-input-disabled {
  cursor: not-allowed;
  background-color: #f5f7fa;

  &:hover {
    border-color: rgb(217, 217, 217);
  }

}
</style>