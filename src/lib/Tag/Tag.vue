<template>

  <span class="z-tag" :class="tagClasses" @click="handleClick">
    <span class="content">
      <slot></slot>
    </span>
    <span class="z-tag-icon" v-if="closable" @click.stop="handleClose">
      <svg>
        <use xlink:href="#icon-close-btn"></use>
      </svg>
    </span>

  </span>
</template>

<script lang='ts' setup>
import {computed} from 'vue';

const props = defineProps({
  type: String,
  effect: String,
  size: String,
  closable: {type: Boolean, 'default': false},
  round: {type: Boolean, 'default': false}
});
const emits = defineEmits(['close', 'click']);
const tagClasses = computed(() => {
  return {
    [`z-tag--${props.type}`]: props.type,
    [`z-tag--${props.size}`]: props.size,
    [`z-tag--${props.effect}`]: props.effect,
    [`is-round`]: props.round,
    [`is-closable`]: props.closable
  };
});

function handleClose(event: MouseEvent) {
  emits('close', event);
}

function handleClick(event: MouseEvent) {
  emits('click', event);
}
</script>

<style lang='scss' scoped>
.z-tag {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  padding: 0 9px;
  margin: 2px 6px 2px 0;
  font-size: 12px;
  border: 1px solid;
  border-radius: 4px;
  box-sizing: border-box;
  white-space: nowrap;
  line-height: 1;
  background-color: #ecf5ff;
  color: #409eff;
  border-color: #d9ecff;

  &.is-round {
    border-radius: 9999px;
  }

  &.is-closable {
    padding-right: 5px;
  }

  .z-tag-icon {
    svg {
      fill: #409eff;

      &:hover {
        background-color: #409eff;
        fill: #fff;
      }
    }
  }

  // 不同颜色
  &.z-tag--success {
    background-color: #f0f9eb;
    color: #67c23a;
    border-color: #e1f3d8;

    .z-tag-icon {
      svg {
        fill: #67c23a;

        &:hover {
          background-color: #67c23a;
          fill: #fff;
        }
      }


    }

  }

  &.z-tag--info {
    background-color: #f4f4f5;
    color: #909399;
    border-color: #e9e9eb;

    .z-tag-icon {
      svg {
        fill: #909399;

        &:hover {
          background-color: #909399;
          fill: #fff;
        }
      }
    }
  }

  &.z-tag--warning {
    background-color: #fdf6ec;
    color: #e6a23c;
    border-color: #faecd8;

    .z-tag-icon {
      svg {
        fill: #e6a23c;

        &:hover {
          background-color: #e6a23c;
          fill: #fff;
        }
      }
    }
  }

  &.z-tag--danger {
    background-color: #fef0f0;
    color: #f56c6c;
    border-color: #fde2e2;

    .z-tag-icon {
      svg {
        fill: #f56c6c;

        &:hover {
          background-color: #f56c6c;
          fill: #fff;
        }
      }
    }
  }

  // 不同颜色深浅
  &.z-tag--dark {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;

    .z-tag-icon {
      svg {
        fill: #fff;

        &:hover {
          background-color: #79bbff;

        }
      }
    }

    &.z-tag--success {
      background-color: #67c23a;
      border-color: #67c23a;

      .z-tag-icon {
        svg:hover {
          background-color: #95d475;
        }
      }
    }

    &.z-tag--info {
      background-color: #909399;
      border-color: #909399;

      .z-tag-icon {
        svg:hover {
          background-color: #b1b3b8;
        }
      }
    }

    &.z-tag--warning {
      background-color: #e6a23c;
      border-color: #e6a23c;

      .z-tag-icon {
        svg:hover {
          background-color: #eebe77;
        }
      }
    }

    &.z-tag--danger {
      background-color: #f56c6c;
      border-color: #f56c6c;

      .z-tag-icon {
        svg:hover {
          background-color: #f89898;
        }
      }
    }
  }

  &.z-tag--plain {
    background-color: #fff;
    border-color: #a0cfff;

    &.z-tag--success {
      border-color: #b3e19d;
    }

    &.z-tag--info {
      border-color: #c8c9cc;
    }

    &.z-tag--warning {
      border-color: #f3d19e;
    }

    &.z-tag--danger {
      border-color: #fab6b6;
    }
  }

  // 不同尺寸
  &.z-tag--large {
    padding: 0 11px;
    height: 32px;
    font-size: 16px;
  }

  &.z-tag--small {
    padding: 0 7px;
    height: 20px;
    font-size: 12px;
  }

  .z-tag-icon {
    svg {
      width: 16px;
      height: 16px;
      margin-left: 6px;
      cursor: pointer;
      vertical-align: middle;
      border-radius: 50%;
    }

  }
}
</style>

