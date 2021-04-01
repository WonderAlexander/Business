$(function() {
    /*Fixed Header*/
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.height();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    let formToggle = $("#formToggle");
    let form = $("#form");
    let formClose = $("#formClose");



    $(window).on("scroll resize", function() {
        scrollPos = $(this).scrollTop();
        let introH = intro.height();

        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
        
    });

    /*Smooth Scroll*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        console.log(elementOffset);

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset
        }, 700)
    });

    /*NavToggle*/
        navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    /*FormToggle*/
        formToggle.on("click", function(event) {
        event.preventDefault();

        form.toggleClass("show");

    });

    formClose.on("click", function(event) {
        event.preventDefault();
        form.removeClass("show");
    });

    /*Approuch*/
    let slider = $("#approchSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });

});