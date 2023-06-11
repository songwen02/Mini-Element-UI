path = require('path');
module.exports = {
    devServer: {
        inline: true
    },
    runtimeCompiler: false,  //是否使用包含运行时编译器的Vue构建版本
    chainWebpack: (config) => {
        config.resolve.alias
            .set('vue$', 'vue/dist/vue.esm-bundler.js')
            .set('@', path.resolve(__dirname, './src'));
    }
};