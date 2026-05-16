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
	const swiper = new Swiper(".product__item-info-images", {
		loop: false,
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,        
		},
		on: {
			slideChange: function (swiperInstance) {
				let productItem = $(this.el).closest('.product__item');
				productItem.find('.product__item-colors-item').siblings().removeClass('_active');
				productItem.find('.product__item-colors-item').eq(swiperInstance.realIndex).addClass('_active');
			},
			init() {
				this.el.addEventListener('mouseenter', () => {
					this.autoplay.stop();
				});

				this.el.addEventListener('mouseleave', () => {
					this.autoplay.start();
				});
			},
		},
	});
	$('.product__item-colors-item').click(function(){
		let indEl = $(this).index();
		let productIndex = $(this).closest('.product__item').index();
		$(this).siblings().removeClass('_active');
		$(this).addClass('_active');
		swiper[productIndex].slideTo(indEl);
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
			$.fancybox.open({
				src: '#modal',
				type: 'inline'
			});
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
		$.fancybox.open({
			src: '#modal',
			type: 'inline'
		});
	});
	$('.modal-block__window-btn').click(function(e){
		let valNumber = $('input[name=phone]').val().replace(/\D/g, '');
		if(valNumber.length==11){
			e.preventDefault();
			$.fancybox.close();
			$.fancybox.open({
				src: '#modal-final',
				type: 'inline'
			});
		}
		else{
			$('input[name=phone]').addClass('_valid');
		}
	});
	$('input[name=phone]').on('change input keyup paste', function() {
		$(this).removeClass('_valid');
	});
	new WOW().init();
});
});
