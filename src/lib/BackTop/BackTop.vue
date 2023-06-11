<template>

  <div class="z-backTop" @click="toTopCallback" :style="computedStyle" v-show="visible">
    <template v-if="slots">
      <slot></slot>
    </template>
    <template v-else>
      <i>
        <svg>
          <use xlink:href="#icon-triangleupfill">箭头</use>
        </svg>
      </i>
    </template>

  </div>
</template>

<script lang='ts' setup>
import {computed, getCurrentInstance, onMounted, ref, useSlots} from 'vue';
import {easeInOutCubic, useEventListener} from '../../use/BackTop/useBackTop';

const {lodash} = getCurrentInstance().appContext.config.globalProperties;

const props = defineProps({
  right: Number,
  bottom: Number,
  target: String,
  visibilityHeight: {type: Number, default: 200}

});
const emits = defineEmits(['click']);
const visible = ref(false);
const computedStyle = computed(() => {
  return {
    right: `${props.right}px`,
    bottom: `${props.bottom}px`
  };
});
const slots = useSlots().default?.();
let scrollEl = ref<HTMLElement>();// 出现滚动条的元素
let containerEl = ref<Document | HTMLElement>();// 出现滚动条的元素

function toTopCallback(e: MouseEvent) {
  scrollTop();
  emits('click', e);
}

function scrollTop() {
  if (!scrollEl.value) {
    return;
  }
  const beginTime = Date.now();
  const beginValue = scrollEl.value.scrollTop;
  const frameFunc = () => {
    if (!scrollEl.value) {
      return;
    }
    // eslint-disable-next-line no-magic-numbers
    const progress = (Date.now() - beginTime) / 500;
    if (progress < 1) {
      scrollEl.value.scrollTop = beginValue * (1 - easeInOutCubic(progress));
      requestAnimationFrame(frameFunc);
    } else {
      scrollEl.value.scrollTop = 0;
    }
  };

  // requestAnimationFrame 表示你要执行一个动画，并且希望浏览器在下次重绘之前调用括号内的回调函数去更新动画
  requestAnimationFrame(frameFunc);
}

function handleScroll() {
  if (scrollEl.value) visible.value = scrollEl.value.scrollTop >= Number(props.visibilityHeight);
}

const handleScrollThrottle = lodash.throttle(handleScroll, 300, true);
onMounted(() => {
  containerEl.value = document;
  scrollEl.value = document.documentElement;
  if (props.target) {
    scrollEl.value = document.querySelector(props.target) ?? undefined;
    if (!scrollEl.value) {
      throw new Error(`There has no element ${props.target}`);
    }
    containerEl.value = scrollEl.value;
  }
  useEventListener(containerEl.value, 'scroll', handleScrollThrottle);

});


</script>
<!--<script>-->

<!--// // 找到页面中真正触发滚动的是哪个元素-->
<!--// function findScroller(element) {-->
<!--// element.onscroll = () => {-->
<!--// scrollEl.value = element;-->
<!--// };-->
<!--// Array.from(element.children).forEach(findScroller);-->
<!--// }-->
<!--//-->
<!--</script>-->

<style lang='scss' scoped>
.z-backTop {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 100px;
  bottom: 100px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, .12);
  font-size: 20px;
  z-index: 5;

  &:hover {
    background: #f2f6fc;
  }

  svg {
    fill: #409eff;
    width: 16px;
    height: 16px;
  }
}
</style>
