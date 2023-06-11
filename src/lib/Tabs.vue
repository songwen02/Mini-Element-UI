<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div class="gulu-tabs-nav-item" v-for="(t,index) in titles" :ref="el => { if (t===selected) selectedItem = el }"
           @click="select(t)" :class="{selected: t=== selected}" :key="index">{{ t }}
      </div>
      <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content">
      <component :is="currentSelected" :key="currentSelected.props.title"/>
    </div>
  </div>
</template>

<script lang='ts'>
import Tab from './Tab.vue';
import {computed, onMounted, ref, watchEffect} from 'vue';

export default {
  props: {
    selected: {type: String},
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    onMounted(() => {
      watchEffect(() => {
        const {width} = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + 'px';
        // 计算选中项和导航盒子左边距的差值
        const {left: containerLeft} = container.value.getBoundingClientRect();
        const {left: selectedItemLeft} = selectedItem.value.getBoundingClientRect();
        // 将差值作为横线的左边距，就能让横线正好在当前选中项下方了。
        const left = selectedItemLeft - containerLeft;
        indicator.value.style.left = left + 'px';
      });

    });
    const defaults = context.slots.default();
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('当前标签不是Tab');
      }
    });
    const titles = defaults.map(tag => {
      return tag.props.title;
    });
    // 获取当前选中项
    const currentSelected = computed(() => {
      return defaults.find(tag => tag.props.title === props.selected);
    });
    // 调整当前tab选中项
    const select = (title) => {
      context.emit('update:selected', title);
    };
    return {defaults, titles, select, selectedItem, indicator, container, currentSelected};
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;

  }
}
</style>