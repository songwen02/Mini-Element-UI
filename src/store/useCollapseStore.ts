import {defineStore} from 'pinia';
import {ref} from 'vue';

export const useCollapse = defineStore('collapse', () => {
    const selectedItem = ref([]);

    function changeItem(val) {
        selectedItem.value = val;

    }

    return {selectedItem,changeItem};
});