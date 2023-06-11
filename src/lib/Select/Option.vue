<template>
  <li :class="itemSelectedClass" class="z-select-dropdown-item" @click.stop="itemSelect">
    <!--    有插槽就展示用户自定义的模板内容-->
    <template v-if="slots">
      <slot></slot>
    </template>
    <!--    插槽没传内容就默认显示传过来的标签-->
    <template v-else>
      {{ label }}
    </template>
  </li>
</template>

<script lang='ts' setup>
import {computed, inject, Ref, useSlots} from 'vue';

const slots = useSlots().default?.();
const props = defineProps({
  label: String,
  value: [String, Number],
  disabled: {
    type: Boolean, default: false
  }
});
const itemSelectedClass = computed(() => {
  return {
    'is-selected': multiple ? selectedArr.value.includes(props.value) : selectedItemVal.value === props.value,
    'is-disabled': props.disabled,
    'multiSelected': multiple && selectedArr.value.includes(props.value)
  };
});
const {
  setPopoverVisible,
  selectedItemVal,
  updateSelectedItem, multiple, selectedArr
} = inject('selectContainerVal') as { boxRef: Ref<HTMLElement>, setPopoverVisible: Function };

function itemSelect() {
  if (props.disabled) return;
  setPopoverVisible(multiple);
  updateSelectedItem(props.value);
}
</script>

<style lang='scss' scoped>
.z-select-dropdown-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px 0 20px;
  background: #fff;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #606266;
  height: 34px;
  line-height: 34px;
  box-sizing: border-box;
  cursor: pointer;

  &.multiSelected.is-selected {
    background-color: #fff;

  }

  &.multiSelected::after {
    content: "";
    display: block;
    background-repeat: no-repeat;
    background-position: center;
    width: 4px;
    height: 10px;
    border: 1px solid #6eb4fe;
    transform: rotate(45deg);
    border-top: none;
    border-left: none;
  }

  &.is-selected {
    background: #f5f7fa;
    color: #409eff;
    font-weight: 700;
  }

  &.is-disabled {
    cursor: not-allowed;
    color: #a8abb2;

    &:hover {
      background: #fff;
    }
  }

  &:hover {
    background: #f5f7fa;
  }
}
</style>