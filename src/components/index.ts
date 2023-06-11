import type {App, Component} from 'vue';
import Popover from '../lib/popover/popover.vue';
import Button from '../lib/Button.vue';
import Input from '../lib/input/Input.vue';
import InputPassword from '../lib/input/InputPassword.vue';
import InputTextArea from '../lib/input/textArea.vue';
import Switch from '../lib/Switch.vue';
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
import Row from '../lib/Grid/row.vue';
import Col from '../lib/Grid/col.vue';
import Typography from '../lib/typography/copyEditParagraph.vue';
import Dialog from '../lib/Dialog.vue';
import Collapse from '../lib/Collapse/collapse.vue';
import CollapseItem from '../lib/Collapse/collapse-item.vue';
import AlertComponent from '../lib/Alert/alert.vue';
import CheckBox from '../lib/CheckBox/CheckBox.vue';
import CheckBoxGroup from '../lib/CheckBox/CheckBoxGroup.vue';
import Carousel from '../lib/Carousel/Carousel.vue';
import CarouselItem from '../lib/Carousel/CarouselItem.vue';
import BackTop from '../lib/BackTop/BackTop.vue';
import ZInputNumber from '../lib/InputNumber/InputNumber.vue';
import ZSelect from '../lib/Select/Select.vue';
import ZOption from '../lib/Select/Option.vue';
import ZContainer from '../lib/Container/Container.vue';
import ZAside from '../lib/Container/Aside.vue';
import ZHeader from '../lib/Container/Header.vue';
import ZMain from '../lib/Container/Main.vue';
import ZFooter from '../lib/Container/Footer.vue';
import ZTag from '../lib/Tag/Tag.vue';
import Demo from './common/Demo.vue';
import ApiTable from './common/ApiTableContainer.vue';
import ComponentDesc from './common/ComponentDesc.vue';

const components: { [propName: string]: Component } = {
    ZPopover: Popover,
    ZButton: Button,
    ZInput: Input,
    ZInputPassword: InputPassword,
    ZInputTextArea: InputTextArea,
    ZSwitch: Switch,
    ZTabs: Tabs,
    ZTab: Tab,
    ZRow: Row,
    ZCol: Col,
    ZTypography: Typography,
    ZDialog: Dialog,
    ZCollapse: Collapse,
    ZCollapseItem: CollapseItem,
    ZAlert: AlertComponent,
    ZCheckBox: CheckBox,
    ZCheckBoxGroup: CheckBoxGroup,
    ZCarousel: Carousel,
    ZCarouselItem: CarouselItem,
    ZBackTop: BackTop,
    ZSelect,
    ZOption,
    ZInputNumber,
    Demo,
    ApiTable,
    ComponentDesc,
    ZContainer,
    ZAside,
    ZHeader,
    ZMain,
    ZFooter,
    ZTag
};
export default {
    install: (Vue: App) => {
        for (const key in components) {
            Vue.component(key, components[key]);
        }

    }
};