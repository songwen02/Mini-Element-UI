<template>
  <div ref="toastRef" id="toastComponent" :class="toastClasses">
    <main class="inner">
      <section class="toast-message">
        <p v-if="enableHtml" v-html="message"></p>
        <p v-else>{{ message }}</p>
      </section>
      <span ref="lineRef" class="closeBtn" v-if="closeButton" @click="clickClose()">{{ closeButton.text }}</span>
    </main>
  </div>
</template>

<script lang='ts'>
import {computed, nextTick, onMounted, Ref, ref} from 'vue';

interface CloseBtn {
  text: String,
  callback?: Function
}

export default {
  props: {
    message: String,
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 5
    },
    closeButton: {
      type: Object as CloseBtn,
      default: () => ({
        text: '关闭',
        callback: () => {
          close();
        }
      })
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'middle', 'bottom'].indexOf(value) !== -1;
      }
    }
  },
  setup(props) {
    const toastRef = ref<HTMLElement>(null);
    const lineRef = ref<HTMLElement>(null);
    onMounted(() => {
      updateStyle(lineRef, toastRef);
    });
    execAutoClose(props.autoClose, props.autoCloseDelay, close);

    const toastClasses = computed(() => {
      return {
        [`position-${props.position}`]: props.position
      };
    });

    // 让toast消失
    function close() {
      toastRef.value.remove();
    }

    function clickClose() {
      close();
      props.closeButton?.callback?.(); // 调用用户自己传入的回调
    }


    return {
      toastRef,
      clickClose,
      lineRef,
      toastClasses
    };
  }
};

function updateStyle(sonRef: Ref<HTMLElement>, parentRef: Ref<HTMLElement>) {
  nextTick(() => {
    sonRef.value.style.height = parentRef.value.getBoundingClientRect().height + 'px';
  });
}

function execAutoClose(autoClose, delay, closeFunc) {
  if (autoClose) {
    setTimeout(closeFunc, delay * 1000);
  }
}
</script>

<style lang='scss' scoped>
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

$animation-duration: 300ms;
#toastComponent {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;

  .inner {
    display: flex;
    align-items: center;
    padding: 0 16px;
    min-height: $toast-min-height;
    line-height: 1.8;
    background-color: $toast-bg;
    border-radius: 4px;
    font-size: 14px;
    color: #fff;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  }

  &.position-bottom {
    bottom: 0;

    .inner {
      animation: slide-up $animation-duration;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  &.position-top {
    top: 0;

    .inner {
      animation: slide-down $animation-duration;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  &.position-middle {
    top: 50%;
    animation: fade-in $animation-duration;
  }

  .toast-message {
    padding: 8px 0;
  }

  .closeBtn {
    display: flex;
    align-items: center;
    padding-left: 16px;
    margin-left: 16px;
    border-left: 2px solid #666;
    cursor: pointer;
    text-align: center;
    flex-shrink: 0;

  }
}
</style>