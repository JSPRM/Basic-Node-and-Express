$(document).ready(function() {
    $(window).scroll(function() {
            if ($(window).scrollTop() > 180) {
                $('#nav_bar.navbar-home').addClass('navbar-fixed');
                $('.navbar-home .language-dd').removeClass('dropup');
            }
            if ($(window).scrollTop() < 181) {
                $('#nav_bar.navbar-home').removeClass('navbar-fixed');
                $('.navbar-home .language-dd').addClass('dropup');
            }
    });

    $('.nav-item a, .navbar-brand').click(function() {
        var sectionTo = $(this).attr('href');
        var scroll = sectionTo === "#promociones" ? 0 : $(sectionTo).offset().top;
        $('html, body').animate({
            scrollTop: scroll
        }, 1500);

        $('.navbar-collapse').removeClass('show');
    });


});