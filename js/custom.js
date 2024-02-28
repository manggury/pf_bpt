$(function () {

    // 헤더 util관련
    $("#language").change(function () {
        changeLanguage();
    });
    function changeLanguage() {
        var selectedLanguage = $("#language").val();

        var languageTexts = {
            'en': {
                'greeting': 'Busan Port Terminal Co., Ltd. English version',
                'description': 'This is the English version of Busan Port Terminal Co., Ltd.'
            },
            'ko': {
                'greeting': '부산항만터미널주식회사 한국어버전',
                'description': '부산항만터미널주식회사의 한국어버전입니다.'
            }
        };

        $("#greeting").text(languageTexts[selectedLanguage]['greeting']);
        $("#description").text(languageTexts[selectedLanguage]['description']);
    };
    // 헤더위 팝업 슬라이드
    $('.popup_btn button').on('click', function () {
        $('.header_wrap .util .popup_btn button').toggleClass('active')
        $('.top_popup').toggleClass('on')
    });

    $('.popup_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
    });

    // 메뉴 버튼
    $('.menu_tab button').on('click', function () {
        $('.menu_tab button i').toggleClass('on');
        $('.hidden_menu').toggleClass('on')
    });

    // 메인비주얼 슬라이드
    $('.visual_slide').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
    });

    // 메인뉴스 hover효과
    $('.Ci_wrap .itm').on('mouseenter', function () {
        $('.Ci_wrap .itm').removeClass('on');
        $(this).addClass('on');
        $('.Ci_wrap .itm .txt_box').removeClass('on');
        $('.Ci_wrap .itm .txt_box').addClass('on');
    })

    // 메인히스토리 슬라이드
    $('.History_slide').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        autoplay: false,
        // autoplay: true,
        // autoplaySpeed: 3000,
    });

    // 메인뉴스 좌측 탭
    $('.news_wrap .left_tap .tab_tit li a').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).parent().index();
        $('.news_wrap .left_tap .tab_con>li').removeClass('on');
        $('.news_wrap .left_tap .tab_con>li').eq(idx).addClass('on');
        $('.news_wrap .left_tap .tab_tit>li').removeClass('on')
        $('.news_wrap .left_tap .tab_tit>li').eq(idx).addClass('on')
    });

    //투탑버튼 실행
    $('.totop_btn').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        if (sct > 200) {
            $('.totop_btn').addClass('on');
            $('.header').addClass('on');
        } else {
            $('.totop_btn').removeClass('on')
            $('.header').removeClass('on')
        }
    });

});