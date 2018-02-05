// 入口文件  声明entry
const entry = {};
//设置入口文件的路径
entry.path = {
    main: './src/index.js',
    // 如果传入个数组，所有模块都是启动时加载，模块导出到最后一个里面
    // entry2: []
};

module.exports = entry;

