exports.index = function(req, res) {
    var HelloAction = require(__dirname + '/HelloAction.js');
    HelloAction.index(req, res);
};