// 定义唯一的路径变量
global.PATH_ROOT = __dirname;
var express = require('express');
var app = module.exports = express();
// settings
//art-template模板设置
var template = require('art-template');
template.config('base', '');
template.config('extname', '.html');
app.engine('.html', template.__express);
app.set('view engine', 'html');
app.set('views', PATH_ROOT + '/view/');
// serve static files
app.use(express.static(PATH_ROOT + '/static'));
// gzip/deflate outgoing responses
var compression = require('compression');
app.use(compression());
// session support
var cookieSession = require('cookie-session');
app.use(cookieSession({
    keys: ['hels', 'worl']
}));
// parse urlencoded request bodies into req.body
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
// load controllers
require('./bootstrap')(app);
// assume "not found" in the error msgs
// is a 404. this is somewhat silly, but
// valid, you can do whatever you like, set
// properties, use instanceof etc.
app.use(function(err, req, res, next) {
    // treat as 404
    if (~err.message.indexOf('not found')) return next();
    // log it
    console.error(err.stack);
    // error page
    res.status(500).render('5xx');
});
// assume 404 since no middleware responded
app.use(function(req, res, next) {
    res.status(404).render('404', {
        url: req.originalUrl
    });
});
if (!module.parent) {
    app.listen(10087);
    console.log('\n  listening on port 10087\n');
}