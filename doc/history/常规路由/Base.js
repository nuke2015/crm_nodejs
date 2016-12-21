exports.req = {};
exports.res = {};
// 回路绑定
exports.bind = function(req, res) {
    this.req = req;
    this.res = res;
};
// 这是基类,被相关模块继承,使用require('./base.js');
exports.admin_id = function() {
    if (this.req.session.admin_id) {
        var admin_id = this.req.session.admin_id;
        return admin_id;
    } else {
        this.login();
    }
};
// 登陆跳转
exports.login = function() {
    this.res.redirect('/login');
    return false;
};
// 消息提示
exports.tip = function(code, msg, turl) {
    turl = turl || 'javascript:history.go(-1)';
    var data = {
        code: code,
        msg: msg,
        turl: turl,
    }
    console.log(data);
    this.res.render('common_tip', data);
    return true;
}