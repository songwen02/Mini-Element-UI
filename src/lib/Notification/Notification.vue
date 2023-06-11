<template>

  <transition name="fade">
    <div :id="id" @mouseenter="clearTimer" @mouseleave="startTimer" v-if="visible" :style="positionStyle"
         class="notification-notice" :class="horizontalClass">
      <div v-show="type" class="noticeIcon">
        <svg :class="`notification-${type}`">
          <use :xlink:href='iconHref'></use>
        </svg>
      </div>
      <div class="noticeContent">
        <h2 class="noticeTitle">{{ title }}</h2>
        <div class="noticeMessage" :style="!!title?undefined:{margin:0}">
          <p>{{ message }}</p>
        </div>
      </div>
      <div class="notificationCloseIcon" v-show="showClose" @click="close">
        <svg>
          <use xlink:href='#icon-close-btn'></use>
        </svg>
      </div>
    </div>
  </transition>

</template>

<script lang='ts' setup>
import {computed, onMounted, ref} from 'vue';

let timer;
const visible = ref(false);
const props = defineProps({
  id: {type: String}, // 当前提示框的id值
  close: Function, // 关闭提示框时的回调函数
  duration: {type: Number, 'default': 4000}, // 提示框存续时间
  message: String, // 标题下的普通文本信息
  offset: {type: Number, default: 0}, // 可控制一开始距离顶端的垂直距离
  position: {type: String, values: ['top-right', 'bottom-right', 'top-left', 'bottom-left'], 'default': 'top-right'},
  showClose: {type: Boolean, 'default': true},
  title: String, // 标题
  type: {
    type: String,
    values: ['success', 'warning', 'info', 'error'],
    'default': ''
  }, // 提示框的主题
  visible: {type: Boolean, 'default': true}, // 提示框是否展示
  zIndex: {type: Number}
});

//
function startTimer() {
  if (props.duration > 0) {
    timer = setTimeout(() => {
      if (visible.value) {
        close();
      }
    }, props.duration);
  }
}

function clearTimer() {
  clearTimeout(timer);
}

function close() {
  props.close?.();
  visible.value = false;
}

const iconHref = computed(() => {
  const iconMap = {
    success: 'icon-circle-success',
    warning: 'icon-warning',
    info: 'icon-info',
    error: 'icon-error'
  };
  return `#${iconMap[props.type]}`;
});
// 控制靠左排还是靠右排
const horizontalClass = computed(() => {
  return props.position?.endsWith('right') ? 'right' : 'left';
});

// 获取其展示在顶部还是底部
const curPosition = computed(() => {
  return props.position?.startsWith('top') ? 'top' : 'bottom';
});

// 设置位置的style
const positionStyle = computed(() => {
  return {
    [curPosition.value]: `${props.offset}px`,
    'zIndex': props.zIndex
  };
});

onMounted(() => {
  startTimer();
  visible.value = true;
});
</script>

<style lang='scss' scoped>

.notification-notice {
  position: fixed;
  width: 364px;
  padding: 14px 26px 14px 13px;
  overflow: hidden;
  overflow-wrap: anywhere;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #ebeef5;
  box-shadow: 0 0 12px rgba(0, 0, 0, .12);
  font-family: PingFang SC, sans-serif;

  &.right {
    right: 16px;
  }

  &.left {
    left: 16px;
  }

  .noticeIcon {
    display: inline-block;
    overflow: hidden;
    vertical-align: top;

    svg {
      width: 24px;
      height: 24px;
      margin-right: 13px;

      &.notification-info {
        fill: #1890ff;
      }

      &.notification-error {
        fill: #ff4d4f;
      }

      &.notification-success {
        fill: #52c41a;
      }

      &.notification-warning {
        fill: #faad14;
      }
    }
  }

  .noticeContent {
    display: inline-block;
  }

  .noticeTitle {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #303133;
    margin: 0;
  }

  .noticeMessage {
    font-size: 14px;
    line-height: 24px;
    color: #606266;
    text-align: justify;
    margin: 6px 0 0;
  }

  .notificationCloseIcon {
    position: absolute;
    right: 15px;
    top: 13px;
    color: #909399;
    cursor: pointer;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  &.fade-enter-from {
    right: -300px;
    opacity: 0;
  }

  &.fade-enter-to {
    right: 16px;
    opacity: 1;
  }

  &.fade-enter-active {
    transition: all 0.3s linear;
  }

  //
  &.fade-leave-to {
    opacity: 0;
  }

  &.fade-leave-active {
    transition: all 0.3s ease-out;
  }
}
</style>
