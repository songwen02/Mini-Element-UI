import { Ref, getCurrentInstance, inject, ref, watch } from 'vue';

export function useCarouselItem() {
    const carouselRoot = inject('carouselBox') as { rootRef: Ref, isVertical: boolean, activeKey: Ref, slotLength: number };
    const {rootRef, isVertical, activeKey, slotLength} = carouselRoot;
    const carouselItemRef = ref<HTMLDivElement>();
    const currentIndex = Number(getCurrentInstance()?.['vnode']['key']);
    const translate = ref(0);
    const isAnimated = ref(false);
    watch(() => activeKey.value, () => {
        translate.value = calTranslate(currentIndex, activeKey.value, slotLength);
    }, {immediate: true});

    function calTranslate(index, activeIndex, slotLength) {
        isAnimated.value = index === activeIndex;
        let finalIndex = index;
        const rootEl = rootRef.value;
        if (!rootEl) {
            return 0;
        }
        const distance = (isVertical ? rootEl.offsetHeight : rootEl.offsetWidth) || 0;
        if (!isAnimated.value && slotLength > 2) {
            finalIndex = processIndex(index, activeIndex, slotLength);
        }
        return distance * (finalIndex - activeIndex);
    }

    function processIndex(index: number, activeIndex: number, length: number) {
        const lastItemIndex = length;
        const prevItemIndex = activeIndex - 1;
        const nextItemIndex = activeIndex + 1;
        const halfItemIndex = length / 2;
        if (activeIndex === 1 && index === lastItemIndex) {
            return -1;
        } else if (activeIndex === lastItemIndex && index === 1) {
            return length+1 ;
        } else if (index < prevItemIndex && activeIndex - index >= halfItemIndex) {
            return length + 2;
        } else if (index > nextItemIndex && index - activeIndex >= halfItemIndex) {
            return -2;
        }
        return index;

    }

    return {carouselItemRef, translate, isAnimated,isVertical};
}

