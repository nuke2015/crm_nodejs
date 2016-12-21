var fs = require('fs');
var base = require(PATH_ROOT + '/controller/Base');
module.exports = function(app) {
    console.log("route and controller-->");
    // 补充路由
    app.get('/', function(req, res) {
        res.redirect('/index');
    });
    method = 'all';
    fs.readdirSync(PATH_ROOT + '/controller/').forEach(function(ctrl) {
        if (ctrl.substring(ctrl.length - 9, ctrl.length) !== 'Action.js') return true;
        // 统一用小写
        var ctrl_url = '/' + ctrl.substring(0, ctrl.length - 9).toLowerCase();
        console.log('    ' + ctrl_url);
        app[method](ctrl_url, function(req, res) {
            base.route(ctrl, req, res);
        });
    });
}