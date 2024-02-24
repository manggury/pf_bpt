$(function () {


    $('.menu_tab button').on('click', function () {
        $('.hidden_menu').toggleClass('on')
    });

    $('.visual_slide').slick({
        arrows: true,
    });


    $('.History_slide').slick({
        arrows: true,
        slidesToShow: 4,
        dots: false,
        autoplay: false,
    });

    $('.History_wrap .History_slide').on('afterChange', function (e, s, c) {
        console.log(e, s, c);

        const current = $('.History_wrap .History_slide .slick-current')
        current.addClass('on').siblings().removeClass('on')
    });

    $('.History_wrap .top_dots li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.History_wrap .History_slide').slick('slickGoTo', idx * 4)


        $('.History_wrap .top_dots li').removeClass('on')
        $('.History_wrap .top_dots li').eq(idx).addClass('on')
    });

    $('.news_wrap .left_tap .tab_tit li a').on('click', function (e) {
        //1. a를 클릭햇을떄 새로고침 되지않게 하기 = function에 (e)
        e.preventDefault();
        //2. 번호를 받아오기
        let idx = $(this).parent().index();
        //3. 번호에 부합하는 tab_con>li를 보여주기
        $('.news_wrap .left_tap .tab_con>li').removeClass('on');
        $('.news_wrap .left_tap .tab_con>li').eq(idx).addClass('on');
        //4. 메뉴에 스타일 붙이기
        $('.news_wrap .left_tap .tab_tit>li').removeClass('on')
        $('.news_wrap .left_tap .tab_tit>li').eq(idx).addClass('on')
    });

    $('.popup_slide').slick({
        arrows: true,
    });

    $('.popup_btn button').on('click', function () {
        $('.top_popup').toggleClass('on')
    });

        $('.Ci_wrap .itm').on('mouseenter', function () {
            $('.Ci_wrap .itm').removeClass('on');
            $(this).addClass('on');
            $('.Ci_wrap .itm .txt_box').removeClass('on');
            $('.Ci_wrap .itm .txt_box').addClass('on');
        })

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