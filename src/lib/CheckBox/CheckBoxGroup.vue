<template>

  <div>
    <template v-for="(item,key) in components" :key="key">
      <component :index="key" :is="item"></component>
    </template>
  </div>
</template>

<script lang='ts' setup>
import {provide, ref, useSlots, watch} from 'vue';

import ZCheckBox from './CheckBox.vue';

const props = defineProps({
  modelValue: Array,
  min: Number,
  max: Number
});
const [min, max] = [props.min, props.max].map(Number);
const emits = defineEmits(['change', 'update:modelValue']);
let groups = ref<Array<string | number>>([]);

function useProvide() {
  let components = [];
  groups.value = props.modelValue as Array<string | number>;
  components = useSlots().default?.().filter(compo => compo.type === ZCheckBox);
  // 当check-group里面是通过循环遍历添加的check-box时，此时useSlots().default?.()结果为[xx],真正的check-box节点在xx【‘children’】里面
  if (components.length === 0) {
    useSlots().default?.().forEach(item => {
      const result = (item['children'] as Array<any>)?.filter((compo: { type: any }) => compo.type === ZCheckBox);
      components = components.concat(result);
    });
  }
  provide('boxGroup', groups);
  provide('updateGroup', updateGroup);
  return {components};
}

function updateGroup(isChecked: boolean, val: string) {
  if (isChecked) {
    groups.value.push(val);
    groups.value = [...groups.value];
  } else {
    groups.value = groups.value.filter(data => data !== val);
  }
  emits('change', groups.value);
  emits('update:modelValue', groups.value);
}

const {components} = useProvide();
watch(() => groups.value, () => {
  if (min && groups.value.length <= min) {
    // 先将已勾选的置灰，确保最小勾选量
    const checkedBox = components?.filter(component => (groups.value as Array<any>).includes(component.props?.label));
    checkedBox?.forEach((box: ZCheckBox) => {
      box.props.numLimitDisabled = true;
    });
    // 再将剩余的未勾选的勾选上，直到保证最小勾选量
    const unCheckedBoxes = components?.filter(component => !(groups.value as Array<any>).includes(component.props?.label))
        .slice(0, min - groups.value.length);
    unCheckedBoxes?.forEach((box: ZCheckBox) => {
      updateGroup(true, box?.props?.label);
      box.props.numLimitDisabled = true;
    });
  } else if (groups.value.length > min) { //  已经到最小勾选量就可以放开管制拉
    components?.forEach((box: ZCheckBox) => {
      box.props.numLimitDisabled = false;
    });
  }
  if (max) {
    const unCheckedBoxes = components?.filter(component => !groups.value.includes(component.props?.label));
    unCheckedBoxes?.forEach((box: ZCheckBox) => {
      box.props.numLimitDisabled = groups.value.length >= max;
    });
  }
}, {immediate: true});
</script>


