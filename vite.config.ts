// @ts-nocheck
import {md} from './plugins/md';
import fs from 'fs';
import {baseParse} from '@vue/compiler-core';

export default {
    base: './', // 在index.html里引用依赖时，路径是./ 而不是/
    assetsDir: 'assets', // 确保提交上去的assets没有下划线_ ，因为github会把带_ 的路径的文件给吞掉，导致你访问不到对应依赖
    plugins: [md()],
    vueCustomBlockTransforms: {
        demo: (options) => {
            const {code, path} = options;
            const file = fs.readFileSync(path).toString();
            const parsed = baseParse(file).children.find(n => n.tag === 'demo');
            const title = parsed.children[0].content;
            const main = file.split(parsed.loc.source).join('').trim();
            return `export default function (Component) {
        Component.__sourceCode = ${
                JSON.stringify(main)
            }
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim();
        },
    },
};