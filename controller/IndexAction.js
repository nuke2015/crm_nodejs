exports.index = function(req, res) {
    var that = this;
    // 登陆判断
    this.login_check(function(admin_id) {
        that.render('index_index', {});
    });
};