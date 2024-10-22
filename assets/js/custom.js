(function ($) {
/*-- sticky header scripts start --*/
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 20) {
        $('.header-section').addClass("sticky");
    }
    else {
        $('.header-section').removeClass("sticky");
    }
});
/*-- sticky header scripts end --*/

var cloud3 = $(".profile-cloud-2");
if (cloud3.length) {
    $(window).on("scroll", function () {
        var cloud3 = $(".profile-cloud-2");
        var y = window.scrollY;
        var x;
        x = cloud3.offset().top;
        x = x - 400;

        let animationValue = 1;
        animationValue = (y - x) / 9;

        let animationStop = 100;

        if (animationValue < 0) {
            animationValue > 0;
        }

        if (animationValue > animationStop) {
            animationValue = animationStop;
        }

        cloud3.css("transform", `translateX(${animationValue}px)`);
    });
}

var cloud2 = $(".profile-cloud-3");
if (cloud2.length) {
    $(window).on("scroll", function () {
        var cloud2 = $(".profile-cloud-3");
        var y = window.scrollY;
        var x;
        x = cloud2.offset().top;
        x = x - 400;

        let animationValue = 1;
        animationValue = (-1 * (y - x)) / 9;

        let animationStop = 100;

        if (animationValue < 0) {
            animationValue > 0;
        }

        if (animationValue > animationStop) {
            animationValue = animationStop;
        }

        cloud2.css("transform", `translateX(${animationValue}px)`);
    });
}

/*--  --*/
var cloud2 = $(".profile-cloud-3");
if (cloud2.length) {
    $(window).on("scroll", function () {
        var cloud2 = $(".profile-cloud-3");
        var y = window.scrollY;
        var x;
        x = cloud2.offset().top;
        x = x - 400;

        let animationValue = 1;
        animationValue = (-1 * (y - x)) / 9;

        let animationStop = 100;

        if (animationValue < 0) {
            animationValue > 0;
        }

        if (animationValue > animationStop) {
            animationValue = animationStop;
        }

        cloud2.css("transform", `translateX(${animationValue}px)`);
    });
}

})(jQuery);