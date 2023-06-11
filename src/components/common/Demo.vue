<template>
  <!--    vite.config.ts里有写__sourceCodeTitle的定义，就是你在组件里些的demo标签里的内容-->
  <h1 class="demoHeader" v-if="component.__sourceCodeTitle!=='\'\''">{{ component.__sourceCodeTitle }} </h1>
  <!--    描述-->
  <div>
    <component :is="descComponent"></component>
  </div>
  <div class="demo">
    <!--     当前组件展示主要效果-->
    <div class="demo-component">
      <component :is="component"></component>
    </div>
    <!--     点击按钮-->
    <div class="demo-actions">

      <z-popover position="bottom" :trigger="'hover'">
        <template #content>
          {{ '复制代码 ' }}
        </template>
        <i @click.stop="copyCode">
          <svg>
            <use xlink:href="#icon-copy"></use>
          </svg>
        </i>
      </z-popover>
      <z-popover position="bottom" :trigger="'hover'">
        <template #content>
          {{ '查看源代码 ' }}
        </template>
        <i @click="codeVisible=!codeVisible">
          <svg>
            <use xlink:href="#icon-code"></use>
          </svg>
        </i>
      </z-popover>

    </div>
    <div v-show="codeVisible" class="demo-code">
        <pre class="language-html"
             v-html="html"></pre>
    </div>
  </div>
</template>

<script lang='ts' setup>
import 'prismjs';
import { computed, ref } from 'vue';
import Notify from '../../lib/Notification/notify';
// 适应这个库的写法
const Prism = (window as any).Prism;
const props = defineProps({
  component: Object,
  descComponent: Object
});

const html = computed(() => {
  return Prism.highlight((props.component as any).__sourceCode, Prism.languages.javascript, 'javascript');
});
const codeVisible = ref(false);

function copyCode() {
  let textarea = document.createElement('textarea');
  document.body.appendChild(textarea);
  // 隐藏此输入框
  textarea.style.position = 'fixed';
  textarea.style.clip = 'rect(0 0 0 0)';
  textarea.style.top = '10px';
  // 赋值
  textarea.value = (props.component as any).__sourceCode;
  // 选中
  textarea.select();
  // 复制
  document.execCommand('copy', true);
  // 移除输入框
  document.body.removeChild(textarea);
  Notify({
    message: '复制成功',
    type: 'success',
    duration: 2000
  });
}

</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;


.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;


  .demo-component {
    padding: 42px 24px 50px;
  }

  .demo-actions {
    padding: 8px 40px;
    border-top: 1px dashed $border-color;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    i {
      margin: 0 0.5rem;
      cursor: pointer;
      vertical-align: middle;

    }

    svg {
      width: 18px;
      height: 18px;
      fill: #999;

      &:hover {
        fill: #333
      }
    }

  }

  .demo-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
<style lang="scss">
// 无法在js里导入这个css，只能这样导
@import '../../../node_modules/prismjs/themes/prism-okaidia.css';

</style>
