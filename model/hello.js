var base = require('./Base.js');
// 定义表名
base.table_name = 'hello';
base.define = {
    id: String,
    title: String,
    time: String,
};
// 复制
exports.model = function(cb) {
    return base.model(cb);
}