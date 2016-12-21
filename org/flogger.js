// json日志模块
var fs = require('fs');
var logpath = PATH_ROOT + '/runtime/log/';
// 紧缩
exports.jlog = function(obj, filename, cb) {
    filename = logpath + filename + '.log';
    fs.appendFile(filename, JSON.stringify(obj) + "\r\n", cb);
};
// 展开
exports.plog = function(obj, filename, cb) {
    filename = logpath + filename + '.log';
    fs.appendFile(filename, JSON.stringify(obj, null, 4) + "\r\n", cb);
}