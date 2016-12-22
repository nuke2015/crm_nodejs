exports.index = function(req, res) {
    if (req.session.admin_id) {
        this.redirect('/index');
    } else {
        this.render('Login', {});
    }
};