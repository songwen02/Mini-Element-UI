<template>
  <textarea :placeholder="placeholder" ref="textAreaRef" v-model="content" :rows="minRow ?? 1"
            class="gulu-input"></textarea>
</template>

<script lang='ts'>
import {onMounted, ref, watch, nextTick} from 'vue';

export default {
  props: {
    autoSize: [Boolean, Object],
    placeholder: String
  },
  setup(props) {
    let {minRow, maxRow} = props?.autoSize;
    const textAreaRef = ref<HTMLTextAreaElement>(null);
    const content = ref('');
    onMounted(() => {
      props.autoSize && nextTick(adjustTextareaSize);
    });
    watch(() => content.value, () => {
      props.autoSize && nextTick(adjustTextareaSize);
    });
    const adjustTextareaSize = () => {
      let textarea = textAreaRef.value;
      textarea.style.height = 'auto';
      if (maxRow) {
        textarea.style.maxHeight = maxRow * 24 + 'px';
      }
      const height = textarea.scrollHeight;

      if (height) { // 改变textarea高度达到自适应
        textarea.style.height = height + 'px';
        const rowsNum = Math.round(height / 24);
        textarea.style.overflowY = rowsNum > maxRow ? 'scroll' : 'hidden';
      }
    };

    return {textAreaRef: textAreaRef, content, minRow};
  }
};
</script>

<style lang='scss' scoped>
textarea.gulu-input {
  max-width: 100%;
  height: auto;
  min-height: 32px;
  line-height: 1.5715;
  vertical-align: bottom;
  transition: all .3s, height 0s;
}

textarea {
  height: 32px;
  resize: none;
  overflow: hidden;
}
</style>