// 这是基类,被相关模块继承
// 回路绑定
exports.init = function(turl, req, res) {
    var action = require("./" + turl + 'Action.js');
    // 基类绑定
    this.turl = turl;
    this.req = req;
    this.res = res;
    // 反向原型注入
    this.index = action.index;
    console.info('navto: ----> ' + turl);
    this.index(req, res);
};
// 登陆判断
exports.login_check = function(cb) {
    if (this.req.session.admin_id) {
        var admin_id = this.req.session.admin_id;
        cb(admin_id);
    } else {
        this.redirect('/login');
    }
};
// 统一渲染,注入框架数据
exports.render = function(tpl, data) {
    // 补充字段
    data.session = this.req.session;
    data.cookie = this.req.cookie;
    console.log(data);
    this.res.render(tpl, data);
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