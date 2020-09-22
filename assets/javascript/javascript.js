
$(".frontSelector").on("click", function() {
    $("#projectCarouselFRONT").attr("style", "display: block; color: white;")
    $("#projectCarouselBACK").attr("style", "display: none; color: black;")
    $(".backSelector").attr("style", "color: black;")
    $(".frontSelector").attr("style", "color: white;")
});

$(".backSelector").on("click", function() {
    $("#projectCarouselBACK").attr("style", "display: block; color: white;")
    $("#projectCarouselFRONT").attr("style", "display: none; color: black;")
    $(".backSelector").attr("style", "color: white;")
    $(".frontSelector").attr("style", "color: black;")
});

