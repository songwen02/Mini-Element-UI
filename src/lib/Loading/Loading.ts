// loading.ts
import {createVNode, render} from 'vue';

import LoadingTemplate from './LoadingTemplate.vue';

export function LoadingDirective(el, binding) {
    if (binding.oldValue !== binding.value) {
        if (binding.value && !binding.oldValue) {
            createInstance(el, binding);
        } else if (!binding.value && binding.oldValue) {
            (el['zLoading'].component as LoadingTemplate)!.setupState.close();
        }
    }
}

function getValue(attr, binding, el) {
    return binding.value[attr] ?? binding.modifiers[attr] ?? fetchCustom(attr, el);
}

function fetchCustom(attr, el) {
    return el.getAttribute(`z-loading-${attr}`);
}

function createInstance(el, binding) {
    const container = document.createElement('div');
    const opt = {
        text: getValue('text', binding, el),
        lock: getValue('lock', binding, el),
        fullscreen: getValue('fullscreen', binding, el),
        background: getValue('background', binding, el),
        svg: getValue('svg', binding, el),
    };
    const vm = createVNode(LoadingTemplate, opt);
    render(vm, container);
    if (container.firstChild) {
        const appendToEl = opt.fullscreen ? document.body : el;
        appendToEl.appendChild(container.firstChild);
        appendToEl.classList.add('z-loading-relative');
        if (opt.lock) {
            appendToEl.classList.add('z-overflow-hidden');
        }
    }
    el['zLoading'] = vm;
}
