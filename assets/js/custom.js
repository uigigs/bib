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

/*-- join rocket img --*/
var joinRocketImg = $(".join-rocket-img");
if (joinRocketImg.length) {
    $(window).on("scroll", function () {
        var joinRocketImg = $(".join-rocket-img");
        var y = window.scrollY;
        var x;
        x = joinRocketImg.offset().top;
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

        joinRocketImg.css("transform", `translateX(${animationValue}px)`);
    });
}

/*-- bannerCloud img --*/
var bannerCloud1 = $(".bannerCloud1");
if (bannerCloud1.length) {
    $(window).on("scroll", function () {
        var bannerCloud1 = $(".bannerCloud1");
        var y = window.scrollY;
        var x;
        x = bannerCloud1.offset().top;
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

        bannerCloud1.css("transform", `translateX(${animationValue}px)`);
    });
}

/*-- bannerCloud img --*/
var bannerCloud2 = $(".bannerCloud2");
if (bannerCloud2.length) {
    $(window).on("scroll", function () {
        var bannerCloud2 = $(".bannerCloud2");
        var y = window.scrollY;
        var x;
        x = bannerCloud2.offset().top;
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

        bannerCloud2.css("transform", `translateX(${animationValue}px)`);
    });
}
/*-- profile-coin3 --*/
var profileCoin3 = $(".profile-coin3");
if (profileCoin3.length) {
    $(window).on("scroll", function () {
        var profileCoin3 = $(".profile-coin3");
        var y = window.scrollY;
        var x;
        x = profileCoin3.offset().top;
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

        profileCoin3.css("transform", `translateX(${animationValue}px)`);
    });
}

/*-- bannerCloud img --*/
var bannerCloud2 = $(".bannerCloud2");
if (bannerCloud2.length) {
    $(window).on("scroll", function () {
        var bannerCloud2 = $(".bannerCloud2");
        var y = window.scrollY;
        var x;
        x = bannerCloud2.offset().top;
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

        bannerCloud2.css("transform", `translateX(${animationValue}px)`);
    });
}

/*-- Team-coin --*/
var teamCoin = $(".team-coin");
if (teamCoin.length) {
    $(window).on("scroll", function () {
        var teamCoin = $(".team-coin");
        var y = window.scrollY;
        var x;
        x = teamCoin.offset().top;
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

        teamCoin.css("transform", `translateX(${animationValue}px)`);
    });
}

/*-- Team-coin-bib --*/
var coinBibImg = $(".coin-bib-img");
if (coinBibImg.length) {
    $(window).on("scroll", function () {
        var coinBibImg = $(".coin-bib-img");
        var y = window.scrollY;
        var x;
        x = coinBibImg.offset().top;
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

        coinBibImg.css("transform", `translateX(${animationValue}px)`);
    });
}

/*-- footer Ship-bib --*/
var footerShip = $(".footer-ship");
if (footerShip.length) {
    $(window).on("scroll", function () {
        var footerShip = $(".footer-ship");
        var y = window.scrollY;
        var x;
        x = footerShip.offset().top;
        x = x - 400;

        let animationValue = 1;
        animationValue = (-1 * (y - x)) / 6;

        let animationStop = 100;

        if (animationValue < 0) {
            animationValue > 0;
        }

        if (animationValue > animationStop) {
            animationValue = animationStop;
        }

        footerShip.css("transform", `translateX(${animationValue}px)`);
    });
}


})(jQuery);