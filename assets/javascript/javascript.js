$( document ).ready(function() {
    new WOW().init();
});

$(".frontSelector").on("click", function() {
    $("#projectCarouselFRONT").attr("style", "display: block;")
    $("#projectCarouselBACK").attr("style", "display: none;")
});

$(".backSelector").on("click", function() {
    $("#projectCarouselBACK").attr("style", "display: block;")
    $("#projectCarouselFRONT").attr("style", "display: none;")
});