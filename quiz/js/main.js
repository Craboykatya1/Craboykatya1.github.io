$('body').removeClass('no-js')
$(function () {
	function radiob(this_pick, class_one, class_activ) {
		if (this_pick.children('input').prop('checked') == false) {
			var name_rad = this_pick.children('input').attr('Name');
			$('input[name=' + name_rad + ']').each(function () {
				$(this).parent().removeClass(class_activ);
				$(this).removeAttr('checked');
			});
			this_pick.addClass(class_activ);
			this_pick.children('input').attr('checked', 'checked');
		}
	}
	function radiob_val(this_pick, class_activ) {
		if (this_pick.children('input').prop('checked') == true) {
			this_pick.addClass(class_activ);
			this_pick.children('input').attr('checked', 'checked');
			this_pick.closest('.quiz__step').find('.quiz__step-btns-next').fadeIn(200);
		}
	}
	function progress(indexActive){
			let progressStep = (indexActive + 1) / $('.quiz__step').length * 100;
			$('.quiz__progress-active').css({"width":progressStep+"%"});
			$('.quiz__progress span').text((indexActive + 1)+' из '+$('.quiz__step').length);
	}
	function fadeStap(indActive,  pushState = true){
		let plusStep = indActive + 1;
		let quizAnswers = {
			step: plusStep,
		};
		$('input[type="radio"]:checked').each(function() {
            let quizName = $(this).attr('name');
            let quizValue = $(this).val();
            quizAnswers[quizName] = quizValue;
        });
		localStorage.setItem('quizData', JSON.stringify(quizAnswers));
		if (pushState) {
			const newUrl = window.location.pathname + '?step=' + plusStep;
			history.pushState({ step: plusStep }, '', newUrl);
		}
		progress(indActive);
		$('.quiz__step').fadeOut(200);
		$('.quiz__step').removeClass('_active');
		if(indActive == $('.quiz__step').length - 1){
			setTimeout(function(){
				$('.quiz__loader').fadeIn(250);
				$({ num: 0 }).animate({ num: 100 }, {
					duration: 3000,
					easing: 'linear',
					step: function() {
						var currentNum = Math.floor(this.num);
						$('.quiz__loader-counter').text(currentNum + '%');
					},
					complete: function() {
						$('.quiz__loader').css({"display":"none"});
						$('.quiz__step').eq(indActive).fadeIn(250);
						$('.quiz__step').eq(indActive).addClass('_active');
					}
				});
			},200);
		}
		else{
			setTimeout(function(){
				$('.quiz__step').eq(indActive).fadeIn(250);
				$('.quiz__step').eq(indActive).addClass('_active');
			},250);
		}
	}
	$(document).ready(function (e) {
		/* Показываем шаг при обновление страницы */
		let savedData = localStorage.getItem('quizData');
		if (savedData) {
			let quiz = JSON.parse(savedData); 
			fadeStap(quiz.step - 1)
		}
		else{
			fadeStap(0)
		}
		/* Кнопки Назад/вперед в браузере */
		$(window).on('popstate', function(e) {
			// Получаем состояние из объекта history
			let state = e.originalEvent.state;
			console.log(state.step);
			
			// Если состояние есть (наш шаг), переключаем на него
			if (state && state.step) {
				fadeStap(state.step - 1, false); // false - чтобы не делать pushState повторно
			} else {
				fadeStap(0, false);
			}
		});
		/* Радио кнопки */
		$('.quiz__step-block-radio').each(function () {
			radiob_val($(this),'_active');
		});
		$('.quiz__step-block-radio').click(function(){
			radiob($(this),'.quiz__step-block-radio','_active');
			$(this).closest('.quiz__step').find('.quiz__step-btns-next').fadeIn(200);
		});
		/* Кнопки вперед/назад */
		$(document).on('click', '.quiz__step-btns-next', function(){
			let indActive = $(this).closest('.quiz__step').next().index();
			fadeStap(indActive);
		});
		$(document).on('click', '.quiz__step-btns-back', function(){
			let indActive = $(this).closest('.quiz__step').prev().index();
			fadeStap(indActive);
		});
		/* Моб. меню */
		$('.header__burger').click(function(){
			if($(this).hasClass('_active')){
				$(this).removeClass('_active');
				$('.header__menu').removeClass('_open');
			}
			else{
				$(this).addClass('_active');
				$('.header__menu').addClass('_open');
			}
		});
	});
});
