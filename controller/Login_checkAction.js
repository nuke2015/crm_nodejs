var fcrypt = require(PATH_ROOT + '/org/fcrypt');
var fs_user = require(PATH_ROOT + '/model/fs_user');
exports.index = function(req, res) {
    var base = this.base;
    var uname = req.body.uname || '';
    var passwd = req.body.passwd || '';
    if (!uname || !passwd) {
        return base.tip(0, '请输入用户名或密码!');
    }
    fs_user.userlogin({
        uname: uname,
        status: 1,
    }, function(err, userinfo) {
        if (userinfo && userinfo.id) {
            var md5 = fcrypt.md5(fcrypt.md5(userinfo.salt) + fcrypt.md5(passwd));
        } else {
            return base.tip(0, '用户不存在!');
        }
        if (md5 && md5 == userinfo.passwd) {
            console.log(userinfo.uname, userinfo.id, userinfo.passwd, userinfo.salt);
            req.session.admin_id = userinfo.id;
            return base.tip(1, '登陆成功!', '/');
        } else {
            req.session.admin_id = 0;
            return base.tip(0, '登陆失败!');
        }
    });
};