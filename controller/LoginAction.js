exports.index = function(req, res) {
    if (req.session.admin_id) {
        console.log(req.session);
        this.base.redirect('/index');
    } else {
        console.log('login pls');
        this.base.render('Login', {});
    }
};