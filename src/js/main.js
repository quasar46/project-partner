$(document).ready(function () {
    $(".slick-slider-adv").slick({
        mobileFirst: true,
        dots: true,
        responsive: [
            {
                breakpoint: 400,
                settings: "unslick",
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]

    });
    $('.burger').on('click', function () {
        $(this).toggleClass('active');
        $('.mobile-menu').toggleClass('active');
    })
    $('.show').on('click', function () {
        $(this).toggleClass('active').siblings('.sublist').slideToggle();
    })
})