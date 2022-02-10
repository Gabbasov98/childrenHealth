function sliderProjects() {
    var swiper = new Swiper('.our-projects .swiper-container', {
        effect: 'our-projects',
        slidesPerView: 1,
        navigation: {
            nextEl: ' .our-projects .swiper-button-next',
            prevEl: ' .our-projects .swiper-button-prev',
        },

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