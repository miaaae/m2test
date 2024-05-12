$(function (e) {
	$width = $(window).innerWidth(),
    wWidth = windowWidth();

	$(document).ready(function (e) {
		btnTop();
        gnb();		
        mainVisual();
        speakersRolling();
		newsRolling();
		newsLetterRolling()
        sponsorRolling();
        tabMenu();
		tabMenu2depth()
        tabArea();
		innerTabArea();

		
		/* main hover animation */
		$('.main-visual-sub.menu2 .sub').on('mouseenter mouseleave', function(e) {
			if (e.type === 'mouseenter') {
				$(this).find('ul').addClass('hover');
			} else {
				$(this).find('ul').removeClass('hover');
			}
		});

		$('.news-con').each(function(){
			$(this).mouseenter(function(){
				$(this).find('.tit').addClass('hover');
				$(this).find('.info').addClass('hover');
			}).mouseleave(function(){
				$(this).find('.tit').removeClass('hover');
				$(this).find('.info').removeClass('hover');
			});
		});

		$('.newsletter-con').each(function(){
			$(this).mouseenter(function(){
				$(this).find('.tit').addClass('hover');
			}).mouseleave(function(){
				$(this).find('.tit').removeClass('hover');
			});
		});
		/* main hover animation */		

	});

	$(window).resize(function (e) {
		$width = $(window).innerWidth(),
		wWidth = windowWidth();
	});

	$(window).scroll(function(e){
		if($(this).scrollTop() > 200){
			$('.js-btn-top').addClass('on');
		}else{
			$('.js-btn-top').removeClass('on');
		}
	});

	resEvt()

});

// resize
function resEvt() {	      
	if (wWidth < 1025) {
		mGnb();
		mSubMenu();
		subConHeight();
		mTabMenu();

		if($('.js-dim').hasClass('mobile')){
			$('.js-dim').show();
			$('html, body').addClass('ovh');
		}     
		
	} else {	
		gnb();	
		tabMenu();
		if($('.js-dim').hasClass('mobile')){
			$('.js-dim').hide();
			$('html, body').removeClass('ovh');
		}

		$('.js-tab-menu, .js-tabcon-menu').removeAttr('style');		
		$('.js-btn-tab-menu, .js-btn-tabcon-menu').removeClass('on');
	}

	if(wWidth < 769){
		touchHelp();
	}

	
	if ($(window).width() < 769) {
		let moSlide = "/assets/image/main/m_main_slide";
		let resMain = $('.main-visual-con .slide');
		
		resMain.each(function(index) {
			let newBackground = moSlide + ("0" + (index + 1)).slice(-2) + ".jpg";
			$(this).css("background", "url(" + newBackground + ") left center / cover no-repeat");
		});
	} else if ($(window).width() > 768) {
		let wSlide = "/assets/image/main/main_slide";
		let resMain = $('.main-visual-con .slide');
		
		resMain.each(function(index) {
			let newBackground = wSlide + ("0" + (index + 1)).slice(-2) + ".jpg";
			$(this).css("background", "url(" + newBackground + ") left center / cover no-repeat");
		});
	}



}

$(window).resize(function (e) {
	$width = $(window).innerWidth(),
	wWidth = windowWidth();
	resEvt();

	if(wWidth < 1025){
		$('.js-dday').hide();
	}

	/* main slider web/mobile 제어 */
	if (wWidth <= 768) {
		let moSlide = "/assets/image/main/m_main_slide";
		let resMain = $('.main-visual-con .slide');
		
		resMain.each(function(index) {
			let newBackground = moSlide + ("0" + (index + 1)).slice(-2) + ".jpg";
			$(this).css("background", "url(" + newBackground + ") left center / cover no-repeat");
		});
	} else if (wWidth > 768) {
		let wSlide = "/assets/image/main/main_slide";
		let resMain = $('.main-visual-con .slide');
		
		resMain.each(function(index) {
			let newBackground = wSlide + ("0" + (index + 1)).slice(-2) + ".jpg";
			$(this).css("background", "url(" + newBackground + ") left center / cover no-repeat");
		});
	}

});

function Mobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function windowWidth() {
	if ($(document).innerHeight() > $(window).innerHeight()) {
		if (Mobile()) {
			return $(window).innerWidth();			
		} else {
			return $(window).innerWidth() + 17;
		}
	} else {
		return $(window).innerWidth();
	}
}

