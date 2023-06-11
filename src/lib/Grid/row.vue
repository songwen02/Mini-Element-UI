<template>
  <div class="z-row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import {computed, provide} from 'vue';

export default {
  props: {
    gutter: [Number, String],
    justify: {
      type: String,
      default: 'start',
      validator(value) {
        return (['left', 'right', 'center'].indexOf(value) !== -1);
      }
    },
    align: {
      type: String,
      default: 'top',
      validator(value) {
        return (['top', 'middle', 'bottom'].indexOf(value) !== -1);
      }
    }
  },
  setup(props) {
    provide('gutter', props.gutter);
    const rowStyle = computed(() => {
      return {
        marginLeft: -props.gutter / 2 + 'px',
        marginRight: -props.gutter / 2 + 'px'
      };
    });
    const rowClass = computed(() => {
      return {
        [`justify-${props.justify}`]: props.justify,
        [`align-${props.align}`]: props.align
      };
    });
    return {
      rowStyle,
      rowClass
    };
  }
};
</script>

<style lang='scss' scoped>
.z-row {
  display: flex;
  flex-wrap: wrap;
  $justifyArr: (
      ('label':start, "content":flex-start),
      ('label':end, "content":flex-end),
      ('label':center, "content":center),
      ('label':space-between, "content":space-between),
      ('label':space-around, "content":space-around),
  );
  $alignArr: (
      ('label':top, "content":flex-start),
      ('label':bottom, "content":flex-end),
      ('label':middle, "content":center),
  );
  @each $justify in $justifyArr {
    &.justify-#{map-get($justify,'label')} {
      justify-content: map-get($justify, 'content');
    }
  }
  @each $align in $alignArr {
    &.align-#{map-get($align,'label')} {
      align-items: map-get($align, 'content');
    }
  }
}
</style>