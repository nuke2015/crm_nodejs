exports.index = function(req, res) {
    // 登陆判断
    var admin_id = this.base.admin_id();
    this.base.render('index_index', {});
};