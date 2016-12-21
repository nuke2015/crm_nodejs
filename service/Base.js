// 这是services基类,被相关模块继承,使用require('./base.js');
exports.flog = function(obj) {
    dump('service log');
};
exports.test = function() {
    dump('service test');
}
exports.hello = function() {
    dump('service hello');
}