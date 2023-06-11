<template>
  <!--        文本内容-->
  <div v-if="!isEdit" class="typo-contentWrapper">
    <span id="content">{{ content }}</span>
    <!--    编辑图标-->
    <span v-if="editable" class="svgContainer editContainer" @click="changeEditStatus">
      <svg class="icon">
        <use xlink:href="#icon-edit"></use>
      </svg>
      <!--      编辑提示-->
      <span class="tip">
        <span>编辑</span>
        <span class="triangle"></span>
      </span>
    </span>
    <!--    复制图标-->
    <span v-if="copyable" class="svgContainer copyContainer" @click="copyContent">
      <svg class="icon">
        <use :xlink:href="copyRef"></use>
      </svg>
      <!--      编辑提示-->
      <span class="tip">
        <span>{{ copyTip }}</span>
        <span class="triangle"></span>
      </span>
    </span>
  </div>
  <!--  实际输入框-->
  <div v-show="isEdit" class="gulu-input-wrapper">
    <input class="gulu-input" ref="inputRef" :value="content" @blur="emitContent"
           @keyup.enter="emitContent"/>
    <span class="svgContainer" @click="emitContent">
      <svg class="icon">
        <use xlink:href="#icon-enter"></use>
      </svg>
    </span>
  </div>
</template>

<script lang='ts'>
import {onUpdated, ref} from 'vue';

export default {
  props: {
    editable: Boolean,
    copyable: Boolean,
    content: String
  },
  setup(props, context) {
    const isEdit = ref(false);
    const inputRef = ref(null);
    const copyRef = ref('#icon-copy');
    const copyTip = ref('复制');
    const emitContent = () => {
      const data = inputRef.value.value;
      context.emit('update:content', data);
      isEdit.value = false;
    };
    onUpdated(() => {
      if (isEdit.value) {
        const inputDom = inputRef.value;
        const contentLen = inputDom.value.length;
        inputDom.focus();
        inputDom.setSelectionRange(contentLen, contentLen);
      }
    });
    const changeEditStatus = () => {
      isEdit.value = !isEdit.value;
    };
    const copyContent = () => {
      if (copyRef.value === '#icon-success') {
        return;
      }
      copyRef.value = '#icon-success';
      copyTip.value = '成功';
      setTimeout(() => {
        copyRef.value = '#icon-copy';
        copyTip.value = '复制';
      }, 2000);
      const input = document.createElement('input');
      input.setAttribute('readonly', 'readonly');
      input.setAttribute('value', props.content);
      document.body.appendChild(input);
      input.setSelectionRange(0, 9999);
      if (document.execCommand('copy')) {
        input.select(); // 选中输入框，才能复制
        document.execCommand('copy');
      }
      document.body.removeChild(input);
    };
    return {
      isEdit,
      changeEditStatus,
      emitContent,
      inputRef,
      copyContent,
      copyRef,
      copyTip
    };
  }
};
</script>

<style lang='scss' scoped>
@import "../../assets/less/global";

.typo-contentWrapper {
  width: 100%;

  > .svgContainer {
    cursor: pointer;
    margin-left: 5px;
    color: $hoverColor;
  }

  > .editContainer, .copyContainer {
    position: relative;

    &:hover .tip {
      visibility: visible;
    }
  }

  .tip {
    display: inline-block;
    position: absolute;
    height: 35px;
    width: auto;
    max-width: 100px;
    white-space: nowrap;
    padding: 0 10px;
    border-radius: 5px;
    background-color: #404040;
    text-align: center;
    z-index: 1;
    top: -48px;
    color: white;
    font-size: 14px;
    line-height: 35px;
    left: -20px;
    visibility: hidden;

    > .triangle {
      position: absolute;
      display: inline-block;
      width: 8px;
      height: 8px;
      border: 1px solid;
      transform: rotate(-45deg);
      background-color: #404040;
      border-color: transparent transparent white white;
      bottom: -4px;
      left: 22px;
    }
  }
}

</style>