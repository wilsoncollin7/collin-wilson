const tl = new TimelineMax();
let isFrontSelected = true;
let isBackSelected = false;

const openAnim = function() {
    tl.fromTo($("#mainContainer"), 1.2, { opacity: 0, width: "0%" }, { opacity: 1, width: "100%", ease: Power2.easeInOut })
    .fromTo($(".mainHeaderWrapper"), 0.4, { opacity: 0, x: 30 }, {opacity: 1, x: 0, ease: Power2.easeInOut })
    .fromTo($("#mainHeader"), 0.4, { opacity: 0, x: 30 }, {opacity: 1, x: 0, ease: Power2.easeInOut })
    .fromTo($("#mainSubHeader"), 0.4, { opacity: 0, x: 30 }, {opacity: 1, x: 0, ease: Power2.easeInOut })
    .fromTo($(".navbar"), 1, {width: "0%", opacity: 0}, {width: "100%", opacity: 1, ease: Power2.easeInOut}, "-=0.4")
    .fromTo($("#mainBottom"), 1, { opacity: 0, x: 30 }, { opacity: 1, x: 0, ease: Power2.easeInOut }, "-=0.4");
};

const frontSelected = function() {
    if (isFrontSelected) {
        return;
    }
    isFrontSelected = true;
    isBackSelected = false;

    tl.fromTo($("#backProject6"), 0.1, { opacity: 1, x: 0 }, { opacity: 0, x: 3000, ease: Power2.easeInOut })
    .fromTo($("#backProject5"), 0.1, { opacity: 1, x: 0 }, { opacity: 0, x: 3000, ease: Power2.easeInOut })
    .fromTo($("#backProject4"), 0.1, { opacity: 1, x: 0 }, { opacity: 0, x: 3000, ease: Power2.easeInOut })
    .fromTo($("#backProject3"), 0.1, { opacity: 1, x: 0 }, { opacity: 0, x: 3000, ease: Power2.easeInOut })
    .fromTo($("#backProject2"), 0.1, { opacity: 1, x: 0 }, { opacity: 0, x: 3000, ease: Power2.easeInOut })
    .fromTo($("#backProject1"), 0.1, { opacity: 1, x: 0 }, { opacity: 0, x: 3000, ease: Power2.easeInOut })
    .fromTo($("#frontProject1"), 0.1, { opacity: 0, x: 3000 }, {opacity: 1, x: 0, ease: Power2.easeInOut })
    .fromTo($("#frontProject2"), 0.1, { opacity: 0, x: 3000 }, {opacity: 1, x: 0, ease: Power2.easeInOut })
    .fromTo($("#frontProject3"), 0.1, { opacity: 0, x: 3000 }, {opacity: 1, x: 0, ease: Power2.easeInOut })
    .fromTo($("#frontProject4"), 0.1, { opacity: 0, x: 3000 }, {opacity: 1, x: 0, ease: Power2.easeInOut })
    $("#frontProject").attr("style", "pointer-events: all;");
};

const backSelected = function() {
    if (isBackSelected) {
        return;
    }
    isFrontSelected = false;
    isBackSelected = true;

    tl.fromTo($("#frontProject4"), 0.1, { opacity: 1, x: 0 }, { opacity: 0, x: 3000, ease: Power2.easeInOut })
    .fromTo($("#frontProject3"), 0.1, { opacity: 1, x: 0 }, { opacity: 0, x: 3000, ease: Power2.easeInOut })
    .fromTo($("#frontProject2"), 0.1, { opacity: 1, x: 0 }, { opacity: 0, x: 3000, ease: Power2.easeInOut })
    .fromTo($("#frontProject1"), 0.1, { opacity: 1, x: 0 }, { opacity: 0, x: 3000, ease: Power2.easeInOut })
    .fromTo($("#backProject1"), 0.1, { opacity: 0, x: 3000 }, {opacity: 1, x: 0, ease: Power2.easeInOut })
    .fromTo($("#backProject2"), 0.1, { opacity: 0, x: 3000 }, {opacity: 1, x: 0, ease: Power2.easeInOut })
    .fromTo($("#backProject3"), 0.1, { opacity: 0, x: 3000 }, {opacity: 1, x: 0, ease: Power2.easeInOut })
    .fromTo($("#backProject4"), 0.1, { opacity: 0, x: 3000 }, {opacity: 1, x: 0, ease: Power2.easeInOut })
    .fromTo($("#backProject5"), 0.1, { opacity: 0, x: 3000 }, {opacity: 1, x: 0, ease: Power2.easeInOut })
    .fromTo($("#backProject6"), 0.1, { opacity: 0, x: 3000 }, {opacity: 1, x: 0, ease: Power2.easeInOut })
    $(".backCont").attr("style", "pointer-events: all;");
};

$(".frontSelector").on("click", function() {
    frontSelected();
    $(".backSelector").attr("style", "color: #EEEBE7;");
    $(".frontSelector").attr("style", "color: #4B9CD3;");
});

$(".backSelector").on("click", function() {
    backSelected();
    $(".backSelector").attr("style", "color: #4B9CD3;");
    $(".frontSelector").attr("style", "color: #EEEBE7;");
});

openAnim();
