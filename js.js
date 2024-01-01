$(window).on("load", function () {
    // Toplam animasyon süresi
    var totalAnimationTime = 4000; // 4 saniye = 4000 milisaniye

    // Animasyonun bitmesini bekle

    setTimeout(function () {
        $(".load").fadeOut(1000);
        $(".all").fadeIn(1000);
    }, totalAnimationTime);

});

$(".banner-down>i").on("click", () => {
    alert();
});


$(window).scroll(function () {
    $('.info_detail_li').each(function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        if (elementBottom > viewportTop && elementTop < viewportBottom) {
            // Eleman görünür olduğunda
            $(this).animate({
                width: "100%",
                padding: 10,
                borderRadius: 10
            }, 1000);
        }
    });

    $('.body_detail_motor').each(function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        if (elementBottom > viewportTop && elementTop < viewportBottom) {
            // Eleman görünür olduğunda
            $(this).animate({
                width: "100%"
            }, 1000);
        }
    });

    $('.ara_resim_1').each(function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        if (elementBottom > viewportTop && elementTop < viewportBottom) {
            // Eleman görünür olduğunda
            $(this).animate({
                width: "100%"
            }, 1000);
        }
    });

    $('.ara_resim_3').each(function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        if (elementBottom > viewportTop && elementTop < viewportBottom) {
            // Eleman görünür olduğunda
            $(this).animate({
                height: "400px",
                marginTop: 0
            }, 1000);
        }
    });

    $('.detail_img_img').each(function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        if (elementBottom > viewportTop && elementTop < viewportBottom) {
            // Eleman görünür olduğunda
            $(this).animate({
                marginTop: 0,
                opacity: 1,
                height: "100%"
            }, 1000);
        }
    });
});
