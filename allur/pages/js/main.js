$(function(){
    var body = document.getElementsByTagName('body')[0];
	var bodyScrollTop = null;
	var locked = false;
	function lockScroll(){
		if(!locked){
			bodyScrollTop = (typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
			body.classList.add('scroll-locked');
			body.style.top = ` -${bodyScrollTop}px`;
			locked = true;
		};
	}
	function unlockScroll(){
		if(locked){
			body.classList.remove('scroll-locked');
			body.style.top = null;
			/* window.scrollTo(0, bodyScrollTop); */
			locked = false;
			$('html, body').animate( { scrollTop: bodyScrollTop }, 0 );
		}
	}
	function placeh(place_tag){
		$(place_tag).focus(function(){
				$(this).attr("placeholder", ""); 
			}).blur(function(){
					$(this).attr("placeholder", $(this).data('empty')); 
			}).each(function(){
				 $(this).attr("placeholder", $(this).data('empty'));  
			});
	}
    function chekb(class_one,class_activ){
		if(class_one.children('input').prop('checked') == false)
			{
			class_one.addClass(class_activ);
			class_one.children('input').attr('checked','checked');
			}
		else
			{
			class_one.removeClass(class_activ);
			class_one.children('input').removeAttr('checked');
			}
    }
    function chekb_val(class_one,class_activ){
        if(class_one.children('input').prop('checked') == true)
                {
                class_one.addClass(class_activ);
                class_one.children('input').attr('checked','checked');
                }
    }
$(document).ready(function(e) {
	if($(window).width() > 1100){
		$('#fullpage').fullpage({
			//options here
			autoScrolling:true,
			scrollHorizontally: true
		});
	}
	$(window).resize(function() {
		
	});
	$(window).on('click', '.modal__close', function(){
		unlockScroll();
		$('.page-shadow').fadeOut(200);
		$('.modal').fadeOut(200);
	});
	$(window).on('click', '.js-modal', function(){
		lockScroll();
		let idEl = $(this).attr('data-id');
		$('.page-shadow').fadeIn(200);
		$('#'+idEl).fadeIn(200);
	});
	$(window).on('click', '.modal__btn', function(){
		$('.modal').fadeOut(200);
		setTimeout(function(){
			$('#final').fadeIn(200);
		},200);
	});
	$('.header__butter').click(function(){
		if($(this).hasClass('_open')){
			/* unlockScroll(); */
			$(this).removeClass('_open');
			$('.header__menu-m').slideUp(200);
		}
		else{
			/* lockScroll(); */
			$(this).addClass('_open');
			$('.header__menu-m').slideDown(200);
		}
	});
	$(document).scroll(function() {
		if($(window).width() < 1100){
			if ($(this).scrollTop() > 100) {
				/* console.log($(this).scrollTop()); */
				let posY =  $(this).scrollTop() + 32;
				$('.header__butter').css({"position":"absolute","top":posY,"right":"34px"});
				$('.header__butter').addClass('_black');
			} else {
				$('.header__butter').css({"position":"relative","top":"auto","right":"auto"});
				$('.header__butter').removeClass('_black');
			}
		}
    });
    if($('.factories__list').length){
        const swiper = new Swiper('.factories__list',{
            spaceBetween: 20,
            slidesPerView: 'auto',
			/* loop: true, */
			/* waitForTransition: false,
			watchOverflow: true, */
			slidesPerView: 2,
			grid: {
				rows: 2,
			},
            navigation: {
                nextEl: '.factories__next',
                prevEl: '.factories__prev',
            },
			breakpoints: {
				1101: {
					spaceBetween: 74,
            		slidesPerView: 6,
					grid: {
						rows: 1,
					},
				},
                769: {
					spaceBetween: 13,
            		slidesPerView: 3,
				},
                /* 601: {
					spaceBetween: 10,
					slidesPerView: 1.31,
				} */
			}
        });
    }
	if($(window).width() <= 1100){
		if($('.event__list').length){
			const swiper = new Swiper('.event__list',{
				spaceBetween: 520,
				slidesPerView: 1,
				navigation: {
					nextEl: '.event__next',
					prevEl: '.event__prev',
				},
				breakpoints: {
					/* 1101: {
						spaceBetween: 74,
						slidesPerView: 6,
					}, */
					/* 1201: {
						spaceBetween: 13,
						slidesPerView: 2.131,
					},
					601: {
						spaceBetween: 10,
						slidesPerView: 1.31,
					} */
				}
			});
		}
		if($('.individual__list').length){
			const swiper = new Swiper('.individual__list',{
				spaceBetween: 520,
				slidesPerView: 1,
				navigation: {
					nextEl: '.individual__next',
					prevEl: '.individual__prev',
				},
				pagination:{
					el: '.individual__pagination'
				},
				breakpoints: {
					/* 1101: {
						spaceBetween: 74,
						slidesPerView: 6,
					}, */
					/* 1201: {
						spaceBetween: 13,
						slidesPerView: 2.131,
					},
					601: {
						spaceBetween: 10,
						slidesPerView: 1.31,
					} */
				}
			});
		}
	}
	if($(window).width() <= 768){
		if($('.offers__list').length){
			const swiper = new Swiper('.offers__list',{
				spaceBetween: 50,
				slidesPerView: 1,
				pagination:{
					el: '.offers__pagination'
				},
				breakpoints: {
					/* 1101: {
						spaceBetween: 74,
						slidesPerView: 6,
					}, */
					/* 1201: {
						spaceBetween: 13,
						slidesPerView: 2.131,
					},
					601: {
						spaceBetween: 10,
						slidesPerView: 1.31,
					} */
				}
			});
		}
		if($('.about-down__imgs').length){
			const swiper = new Swiper('.about-down__imgs',{
				spaceBetween: 50,
				slidesPerView: 1,
				pagination:{
					el: '.about-down__pagination'
				},
				breakpoints: {
					/* 1101: {
						spaceBetween: 74,
						slidesPerView: 6,
					}, */
					/* 1201: {
						spaceBetween: 13,
						slidesPerView: 2.131,
					},
					601: {
						spaceBetween: 10,
						slidesPerView: 1.31,
					} */
				}
			});
		}
		if($('.gallery__list').length){
			const swiper = new Swiper('.gallery__list',{
				spaceBetween: 50,
				slidesPerView: 1,
				pagination:{
					el: '.gallery__pagination'
				},
				breakpoints: {
					/* 1101: {
						spaceBetween: 74,
						slidesPerView: 6,
					}, */
					/* 1201: {
						spaceBetween: 13,
						slidesPerView: 2.131,
					},
					601: {
						spaceBetween: 10,
						slidesPerView: 1.31,
					} */
				}
			});
		}
		if($('.team__list').length){
			const swiper = new Swiper('.team__list',{
				spaceBetween: 300,
				slidesPerView: 1,
				navigation: {
					nextEl: '.team__next',
					prevEl: '.team__prev',
				},
				breakpoints: {
					/* 1101: {
						spaceBetween: 74,
						slidesPerView: 6,
					}, */
					/* 1201: {
						spaceBetween: 13,
						slidesPerView: 2.131,
					},
					601: {
						spaceBetween: 10,
						slidesPerView: 1.31,
					} */
				}
			});
		}
	}
    $('.form__checks-item').each(function () {
		chekb_val($(this),'_active');
	});
	$('.form__checks-item').click(function(){
		chekb($(this),'_active');
	});
    $('.modal__checks-item').each(function () {
		chekb_val($(this),'_active');
	});
	$('.modal__checks-item').click(function(){
		chekb($(this),'_active');
	});
    placeh('.modal__inps input');
    placeh('.form__inps input');

	
});
});
