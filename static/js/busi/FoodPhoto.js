function deleteImage(elm) {
    //$(elm).prev().attr("src", "nopic.jpg");
    $(elm).parent().remove()
}
$(".js_submit").click(function() {
    $.ajax({
        cache: true,
        type: "POST",
        url: $("#box_form").attr("action"),
        data: $("#box_form").serialize(), // 你的formid
        async: false,
        error: function(request) {
            alert("Connection error");
        },
        success: function(data) {
            alert('提交成功!');
            box_hide();
        }
    });
});
$(".js_box_hide").click(function() {
    box_hide();
});

function box_hide() {
    $('#modifyModal').hide();
    history.go(0);
}