<template>
  <div class="z-col" :class="classes" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import {computed, inject, ref} from 'vue';
const validator = (val) => {
  const keys = Object.keys(val);
  let valid = true;
  // 此处遍历目的在于确保输入属性不能为span或offset的其它项
  keys.forEach(item => {
    if (['span', 'offset'].indexOf(item) === -1) {
      valid = false;
    }
  });
  return valid;
};

export default {
  props: {
    span: [Number, String],
    offset: {type: [Number, String]},
    ipad: {type: Object, validator},
    narrowPc: {type: Object, validator},
    pc: {type: Object, validator},
    widePc: {type: Object, validator}
  },
  setup(props) {
    const gutter = ref(0);
    gutter.value = inject('gutter');
    const classes = computed(() => {
      const {span, offset, ipad, narrowPc, pc, widePc} = props;
      return {
        ...createClasses({span, offset}),
        ...createClasses(ipad, 'ipad-'),
        ...createClasses(narrowPc, 'narrowPc-'),
        ...createClasses(pc, 'pc-'),
        ...createClasses(widePc, 'widePc-')
      };
    });
    const colStyle = computed(() => {
      return {
        paddingLeft: gutter.value / 2 + 'px',
        paddingRight: gutter.value / 2 + 'px'
      };
    });
    return {
      classes,
      gutter,
      colStyle
    };
  }
};

function createClasses(obj, str = '') {
  if (!obj) {
    return {};
  }
  return {
    [`col-${str}${obj?.span}`]: obj?.span === 0 ? '0' : obj?.span,
    [`offset-${str}${obj?.offset}`]: obj?.offset === 0 ? '0' : obj?.offset
  };
}
</script>

<style lang='scss' scoped>
.z-col {

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24)*100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24)*100%;
    }
  }
  $widthArr: (
      ("minWidth":576px, "label":'ipad'),
      ("minWidth":769px, "label":'narrowPc'),
      ("minWidth":993px, "label":'pc'),
      ("minWidth":1200px, "label":'widePc'),
  );
  $prefixArr: (
      ('label':'col', 'style':width),
      ('label':'offset', 'style':margin-left),
  );
  @each $item in $widthArr {
    @media (min-width: #{map-get($item,'minWidth')}) {
      @each $prefix in $prefixArr {
        $class-prefix: #{map-get($prefix,'label')}-#{map-get($item,'label')}-;
        @for $n from 0 through 24 {
          &.#{$class-prefix}#{$n} {
            #{map-get($prefix,'style')}: ($n/24)*100%;
          }
        }
      }
    }
  }
}
</style>