<template>

  <div class="z-input-number" :class="inputNumberClasses">
    <span ref="leftBtnRef" :class="{'is-disabled':decreaseDisabled}" class="z-inputNumBtn z-inputNum-decrease"
          @click="decreaseNum">
      <svg>
        <use xlink:href="#icon-decrease"></use>
      </svg>
    </span>
    <span ref="rightBtnRef" :class="{'is-disabled':increaseDisabled}" class="z-inputNumBtn z-inputNum-increase"
          @click="increaseNum">
      <svg>
        <use xlink:href="#icon-increase"></use>
      </svg>
    </span>
    <div class="z-input" :class="{'is-focused':inputFocus}">
      <input :disabled="disabled" class="z-input-inner" type="text" :value="modelValue" @blur="toggleInputFocus(false)"
             @focus="toggleInputFocus(true)">
    </div>

  </div>
</template>

<script lang='ts' setup>
import {computed, onMounted, ref, watch} from 'vue';

const props = defineProps({
  modelValue: {type: Number, required: true},
  min: {type: Number},
  max: Number,
  step: {type: Number, 'default': 1},
  stepStrictly: {type: Boolean, 'default': false},
  disabled: {type: Boolean, 'default': false},
  precision: {type: Number},
  size: {type: String, values: ['large', 'small']}
});
const leftBtnRef = ref<HTMLElement>();
const rightBtnRef = ref<HTMLElement>();
const decreaseDisabled = ref(false);
const increaseDisabled = ref(false);
const emits = defineEmits(['update:modelValue', 'change']);
const inputFocus = ref(false);
const currentVal = ref();
const inputNumberClasses = computed(() => {
  return {
    'is-disabled': props.disabled,
    [`z-input-number-${props.size}`]: props.size
  };
});

function toggleInputFocus(val) {
  if (props.disabled) return;
  inputFocus.value = val;
}

function emitVal(val) {
  emits('change', val, props.modelValue);
  emits('update:modelValue', val);

}

function decreaseNum() {
  if (decreaseDisabled.value || props.disabled) return;
  const val = props.precision !== undefined ? (currentVal.value - props.step).toFixed(props.precision) : currentVal.value - props.step;
  emitVal(Number(val));
}

function increaseNum() {
  if (increaseDisabled.value || props.disabled) return;
  const val = props.precision !== undefined ? (currentVal.value + props.step).toFixed(props.precision) : currentVal.value + props.step;
  emitVal(Number(val));

}

function adjustValToMultiple() {
  if (props.modelValue % props.step !== 0) {
    const multiple = Math.round(props.modelValue / props.step);
    emits('update:modelValue', props.step * multiple);
  }
}

function adjustPrecision() {
  emits('update:modelValue', Number(props.modelValue.toFixed(props.precision)));

}

onMounted(() => {
  if (props.stepStrictly) {
    adjustValToMultiple();
  }
  if (props.precision !== undefined) {
    adjustPrecision();
  }
  watch(() => props.modelValue, () => {
    currentVal.value = Number(props.modelValue);
    decreaseDisabled.value = props.min !== undefined && currentVal.value <= props.min;
    increaseDisabled.value = props.max !== undefined && currentVal.value >= props.max;

  }, {immediate: true});
});
</script>

<style lang='scss' scoped>
.z-input-number {
  position: relative;
  width: 150px;
  line-height: 32px;
  display: inline-flex;

  &.z-input-number-large {
    height: 40px;

    .z-input {
      line-height: 40px;
    }

    .z-inputNumBtn {
      width: 40px;
    }
  }

  &.z-input-number-small {
    height: 24px;
    font-size: 12px;

    .z-input {
      line-height: 24px;
    }

    .z-inputNumBtn {
      width: 24px;
      font-size: 12px;
    }
  }

  &.is-disabled {
    cursor: not-allowed;

    .z-input {
      background: #f5f7fa;
      cursor: not-allowed;

      .z-input-inner {
        cursor: not-allowed;
        color: #c4c7cc
      }
    }


    .z-inputNumBtn {
      cursor: not-allowed;

    }
  }

  .z-input {
    position: relative;
    width: 100%;
    padding-left: 42px;
    padding-right: 42px;
    box-shadow: 0 0 0 1px #dcdfe6 inset;
    border-radius: 4px;

    &.is-focused {
      box-shadow: 0 0 0 1px #4093ff inset;
    }

    .z-input-inner {
      border: none;
      outline: none;
      background: none;
      padding: 0;
      width: 100%;
      color: #606266;
      text-align: center;
      vertical-align: middle;
    }
  }

  .z-inputNumBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 32px;
    height: auto;
    border-radius: 0 4px 4px 0;
    text-align: center;
    vertical-align: middle;
    background-color: #f5f7fa;
    cursor: pointer;
    z-index: 1;

    svg {
      width: 14px;
      height: 14px;
    }

    &.is-disabled {
      cursor: not-allowed;

    }
  }

  .z-inputNum-increase {
    top: 1px;
    right: 1px;
    bottom: 1px;
    border-left: 1px solid #dcdfe6;

  }

  .z-inputNum-decrease {
    top: 1px;
    left: 1px;
    bottom: 1px;
    border-right: 1px solid #dcdfe6;
  }
}
</style>
