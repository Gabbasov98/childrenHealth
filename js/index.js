function sliderMain() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ' .main .swiper-button-next',
            prevEl: ' .main .swiper-button-prev',
        },

    })
}



function sliderGallery() {
    var swiper = new Swiper('.index-gallery .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.index-gallery .swiper-button-next',
            prevEl: '.index-gallery .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            800: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30
            },
        }
    })
}

function sliderPartners() {
    var swiper = new Swiper('.partners .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.partners .swiper-button-next',
            prevEl: '.partners .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            800: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 45
            },
        }
    })
}


function sliderClients() {
    var swiper = new Swiper('.our-clients .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 27,
        navigation: {
            nextEl: '.our-clients .swiper-button-next',
            prevEl: '.our-clients .swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            620: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 27
            },
            1200: {
                slidesPerView: 3,
            },
        }
    })
}


$(document).ready(function() {
    sliderMain()
    sliderGallery()
    sliderPartners()

    $(".select").niceSelect()
    $('input[type="tel"]').mask('+7 (999) 999-9999', { placeholder: '+7 (   )    -    ' });

    $(".nav__item").hover(onIn, onOut);
    $(".nav__item-show").click(function() {
        $(this).siblings(".nav__item-hidden").slideToggle()
    })


    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $("body").toggleClass("fixed-body")
        $(".header-bottom").toggleClass("header-bottom--active")
    })


    $(".info-card__btn").click(function() {
        $(this).toggleClass("info-card__btn--active")
        $(this).parents(".info-card__show").siblings(".info-card__hidden").slideToggle()
    })


    $(".gallery__tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".gallery__tab").removeClass("gallery__tab--active")
        $(this).addClass("gallery__tab--active")
        $(".gallery__content").removeClass("gallery__content--active")
        $(`.gallery__content[data-tab-path="${path}"]`).addClass("gallery__content--active")
    })

    $(".various").fancybox({
        maxWidth: 800,
        maxHeight: 600,
        fitToView: false,
        width: '70%',
        height: '70%',
        autoSize: false,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none'
    });

})


function onIn() {
    if (window.innerWidth > 992) {
        let el = $(this)
        setTimeout(function() {
            if (el.is(':hover')) {
                console.log(el)
                el.children(".nav__item-show").addClass("nav__item-show--active")
            }
        }, 200);
    }
}

function onOut() {
    if (window.innerWidth > 992) {
        $(this).children(".nav__item-show").removeClass("nav__item-show--active")
    }
}