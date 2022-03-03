$(document).ready(function() {
    var videoSection = $("#intro_text");
    var playing = false;

    var screenWidth = $(window).width();
    //if (screenWidth <= 991) {
        //$('#nav_bar.navbar-home').addClass('navbar-fixed');
    //}

  

    $('.nav-item:not(.language-dd) a, .navbar-brand').click(function() {
        var sectionTo = $(this).attr('href');
        var scroll = sectionTo === "#landing_slides" ? 0 : $(sectionTo).offset().top;
        $('html, body').animate({
            scrollTop: scroll
        }, 1500);

        $('.navbar-collapse').removeClass('show');
    });

    //Cookie settings - set to != to hide after accept
    if (localStorage.getItem('cookieSeen') != 'shown') {
        $(".cookie-banner").delay(2000).fadeIn();
        localStorage.setItem('cookieSeen', 'shown')
    }

    $('.close').click(function(e) {
        $('.cookie-banner').fadeOut();
    });

    function playVideo() {
        // $("#myModal").modal("show");
        //$('#ytplayer_image, #play_video_mobile, #play_video').hide();
        $('#ytplayer').show();
        $("#ytplayer_image").hide();
        $("#play_video_mobile").hide();
        // $("#play_video").hide();

        onYouTubePlayerAPIReady1();
    }

    $('.modal').click(function() {
        if (player.pauseVideo) {
            player.pauseVideo();
        }
    });

    function customPlayVideo() {
        player.playVideo();
    }

    function customPauseVideo() {
        if (player.pauseVideo) {
            player.pauseVideo();
        }
    }

    function onYouTubePlayerAPIReady1() {
        player = new YT.Player('ytplayer', {
            height: '70%',
            width: '100%',
            videoId: '',
            playerVars: {
                'autoplay': 1,
                'controls': 1,
                'rel': 0,
                'fs': 1,
                'showinfo': 0,
                'loop': 1,
                'modestbranding': 1
            },
            events: {
                'onReady': onPlayerReady,
                // 'onStateChange': onPlayerStateChange
            }
        });

        // player.setSize(700, 400);
    }

    function onPlayerReady(event) {
        event.target.playVideo();
        // iframe = $('#ytplayer');
        //setupListener();
    }

    //LANGUAGE SCRIPTS
    const BASE_HEADING_PATH = "assets/images/headings";
    function translateIndex(page, lang) {
        var path = "text/" + page;

        $.get(`${path}/newcompetition_${lang}.txt`, function(data) {
            $("#new_competition").html(data);
        }, 'text');

        $.get(`${path}/top8_${lang}.txt`, function(data) {
            $("#top_clubs").html(data);
        }, 'text');

        $.get(`${path}/games_${lang}.txt`, function(data) {
            $("#mid_games").html(data);
        }, 'text');

        $.get(`${path}/solidarity_${lang}.txt`, function(data) {
            $("#solidarity").html(data);
        }, 'text');

        // TRANSLATE HEADINGS
        var headingPath = `${BASE_HEADING_PATH}/${page}`;

        $("#the_best_clubs").attr("src", `${headingPath}/the_best_clubs_${lang}.png`);
        $("#competition_format").attr("src", `${headingPath}/competition_format_${lang}.png`);
        $("#top_8_clubs").attr("src", `${headingPath}/top_8_clubs_${lang}.png`);
        $("#mid_week_games").attr("src", `${headingPath}/mid_week_games_${lang}.png`);
        $("#solidarity_sustainability").attr("src", `${headingPath}/solidarity_sustainability_${lang}.png`);

        $("#mob_competition_format").attr("src", `${headingPath}/mobile/mob_competition_format_${lang}.png`);
        $("#mob_top_8_clubs").attr("src", `${headingPath}/mobile/mob_top_8_clubs_${lang}.png`);
        $("#mob_mid_week_games").attr("src", `${headingPath}/mobile/mob_mid_week_games_${lang}.png`);
        $("#mob_solidarity_sustainability").attr("src", `${headingPath}/mobile/mob_solidarity_sustainability_${lang}.png`);
    }

    function translateFoundingStatement(page, lang) {
        var path = "text/" + page;

        //BANNER
        $.get(`${path}/banner/large_banner_${lang}.txt`, function(data) {
            $("#large-banner").html(data);
        }, 'text');

        //SECTION 1
        $.get(`${path}/section-1/s1-content-1_${lang}.txt`, function(data) {
            $("#s1-content-1").html(data);
        }, 'text');

        $.get(`${path}/section-1/s1-content-2_${lang}.txt`, function(data) {
            $("#s1-content-2").html(data);
        }, 'text');

        $.get(`${path}/section-1/s1-content-3_${lang}.txt`, function(data) {
            $("#s1-content-3").html(data);
        }, 'text');

        //SECTION 2
        $.get(`${path}/section-2/s2-heading_${lang}.txt`, function(data) {
            $("#s2-heading").html(data);
        }, 'text');

        $.get(`${path}/section-2/s2-content-1_${lang}.txt`, function(data) {
            $("#s2-content-1").html(data);
        }, 'text');

        $.get(`${path}/section-2/s2-content-2_${lang}.txt`, function(data) {
            $("#s2-content-2").html(data);
        }, 'text');

        $.get(`${path}/section-2/s2-content-3_${lang}.txt`, function(data) {
            $("#s2-content-3").html(data);
        }, 'text');

        $.get(`${path}/section-2/s2-content-4_${lang}.txt`, function(data) {
            $("#s2-content-4").html(data);
        }, 'text');

        // TRANSLATE HEADINGS
        var headingPath = `${BASE_HEADING_PATH}/${page}`;

        $("#manifesto_1").attr("src", `${headingPath}/manifesto_1_${lang}.png`);
        $("#manifesto_2").attr("src", `${headingPath}/manifesto_2_${lang}.png`);
        $("#manifesto_3").attr("src", `${headingPath}/manifesto_3_${lang}.png`);
        $("#mob_manifesto_1").attr("src", `${headingPath}/mobile/mob_manifesto_1_${lang}.png`);
        $("#mob_manifesto_2").attr("src", `${headingPath}/mobile/mob_manifesto_2_${lang}.png`);
        $("#mob_manifesto_3").attr("src", `${headingPath}/mobile/mob_manifesto_3_${lang}.png`);
    }

    function translateNavBar(path, lang){
        $.get(`${path}/format_${lang}.txt`, function(data) {
            $("#format-nav").html(data);
        }, 'text');

        $.get(`${path}/clubs_${lang}.txt`, function(data) {
            $("#clubs-nav").html(data);
        }, 'text');

        $.get(`${path}/founding-statement_${lang}.txt`, function(data) {
            $("#founding-statement-nav").html(data);
        }, 'text');
    }


});