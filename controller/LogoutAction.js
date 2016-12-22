exports.index = function(req, res) {
    req.session.admin_id=0;
    this.tip(1,'成功退出!','/login');
};