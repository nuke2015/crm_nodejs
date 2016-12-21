var fdir = require('./org/fdir');
// 自动创建目录
fdir.mkdirSync('./runtime/log/', 0777);
fdir.mkdirSync('./runtime/cache/', 0777);
fdir.mkdirSync('./runtime/temp/', 0777);