function subConHeight(){
    $(document).ready(function(e){
        var subConHeight = $(window).outerHeight() - $('.js-header').outerHeight() - $('#footer').outerHeight();
        setTimeout(function(e){
            $('.sub-contents').css('min-height',subConHeight);
        },100);
    });	
}

function gnb(){
    $('.js-gnb .gnb-list > li').on('mouseenter',function(e){
        $('.js-header').addClass('active');
        $('.gnb').addClass('active');
        $('.js-gnb .gnb > li > ul').stop().slideDown(200);
    });
    $('.js-gnb').on('mouseleave',function(e){
        $('.js-header').removeClass('active');
        $('.js-gnb .gnb > li > ul').stop().slideUp(200);
    });
    $('.js-gnb .gnb > li').each(function(index){
        $(this).on('mouseenter',function(e){
            $('.gnb-list li').eq(index).addClass('hover');
        });
    });
    $('.js-gnb .gnb > li').each(function(index){
        $(this).on('mouseleave',function(e){
            $('.gnb-list li').eq(index).removeClass('hover');
        });
    });

	/* header D-day */
	if($('#container').hasClass('sub')){
		$('.js-dday').show();

		if(wWidth < 1025){
			$('.js-dday').hide();
			mSubMenu();
		}

	} else if ($('#container').hasClass('main')){
		$('.js-dday').hide();
	}
}

function mGnb(){
    $('.m-js-gnb > li').off('mouseenter');
    $('.m-js-gnb').off('mouseleave');
    $('.m-js-gnb > li > a').off().on('click',function(e){
        if($(this).next('ul').length){
            $(this).parent('li').toggleClass('on');
            $('.m-js-gnb > li > a').not(this).parent('li').removeClass('on');
            $(this).next('ul').stop().slideToggle();
            $('.m-js-gnb > li > a').not(this).next('ul').stop().slideUp();
            return false;
        }
    });
    
    $('.js-btn-menu-open').on('click',function(e){
        $('html, body').addClass('ovh');
        $('.js-dim').addClass('mobile').stop().fadeIn(100);
        $('#gnb').stop().animate({'right':0},400); 
    });
    $('.js-btn-menu-close, .js-dim').on('click',function(e){
        $('html, body').removeClass('ovh');
        $('.js-dim').removeClass('mobile').stop().fadeOut(100);
        $('#gnb').stop().animate({'right':'-100%'},400);
    });
}

function mTabMenu(){
	var activeTab = $('.js-tab-menu li.on > a').html();
	$('.js-btn-tab-menu').html(activeTab);
	$('.js-btn-tab-menu').off().on('click',function(e){
		$(this).toggleClass('on');
		$(this).next('ul').stop().slideToggle();
		return false;
	});
	$('.js-tab-menu li').off().on('click',function(e){		
		var currentTab = $(this).html();
		$('.js-btn-tab-menu').html(currentTab);

		$(this).addClass('on');
		$(this).siblings().removeClass('on');

		$(this).parent('ul').stop().slideUp();
		$('.js-btn-tab-menu').removeClass('on');
	});

	var activeTabCon = $('.js-tabcon-menu li.on > a').html();	
	$('.js-btn-tabcon-menu').html(activeTabCon);
	$('.js-btn-tabcon-menu').off().on('click',function(e){
		$(this).toggleClass('on');
		$(this).next('ul').stop().slideToggle();
		return false;
	});
	$('.js-tabcon-menu li').off().on('click',function(e){		
		var currentTab = $(this).html();
		$('.js-btn-tabcon-menu').html(currentTab);

		$(this).addClass('on');
		$(this).siblings().removeClass('on');

		$(this).parent('ul').stop().slideUp();
		$('.js-btn-tabcon-menu').removeClass('on');
	});
	// tabConMenu();
}

function mSubMenu() {
	let subBtn = $('.js-sub-menu li .depth02-wrap .depth02-btn');

	subBtn.on('click', function(){
		$('.depth02-list').slideToggle('fast');
		$(this).find('img').toggleClass('down up');
	});

	$('.sub-contents').on('click', function (e) {
        $('.depth02-list').slideUp();
	});
}

function mainVisual(){
    if($('.js-main-visual .main-visual-con').length > 1){
        $('.js-main-visual').not('.slick-initialized').slick({
            dots: true,
            arrows: false,
			autoplay: true,
			autoplaySpeed: 3000,
			speed: 1000,
			infinite: true,
		});
    }
}

