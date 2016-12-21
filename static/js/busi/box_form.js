var init = (function() {
    $(".js_box_show").click(function() {
        var id = $(this).attr('data-id');
        $('.modal-content').load('/a/FoodPhoto/' + id + ".html");
        $('#modifyModal').show();
    });
})(init);