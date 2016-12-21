    var js = require(PATH_ROOT + '/model/Base');
    var model = js.model('ddys_article_cms');
    // 查找一条
    model.find(5, function(err, data) {
        console.log(err, data);
    });
    // 删除
    model.find(4, function(err, data) {
        if (data) data.destroy();
    });
    // 分页查询
    model.all({
        where: {
            id: {
                gt: 0
            }
        },
        order: "id desc",
        skip: 1,
        limit: 5,
    }, function(err, data) {
        console.log(err, data);
    });
    // 入库
    fs_menu.create({
        title: 'testsdff',
        list_no: 1,
        create_at: 123,
        status: 1
    }, function(err, data) {
        console.log(err, data);
    });
    // 条件找一条
    fs_menu.findOne({
        where: {
            title: '"idsd"'
        },
        field: ['id', 'title']
    }, function(err, data) {
        console.log(err, data);
    });