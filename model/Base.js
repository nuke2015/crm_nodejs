// model基类,被相关模块继承,使用require('./base.js');
// 数据库相关操作
var orm = require("orm");
exports.conf = "mysql://root:@127.0.0.1/fengshop";
exports.table_name = "";
exports.define = {};
var dbc = {};
exports.connect = function(cb) {
    console.info('mysql connect again!');
    var table_name = this.table_name;
    var data = this.define;
    orm.connect(this.conf, function(err, db) {
        // 单例模式
        dbc = db;
        cb(db);
    });
};
// 定义
exports.model = function(cb) {
    var table_name = this.table_name;
    var struc = this.define;
    if (!dbc.driver_name) {
        this.connect(function(db) {
            var model = db.define(table_name, struc);
            cb(model);
        });
    } else {
        var model = dbc.define(table_name, struc);
        cb(model);
    }
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
};