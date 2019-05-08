$("document").ready(function () {
    //////////////////////////////////////
    ////Text animation
    //////////////////////////////////////
    $("#animate-intro h2").delay(800).animate({
        top: "-150%"
    }, 500, function () {
        $("#animate-intro h1").animate({ opacity: 1 }, 500);
    });

    setInterval(function () {
        $("#animate-intro h1 span").animate({
            width: ["toggle", "swing"],
        }, 1000, "linear", function () {
            var el = $(this).find("b.is-visible"),
                nextEl = el.next(),
                firstEl = $(this).children().eq(0);

            el.removeClass("is-visible").addClass("is-hidden");

            if (nextEl.length > 0)
                nextEl.removeClass("is-hidden").addClass("is-visible");
            else
                firstEl.removeClass("is-hidden").addClass("is-visible");

        }).animate({
            width: ["toggle", "swing"],
        }, 1000);
    }, 3000);
    //Appelle du plugin qui anime le menu
    $("#burger").animateToggleMenu();

    ///////////////////////////////////////////////////

});