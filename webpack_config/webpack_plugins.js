const Plugins = {};
const path = require('path');
const uglifyjs = require('uglifyjs-webpack-plugin');
// const webpack = require('webapck');
const glob = require('glob');
//html 打包插件
const htmlPlugin = require('html-webpack-plugin');
//css 文件分离插件extractTextPlugin
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//消除冗余的css
const purifyCssPlugin = require('purifycss-webpack');
Plugins.conn = {
    plugin: [
        // JS 压缩插件
        // new uglifyjs(),
        //    html 打包插件
        new htmlPlugin({
            // 去掉index.html里 id的引号
            minify: {
                removeAttributeQuotes: true
            },
            // 引用JS时有缓存，每次给他一个字符串，不会产生缓存
            hash: true,
            // 模板
            template: './src/index.html'
        }),
        // CSS分离插件(有一个图片路径无效问题，可以使用publicPath来解决
        new ExtractTextPlugin("css/[name].[hash].css"),
        //消除无用的CSS代码
        new purifyCssPlugin({
            paths: glob.sync(path.join(__dirname, 'src/*.html'))
        })
    ]
};

module.exports = Plugins;