var base = require('./Base');
exports.index = function(req, res) {
    base.bind(req, res);
    console.log(req.session);
    // 登陆判断
    var admin_id = base.admin_id();
    if (admin_id) {
        res.render('index_index', {});
    }
};