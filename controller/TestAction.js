exports.index = function(req, res) {
    this.tip(0, '操作失败!');
    var fs_user = require(PATH_ROOT + '/model/fs_user');
    fs_user.model(function(m) {
        m.find({
            uname: 'admin'
        }, function(err, data) {
            console.log(err, data);
        });
    });
    // var hello = require(PATH_ROOT + '/model/hello');
    // // 添加
    // // hello.model(function(model) {
    // //     model.create({
    // //         title: 'wewsfr',
    // //         time: '2016-01-02',
    // //     }, function(err, data) {
    // //         console.log(err, data);
    // //     });
    // // });
    // // 条件查找
    // hello.model(function(model) {
    //     console.log(model)
    //     model.find({
    //         title: "John"
    //     }, function(err, data) {
    //         console.log(err, data);
    //     });
    // });
    // // 分页查找
    // hello.model(function(model) {
    //     model.find({
    //         title: 'John'
    //     }).only("id", "title").offset(1).limit(2).order('-id').all(function(err, data) {
    //         console.log(err, data);
    //     });
    // });
    // 
    // 条数
    // hello.model(function(model){
    //     model.count({title:'John'},function(err,data){
    //         console.log(data);
    //     })
    // });
    // 条件删除
    // hello.model(function(m){
    //     m.find({title:'John'}).remove(function(err,data){
    //         console.log(err,data);
    //     });
    // })
};