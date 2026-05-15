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
		console.log(input_val)
		if (input_id[0].className === ".modal-block__window-inp" && input_val === '+7(___) ___-__-__') {
			$(input_id).addClass('_valid');
			return;
		}
	
		if (!input_val) {
			$(input_id).addClass('_valid');
		} else {
			$(input_id).removeClass('_valid');
		}
	}
	function closeModal(){
		unlockScroll();
		$('.modal-block__bg').css({"display":"none"});
		$('.modal-block__window').css({"display":"none"});
		$('.modal-block__final').css({"display":"none"});
		$('.modal-block').removeClass('_open');
	}
	function openModal(){
		lockScroll();
		$('.modal-block').addClass('_open');
		$('.modal-block__bg').fadeIn(200);
		setTimeout(function(){
			$('.modal-block__window').fadeIn(200);
		},200);
	}
$(document).ready(function(e) {
	$(window).resize(function() {
		
	});
	/* header анимация */
	$(window).scroll(function(){
		if($(window).width() > 768){
			if ($(this).scrollTop() > 1) {
				$('.header__top').slideUp(200);
				
			} else {
				$('.header__top').slideDown(200);
			}
		}
	});
	/* Переключение цветов в карточке продукта */
	$('.product__item-colors-item').click(function(){
		let indEl = $(this).index();
		let productItem = $(this).closest('.product__item');
		if($(this).hasClass('_active')){

		}
		else{
			$(this).siblings().removeClass('_active');
			$(this).addClass('_active');
			productItem.find('.product__item-info-images').find('img').css({"display":"none"});
			productItem.find('.product__item-info-images').find('img').removeClass('_active');
			productItem.find('.product__item-info-images').find('img').eq(indEl).fadeIn(200);
			productItem.find('.product__item-info-images').find('img').eq(indEl).addClass('_active');
		}
	});
	/* Меню моделей */
	$('.header__menu-model-burger').click(function(){
		if($(this).hasClass('_active')){
			$(this).removeClass('_active');
			$('.header__menu-model-block').slideUp(200);
		}
		else{
			$(this).addClass('_active');
			$('.header__menu-model-block').slideDown(200);
		}
	});
	$('.header__top-burger').click(function(){
		if($(this).hasClass('_active')){
			$(this).removeClass('_active');
			$('.header__menu').removeClass('_active');
			unlockScroll();
		}
		else{
			$(this).addClass('_active');
			$('.header__menu').addClass('_active');
			lockScroll();
		}
	});
	/* Кнопка первого экрана */
	$('.first-screen__btn').click(function(){
		if($(window).width() > 991){
			if($('.modal-block').hasClass('_open')){}
			else{
				openModal();
			}
		}
		else{
			let anchor = $(this).attr('data-id');
			$('html, body').stop().animate({
			scrollTop: $(anchor).offset().top - 76
			}, 1000);
			return false;
		}
	});
	/* Модальное окно */
	$('input[name=phone]').mask("+7(999) 999-99-99");
	$('.modal').click(function(e){
		e.preventDefault();
		if($('.modal-block').hasClass('_open')){}
		else{
			openModal();
		}
	});
	$(document).mouseup(function(e) {
		if ($('.modal-block').hasClass('_open')) {
			var div = $('.modal-block__window');
			if (!div.is(e.target) &&
				div.has(e.target).length === 0) {
				closeModal();
			}
		}
	});
	$('.modal-block__window-btn').click(function(){
		if($('input[name=phone]').val() != ''){
			$('.modal-block__window').css({"display":"none"});
			$('.modal-block__final').fadeIn(200);
			setTimeout(function(){
				closeModal();
			},2000);
		}
	});
	new WOW().init();
});
});
