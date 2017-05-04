var fs = require('fs');
var base = require(PATH_ROOT + '/controller/Base');
module.exports = function(app) {
    console.info(new Date().toLocaleString());
    console.log("routes:");
    // 补充路由
    app.get('/', function(req, res) {
        res.redirect('/index');
    });
    method = 'all';
    fs.readdirSync(PATH_ROOT + '/controller/').forEach(function(ctrl) {
        // 只扫控制器
        if (ctrl.substring(ctrl.length - 9, ctrl.length) !== 'Action.js') return true;
        // 统一用小写
        var turl = '/' + ctrl.substring(0, ctrl.length - 9).toLowerCase();
        console.log('  ' + turl);
        app[method](turl, function(req, res) {
            base.init(turl, req, res);
        });
    });
}