import Toast from '../lib/Toast/Toast.vue';
import {createVNode, render} from 'vue';

let currentToast; // 存放当前创建的toast组件元素
export default {
    install: (app, options) => {
        app.config.globalProperties.$toast = (toastOptions) => {
            if (currentToast) {
                // 确保当前页面只有一个toast组件
                document.body.removeChild(currentToast);
            }
            currentToast = createToast(toastOptions);
        };

    }
};

// 重构代码，抽成函数
function createToast(toastOptions) {
    const toastNode = createVNode(Toast, {
        ...toastOptions
    });
    let mountNode = document.createElement('div');
    render(toastNode, mountNode);
    document.body.appendChild(mountNode);
    return mountNode;
}