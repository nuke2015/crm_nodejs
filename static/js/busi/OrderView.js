var init = (function() {
    var api = {
        OrderUpdate: function(req) {
            doRequestwithnoheader(req, function(res) {
                if (!res.code) {
                    // 刷新
                    history.go(0);
                }
                // var html = template('tpl_index', res.data);
                // $('.tpl_index').append(html);
            }, function(res) {
                alert(res.msg);
            });
        }
    };
    // 已送餐
    $('.js_order_done').click(function() {
        var req = {
            'methodName': 'OrderUpdate',
            'version': '1.0',
            'ids': $(this).attr('order_id'),
            'status':2
        };
        console.log(req);
        api.OrderUpdate(req);
    });
    // 已取消
    $('.js_order_done').click(function() {
        var req = {
            'methodName': 'OrderUpdate',
            'version': '1.0',
            'ids': $(this).attr('order_id'),
            'status':-1
        };
        console.log(req);
        api.OrderUpdate(req);
    });
})(init);