<template>
  <div class="z-switch" :class="switchBoxClasses" @click.stop="toggle">
    <span class="z-switch-label z-switch-label-left" v-if="inactiveText">{{ inactiveText }}</span>
    <button class="z-switch-btn">
      <span></span>
    </button>
    <span class="z-switch-label z-switch-label-right" v-if="activeText">{{ activeText }}</span>
  </div>
</template>

<script lang="ts" setup>
import {computed, defineEmits, ref, watchEffect} from 'vue';

const emits = defineEmits(['update:modelValue', 'change']);
const props = defineProps({
  modelValue: [Boolean, String, Number],
  activeText: {type: String, default: ''},
  inactiveText: {type: String, default: ''},
  disabled: {type: Boolean, default: false},
  size: {type: String, values: ['large', 'small'], default: ''},
  activeValue: {type: [Boolean, String, Number], default: true},
  inactiveValue: {type: [Boolean, String, Number], default: false}
});
const switchActive = ref();
watchEffect(() => {
    switchActive.value = props.modelValue === props.activeValue;
});
const switchBoxClasses = computed(() => {
  return {
    'is-disabled': props.disabled,
    'is-checked': switchActive.value,
    [`z-switch-${props.size}`]: props.size
  };
});
const toggle = () => {
  if (props.disabled) return;
  switchActive.value = !switchActive.value;
  const emitVal = switchActive.value ? props.activeValue : props.inactiveValue;
  emits('update:modelValue', emitVal);
  emits('change', emitVal);

};
</script>

<style lang="scss">
$dh: 32px; // 默认情况高度
$dLineHeight: 20px; //小尺寸下行高
$dhInside: $dLineHeight - 4px;

$lh: 40px; // 大尺寸
$lFontSize: 14px; //大尺寸下字体大小
$lLineHeight: 24px; //大尺寸下行高
$lhInside: $lLineHeight - 4px;


$sh: 24px; // 小尺寸
$sFontSize: 12px; //小尺寸下行高
$sLineHeight: 16px; //小尺寸下行高
$shInside: $sLineHeight - 4px;

.z-switch {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  height: $dh;
  // 是否禁用
  &.is-disabled {
    opacity: 0.6;
    cursor: not-allowed;

    .z-switch-btn {
      cursor: not-allowed;

    }
  }

  // 是否选中
  &.is-checked {
    .z-switch-label {
      color: #409eff;
    }

    .z-switch-btn {
      background: #409eff;

      span {
        left: calc(100% - #{$dhInside} - 2px);
      }
    }

    &.z-switch-large .z-switch-btn span {
      left: calc(100% - #{$lhInside} - 2px);
    }

    &.z-switch-small .z-switch-btn span {
      left: calc(100% - #{$shInside} - 2px);
    }

  }

  //   尺寸大小
  &.z-switch-large {
    height: $lh;

    .z-switch-label {
      font-size: $lFontSize;
      line-height: $lLineHeight;
    }

    .z-switch-btn {
      height: $lLineHeight;
      width: $lLineHeight*2;
      border-radius: $lLineHeight/2;

      span {
        width: $lhInside;
        height: $lhInside;

      }
    }
  }

  &.z-switch-small {
    font-size: 12px;
    line-height: 16px;
    height: $sh;

    .z-switch-label {
      font-size: $sFontSize;
      line-height: $sLineHeight;
    }

    .z-switch-btn {
      height: $sLineHeight;
      width: $sLineHeight*2;
      border-radius: $sLineHeight/2;

      span {
        width: $shInside;
        height: $shInside;
      }
    }
  }
}

.z-switch-label {
  transition: all 0.2s;
  display: inline-block;
  font-weight: 500;
  vertical-align: middle;
  color: #303133;

  &.z-switch-label-left {
    margin-right: 10px;
  }

  &.z-switch-label-right {
    margin-left: 10px;

  }
}

.z-switch-btn {
  height: $dLineHeight;
  width: $dLineHeight*2;
  border: none;
  background: #dcdfe6;
  border-radius: $dLineHeight/2;
  position: relative;
  cursor: pointer;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $dhInside;
    width: $dhInside;
    background: white;
    border-radius: 50%;
    transition: left 250ms;
  }

  &:focus {
    outline: none;
  }
}

</style>