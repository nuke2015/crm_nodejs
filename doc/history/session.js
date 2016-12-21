// 2016年12月20日 10:47:09
// session操作
console.log(req.session);
if (req.session.isvisit) {
    req.session.count += 1
    res.send("这是你第" + req.session.count + "来访");
} else {
    req.session.user = "kiro";
    req.session.count = 1;
    req.session.isvisit = 1;
    res.send('first time');
}