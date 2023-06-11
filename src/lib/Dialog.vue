<template>
  <!--  visible来控制dialog对话框是否展示-->
  <template v-if="modelValue">
    <Teleport to="body">
      <!--  遮罩层-->
      <div class="z-dialog-overlay" @click="clickOverlay"></div>
      <div class="z-dialog">
        <header class="z-dialog-header">
          <h3>{{ title }}</h3>
          <span @click="close" class="z-dialog-close"></span>
        </header>
        <!--  dialog主要内容-->
        <main class="z-dialog-content">
          <slot name="content"/>
        </main>
        <!--    按钮-->
        <footer>
          <z-button @click="handleCancel">Cancel</z-button>
          <z-button level="main" @click="handleConfirm">Confirm</z-button>
        </footer>
      </div>

    </Teleport>
  </template>
</template>

<script lang="ts" setup>

import {defineProps} from 'vue';

const props = defineProps({
  title: {type: String, default: '标题'},
  modelValue: {type: Boolean, default: false},
  closeOnClickOverlay: {type: Boolean, default: false}, // 表是否可通过点击遮罩层关闭dialog
  confirmCallback: {type: Function},
  cancelCallback: {type: Function}
});
const emits = defineEmits(['update:modelValue']);

function close() {
  emits('update:modelValue', false);
}

function clickOverlay() {
  // 当你设置了可以通过点击遮罩层关闭的时候，才调用close函数关闭dialog
  if (props.closeOnClickOverlay) {
    close();
  }
}

function handleConfirm() {
  // 这样写的目的是为了面对以后有校验时，只有当校验返回结果不为false 的时候，才关闭dialog
  close();
  props.confirmCallback?.();
}

function handleCancel() {
  close();
  props.cancelCallback?.();
}
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.z-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: fade_out(black, 0.5);
  z-index: 10;
}

.z-dialog {
  display: inline-flex;
  flex-direction: column;
  width: 30%;
  padding-bottom: 10px;
  vertical-align: middle;
  background: #fff;
  font-size: 18px;
  text-align: left;
  overflow: hidden;
  backface-visibility: hidden;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;

  .z-dialog-header {
    padding: 20px 20px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    color: #303133;
  }

  .z-dialog-content {
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
  }

  > footer {
    padding: 10px 20px 20px 20px;
    text-align: right;
    box-sizing: border-box;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: #909399;
      font-style: inherit;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>