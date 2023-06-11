<template>
  <div id="alertBox" ref="alertRef" :class="classes">
    <svg v-if="showIcon" class="ZAlertIcon">
      <use :xlink:href='iconHref'></use>
    </svg>
    <main class="alertContent">
      <div class="alertTitle" :class="{'is-bold':description}">
        <template v-if="title">{{ title }}</template>
        <template v-else>
          <slot name="title"></slot>
        </template>
      </div>
      <div class="alertDesc">
        {{ description }}
      </div>
    </main>
    <p v-if="closable" class="closeBtn" @click="boxFade">
      {{ closeText }}
    </p>
  </div>
</template>

<script lang='ts' setup>
import {computed, ref} from 'vue';

const props = defineProps({
  title: {type: String, 'default': '', required: true},
  type: {type: String, 'default': 'success'},
  closable: {type: Boolean, 'default': true},
  description: {type: String, 'default': ''},
  closeText: {type: String, 'default': 'x'},
  center: {type: Boolean, 'default': false},
  showIcon: {type: Boolean, default: false}
});
const emits = defineEmits(['close']);
const classes = computed(() => {
      return {
        [`theme-${props.type}`]: props.type,
        'isCenter': props.center
      };
    }
);

const alertRef = ref<HTMLElement>();
const iconHref = computed(() => {
  const iconMap = {
    success: 'icon-circle-success',
    warning: 'icon-warning',
    info: 'icon-info',
    error: 'icon-error'
  };
  return `#${iconMap[props.type]}`;
});

function boxFade() {
  emits('close', null);
  alertRef.value?.classList.add('fadeOut');
  setTimeout(() => {
    alertRef.value?.classList.add('displayNone');
    // eslint-disable-next-line no-magic-numbers
  }, 500);
}
</script>

<style lang='scss' scoped>
#alertBox {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 8px 12px;
  margin: 8px 0;
  border: 1px solid;
  font-size: 12px;

  .ZAlertIcon {
    width: 14px;
    height: 14px;
    margin-right: 16px;
  }

  .closeBtn {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 14px;
  }

  .alertContent {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .alertTitle {
      display: block;
      margin-bottom: 4px;
      color: #000000d9;
      font-size: 14px;

      &.is-bold {
        font-weight: 700;
      }
    }
  }

  &.theme-info {
    background: #e6f7ff;
    border-color: #91d5ff;

    .closeBtn {
      color: #1890ff;
    }

    .ZAlertIcon {
      fill: #1890ff;
    }
  }

  &.theme-error {
    border-color: #ff7875;
    background: #fff1f0;

    .closeBtn {
      color: #f5222d;
    }

    .ZAlertIcon {
      fill: #ff4d4f;
    }
  }

  &.theme-success {
    border-color: #95de64;
    background: #f6ffed;

    .closeBtn {
      color: #52c41a;
    }

    .ZAlertIcon {
      fill: #52c41a;

    }
  }

  &.theme-warning {
    border-color: #ffd666;
    background: #fffbe6;

    .closeBtn {
      color: #faad14;
    }

    .ZAlertIcon {
      fill: #faad14;
    }
  }

  &.testColor {
    background: red;
  }

  &.fadeOut {
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    opacity: 0;
  }

  &.displayNone {
    display: none;
  }

  &.isCenter {
    justify-content: center;
  }
}
</style>



