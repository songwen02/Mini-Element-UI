export function clickOutside(el, binding) {
    window.onclick = (e) => {
        if (e.currentTarget !== el) {
            binding.value.call?.();
        }
    };
}