var fs = require('fs');
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
        var controller = require(PATH_ROOT + '/controller/' + ctrl);
        app[method](ctrl_url, controller.index);
        console.log('  ' + ctrl_url);
    });
}