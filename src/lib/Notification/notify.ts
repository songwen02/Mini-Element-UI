// notification.ts
import {createVNode, render} from 'vue';
import NotifyTemp from './Notification.vue';
import {Notify, NotifyFn} from './notification';

let seed = 1;
const GAP_SIZE = 16;
let zIndex = 2000;
let singleElHeight = 0;
const notifications = {
    'top-left': [],
    'top-right': [],
    'bottom-left': [],
    'bottom-right': []
};
const notificationsTypes = ['success', 'warning', 'info', 'error'];

const notify: NotifyFn = function (options) {
    const notification = document.querySelector('.notificationRight');
    if (notification) {
        const firstDiv = notification.childNodes[0];
        const container = document.createElement('div');
        vmRender(container, options);
        if (container.firstChild) {
            firstDiv.appendChild(container.firstChild);
        }
    } else {
        const container = document.createElement('div');
        const notifyBox = document.createElement('div');
        const innerNotifyBox = document.createElement('div');// 后续多增加的弹窗都往这里面添加
        vmRender(innerNotifyBox, options);

        notifyBox.className = 'notificationRight';
        notifyBox.style.right = '0px';
        notifyBox.style.top = '48px';
        notifyBox.style.bottom = 'auto';
        notifyBox.style.position = 'absolute';
        notifyBox.appendChild(innerNotifyBox);
        container.appendChild(notifyBox);
        document.body.appendChild(container);
    }
};

// 定义具体某种类型下的函数内容，在js中函数也是对象，所以可以这样设置
notificationsTypes.forEach(type => {
    notify[type] = (options) => {
        const opt = {...options, type};
        notify(opt);
    };
});

function vmRender(container, options) {
    const id = `notification_${seed++}`;
    zIndex++;
    const userClose = options.close;
    const position = options.position || 'top-right';
    let verticalHeight = options.offset || 0;
    const pageHeight = document.body.clientHeight;
    const [, suffix] = position.split('-');
    let curHeight = 0;

    // 不断累加当前位置已有的提示框的高度，总和作为下一个新加的提示框高度
    notifications[position].forEach(vm => {
        verticalHeight += vm.el?.offsetHeight + GAP_SIZE;
        if (!singleElHeight) {
            singleElHeight = vm.el?.offsetHeight;
        }
    });
    for (const pos of Object.keys(notifications)) {
        if (pos.endsWith(suffix)) {
            curHeight += (notifications[pos].length) * (GAP_SIZE + singleElHeight);
        }
    }
    if (Math.floor(pageHeight / curHeight) < 1) {
        return;
    }

    const onClose = () => {
        close(id, position, userClose);
    };
    const props = {...options, id, close: onClose, offset: verticalHeight, zIndex, position};
    const vm = createVNode(NotifyTemp, props);
    render(vm, container);
    notifications[position].push(vm);
}

function close(id, position, userClose) {
    const originNotifications = notifications[position];
    const idx = originNotifications.findIndex(node => {
        return node.component?.props.id === id;
    });
    if (idx === -1) {
        return;
    }
    const vm = originNotifications[idx];
    if (!vm) {
        return;
    }
    userClose?.(vm);
    const removedHeight = vm.el?.offsetHeight;
    const attribute = position.split('-')[0];
    originNotifications.splice(idx, 1);
    const len = originNotifications.length;
    if (len < 1) {
        return;
    }
    for (let i = idx; i < len; i++) {
        const {el, component} = originNotifications[i];
        component.props.offset = parseInt(el.style?.[attribute], 10) - removedHeight - GAP_SIZE;
    }
}

export default notify as Notify & Function;