<template>
  <label class="z-checkbox"
         :class="checkBoxClass"
         @click="changeSquare">
    <!--    复选框-->
    <span :id="label" class="z-checkbox__input" :class="checkBoxInputClass">
      <span class="z-checkbox__inner"></span>
    </span>
    <!--    文字label-->
    <span class="z-checkbox_label" v-if="defaultSlots||label">
      <slot>{{ defaultSlots || label }}</slot>
    </span>
  </label>
</template>

<script lang='ts' setup>
import {Ref, computed, inject, ref, useSlots, watchEffect} from 'vue';

const boxChecked = ref(false);
const props = defineProps({
  label: {type: String, required: true},
  size: {type: String, values: ['large', 'small'], 'default': 'large'},
  disabled: {type: Boolean, 'default': undefined},
  modelValue: {type: Boolean, 'default': undefined},
  numLimitDisabled: {type: Boolean, 'default': undefined},
  border: {type: Boolean, 'default': false}
});
const emits = defineEmits(['update:modelValue', 'change']);
const defaultSlots = useSlots().default?.();

function useBoxGroup() {
  let updateGroup = inject('updateGroup') as (x: boolean, y: string) => void;
  let checkedBoxes = inject('boxGroup') as Ref<Array<string>>;
  return {updateGroup, checkedBoxes};
}

function changeSquare(e) {
  e.preventDefault();
  if (props.disabled || props.numLimitDisabled) {
    return;
  }
  boxChecked.value = !(boxChecked.value);
  updateEmitVal();
}

function updateEmitVal() {
  if (props.modelValue === undefined) {
    updateGroup(boxChecked.value, props.label);
  } else {
    emits('update:modelValue', boxChecked.value);
    emits('change', boxChecked.value);

  }
}

const {updateGroup, checkedBoxes} = useBoxGroup();

watchEffect(() => {
  if (props.modelValue === undefined) {
    boxChecked.value = checkedBoxes.value.includes(props.label);
  } else {
    boxChecked.value = props.modelValue;
  }
});

const checkBoxClass = computed(() => {
  return {
    'is-checked': boxChecked.value,
    'is-disabled': props.disabled ?? props.numLimitDisabled,
    'z-checkbox-small': props.size === 'small',
    'z-checkbox-large': props.size !== 'small',
    'is-bordered': props.border
  };
});
const checkBoxInputClass = computed(() => {
  return {
    'is-checked': boxChecked.value,
    'is-disabled': props.disabled ?? props.numLimitDisabled
  };
});
</script>

<style lang="scss">
@mixin flexLayout {
  position: relative;
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  white-space: nowrap;
}

.z-checkbox {
  @include flexLayout;
  margin-right: 30px;

  &.is-checked {
    .z-checkbox_label {
      color: #409eff;
    }

    &.z-checkbox-large.is-bordered, &.z-checkbox-small.is-bordered {
      border-color: #409eff;
    }
  }

  &.is-disabled {
    cursor: not-allowed;

    .z-checkbox_label {
      color: #a8abb2
    }

    &.z-checkbox-large.is-bordered, &.z-checkbox-small.is-bordered {
      border-color: #dcdfe6;
    }
  }

  &.z-checkbox-small {
    height: 24px;

    &.is-bordered {
      border: 1px solid #dcdfe6;
      padding: 0 11px 0 7px;
      border-radius: 3px;
    }

    .z-checkbox__input .z-checkbox__inner {
      width: 12px;
      height: 12px;

      &::after {
        width: 2px;
        height: 5px;
      }
    }

    .z-checkbox_label {
      font-size: 12px;
    }
  }

  &.z-checkbox-large {
    height: 40px;

    &.is-bordered {
      border: 1px solid #dcdfe6;
      padding: 0 19px 0 11px;
      border-radius: 4px;
    }

    .z-checkbox__input .z-checkbox__inner {
      width: 14px;
      height: 14px;

      &::after {
        height: 7px;
        width: 3px;
      }
    }

    .z-checkbox_label {
      font-size: 14px;
    }
  }

  .z-checkbox__input {
    @include flexLayout;
    outline: none;

    &.is-checked {
      .z-checkbox__inner {
        background: #409eff;
        border-color: #409eff;

        &::after {
          transform: rotate(45deg) scaleY(1);
        }
      }
    }

    &.is-disabled {
      .z-checkbox__inner {
        background: #f5f7fa;
        border-color: #dcdfe6;
        cursor: not-allowed;

        &:hover {
          border-color: #dcdfe6;
        }

        &::after {
          border-color: transparent #a8abb2 #a8abb2 transparent;
        }
      }

    }

    .z-checkbox__original {
      width: 0;
      height: 0;
      border: none;
      position: absolute;
    }

    .z-checkbox__inner {
      display: inline-block;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;

      &:hover {
        border-color: #409eff;
      }

      &::after {
        position: absolute;
        content: '';
        box-sizing: content-box;
        border: 1px solid;
        border-color: transparent white white transparent;
        top: 1px;
        left: 4px;

        transform: rotate(45deg) scaleY(0);
        transition: transform .15s ease-in .05s;
      }
    }
  }

  .z-checkbox_label {
    display: inline-block;
    padding-left: 8px;
  }
}
</style>