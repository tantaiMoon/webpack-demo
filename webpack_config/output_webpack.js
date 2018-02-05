const output = {};
const path = require('path');
// const website = require('website');


output.path = {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.[hash].js',
    // process.env.type == "dev" 开发环境，否则为生产环境
    publicPath: process.env.type == "dev" ? 'http://127.0.0.1:1017/' : 'http://127.0.0.1:1017/',
    chunkFilename: '[id].[chunkhash].js'
};

module.exports = output;