// 2016年12月18日 23:02:03
// redis存取
var fredis = require(PATH_ROOT + '/org/fredis');
fredis.set('hello', 'index-req', 5, function(err) {
    console.log(err);
});
fredis.get('hello', function(err, data) {
    console.log(err);
    console.log(data);
});

