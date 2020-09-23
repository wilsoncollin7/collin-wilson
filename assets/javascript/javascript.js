
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


const tl = new TimelineMax();

tl.fromTo($("#headerContainer"), 1, { y: "-100%" }, { y: "0%", ease: Power2.easeInOut })
.fromTo($("#mainHeader"), 0.4, { opacity: 0, x: 30 }, {opacity: 1, x: 0 })
.fromTo($("#mainSubHeader"), 0.4, { opacity: 0, x: 30 }, {opacity: 1, x: 0 })
.fromTo($(".nav-bar"), 1, {width: "0%", opacity: 0}, {width: "100%", opacity: 1, ease: Power2.easeInOut}, "-=0.4")
.fromTo($("#mainBottom"), 0.4, { opacity: 0, x: 30 }, {opacity: 1, x: 0 }, "-=0.4");
