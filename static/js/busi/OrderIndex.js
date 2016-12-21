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
        },
    };
    jQuery('#check_all').click(function() {
        $('.check_item').each(function(index, item) {
            item.checked = !item.checked;
        });
    });
    // 已送餐
    $('.js_order_done').click(function() {
        var ids = [];
        $('.check_item').each(function(index, item) {
            if (item.checked) {
                ids.push($(this).val());
            }
        });
        var idstr = ids.join(',');
        var req = {
            'methodName': 'OrderUpdate',
            'version': '1.0',
            'ids': idstr,
            'status': 2
        };
        api.OrderUpdate(req);
    });
    // 已取消
    $('.js_order_cancel').click(function() {
        var ids = [];
        $('.check_item').each(function(index, item) {
            if (item.checked) {
                ids.push($(this).val());
            }
        });
        var idstr = ids.join(',');
        var req = {
            'methodName': 'OrderUpdate',
            'version': '1.0',
            'ids': idstr,
            'status': -1
        };
        api.OrderUpdate(req);
    });
})(init);