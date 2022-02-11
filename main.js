$(document).ready(function() {

    $(".services__sidebar-open").click(function() {
        $(this).toggleClass("services__sidebar-open")
        $("body").toggleClass("fixed-body")
        $(".services__sidebar-nav").toggleClass("services__sidebar-nav--active")
        $(".services__sidebar-bg").toggleClass("services__sidebar-bg--active")
    })

    $(".card__item-btn").click(function() {
        if ($(this).parents(".card__item").hasClass("card__item--active")) {
            $(this).parents(".card__item").removeClass("card__item--active")
        } else {
            $(".card__item-btn").parents(".card__item").removeClass("card__item--active")
            $(this).parents(".card__item").addClass("card__item--active")
        }
    })

})