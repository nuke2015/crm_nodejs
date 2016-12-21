// 2016年12月20日 10:33:43
// cookie操作
console.log(req.cookies);
if (req.cookies.user) {
    console.log('cookie:', req.cookies);
    res.send('first time');
} else {
    res.cookie('user', 'kiro', {
        maxAge: 60 * 1000
    }); //set 1min
    res.send('welcome');
}

