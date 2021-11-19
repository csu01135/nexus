window.load = function () {};
$(document).ready(function () {
    // 위로가기 기능
    $('.gotop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        });
    });

    // 모달창 기능
    let modal = $('.modal');
    let modal_cont = $('.modal-cont');
    let modal_close = $('.modal-close');
    let modal_show = $('.modal-show');
    modal_close.click(function () {
        modal.fadeOut();
    });
    modal.click(function () {
        modal.fadeOut();
    })

    modal_cont.click(function (event) {
        event.stopPropagation();
    });

    // pc 주메뉴 관련코드(흰색바탕이 스무스하게 나오도록)
    let header = $('.header');
    $(window).scroll(function () {
        // 주의 한글로 코드하지마, 수업이라서 한글임
        let 스크롤바 = $(window).scrollTop();
        // console.log(스크롤바);
        if (스크롤바 > 0) {
            header.addClass('header-active');
        } else {
            header.removeClass('header-active');
        }
    });
    // 모바일메뉴 관련 코드
    let gnb_mobile = $('.gnb-mobile');
    let mobile_menu = $('.mobile-menu')
    let mobile_close = $('.mobile-close')
    gnb_mobile.click(function () {
        mobile_menu.toggleClass('mobile-menu-active')
    });
    mobile_close.click(function () {
        mobile_menu.removeClass('mobile-menu-active')
    });
    // 화면의 너비가 변화 감지
    $(window).resize(function () {
        let w = $(window).width();
        // 콘솔에서 숫자값 나오는지 확인
        //  console.log(w);
        if (w > 1000) {
            mobile_menu.removeClass('mobile-menu-active');
        }
    });

    // 비주얼 슬라이드 영역

    // sw_visual_slide_img: 로고들을 가르킴
    let sw_visual_slide_img;
    // 포커스될 블렛(동그라미)
    let bulletsIndex = 0;

    let sw_visual = new Swiper('.sw-visual', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,
        pagination: {
            el: ".sw-visual-pg",
            clickable: true
        },
        direction: "vertical",

        // on: ~할때
        on: {
            // 비주얼 슬라이드 이미지 위의 로고 움직임 관련
            init: function () {},

            slideChange: function () {
                // 로고이미지가 없을때만 이미지를 받아와
                if (!sw_visual_slide_img) {
                    sw_visual_slide_img = $('.sw-visual .swiper-slide img');
                }

                // this.activeIndex : 활성화 되어야 할 슬라이드
                sw_visual_slide_img.eq(this.activeIndex).css({
                    opacity: 0,
                    'margin-left': '-15%'
                });
                sw_visual_slide_img.eq(this.activeIndex).stop().animate({
                    opacity: 1,
                    'margin-left': '0%'
                }, 800);

                // this.previousIndex : 보였었던 슬라이드
                sw_visual_slide_img.eq(this.previousIndex).stop().animate({
                    opacity: 0
                }, 300);

                // 마치 클릭이 되었을 때의 index 처럼
                // 실제 html 코딩의 순서 값이 넘어온다. 복사x,실제값
                // console.log(this.realIndex);               
                pgMove(this.realIndex);

            }
        },
    });

    // sw-visual-pg 를 위한 코드
    // 선택된 것이 바뀌어지는 감시한다.  
    // 목록(blullet)을 저장한다.
    let bullets = $('.sw-visual-pg .swiper-pagination-bullet');

    $.each(bullets, function (index, item) {
        $(this).click(function () {
            pgMove(index);
        });
    });

    function pgMove(_num) {
        // 동일한 블렛에 포커스 시
        if (_num == bulletsIndex) {
            // 아래로 가지마라.
            return;
        }
        // console.log(_num);

        $('.sw-visual-pg .swiper-pagination-bullet').removeClass('sw-visual-pg-active');
        $('.sw-visual-pg .swiper-pagination-bullet').eq(bulletsIndex).addClass('sw-visual-pg-active');

        bulletsIndex = _num;
    }
    // our story 모션 부분
    $('.visual-story').waypoint(function (dir) {
        if (dir == "down") {
            $('.visual-story').addClass('visual-story-active');
        } else {
            // $('.visual-story').removeClass('visual-story-active');
        }
    }, {
        // 화면에서 어느정도 보였을때, 모션이 실행되는가?
        // 100%면 모션대상의 영역이 다 보여야 모션이 실행됨
        offset: '70%'
    });
    // 메인 모션 (스크롤를 하면 사진들 애니메이션)-waypoint
    $('.contents-1').waypoint(function (dir) {
        if (dir == "down") {
            $('.contents-1').addClass('contents-1-active');
        } else {
            // $('.contents-1').removeClass('contents-1-active');
        }
    }, {
        // 화면에서 어느정도 보였을때, 모션이 실행되는가?
        // 70%면 모션대상의 영역이 30% 보이면 모션이 실행됨
        // 퍼센트가 낮을 수록 영역이 많이 보여야 실행됨
        offset: '70%'
    });
    $('.contents-2').waypoint(function (dir) {
        if (dir == "down") {
            $('.contents-2').addClass('contents-2-active');
        } else {
            // $('.contents-2').removeClass('contents-2-active');
        }
    }, {
        offset: '70%'
    });
    $('.contents-3').waypoint(function (dir) {
        if (dir == "down") {
            $('.contents-3').addClass('contents-3-active');
        } else {
            // $('.contents-3').removeClass('contents-3-active');
        }
    }, {
        offset: '90%'
    });
    $('.contents-4').waypoint(function (dir) {
        if (dir == "down") {
            $('.contents-4').addClass('contents-4-active');
        } else {
            // $('.contents-4').removeClass('contents-4-active');
        }
    }, {
        offset: '70%'
    });
    $('.contents-5').waypoint(function (dir) {
        if (dir == "down") {
            $('.contents-5').addClass('contents-5-active');
        } else {
            // $('.contents-5').removeClass('contents-5-active');
        }
    }, {
        offset: '90%'
    });
    $('.contents-6').waypoint(function (dir) {
        if (dir == "down") {
            $('.contents-6').addClass('contents-6-active');
        } else {
            // $('.contents-6').removeClass('contents-6-active');
        }
    }, {
        offset: '70%'
    });
    $('.contents-7').waypoint(function (dir) {
        if (dir == "down") {
            $('.contents-7').addClass('contents-7-active');
        } else {
            // $('.contents-7').removeClass('contents-7-active');
        }
    }, {
        offset: '90%'
    });
    $('.contents-8').waypoint(function (dir) {
        if (dir == "down") {
            $('.contents-8').addClass('contents-8-active');
        } else {
            // $('.contents-8').removeClass('contents-8-active');
        }
    }, {
        offset: '70%'
    });
    $('.contents-more').waypoint(function (dir) {
        if (dir == "down") {
            $('.contents-more').addClass('contents-more-active');
        } else {
            // $('.contents-more').removeClass('contents-more-active');
        }
    }, {
        offset: '70%'
    });

    // 갤러리 글자 아래에서 위로 움직이는 애니메이션
    $('.gallery-txt-1').waypoint(function (dir) {
        if (dir == "down") {
            $('.gallery-txt-1').addClass('gallery-txt-active');
            $('.gallery-txt-2').addClass('gallery-txt-active');
        } else {
            // $('.gallery-txt-1').removeClass('gallery-txt-1-active');
        }
    }, {
        offset: '90%'
    });
});