// shims-vue.d.ts
import {ComponentOptions} from 'vue';

declare module '*.vue' {
    import {ComponentOptions} from 'vue';
    const componentOptions: ComponentOptions;
    export default componentOptions;
}
declare module '*.md' {
    const str: string;
    export default str;
}