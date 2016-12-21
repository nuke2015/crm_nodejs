// 2016年12月18日 18:12:34
// 登陆控制
var base = require('./base.js');
exports.index = function(req, res) {
    var admin_id = base.admin_id();
    dump(admin_id);
};
// 2016年12月18日 22:08:38
// 系统日志
var flogger = require(PATH_ROOT + '/org/flogger');
// 紧凑
flogger.jlog(obj, filename);
// 展开
flogger.plog(obj, filename);
