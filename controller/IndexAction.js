exports.index = function(req, res) {
    // console.log(this);
    // 登陆判断
    var admin_id = this.admin_id();
    if (admin_id) {
        this.render('index_index', {});
    }
};