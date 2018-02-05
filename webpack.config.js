const path = require('path');

//y引入entry文件
const entry = require('./webpack_config/index_webpack');

//y引入出口文件
const output = require('./webpack_config/output_webpack');

//y引入开发工具文件
const devTool = require('./webpack_config/webpack_devtool');

//引入模块配置文件
const modules = require('./webpack_config/module_rule');

//引入服务器配置文件
const devServer = require('./webpack_config/webpack_dev');

//引入插件配置文件
const Plugins = require('./webpack_config/webpack_plugins');

//输出打包方式（开发dev或者生产build）
console.log(encodeURIComponent(process.env.type));
// console.log(roule[0]);
//开发和生产环境并行
/*
*package.json配置
* win
* "build": "set type=build&webpack",
    "dev": "set type=dev&webpack"
*
*
* Mac  Linux
* "build": "export type=build&&webpack",
    "dev": "export type=dev&&webpack"
* */
/*if(process.env.type == "dev"){
    //开发环境调试打包到本地
    var website = {
        publicPath: 'http://127.0.0.1:1017/',
        port: 1017
    };
}else{
    //生产环境打包到服务器
    var website = {
        publicPath: 'http://127.0.0.1:1017/',
        port: 1017
    };
}*/



module.exports = {
    // 用于解析entry选项的基础目录(绝对路径), 如果output.pathinfo设置了，就包含了缩短过的目录
    // context: __dirname + "/src",
    devtool: 'eval-source-map',
    // 入口文件
    entry: entry.path,
    // 出口文件
    /*output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[hash].js',
        // filename: 'bundle.min.js',
        publicPath: website.publicPath
    },*/
    output: output.path,
    // 模块
    module: modules.rule,
    // 插件
    plugins: Plugins.conn.plugin,
    // 服务
    devServer: devServer.conn,
    // 指定的依赖不会被webpack解析，但会成为bundle里的依赖。output.libraryTarget.决定着依赖的类型
    /*externals: {
        "jquery": "jQuery"
    },*/
    // 影响解析模块的选项resolve
    resolve: {
        //查找module的话从这里开始查找
        // root: '/pomy/github/flux-example/src', //绝对路径
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: [' ', '.js', '.json', '.scss', '.webpack.js', '.less'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        // 模块被其他模块名和路径替代
        /*alias: {
            AppStore : 'js/stores/AppStores.js',//后续直接 require('AppStore') 即可
            ActionType : 'js/actions/ActionType.js',
            AppAction : 'js/actions/AppAction.js'
        }*/
    },
    // 包含了许多node的polyfills或者mock
    /*node: {
        console: false,
        global: true,
        process: true,
        Buffer: true,
        __filename: "mock",
        __dirname: "mock",
        setImmediate: true
    },*/
    // 设置require.amd和define.amd的值
    /*amd: {
        jQuery: true
    },*/
    // target
};