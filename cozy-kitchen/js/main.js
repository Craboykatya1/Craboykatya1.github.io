$(function(){
	var body = document.getElementsByTagName('body')[0];
	var bodyScrollTop = null;
	var locked = false;
	function lockScroll() {
		if (!locked) {
			bodyScrollTop = (typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
			body.classList.add('scroll-locked');
			body.style.top = ` -${bodyScrollTop - $('header').outerHeight()}px`;
			locked = true;
		};
	}

	function unlockScroll() {
		if (locked) {
			body.classList.remove('scroll-locked');
			body.style.top = null;
			locked = false;
			$('html, body').animate({ scrollTop: bodyScrollTop }, 0);
		}
	}
	function valid(input_id) {
		input_val = $(input_id).val();
		if (input_id.selector === ".phone-inp" && input_val === '+7(___) ___-__-__') {
			$(input_id).addClass('_valid');
			return;
		}
	
		if (!input_val) {
			$(input_id).addClass('_valid');
		} else {
			$(input_id).removeClass('_valid');
		}
	}
	
	function validMail(input_id) {
		input_val = $(input_id).val();
	
		if (!input_val || input_val.indexOf('@') == '-1') {
			$(input_id).addClass('_valid');
		} else {
			$(input_id).removeClass('_valid');
		}
	}
	
	const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
	
	function onInput(input_id) {
		if (isEmailValid($(input_id).val())) {
			$(input_id).removeClass('_valid');
			return true;
		} else {
			$(input_id).addClass('_valid');
			return false;
		}
	}
	
	function isEmailValid(value) {
		return EMAIL_REGEXP.test(value);
	}
	function closeModal(){
		unlockScroll();
		$('.popup__bg').css({"display":"none"});
		$('.popup__block').css({"display":"none"});
		$('.popup').removeClass('_open');
	}
	function openModal(){
		lockScroll();
		$('.popup').addClass('_open');
		$('.popup__bg').fadeIn(200);
		setTimeout(function(){
			$('.popup__block').fadeIn(200);
		},200);
	}
$(document).ready(function(e) {
	/* Header */
	$(window).scroll(function(){
		if ($(this).scrollTop() > 1) {
			$('header').addClass('_scroll');
			
		} else {
			$('header').removeClass('_scroll');
		}
	});
	/* Якорь */
	$("a[href*='#']").on("click", function(e){
		let anchor = $(this);
		$('html, body').stop().animate({
		  scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
		return false;
	});
	/* Галлерея */
	if ($('.gallery').length) {
		const swiper = new Swiper('.gallery__slider', {
			spaceBetween: 16,
			slidesPerView: 1,
			slidesPerGroup: 1,
			waitForTransition: false,
			watchOverflow: true,
			pagination: {
				el: '.gallery__slider-pagination',
			},
            navigation: {
                nextEl: '.gallery__next',
                prevEl: '.gallery__prev',
            },
			breakpoints: {
				769: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},
		});
	}
	/* FAQ */
	$('.faq__list-item-question').click(function(){
		if($(this).hasClass('_open')){
			$(this).removeClass('_open');
			$(this).closest('.faq__list-item').find('.faq__list-item-answer').slideUp(200);
		}
		else{
			$(this).addClass('_open');
			$(this).closest('.faq__list-item').find('.faq__list-item-answer').slideDown(200);
		}
	});
	/* Форма */
	$('input[name=form-phone]').mask("+7(999) 999-99-99");
	$('.form__block-btn').click(function(e){
		e.preventDefault();
		valid('input[name=form-name]');
		onInput($('input[name=form-email]'));
		valid('input[name=form-phone]');
		if ($('input[name=form-name]').val() != '' && $('input[name=form-phone]').val() != '' && $('input[name=form-email]').val().indexOf('@') != '-1' && $('input[name=form-email]').val() != '') {
            openModal();
        }
	});
	$('input[name=form-name]').on('change input keyup paste', function() {
		$(this).val($(this).val().replace(/[^a-zа-яё\s]/gi, ''));
		valid($(this));
	});
	$('input[name=form-subname]').on('change input keyup paste', function() {
		$(this).val($(this).val().replace(/[^a-zа-яё\s]/gi, ''));
	});
	$('input[name=form-phone]').on('change input keyup paste', function() {
		valid($(this));
	});
	$('input[name=form-email]').on('change input keyup paste', function() {
		onInput($(this));
	});
	/* popup */
	$(document).mouseup(function(e) {
		if ($('.popup').hasClass('_open')) {
			var div = $('.popup__block');
			if (!div.is(e.target) &&
				div.has(e.target).length === 0) {
				closeModal();
			}
		}
		$('.popup__block-btn').click(function(){
			closeModal();
		});
	});
	new WOW().init();
});
});
