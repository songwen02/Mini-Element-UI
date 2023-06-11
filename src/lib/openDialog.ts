import Dialog from './Dialog.vue';
import {createApp, h} from 'vue';

export const openDialog = (options) => {
    const {title, content, ok, cancel} = options;
    const div = document.createElement('div');
    document.body.appendChild(div);
    const close = () => {
        app.unmount(); // 从div卸载组件
        div.remove();//移除div标签
    };
    const app = createApp({
        render() {
            return h(Dialog,
                { // 传属性或监听事件
                    visible: true,
                    'onUpdate:visible': (newVisible) => {
                        if (!newVisible) {
                            close();
                        }
                    }, //监听Dialog组件传递的事件update:visible ,以及对应回调函数
                    ok,
                    cancel,
                },
                { // 插槽内容放这里
                    title: title, content: content,
                });
        },
    });
    app.mount(div); // 将Dialog挂载到div上
};