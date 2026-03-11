$(function () {
	var body = document.getElementsByTagName('body')[0];
    var bodyScrollTop = null;
    var locked = false;
    function lockScroll() {
        if (!locked) {
            bodyScrollTop = (typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            body.classList.add('scroll-locked');
            body.style.top = ` -${bodyScrollTop}px`;
            locked = true;
        };
    }

    function unlockScroll() {
        if (locked) {
            body.classList.remove('scroll-locked');
            body.style.top = null;
            /* window.scrollTo(0, bodyScrollTop); */
            locked = false;
            $('html, body').animate({ scrollTop: bodyScrollTop }, 0);
        }
    }
	function placeh(place_tag) {
		$(place_tag).focus(function () {
			$(this).attr("placeholder", "");
		}).blur(function () {
			$(this).attr("placeholder", $(this).data('empty'));
		}).each(function () {
			$(this).attr("placeholder", $(this).data('empty'));
		});
	}
	function handleInputRange(event) {
		event.target.parentNode.parentNode.style.setProperty(
			'--value',
			event.target.value
		)
		event.target.nextElementSibling.value = event.target.value;
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
	$(document).ready(function (e) {
		$("a[href*='#']").on("click", function(e){
			let btnScroll = $(this);
			$('html, body').stop().animate({
			  scrollTop: $(btnScroll.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
			return false;
		});
		const range = $('.form__range-input');
		range.change('input', handleInputRange);

		const realInput = document.getElementById('form__file');
		realInput.addEventListener('change', function () {
			const fileName = realInput.value.split('\\').pop();
			document.querySelector('.form__file-name').textContent = fileName || 'Прикрепить файл';
		});

		$('.form__select-top').click(function () {
			if ($(this).hasClass('_active')) {
				$(this).removeClass('_active');
				$(this).closest('.form__select').find('.form__select-list').slideUp(200);
			} else {
				$(this).addClass('_active');
				$(this).closest('.form__select').find('.form__select-list').slideDown(200);
				$(this).closest('.form__select').find('.form__select-list').mCustomScrollbar({axis:"y"});
			}
		});
		$(document).mouseup(function (e) {
			var div = $('.form__select');
			if (!div.is(e.target) &&
				div.has(e.target).length === 0) {
				div.find('.form__select-top').removeClass('_active');
				div.find('.form__select-list').slideUp(200);
			}
		});
		$('.form__select-list-item-label').click(function () {
			let ElSelect = $(this).closest('.form__select');
			$(this).parent('span').siblings().children('.form__select-list-item-label').removeClass('active-label');
			$(this).addClass('active-label');
			$(this).parent('span').siblings().removeClass('_active');
			$(this).parent('span').addClass('_active');
			ElSelect.find('.form__select-top').removeClass('_active');
			var ind = $(this).closest('.form__select-list-item').index();
			var valSel = $(this).html();
			var spanSel = ElSelect.find('.form__select-top').find('.form__select-top-name').text();
			ElSelect.find('.form__select-top').attr('data-val', valSel);
			ElSelect.find('.form__select-top').find('.form__select-top-name').html(valSel);
			$(this).parent('span').siblings().children('.form__select-list-item-input').removeAttr('checked');
			$(this).parent('span').children('.form__select-list-item-input').attr('checked', 'checked');
			$(this).removeClass('_active');
			$(this).closest('.form__select-list').slideUp(200);
			ElSelect.find('.bs-select option').eq(ind).prop('selected', true);
		});
		placeh('.form__input');
		$('.form__btn').click(function (e) {
			valid($('#form-name'));
			onInput($('#form-mail'));
			if ($('#form-name').val() != '' && $('#form-mail').val().indexOf('@') != '-1' && $('#form-mail').val() != '' && onInput($('#form-mail'))){
				lockScroll();
				$('.modal').fadeIn(400);
				setTimeout(function(){
					$('.modal__block').fadeIn(200);
				},200);
				setTimeout(function(){
					$('.modal__block').fadeOut(200);
					unlockScroll()
				},3000);
				setTimeout(function(){
					$('.modal').fadeOut(400);
				},3200);
			}
		});

		$(window).resize(function () {

		});
		new WOW().init();
		/* header */
		$(window).scroll(function(){
			if ($(this).scrollTop() > 150) {
				$('.header').addClass('_scroll');
				$('main').addClass('_scroll');
				
			} else {
				$('.header').removeClass('_scroll');
				$('main').removeClass('_scroll');
			}
		});
		/* mobile menu */
		$('.header__butter').click(function(){
			if($(this).hasClass('_open')){
				unlockScroll();
				$(this).removeClass('_open');
				$('.header__menu').removeClass('_open');
				$('.header').removeClass('_open');
				$('main').css({"margin-top":"0"});
			}
			else{
				lockScroll();
				$(this).addClass('_open');
				$('.header__menu').addClass('_open');
				$('.header').addClass('_open');
				$('main').css({"margin-top":"60px"});
			}
		});
	});
});
