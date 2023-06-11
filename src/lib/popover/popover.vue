<template>
  <div id="popover" ref="popoverRef">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" :class="{[`position-${position}`]:position}">
      <slot name="content"></slot>
    </div>
    <span class="triggerWrapper" ref="triggerWrapper">
     <slot></slot>
    </span>
  </div>
</template>

<script lang='ts' setup>
const props = defineProps({
  position: {
    type: String,
    default: 'top',
    validator(value: string): boolean {
      return ['top', 'left', 'right', 'bottom'].indexOf(value) !== -1;
    }
  },
  trigger: {
    type: String,
    default: 'click',
    validator(value: string): boolean {
      return ['click', 'hover'].indexOf(value) !== -1;
    }
  },
  visible: {type: Boolean, default: false}
});
const emits = defineEmits(['update:visible']);
import {nextTick, onMounted, onUnmounted, ref, watch} from 'vue';

const visible = ref(false);
const triggerWrapper = ref<HTMLElement>(null);
const contentWrapper = ref<HTMLElement>(null);
const popoverRef = ref<HTMLElement>(null);

onMounted(() => {
  if (props.trigger === 'click') {
    popoverRef.value.addEventListener('click', changeStatus);
  } else {
    popoverRef.value.addEventListener('mouseenter', showContent);
    popoverRef.value.addEventListener('mouseleave', close);
  }
});
// 组件挂载的时候需手动销毁事件
onUnmounted(() => {
  if (props.trigger === 'click') {
    popoverRef.value?.removeEventListener('click', changeStatus);
  } else {
    popoverRef.value?.removeEventListener('mouseenter', showContent);
    popoverRef.value?.removeEventListener('mouseleave', close);
  }
});

function changeStatus(event) {
  if (triggerWrapper.value.contains(event.target)) {
    if (visible.value) {
      close();
    } else {
      showContent();
    }
  }
}

function showContent() {
  visible.value = true;
  emits('update:visible', visible.value);
  nextTick(() => {
    positionContent();
    document.addEventListener('click', onclickDoc);
  });
}

// 主要功能内聚到一起
function close() {
  visible.value = false;
  emits('update:visible', visible.value);
  document.removeEventListener('click', onclickDoc);
}

function onclickDoc(e) {
  if (!(triggerWrapper.value === e.target || contentWrapper.value === e.target || triggerWrapper.value?.contains(e.target) || contentWrapper.value?.contains(e.target))) {
    close();
  }
}

function positionContent() {
  document.body.appendChild(contentWrapper.value);
  let {top, left, width: btnWidth, height: btnHeight} = triggerWrapper.value.getBoundingClientRect();
  const {height: contentHeight} = contentWrapper.value.getBoundingClientRect();
  // window.scrollX和window.scrollY加到这里是为了在出现滚动条的情况下，弹框也能准确出现在按钮上方
  //(contentHeight - btnHeight) / 2 是为了让弹窗和按钮在垂直方向居中
  const diffPos = {
    'top': {left, top},
    'left': {left, top: top - (contentHeight - btnHeight) / 2},
    'right': {left: left + btnWidth, top: top - (contentHeight - btnHeight) / 2},
    'bottom': {left: left, top: top + btnHeight}
  };
  contentWrapper.value.style.left = `${diffPos[props.position]['left'] + window.scrollX}px`;
  contentWrapper.value.style.top = `${diffPos[props.position]['top'] + window.scrollY}px`;
}

watch(() => props.visible, (val) => {
  visible.value = val;
});

</script>

<style lang='scss' scoped>
$border-radius: 4px;
#popover {
  display: inline-block;
  vertical-align: top;
  position: relative;

  .triggerWrapper {
    display: inline-block;
  }
}

.content-wrapper {
  position: absolute;
  left: 0;
  z-index: 999;
  border-radius: $border-radius;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  padding: 8px 10px;
  color: #fff;
  background-color: #000000d9;
  max-width: 20em;
  word-break: break-all;
  font-size: 14px;

  &::before, &::after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border: 6px solid transparent;
  }

  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;

    &::before, &::after {
      top: 100%;
      left: 10%;
      transform: translateX(-50%);
      border-top-color: #fff;
    }

    &::after {
      top: calc(100% - 1px);
      border-top-color: #000000d9;
    }
  }

  &.position-bottom {
    margin-top: 10px;

    &::before, &::after {
      transform: translateY(-100%);
      top: 0;
      border-bottom-color: lightgray;
    }

    &::after {
      transform: translateY(-98%);
      border-bottom-color: #000000d9;
    }
  }

  &.position-right {
    margin-left: 10px;

    &::before, &::after {
      top: 50%;
      left: 0;
      border-right-color: lightgray;
      transform: translate(-100%, -50%);
    }

    &::after {
      border-right-color: #000000d9;
    }
  }

  &.position-left {
    margin-left: -10px;
    transform: translateX(-100%);

    &::before, &::after {
      top: 50%;
      right: 0;
      border-left-color: lightgray;
      transform: translate(100%, -50%);
    }

    &::after {
      border-left-color: #000000d9;
    }
  }
}
</style>