$(document).ready(function () {
    $(".slick-slider-adv").slick({
        mobileFirst: true,
        dots: true,
        responsive: [
            {
                breakpoint: 767,
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
});

$(document).ready(function () {
    $('.toggle').on('click', function () {
        $(this).toggleClass('active');
        $(this).next('.main-catalog-filter__sublist').slideToggle();
    });
    $('.toggle').on('click', function () {
        $(this).next('.main-catalog-filter__subsublist').slideToggle();
    })
})

$(document).ready(function () {
    $('.main-catalog-filter__title-planshet').on('click', function () {
        $('.main-catalog-filter__main-list').toggleClass('active');
    })
    $('.main-catalog-filter__cross').on('click', function () {
        $('.main-catalog-filter__main-list').removeClass('active');
    })
})

$(document).ready(function () {
    $('.contact-us').on('click', function () {
        $('#modal').toggleClass('active');
    })
    $('.modal__inner .cross').on('click', function () {
        $('#modal').removeClass('active');
    })
})

$(document).mouseup(function (e) {
    var div = $(".modal__wrapper");
    var toggle = $('.contact-us');
    if (!div.is(e.target)
        &&
        !toggle.is(e.target)
        &&
        div.has(e.target).length === 0) {
        $("#modal").removeClass('active');
    }
});