// model基类,被相关模块继承,使用require('./base.js');
// 数据库相关操作
// https://github.com/1602/jugglingdb/blob/master/docs/model.md
var Schema = require('jugglingdb').Schema;
exports.Schema = function() {
    return Schema;
};
// 连接配置
var db = new Schema('mysql', {
    host: '127.0.0.1',
    port: '3306',
    database: 'fengshop',
    username: 'root',
    password: '',
    debug: false,
});
// 继承实现
exports.table_name = '';
// 原型
exports.db = function() {
    return db;
};
// 初定义
exports.model = function(table_name) {
    return db.define(table_name);
};
// 完全定义
exports.define = function(table_name, data) {
    var struc = this.struc(data);
    return db.define(table_name, struc);
};
// 查找
exports.find = function(id, cb) {
    var model = this.model(this.table_name);
    console.log(model);
    model.find(id, function(err, data) {
        cb(err, data);
    });
};
// 删除
exports.delete = function(id, cb) {
    var model = this.model(this.table_name);
    model.find(id, function(err, data) {
        if (data) data.destroy();
        cb(err, data);
    });
};
// 入库
exports.create = function(data, cb) {
    var model = this.define(this.table_name, data);
    model.create(data, function(err, data) {
        cb(err, data);
    });
};
// 结构扫描
exports.struc = function(data) {
    var result = {};
    for (i in data) {
        var type = typeof(data[i]);
        if (type == 'number') {
            result[i] = Number;
        } else {
            result[i] = String;
        }
    }
    return result;
}