var base = require('./Base.js');
// 定义表名
base.table_name = 'fs_user';
base.define = {
    id: String,
    uname: String,
    passwd: String,
    salt: String,
    group: Number,
    status: Number,
    create_at: Number,
};
// 复制
exports.model = function(cb) {
    return base.model(cb);
};
// 查询用户信息
exports.userlogin = function(where, cb) {
    this.model(function(m) {
        m.find(where, function(err, data) {
            if (data) {
                cb(err, data[0]);
            } else {
                cb(err);
            }
        });
    });
};