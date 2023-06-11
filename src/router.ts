import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './views/Switch/SwitchDemo.vue';
import ButtonDemo from './views/Button/ButtonDemo.vue';
import DialogDemo from './views/DialogDemo.vue';
import TabsDemo from './views/Tab/TabsDemo.vue';
import InputDemo from './views/Input/InputDemo.vue';
import TPDemo from './views/Typography/TPDemo.vue';
import ToastDemo from './views/Toast/ToastDemo.vue';
import CollapseDemo from './views/Collapse/CollapseDemo.vue'
import PopoverDemo from './views/Popover/PopoverDemo.vue';
import GridDemo from './views/Grid/GridDemo.vue';
import AlertDemo from './views/Alert/AlertDemo.vue';
import NotificationDemo from './views/Notification/NotificationDemo.vue';
import LoadingDemo from './views/Loading/LoadingDemo.vue';
import CheckBoxDemo from './views/CheckBox/CheckBoxDemo.vue';
import CarouselDemo from './views/Carousel/CarouselDemo.vue';
import BackTopDemo from './views/Backtop/BackTopDemo.vue';
import InputNumber from './views/InputNumber/InputNumberDemo.vue';
import SelectDemo from './views/Select/SelectDemo.vue';
import ContainerDemo from './views/Container/ContainerDemo.vue';
import TagDemo from './views/Tag/TagDemo.vue';
import {h} from 'vue';
import Markdown from './components/common/Markdown.vue';
// @ts-ignore
import intro from './markdown/intro.md';
// @ts-ignore
import start from './markdown/start.md';
// @ts-ignore
import install from './markdown/install.md';

const md = string => {
  return h(Markdown, {content: string, key: string});
};
const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: '', redirect: '/doc/intro'}, //用''空字符来表示默认页面
        {path: 'intro', component: md(intro)},
        {path: 'start', component: md(start)},
        {path: 'install', component: md(install)},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
        {path: 'input', component: InputDemo},
        {path: 'typo', component: TPDemo},
        {path: 'grid', component: GridDemo},
        {path: 'toast', component: ToastDemo},
        {path: 'popover', component: PopoverDemo},
        {path: 'collapse', component: CollapseDemo},
        {path: 'alert', component: AlertDemo},
        {path: 'notification', component: NotificationDemo},
        {path: 'loading', component: LoadingDemo},
        {path: 'checkbox', component: CheckBoxDemo},
        {path: 'carousel', component: CarouselDemo},
        {path: 'backTop', component: BackTopDemo},
        {path: 'select', component: SelectDemo},
        {path: 'inputNumber', component: InputNumber},
        {path: 'select', component: SelectDemo},
        {path: 'container', component: ContainerDemo},
        {path: 'tag', component: TagDemo},
      ],
    },
  ],
});
router.afterEach(()=>{

})