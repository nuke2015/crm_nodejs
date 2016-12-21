// 回路绑定
exports.init = function() {
    var action = require("./" + this.turl + 'Action.js');
    // 反向注入
    action.base = this;
    console.info('base route init ok!');
    action.index(this.req, this.res);
};
// 统一渲染
exports.render = function(tpl, data) {
    // 补充字段
    data.session = this.req.session;
    data.cookie = this.req.cookie;
    console.log(data);
    this.res.render(tpl, data);
};
// 这是基类,被相关模块继承,使用require('./base.js');
exports.admin_id = function() {
    if (this.req.session.admin_id) {
        var admin_id = this.req.session.admin_id;
        return admin_id;
    } else {
        this.redirect('/login');
    }
};
// 登陆跳转
exports.redirect = function(turl) {
    this.res.redirect(turl);
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
    this.res.render('common_tip', data);
    return false;
}