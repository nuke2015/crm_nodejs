exports.index = function(req, res) {
    if (req.session.admin_id) {
        console.log(req.session);
        this.redirect('/index');
    } else {
        console.log('login pls');
        this.render('Login', {});
    }
};