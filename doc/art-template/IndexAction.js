exports.index = function(req, res) {
    //数据
    var data = {
        title: '国内要闻',
        time: (new Date).toString(),
        list: [{
            id: '1',
            name: '张三'
        }, {
            id: '2',
            name: '李四'
        }]
    };
    //渲染模板
    res.render('index_index', data);
};