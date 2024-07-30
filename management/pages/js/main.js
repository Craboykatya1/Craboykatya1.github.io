$(function(){
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
            locked = false;
            $('html, body').animate({ scrollTop: bodyScrollTop }, 0);
        }
    }

    function chekb(class_one, class_activ) {
        if (class_one.hasClass(class_activ)) {
            class_one.removeClass(class_activ);
            class_one.children('input').removeAttr('checked');
        } else {

            class_one.addClass(class_activ);
            class_one.children('input').attr('checked', 'checked');
        }
    }

    function chekb_val(class_one, class_activ) {
        if (class_one.children('input').prop('checked') == true) {
            class_one.addClass(class_activ);
            class_one.children('input').attr('checked', 'checked');
        }
    }

    function placeh(place_tag) {
        $(place_tag).focus(function() {
            $(this).attr("placeholder", "");
        }).blur(function() {
            $(this).attr("placeholder", $(this).data('empty'));
        }).each(function() {
            $(this).attr("placeholder", $(this).data('empty'));
        });
    }

    function valid(input_id) {
        input_val = $(input_id).val();
        if (input_id.selector === ".phone-inp" && input_val === '+7(___) ___-__-__') {
            $(input_id).parent().addClass('_valid');
            return;
        }

        if (!input_val) {
            $(input_id).parent().addClass('_valid');
        } else {
            $(input_id).parent().removeClass('_valid');
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
            $(input_id).parent().removeClass('_valid');
            return true;
        } else {
            $(input_id).parent().addClass('_valid');
            return false;
        }
    }

    function isEmailValid(value) {
        return EMAIL_REGEXP.test(value);
    }

    function validChek(input_id) {
        input_val = $(input_id).val();

        if ($(input_id).prop("checked")) {
            $(input_id).parent().removeClass('_valid');
        } else {
            $(input_id).parent().addClass('_valid');
        }
    }

    function clear(input_id, border, backg) {
        if (border) {
            $(input_id).css("border", border);
        }

        if (backg) {
            $(input_id).css("color", backg);
        }

        $(input_id).val('');
    }
$(document).ready(function(e) {
	$(window).resize(function() {
		
	});
    /* fancybox */
    if ($('[data-fancybox]').length) {
        Fancybox.bind('[data-fancybox]', {
            animated: false,
            showClass: false,
            hideClass: false,
            clickSlide: 'false',
            clickOutside: 'false',
            touch: false,
            closeClickOutside: true,
            infinite: false,
            placeFocusBack: false,
            youtube: {
                controls: 1,
                showinfo: 0
            },

            Carousel: {

            },
            Thumbs: false,

            Image: {
                // Disable animation from/to thumbnail on start/close
                zoom: false,

                // Disable zoom on scroll event
                wheel: false,

                // Disable zoom on image click
                click: false,
            }
        });
    }
	if ($('.home-top__slider').length) {
		const swiper = new Swiper('.home-top__slider', {
			spaceBetween: 30,
			slidesPerView: 1,
			touchRatio: 1,
			allowTouchMove: false,
			loop: true,
			autoplay: {
				delay: 3000,
			},
			pagination: {
				el: '.home-top__pagination',
			}
		});
	}
	if ($('.graduates__slider').length) {
		const swiper = new Swiper('.graduates__slider', {
			spaceBetween: 0,
			slidesPerView: 1,
			touchRatio: 1,
			allowTouchMove: false,
			loop: true,
			autoplay: {
				delay: 3000,
			},
			pagination: {
				el: '.graduates__pagination',
			}
		});
	}
	if ($('.teachers__slider').length) {
		const swiper = new Swiper('.teachers__slider', {
			spaceBetween: 20,
			slidesPerView: 4,
			slidesPerGroup: 4,
			touchRatio: 1,
			allowTouchMove: false,
            navigation: {
                nextEl: '.teachers__next',
                prevEl: '.teachers__prev',
            },
            pagination: {
				el: '.teachers__pagination',
			}
		});
	}
	if ($('.reviews-students__slider').length) {
		const swiper = new Swiper('.reviews-students__slider', {
			spaceBetween: 20,
			slidesPerView: 4,
			slidesPerGroup: 4,
			touchRatio: 1,
			allowTouchMove: false,
			pagination: {
				el: '.reviews-students__pagination',
			},
            navigation: {
                nextEl: '.reviews-students__next',
                prevEl: '.reviews-students__prev',
            },
		});
	}
	if ($('.reviews-text__slider').length) {
		const swiper = new Swiper('.reviews-text__slider', {
			spaceBetween: 20,
			slidesPerView: 2,
			slidesPerGroup: 2,
			touchRatio: 1,
			allowTouchMove: false,
			pagination: {
				el: '.reviews-text__pagination',
			},
            navigation: {
                nextEl: '.reviews-text__next',
                prevEl: '.reviews-text__prev',
            },
		});
	}
	if ($('.partners__slider').length) {
		const swiper = new Swiper('.partners__slider', {
			spaceBetween: 0,
			slidesPerView: 'auto',
			slidesPerGroup: 4,
            autoHeight: false,
			touchRatio: 1,
            grid: {
                rows: 2,
            },
			allowTouchMove: false,
			pagination: {
				el: '.partners__pagination',
			},
            navigation: {
                nextEl: '.partners__next',
                prevEl: '.partners__prev',
            },
		});
	}
	if ($('.news__slider').length) {
		const swiper = new Swiper('.news__slider', {
			spaceBetween: 20,
			slidesPerView: 4,
			slidesPerGroup: 4,
			allowTouchMove: false,
			pagination: {
				el: '.news__pagination',
			},
            navigation: {
                nextEl: '.news__next',
                prevEl: '.news__prev',
            },
		});
	}
	placeh('#search');
});
});
