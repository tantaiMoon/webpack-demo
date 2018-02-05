const modules = {};
const ExtractTextPlugin = require('extract-text-webpack-plugin');

modules.rule = {
    rules: [
        // file-loader 解决路径不同问题，设置为相同路径
        // url-loader 解决图片打包压缩问题，大于limit值，生成一个路径，否则生成base64格式
        {
            test: /\.css$/,
            // loader: ['style-loader', 'css-loader']
            // loader:  ExtractTextPlugin.extract('style-loader', 'css-loader'),
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {loader: 'css-loader', options: {importLoaders: 1}},
                    //用来给CSS3属性加前缀
                    'postcss-loader'
                ]
            }),
            // 忽略掉node_modules里的所有js以及jsx文件
            exclude: /node_modules/
        }, {
            test: /\.(jpg|png|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    //如果图片大于limit的值，就会把图片拷贝过去生成一个URL路径，否则就会生成base64格式在JS中展示
                    limit: 5,
                    //    将图片文件打包到images文件夹里
                    outputPath: 'images/'
                }
            }],
            // 忽略掉node_modules里的所有js以及jsx文件
            exclude: /node_modules/
        }, {
            test: /\.(htm|html)$/i,
            //img 图片引入的文件打包到dist文件夹里
            loader: 'html-withimg-loader',
            // 忽略掉node_modules里的所有js以及jsx文件
            exclude: /node_modules/
        }, {
            // 直接打包到JS中
            test: /\.less$/,
            loader: ['style-loader', 'css-loader', 'less-loader'],
            // 忽略掉node_modules里的所有js以及jsx文件
            exclude: /node_modules/
        }, {
            // 直接打包到JS中
            test: /\.scss$/,

            loader: ['style-loader', 'css-loader', 'sass-loader'],
            // 忽略掉node_modules里的所有js以及jsx文件
            exclude: /node_modules/
        }, {
            test: /\.(js|jsx)$/,
            use: {
                loader: 'babel-loader'
                //    options选项移到.babelrc文件中,最新的babel转换es7loader（babel-preset-env)
            },
            // 忽略掉node_modules里的所有js以及jsx文件
            exclude: /node_modules/
        }
    ]
};
module.exports = modules;