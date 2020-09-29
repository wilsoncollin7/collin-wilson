
$(".frontSelector").on("click", function() {
    frontSelected();
    // $("#projectCarouselFRONT").attr("style", "display: block; color: white;")
    // $("#projectCarouselBACK").attr("style", "display: none; color: black;")
    $(".backSelector").attr("style", "color: #EEEBE7;");
    $(".frontSelector").attr("style", "color: #4B9CD3;");
});

$(".backSelector").on("click", function() {
    backSelected();
    // $("#projectCarouselBACK").attr("style", "display: block; color: white;")
    // $("#projectCarouselFRONT").attr("style", "display: none; color: black;")
    $(".backSelector").attr("style", "color: #4B9CD3;");
    $(".frontSelector").attr("style", "color: #EEEBE7;");
});


const tl = new TimelineMax();

tl.fromTo($("#mainContainer"), 1.2, { opacity: 0, width: "0%" }, { opacity: 1, width: "100%", ease: Power2.easeInOut })
.fromTo($(".mainHeaderWrapper"), 0.4, { opacity: 0, x: 30 }, {opacity: 1, x: 0, ease: Power2.easeInOut })
.fromTo($("#mainHeader"), 0.4, { opacity: 0, x: 30 }, {opacity: 1, x: 0, ease: Power2.easeInOut })
.fromTo($("#mainSubHeader"), 0.4, { opacity: 0, x: 30 }, {opacity: 1, x: 0, ease: Power2.easeInOut })
.fromTo($(".nav-bar"), 1, {width: "0%", opacity: 0}, {width: "100%", opacity: 1, ease: Power2.easeInOut}, "-=0.4")
.fromTo($("#mainBottom"), 1, { opacity: 0, x: 30 }, { opacity: 1, x: 0, ease: Power2.easeInOut }, "-=0.4");


let isFrontSelected = true;
let isBackSelected = false;

const frontSelected = function() {
    if (isFrontSelected) {
        return;
    }
    isFrontSelected = true;
    isBackSelected = false;

    tl.fromTo($("#projectCarouselBACK"), 0.4, { opacity: 1, x: 0 }, { opacity: 0, x: 3000, ease: Power2.easeInOut })
    .fromTo($("#projectCarouselFRONT"), 0.4, { opacity: 0, x: 3000 }, {opacity: 1, x: 0, ease: Power2.easeInOut })
    $("#projectCarouselFRONT").attr("style", "pointer-events: all;")
};

const backSelected = function() {
    if (isBackSelected) {
        return;
    }
    isFrontSelected = false;
    isBackSelected = true;

    tl.fromTo($("#projectCarouselFRONT"), 0.4, { opacity: 1, x: 0 }, { opacity: 0, x: 3000, ease: Power2.easeInOut })
    .fromTo($("#projectCarouselBACK"), 0.4, { opacity: 0, x: 3000 }, {opacity: 1, x: 0, ease: Power2.easeInOut })
    $("#projectCarouselBACK").attr("style", "pointer-events: all;")
};

