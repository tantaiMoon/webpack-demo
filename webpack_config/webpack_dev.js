const devServer = {};
const path = require('path');
devServer.conn = {
    //基本目录结构
    contentBase: path.resolve(__dirname, 'dist'),
    // 主机
    host: '127.0.0.1',
    // 是否启用服务器压缩,默认启用
    compress: true,
    // 端口
    port: 1017
};

module.exports = devServer;