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
	/* Валидация */
	function valid(input_id){
		input_val = $(input_id).val();
		if(!input_val)
			{
			/* $(input_id).css({'border-bottom':'1px solid #e40033'}); */
			$(input_id).parent().addClass('_valid');
			}
		else
			{
			/* $(input_id).css('border-bottom','1px solid rgba(255, 255, 255, 0.37)'); */
			$(input_id).parent().removeClass('_valid');
			}
	}
	function validMail(input_id){
		input_val = $(input_id).val();
		if(!input_val || input_val.indexOf('@') == '-1')
			{
				$(input_id).parent().addClass('_valid');
			}
		else
			{
				$(input_id).parent().removeClass('_valid');
			}
	}
	function clear(input_id,border,backg){
		if(border){$(input_id).css("border",border);}
		if(backg){$(input_id).css("color",backg);}
		$(input_id).val('');
	}
	/* Загрузка html */
	function include(selector,address){
		fetch(address).then(resp => resp.text())
			.then(data => { document.querySelector(selector).innerHTML = data } )
	}
$(document).ready(function(e) {
	let aboutHeight = $('.about__text ').outerHeight();
	$('.about__img').css({"height":aboutHeight})
	$(window).resize(function() {
		let aboutHeight = $('.about__text ').outerHeight();
		$('.about__img').css({"height":aboutHeight})
	});
	/* Слайдер */
	if($('.card__slider').length){
		const swiper = new Swiper('.card__slider', {
			spaceBetween: 0,
			slidesPerView: 1,
			slidesPerGroup: 1,
			watchOverflow: true,
			speed: 800,
			/* loop: true, */
			pagination: {
				el: '.card__slider-pagination'
			}
		});
	}
	/* Слайдер рекомендация врачей */
	if($('.recommendation__slider').length){
		const swiper = new Swiper('.recommendation__slider', {
			spaceBetween: 10,
			slidesPerView: 1,
			slidesPerGroup: 1,
			watchOverflow: true,
			speed: 800,
			navigation: {
				nextEl: '.recommendation__next',
				prevEl: '.recommendation__prev',
			},
			breakpoints: {
				1600: {
					spaceBetween: 20,
					slidesPerView: 4,
				},
				1250: {
					spaceBetween: 10,
					slidesPerView: 4,
				},
				900: {
					spaceBetween: 10,
					slidesPerView: 3,
				},
				600: {
					spaceBetween: 10,
					slidesPerView: 2,
				}
			}
		});
	}
	/* Слайдер видео */
	if($('.video__slider').length){
		const swiper = new Swiper('.video__slider', {
			spaceBetween: 10,
			slidesPerView: 1,
			slidesPerGroup: 1,
			watchOverflow: true,
			speed: 800,
			navigation: {
				nextEl: '.video__next',
				prevEl: '.video__prev',
			},
			breakpoints: {
				1600: {
					spaceBetween: 20,
					slidesPerView: 3,
				},
				900: {
					spaceBetween: 10,
					slidesPerView: 3,
				},
				600: {
					spaceBetween: 10,
					slidesPerView: 2,
				}
			}
		});
	}
	/* Работы с input */
	$('input[type="tel"]').mask("+7(999) 99-99-999");
	$('.affiliate__inps-block').each(function(ind){
		let inputVal = $(this).find('input, textarea').val();
		if(!inputVal){
			$(this).removeClass('_value');
		}
		else{
			$(this).addClass('_value');
		}
	});
	$('.affiliate__inps-block').click(function(){
		$(this).addClass('_value');
		$(this).find('input, textarea').focus();
	});
	$(document).mouseup(function (e){ 
		var div = $('.affiliate__inps-block input[name="phone"]').parent(); 
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
				let inputVal = $('.affiliate__inps-block input[name="phone"]').val();
				if(!inputVal){
					$('.affiliate__inps-block input[name="phone"]').closest('.affiliate__inps-block').removeClass('_value');
				}
				else{
					$('.affiliate__inps-block input[name="phone"]').closest('.affiliate__inps-block').addClass('_value');
				}
		}
	});
	$(document).mouseup(function (e){ 
		var div = $('.affiliate__inps-block input[name="name"]').parent(); 
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
				let inputVal = $('.affiliate__inps-block input[name="name"]').val();
				if(!inputVal){
					$('.affiliate__inps-block input[name="name"]').closest('.affiliate__inps-block').removeClass('_value');
				}
				else{
					$('.affiliate__inps-block input[name="name"]').closest('.affiliate__inps-block').addClass('_value');
				}
		}
	});
	$(document).mouseup(function (e){ 
		var div = $('.affiliate__inps-block textarea').parent(); 
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
				let inputVal = $('.affiliate__inps-block textarea').val();
				if(!inputVal){
					$('.affiliate__inps-block textarea').closest('.affiliate__inps-block').removeClass('_value');
				}
				else{
					$('.affiliate__inps-block textarea').closest('.affiliate__inps-block').addClass('_value');
				}
		}
	});
	$(document).find('.services__form-inps-block').each(function(ind){
		let inputVal = $(this).find('input, textarea').val();
		if(!inputVal){
			$(this).removeClass('_value');
		}
		else{
			$(this).addClass('_value');
		}
	});
	$(document).on('click', '.services__form-inps-block', function(){
		$(this).addClass('_value');
		$(this).find('input, textarea').focus();
		$(this).find('input[type="tel"]').mask("+7(999) 99-99-999");
	});
	$(document).mouseup(function (e){ 
		var div = $('.services__form-inps-block input[name="phone"]').parent(); 
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
				let inputVal = $('.services__form-inps-block input[name="phone"]').val();
				if(!inputVal){
					$('.services__form-inps-block input[name="phone"]').closest('.services__form-inps-block').removeClass('_value');
				}
				else{
					$('.services__form-inps-block input[name="phone"]').closest('.services__form-inps-block').addClass('_value');
				}
		}
	});
	$(document).mouseup(function (e){ 
		var div = $('.services__form-inps-block input[name="name"]').parent(); 
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
				let inputVal = $('.services__form-inps-block input[name="name"]').val();
				if(!inputVal){
					$('.services__form-inps-block input[name="name"]').closest('.services__form-inps-block').removeClass('_value');
				}
				else{
					$('.services__form-inps-block input[name="name"]').closest('.services__form-inps-block').addClass('_value');
				}
		}
	});
	$(document).mouseup(function (e){ 
		var div = $('.services__form-inps-block textarea').parent(); 
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
				let inputVal = $('.services__form-inps-block textarea').val();
				if(!inputVal){
					$('.services__form-inps-block textarea').closest('.services__form-inps-block').removeClass('_value');
				}
				else{
					$('.services__form-inps-block textarea').closest('.services__form-inps-block').addClass('_value');
				}
		}
	});
	/* Форма */
	$('.affiliate-btn').click(function(){
		valid('.affiliate__inps-block input[name="phone"]');
		valid('.affiliate__inps-block input[name="name"]');
		if($('.affiliate__inps-block input[name="phone"]').val() != '' && $('.affiliate__inps-block input[name="name"]').val() != ''){
			console.log('go');
		}
	});
	$(document).on('click', '.services__form-btn', function(){
		valid('.services__form-inps-block input[name="phone"]');
		valid('.services__form-inps-block input[name="name"]');
		if($('.services__form-inps-block input[name="phone"]').val() != '' && $('.services__form-inps-block input[name="name"]').val() != ''){
			console.log('go');
		}
	});
	/* Карточки услуг */
	$('.our-services__item').click(function(){
		lockScroll();
		let serviceId = $(this).attr('data-id');
		if($('#'+serviceId).length){
			$('.services-card-hid').fadeIn(200);
		}
		else{
			$('.'+serviceId).append('<div class="services-card__container" id="'+serviceId+'"></div>');
			include('#'+serviceId,'/services-card/'+serviceId+'.html');
			$('.services-card-hid').fadeIn(200);
		}
		$('.page-shadow').fadeIn(200);
		$('.'+serviceId).fadeIn(200);
		$('.services-card-hid').mCustomScrollbar({axis:"y"});
	});
	/* $(document).on('click', '.services__form-inps-block', function(){
		$(this).find('input[type="tel"]').mask("+7(999) 99-99-999");
	}); */
	$(document).mouseup(function (e){ 
		var div = $('.services-card-hid'); 
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
				unlockScroll();
				div.fadeOut(200);
				$('.page-shadow').fadeOut(200);
				$('.services-block').fadeOut(200);
		}
	});
	/* Мобильное меню */
	$('.header__butter').click(function(){
		if($(this).hasClass('_open')){
			$(this).removeClass('_open');
			$('.header').removeClass('_open');
			$('.header__menu').fadeOut(200);
			unlockScroll();
		}
		else{
			$(this).addClass('_open');
			$('.header').addClass('_open');
			$('.header__menu').fadeIn(200);
			lockScroll();

		}
	});
	/* Якорь */
	$('.footer__menu-item').click(function(){
		var el = $(this).attr('data-id');
		$('html').animate({
			scrollTop: $('.'+el).offset().top
		}, 1000);
		return false;
	});
	$('.header__menu-item').click(function(){
		var el = $(this).attr('data-id');
		$('html').animate({
			scrollTop: $('.'+el).offset().top
		}, 1000);
		return false;
	});
	/* placeholders */
	placeh('.affiliate__inps-block input');
	placeh('.affiliate__inps-block textarea');
});
});
