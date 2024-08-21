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
			spaceBetween: 60,
			slidesPerView: 1,
			slidesPerGroup: 1,
			touchRatio: 1,
			autoplay: {
				delay: 3000,
			},
            navigation: {
                nextEl: '.teachers__next',
                prevEl: '.teachers__prev',
            },
            pagination: {
				el: '.teachers__pagination',
			},
            breakpoints: {
                992: {
                    spaceBetween: 20,
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                },
                801: {
                    spaceBetween: 20,
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                601: {
                    spaceBetween: 20,
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    loop: false,
                    autoplay: false,
                },
            },
		});
	}
	if ($('.course-teachers__slider').length) {
		const swiper = new Swiper('.course-teachers__slider', {
			spaceBetween: 60,
			slidesPerView: 1,
			slidesPerGroup: 1,
			touchRatio: 1,
			autoplay: {
				delay: 3000,
			},
            navigation: {
                nextEl: '.course-teachers__next',
                prevEl: '.course-teachers__prev',
            },
            pagination: {
				el: '.course-teachers__pagination',
			},
            breakpoints: {
                992: {
                    spaceBetween: 20,
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                801: {
                    spaceBetween: 20,
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                601: {
                    spaceBetween: 20,
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    loop: false,
                    autoplay: false,
                },
            },
		});
	}
	if ($('.reviews-students__slider').length) {
		const swiper = new Swiper('.reviews-students__slider', {
			spaceBetween: 20,
			slidesPerView: 1,
			slidesPerGroup: 1,
			touchRatio: 1,
			autoplay: {
				delay: 3000,
			},
			pagination: {
				el: '.reviews-students__pagination',
			},
            navigation: {
                nextEl: '.reviews-students__next',
                prevEl: '.reviews-students__prev',
            },
            breakpoints: {
                992: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                },
                801: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                601: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    loop: false,
                    autoplay: false,
                },
            },
		});
	}
	if ($('.reviews-text__slider').length) {
		const swiper = new Swiper('.reviews-text__slider', {
			spaceBetween: 20,
			slidesPerView: 1,
			slidesPerGroup: 1,
			touchRatio: 1,
			autoplay: {
				delay: 3000,
			},
			pagination: {
				el: '.reviews-text__pagination',
			},
            navigation: {
                nextEl: '.reviews-text__next',
                prevEl: '.reviews-text__prev',
            },
            breakpoints: {
                601: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    loop: false,
                    autoplay: false,
                },
            },
		});
	}
	if ($('.partners__slider').length) {
		const swiper = new Swiper('.partners__slider', {
			spaceBetween: 0,
			slidesPerView: 'auto',
			slidesPerGroup: 2,
            autoHeight: false,
			touchRatio: 1,
            grid: {
                rows: 3,
            },
			pagination: {
				el: '.partners__pagination',
			},
            navigation: {
                nextEl: '.partners__next',
                prevEl: '.partners__prev',
            },
            breakpoints: {
                992: {
                    slidesPerView: 'auto',
                    slidesPerGroup: 4,
                },
                801: {
                    slidesPerView: 'auto',
                    slidesPerGroup: 3,
                },
                601: {
                    slidesPerView: 'auto',
                    slidesPerGroup: 3,
                    grid: {
                        rows: 2,
                    },
                },
            },
		});
	}
	if ($('.news__slider').length) {
		const swiper = new Swiper('.news__slider', {
			spaceBetween: 20,
			slidesPerView: 1,
			slidesPerGroup: 1,
			autoplay: {
				delay: 3000,
			},
			pagination: {
				el: '.news__pagination',
			},
            navigation: {
                nextEl: '.news__next',
                prevEl: '.news__prev',
            },
            breakpoints: {
                992: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                },
                801: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                601: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    loop: false,
                    autoplay: false,
                },
            },
		});
	}
    if ($('.tariffs__list').length) {
		const swiper = new Swiper('.tariffs__list', {
			spaceBetween: 10,
			slidesPerView: 1,
			slidesPerGroup: 1,
			touchRatio: 1,
			autoplay: {
				delay: 3000,
			},
			pagination: {
				el: '.tariffs__pagination',
			},
            breakpoints: {
                992: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                    loop: false,
                    autoplay: false,
                },
                801: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                601: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
            },
		});
	}
    if ($('.popup-tariffs__slider').length) {
		const swiper = new Swiper('.popup-tariffs__slider', {
			spaceBetween: 20,
			slidesPerView: 1,
			slidesPerGroup: 1,
			touchRatio: 1,
            navigation: {
                nextEl: '.popup-tariffs__next',
                prevEl: '.popup-tariffs__prev',
            },
            breakpoints: {
                992: {
                    
                },
            },
		});
        $('.tariffs__btn').click(function(){
            let indEl = $(this).closest('.tariffs__item').index();
            swiper.slideTo(indEl);
            lockScroll();
            $('.shadow-page').fadeIn(200);
            setTimeout(function(){
                $('.popup-tariffs').fadeIn(200);
                $('.popup-tariffs').addClass('_open');
            },200);
        });
	}
    
    $('.popup-tariffs__close').click(function(){
        unlockScroll();
        $('.shadow-page').fadeOut(200);
        $('.popup-tariffs').fadeOut(200);
        $('.popup-tariffs').removeClass('_open');
    });
    /* Мобильное меню */
    $('.header__butter').click(function(){
        if($(this).hasClass('_open')){
            $(this).removeClass('_open');
            $('.header__menu').slideUp(200);
        }
        else{
            $(this).addClass('_open');
            $('.header__menu').slideDown(200);
        }
    });
    $('.footer__menu-title').click(function(e){
        if($(window).width() <= 991){
            e.preventDefault();
            if($(this).hasClass('_open')){
                $(this).removeClass('_open');
                $(this).closest('.footer__menu').find('.footer__menu-list').slideUp(200);
            }
            else{
                $(this).addClass('_open');
                $(this).closest('.footer__menu').find('.footer__menu-list').slideDown(200);
            }
            
        }
    });
    /* Все курсы */
    $('.header__courses').click(function(){
        if($(this).hasClass('_open')){
            $(this).removeClass('_open');
            $('.header__menu-courses').slideUp(200);
        }
        else{
            $(this).addClass('_open');
            $('.header__menu-courses').slideDown(200);
        }
    });
    $(document).mouseup(function(e) {
        if ($('.header__courses').hasClass('_open')) {
            var div = $('.header__menu-courses');
            if (!div.is(e.target) && !$('.header__courses').is(e.target) &&
                div.has(e.target).length === 0) {
                div.slideUp(200);
                $('.header__courses').removeClass('_open');
            }
        }
    });
    /* scroll */
    $('.scroll').click(function(){
        let scrollEl = $(this).attr('data-scroll');
        console.log(scrollEl);
        $('html, body').animate({scrollTop: $(scrollEl).offset().top}, 1000);
    });
    /* FAQ */
    $('.faq__top').click(function(){
        if($(this).closest('.faq__item').hasClass('_active')){
            $(this).closest('.faq__item').removeClass('_active');
            $(this).closest('.faq__item').find('.faq__bottom').slideUp(200);
        }
        else{
            $(this).closest('.faq__item').addClass('_active');
            $(this).closest('.faq__item').find('.faq__bottom').slideDown(200);
        }
    });
    /* Программа курса */
    $('.course-program__item-title').click(function(){
        if($(window).width() <= 991){
            if($(this).closest('.course-program__item').hasClass('_active')){
                $(this).closest('.course-program__item').removeClass('_active');
                $(this).closest('.course-program__item').find('.course-program__item-bottom').slideUp(200);
            }
            else{
                $(this).closest('.course-program__item').addClass('_active');
                $(this).closest('.course-program__item').find('.course-program__item-bottom').slideDown(200);

            }
        }
    });
	placeh('#search');
	placeh('.course-search input');
});
});
