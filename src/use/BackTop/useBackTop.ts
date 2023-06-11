const cubic = (value: number): number => {
    // eslint-disable-next-line no-magic-numbers
    return value ** 3;
};

export const easeInOutCubic = (value: number): number =>
// eslint-disable-next-line no-magic-numbers
    value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2;

export const useEventListener = (el, event, callBack) => {
    el.addEventListener(event, callBack);
};