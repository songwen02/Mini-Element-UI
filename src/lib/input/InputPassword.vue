<template>
  <span class="gulu-input-wrapper">
    <input class="gulu-input" :type="inputType" :value="value" :placeholder="placeholder" @input="inputDebounce"/>
    <span class="svgContainer" @click="changeType">
      <svg class="icon">
        <use :xlink:href="svgType"></use>
      </svg>
    </span>
  </span>
</template>

<script lang='ts'>

import {ref} from 'vue';

export default {
  props: {
    value: String,
    placeholder: {type: String, default: '请输入'}
  },
  setup(props, context) {
    const inputType = ref('password');
    const svgType = ref('#icon-eye-close');
    const changeType = () => {
      if (inputType.value === 'password') {
        inputType.value = 'text';
        svgType.value = '#icon-eye';
      } else {
        inputType.value = 'password';
        svgType.value = '#icon-eye-close';
      }
    };
    const inputDebounce = (e) => {
      context.emit('update:value', e.currentTarget.value);
    };
    return {inputDebounce, inputType, changeType, svgType};
  }
};
</script>

<style lang="scss">
$hoverColor: #40a9ff;
.gulu-input-wrapper {
  position: relative;
  width: 100%;
  min-width: 0;
  padding: 0 10px 0 0;
  color: #000000d9;
  font-size: 14px;
  line-height: 1.5715;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all .3s;
  display: inline-flex;
  align-items: center;

  > input {
    border: none;
    outline: none;
  }

  &:hover {
    border-color: $hoverColor;
    border-right-width: 1px !important;
  }

  &:focus-within {
    outline: $hoverColor;
    border-color: $hoverColor;
    border-right-width: 1px !important;
  }
}

.svgContainer {
  cursor: pointer;
}
</style>