function speakersRolling(){
    if($('.js-speakers-rolling .speakers-con').length > 5){
        $('.js-speakers-rolling').not('.slick-initialized').slick({
            dots: false,
            arrows: true,
            prevArrow: $('.btn-speakers-prev'),
            nextArrow: $('.btn-speakers-next'),
			autoplay: false,
			autoplaySpeed: 3000,
			autoHeight: true,
			speed: 1000,
			infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
			responsive: [{
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
			{
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
					slidesToScroll: 1,
                }
            }]
		});
    }
}

function newsRolling(){
    if($('.js-news-rolling .news-con').length > 2){
        $('.js-news-rolling').not('.slick-initialized').slick({
            dots: false,
            arrows: true,
            prevArrow: $('.btn-news-prev'),
            nextArrow: $('.btn-news-next'),
			autoplay: false,
			autoplaySpeed: 3200,
			speed: 1000,
			infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});
    }
}

function newsLetterRolling(){
    if($('.js-newsletter-rolling .newsletter-con').length > 2){
        $('.js-newsletter-rolling').not('.slick-initialized').slick({
            dots: false,
            arrows: true,
            prevArrow: $('.btn-newsletter-prev'),
            nextArrow: $('.btn-newsletter-next'),
			autoplay: true,
			autoplaySpeed: 3500,
			speed: 1000,
			infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});
    }
}

function sponsorRolling(){
    $('.js-sponsor-list').each(function(e){
        if($(this).children('a').length > 6){
            $(this).not('.slick-initialized').slick({
                dots: false,
                arrows: true,
                prevArrow: $(this).parent('.sponsor-rolling-wrap').children('.btn-slick-prev'),
                nextArrow: $(this).parent('.sponsor-rolling-wrap').children('.btn-slick-next'),
                autoplay: true,
                autoplaySpeed: 3000,
                speed: 1000,
                infinite: true,
                slidesToShow: 6,
                slidesToScroll: 1,
				responsive: [{
					breakpoint: 1300,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
					}
				}]
            });
        }
    });
}

function tabMenu(){
    $('.js-tab-menu li').on('click',function(e){
        var cnt = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.js-tab-con').hide().eq(cnt).stop().fadeIn();
    });
}
function tabMenu2depth(){
    $('.js-tab-menu2 li').on('click',function(e){
        var cnt = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.js-tab-con2').hide().eq(cnt).stop().fadeIn();
    });
}

function btnTop(){
	$('.js-btn-top').on('click',function(e){
	  $('html, body').stop().animate({'scrollTop':0},400);
		return false;
	});
}

function touchHelp(){
	$('.scroll-x').each(function(e){
		if($(this).height() < 180){
			$(this).addClass('small');
		}
		$(this).scroll(function(e){
			$(this).removeClass('touch-help');
		});
	});
}

function tabArea () {
	if ($("div.tab-area").length) {
		$("ul.tab-menu a").on("click", function(){
			var nIdx = $(this).parent().index();
			if (nIdx > 0) 	{
				var viewNum = nIdx - 1;
				$("div.tab-con").not(':eq(' + viewNum + ')').slideUp();
				$("div.tab-con").eq(viewNum).slideDown();
			} else {
				$("div.tab-con").slideDown();
			}

			$("ul.tab-menu li").removeClass("on").eq(nIdx).addClass("on");
			return false
		});
	}
}

function innerTabArea () {
	if ($("div.js-tab-area").length) {

		$("div.inner-tab-con").eq(0).show();

		$("ul.inner-tab-menu a").on("click", function(){

			var tabArea = $(this).parent().parent().parent().parent();
			var nIdx = $(this).parent().index();


			if (nIdx == 0) {
				tabArea.find($("div.inner-tab-con")).eq(0).slideDown();
				tabArea.find($("div.inner-tab-con")).not(':eq(' + 0 + ')').slideUp();
			}
			else if (nIdx > 0) 	{
				var viewNum = nIdx;
				tabArea.find($("div.inner-tab-con")).not(':eq(' + viewNum + ')').slideUp();
				tabArea.find($("div.inner-tab-con")).eq(viewNum).slideDown();
			} else {
				tabArea.find($("div.inner-tab-con")).slideDown();
			}

			tabArea.find($("ul.inner-tab-menu li")).removeClass("on").eq(nIdx).addClass("on");
			return false
		});
	}
}