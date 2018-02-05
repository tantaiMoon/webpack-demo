
const website = {};

if(process.env.type == "dev"){
    //开发环境调试打包到本地
    website.publicPath = {
        publicPath: 'http://127.0.0.1:1017/',
        port: 1017
    };
}else{
    //生产环境打包到服务器
    website.publicPath = {
        publicPath: 'http://127.0.0.1:1017/',
        port: 1017
    };
};

module.exports = website;