
$(function () {

	let tablet = 1024;
	let mobile = 414;

	//Выравнивание отступов menu по отступам header, выравнивание положения и ширины кнопки Вверх по габаритам блока Feedback
	$(window).resize(function () {

		function rr(e) {
			// e.preventDefault();
			let offset = $('.logo-main__image').offset();
			let top = offset.top;
			let left = offset.left;

			if ($(window).width() > 1786) {
				$('.menu, .social-nets').offset({ left: left });
			} else { return; };

			// console.log($('.feedback').offset());
			let offset2 = $('.feedback').offset();
			let top2 = offset2.top;
			let height2 = $('.feedback').height();
			// console.log(top2 + height2);

			//Отключил
			// $('.button-to-top').width($('.feedback__before').width());
			// $('.button-to-top').css({ 'top': top2 + height2 });
		};
		rr();

		//выравнивание положения и ширины кнопки Вверх по габаритам блока Feedback
		// function rr2(e) {
		// 	// e.preventDefault();

		// 	// console.log($('.feedback').offset());
		// 	let offset2 = $('.feedback').offset(); //вычисляем положение блока feedback
		// 	let top2 = offset2.top; //фиксируем top блока feedback
		// 	let height2 = $('.feedback').height(); //вычисляем высоту блока feedback
		// 	// console.log(top2 + height2);

		// 	$('.button-to-top').width($('.feedback__before').width());
		// 	$('.button-to-top').css({ 'top': top2 + height2 });
		// };
		// rr2();



		// console.log($('.projects-all__form').width());


		//Выравнивание отступов projects по отступам menu
		// function menu(e) {
		// 	// e.preventDefault();
		// 	let offset = $('.menu').offset();
		// 	let top = offset.top;
		// 	let left = offset.left;
		// 	let width = $('.menu').width();
		// 	// console.log(left + width);
		// 	if ($(window).width() > mobile) {
		// 		$('.projects__container').css({ 'padding-left': left + width + 20 });
		// 	} return;
		// };
		// menu();

	});
	$(window).resize();

	//Нажатие на бургер
	$('.burger').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		$(this).toggleClass('burger burger-disable');
		if (window.matchMedia('(max-width: 414px)').matches) {
			$('.header__mail, .logo-main').toggle();
		} else {
			$('.header__callback, .logo-main').toggle();
		}

		$('.menu-disable').toggle(200);


		// function ee() {
		// 	$('.header__container').css('justify-content') == 'flex-end' ? $('.header__container').css({ 'justify-content': 'space-between' }) : $('.header__container').css({ 'justify-content': 'flex-end' });
		// };
		// ee();

	});

	//Нажатие на иконку mail в шапке
	$('.header__mail').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		// console.log($('.feedback').css('display'));
		$('.feedback').toggle(200);
	});

	//Наведение на блок "Напишите нам"
	$('.feedback').on('click mouseenter touchend', function (e) {
		// e.stopPropagation();
		// e.preventDefault();

		//Старая версия (при top: 15%)
		// if (window.matchMedia('(max-width: 414px)').matches) {
		// 	// $('.feedback').toggle();
		// 	return;
		// } else if (window.matchMedia('(max-width: 1024px)').matches) {
		// 	$('.feedback').css({ 'transform': 'translate(-265px, 0)' });
		// }
		// else if (window.matchMedia('(min-width: 1025px)').matches) {
		// 	$('.feedback').css({ 'transform': 'translate(-336px, 0)' });
		// }

		if (window.matchMedia('(max-width: 414px)').matches) {
			// $('.feedback').toggle();
			return;
		} else if (window.matchMedia('(max-width: 1024px)').matches) {
			$('.feedback').css({ 'transform': 'translate(-265px, -50%)' });
		}
		else if (window.matchMedia('(min-width: 1025px)').matches) {
			$('.feedback').css({ 'transform': 'translate(-336px, -50%)' });
		}

	});

	//Покидаем блок "Напишите нам"
	$('.feedback').on('mouseleave', function (e) {
		// e.stopPropagation();
		// e.preventDefault();

		//Старая версия (при top: 15%)
		// if ((window.matchMedia('(max-width: 414px)').matches) || $("#feedbackForm input, #feedbackForm textarea").is(":focus")) {
		// 	// $('.feedback').toggle();
		// 	return;
		// } else {
		// 	$('.feedback').css({ 'transform': 'translate(0px, 0)' });
		// }

		if ((window.matchMedia('(max-width: 414px)').matches) || $("#feedbackForm input, #feedbackForm textarea").is(":focus")) {
			// $('.feedback').toggle();
			return;
		} else {
			$('.feedback').css({ 'transform': 'translate(0px, -50%)' });
		}

	});

	//Нажимаем на крестик блока "Напишите нам"
	$('.feedback-form__exit').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();

		if (window.matchMedia('(max-width: 414px)').matches) {
			$('.feedback').toggle();
		} else {
			$('.feedback').css({ 'transform': 'translate(0px, -50%)' });
		}
	});

	//Нажатие кнопки "Отправить" в форме feedback с валидацией
	$('#feedbackForm').validate({
		rules: {
			text: {
				required: true,
				minlength: 10
			},

			yourname: {
				required: true,
				minlength: 3
			},

			telephone: {
				// required: true,
				minlength: 7,
				number: true
			},
			email: {
				required: true,
				minlength: 7,
				email: true
			}
		},
		messages: {
			text: {
				required: "Поле обязательно к заполнению",
				minlength: "Введите не менее 10-ти символов"
			},
			yourname: {
				required: "Поле обязательно к заполнению",
				minlength: "Введите не менее 3-х символов"
			},
			telephone: {
				// required: "Поле обязательно к заполнению",
				minlength: "Введите не менее 7-и символов",
				number: "Допустимы только цифры"
			},
			email: {
				required: "Поле обязательно к заполнению",
				minlength: "Введите не менее 7-и символов",
				email: "Формат: ххх@xx.xx"
			}

		},
		// submitHandler: function () {
		// 	$('.feedback__form.feedback-form').submit();
		// }
	});

	//Отправка формы feedback
	$('.feedback__form.feedback-form').on('submit', function (e) {
		// e.stopPropagation();
		// e.preventDefault();

		// console.log($(this));
		// alert($('#feedbackForm').valid());
		if ($('#feedbackForm').valid()) {
			let myFormData = $('#feedbackForm').serialize();
			console.log(myFormData);

			// $('#feedbackForm').load('./sendmail.php');

			$.ajax({
				type: "POST",
				url: "./sendmail.php",
				data: myFormData,
				dataType: "json",
				success: function () {
					alert('Ваше сообщение успешно отправлено!');
				}
			});

			return false; //Без этой строки будет происходить перезагрузка страницы

		} else alert('Вы не заполнили все требуемые поля формы');


		// let formData = new FormData($('#feedbackForm'));
		// console.log(formData);

		// let response = await fetch ('sendmail.php', {
		// 	method: 'POST',
		// 	body: formData
		// })

		// send(event, 'sendmail.php');

		// if (window.matchMedia('(max-width: 414px)').matches) {
		// 	// $('.feedback').toggle();
		// 	return;
		// } else {
		// 	$('.feedback').css({ 'transform': 'translate(0px, 0)' });
		// }
	});



	//Временная заглушка на нажатие кнопки "Отправить"
	// $('.feedback-form__button').on('click touchend', function (e) {
	// 	e.stopPropagation();
	// 	e.preventDefault();

	// 	$('.feedback__form.feedback-form').submit();

	// 	// console.log('hello');

	// 	// if (window.matchMedia('(max-width: 414px)').matches) {
	// 	// 	// $('.feedback').toggle();
	// 	// 	return;
	// 	// } else {
	// 	// 	$('.feedback').css({ 'transform': 'translate(0px, 0)' });
	// 	// }
	// });

	//Нажатие на кнопку "Заказать обратный звонок" в мобильной версии
	$('.topic__footer-button').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		function ee() {
			$('.callback').css('display') == 'none' ? $('.callback').css({ 'display': 'flex' }) : $('.callback').css({ 'display': 'none' });
		};
		ee();
	});

	//Нажатие на кнопку "Заказать обратный звонок" в tablet версии
	$('.header__callback-text-tablet').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		function ee() {
			$('.callback').css('display') == 'none' ? $('.callback').css({ 'display': 'flex' }) : $('.callback').css({ 'display': 'none' });
		};
		ee();

	});

	//Нажатие на кнопку "Заказать обратный звонок" в desktop версии
	$('.header__callback-text').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		$('.header__callback').css({ 'opacity': '0', 'pointer-events': 'none' });

		// $('.header__callback').css({ 'display': 'none' });


		function ee() {
			$('.callback').css('display') == 'none' ? $('.callback').css({ 'display': 'flex' }) : $('.callback').css({ 'display': 'none' });

			$('.callback__form').css({ 'display': 'flex' });
		};
		ee();

	});

	//Закрытие формы обратного звонка
	$('.callback__form .callback-form__exit').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		$('.callback').toggle(200);
		$('.header__callback').css({ 'opacity': '1', 'pointer-events': 'all' });

	});

	$('.callback-form_succses .callback-form__exit, .callback-form_succses .callback-form__button').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		$('.callback-form_succses').toggle(200);
		$('.callback').toggle(200);
		$('.header__callback').css({ 'opacity': '1', 'pointer-events': 'all' });

	});


	//Нажатие кнопки "Перезвонить" в форме обратного звонка
	// $('.callback__form .callback-form__button').on('click touchend', function (e) {
	// 	e.stopPropagation();
	// 	e.preventDefault();

	// 	function ee() {
	// 		$('.callback__form').css({ 'display': 'none' });
	// 		$('.callback-form_succses').css({ 'display': 'grid' });

	// 	};
	// 	ee();

	// });

	//Нажатие кнопки "Перезвонить" в форме обратного звонка с валидацией
	$('.callback__form').validate({
		rules: {
			yourname: {
				required: true,
				minlength: 3
			},

			telephone: {
				required: true,
				minlength: 7,
				number: true
			}
		},
		messages: {
			yourname: {
				required: "Поле обязательно к заполнению",
				minlength: "Введите не менее 3-х символов"
			},
			telephone: {
				required: "Поле обязательно к заполнению",
				minlength: "Введите не менее 7-и символов",
				number: "Допустимы только цифры"
			}

		},
		submitHandler: function () {
			$('.callback__form').css({ 'display': 'none' });
			$('.callback-form_succses').css({ 'display': 'grid' });
		}
	});

	//Закрытие формы успешного обратного звонка
	$('.feedback-form-succses__image').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		$('.feedback-form-succses').toggle(200);
	});

	//Белый фон шапки при достижении блока "Проекты"
	$(document).on('scroll', function (e) {
		// e.stopPropagation();
		// e.preventDefault();
		let y = $('.projects').offset().top;
		let y1 = $(document).scrollTop();
		let y2 = $('.header__container').height();
		function ee() {
			if ($(window).width() > tablet) { y - y2 * 1.7 <= y1 ? $('.header').addClass('header_white') : $('.header').removeClass('header_white'); } else if ($(window).width() <= tablet) { y - y2 * 1 <= y1 ? $('.header').addClass('header_white') : $('.header').removeClass('header_white'); }
		}
		ee();
	});

	//Переход к следующему блоку при скролле вниз при разрешениях свыше 780px
	let state = 0;
	let count = 0;
	$(document).on('scroll', function (e) {
		// e.stopPropagation();
		// e.preventDefault();

		if ($(window).width() >= 780) {

			let scrollTop = $(document).scrollTop();
			let y2 = $('.header__container').height();
			// console.log($(".main-wrapper").children().not('script, .header, .menu-wrapper, .menu-disable')[1]);
			let mas = $(".main-wrapper").children().not('script, .header, .menu-wrapper, .menu-disable');

			function ee() {
				//Проверяем скрол вниз
				if (state <= scrollTop) {

					if ((mas[count + 1].offsetTop - mas[count].offsetTop + state) > mas[(count + 1)].offsetTop && count < (mas.length - 1)) {

						console.log('mas[(count + 1)].offsetTop', mas[(count + 1)].className, mas[(count + 1)].offsetTop);
						state = mas[(count + 1)].offsetTop;
						// $("html,body").animate({ scrollTop: state }, "slow");
						$("html,body").animate({ scrollTop: state - $(".header").outerHeight() }, "slow");
						count += 1;
						console.log('state', state);
						console.log('count', count);
						console.log('yes');
						// alert('yes');

					} else {
						state = scrollTop;
						console.log('no');
						console.log(mas[count + 1].offsetTop + state - mas[count].offsetTop);
						console.log(mas[count + 1].offsetTop + 1);
					}

				} else {

					//Если скролл вверх
					if (count >= 0 && state >= scrollTop + $(".header").outerHeight() && scrollTop <= mas[(count - 1)].offsetTop) {
						console.log('up + 5');
						// console.log(mas[(count - 1)].className);
						state = mas[count - 1].offsetTop;
						count -= 1;
						console.log('count', count);
						console.log('state', state);
						console.log('scrollTop', scrollTop);
						console.log('scrollTop + header', scrollTop + $(".header").outerHeight());
						// console.log('mas[(count - 1)].offsetTop', mas[(count - 1)].offsetTop);

					} else {
						console.log('up');
						console.log('count', count);
						console.log('state', state);
						console.log('scrollTop', scrollTop);
						// console.log('$(".header").outerHeight()', $(".header").outerHeight());
					}

				}
				//Проверяем направление скролла (вниз или вверх)
				// state < scrollTop ? console.log('down') : console.log('up');
			}
			ee();

		} else {
			return;
		}



		// console.log(mas[count].offsetTop);


	});


	//Поднятие наверх при перезагрузке страницы и выравнивание положения и ширины кнопки Вверх по габаритам блока Feedback
	$(window).on('load', function () {
		// $('html body').scrollTop(0);
		// $(document).scrollTop(0);
		// $(".projects-all").hide();


		//Временно отключил
		// $("html,body").animate({ scrollTop: 0 }, "slow");


		// //выравнивание положения и ширины кнопки Вверх по габаритам блока Feedback
		function rr2(e) {
			// e.preventDefault();

			// console.log($('.feedback').offset());
			let offset2 = $('.feedback').offset(); //вычисляем положение блока feedback
			let top2 = offset2.top; //фиксируем top блока feedback
			let height2 = $('.feedback').height(); //вычисляем высоту блока feedback
			// console.log(top2);
			// console.log(top2 + height2);

			// $('.button-to-top').width($('.feedback__before').width());
			// $('.button-to-top').css({ 'top': top2 + height2 });
		};
		rr2();
	});

	//Поднятие наверх при клике на лого в шапке
	// $('.logo-main').on('click touchend', function () {
	// 	$("html,body").animate({ scrollTop: 0 }, 300);
	// });

	//Перезагрузка при клике на лого в шапке
	$('.logo-main').on('click touchend', function () {
		// location.reload();
		// $('html body').scrollTop(0);
		// history.go(0);
		// $("html,body").animate({ scrollTop: 0 }, "fast");
		// $('html body').scrollTop(0);
		$(document).scrollTop(0);
		location.reload();
	});

	//Disable scroll-block если высота экрана больше, чем высота блока Topic
	$(document).ready(function () {
		// $('html body').scrollTop(0);

		// $('body, html').animate({ scrollTop: 0 }, "fast");

		// $(document).scrollTop(0);
		// console.log($('body, html').scrollTop());
		// let y1 = $(document).scrollTop() + $(window).height();
		let y1 = $(window).height();
		let y2 = $('.topic').height();
		let y3 = parseInt($('.topic').css('padding-top'));
		// console.log('.topic + padding ' + (y2 + y3), 'window height() ' + y1, y3);
		// console.log(y2 <= y1);
		function ee() {
			{ y2 + y3 < y1 ? $('.scroll').css({ 'display': 'none' }) : $('.scroll').css({ 'display': 'block' }) }
		}
		ee();

		//Disable scroll-block на малых экранах
		if ($(window).width() <= 600) {
			$('.scroll').hide();
		}


	});

	//Disable scroll-block if scrolling & unable button-to-top
	$(document).on('scroll', function (e) {
		// e.stopPropagation();
		// e.preventDefault();
		// let y = $('.projects').offset().top;
		let y = $(document).scrollTop();
		let y1 = $(document).scrollTop() + $(window).height();
		let y2 = $('.topic').height();
		let y3 = parseInt($('.topic').css('padding-top'));


		// console.log(y);

		//Disable topic-footer on mobile scroll
		if ($(window).width() <= mobile) {

			{ 10 <= y ? $('.topic__footer').css({ 'display': 'none' }) : $('.topic__footer').css({ 'display': 'flex' }) }
		} else {
			function ee() {



				{ y2 + y3 < y1 ? $('.scroll').css({ 'display': 'none' }) && $('.button-to-top').css({ 'display': 'block' }) : $('.scroll').css({ 'display': 'block' }) && $('.button-to-top').css({ 'display': 'none' }) }
			}
			ee();
		};
	});


	//Scrolling, when click on button-to-top
	$('.button-to-top__image').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		$('body, html').animate({ scrollTop: 0 }, 500);
	});

	//Disable scrolling menu on footer
	const menuTop = parseInt($('.menu').css('top')); //добавляем в константу текущее положение menu
	$(document).on('scroll', function (e) {
		// e.stopPropagation();
		// e.preventDefault();
		let y = $('.footer').offset().top;
		let y1 = $(document).scrollTop();
		let y2 = $('.menu').height();

		// console.log(y);
		// console.log($('.footer').css('display'));

		//Функция фиксации положения Меню при достижении футера
		// function ee() {
		// 	if (y <= (y1 + y2 + menuTop)) {
		// 		$('.menu').css({ 'position': 'absolute', 'top': y - y2 });
		// 	}
		// 	else {
		// 		$('.menu').css({ 'position': 'fixed', 'top': menuTop });
		// 	}
		// }
		// ee();

		//Функция отключения Меню при достижении футера
		function eee() {

			//Проверяем не достигнута ли ширина экрана, при которой включается бургер и включен ли Foter
			if (window.outerWidth > 770 && $('.footer').css('display') == 'block') {

				if (y <= (y1 + y2 + menuTop)) {
					$('.menu').css({ 'display': 'none' });
				}
				else {
					$('.menu').css({ 'position': 'fixed', 'top': menuTop, 'display': 'grid' });
				}
			} else { return }
		}
		eee();

	});

	//Переключение класса active в меню
	$('.projects__menu-item').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		$('.projects__menu-item').removeClass('projects__menu-item_active');
		$(this).addClass('projects__menu-item_active');
	});

	//Подгружаем блок Бани через AJAX-запрос из файла bath.html
	$('.projects__menu-item[data-type="bath"]').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();

		//Фиксируем положение экрана
		let rr = $('.projects__body').css('height');
		$('.projects__body').css({
			overflow: 'hidden',
			'min-height': rr
		});

		//Отмена предыдущего действия
		// $('html, body').css({
		// 	overflow: 'auto',
		// 	height: 'auto'
		// });

		// let q = $(document).scrollTop(); //Фиксируем координаты положение экрана

		$('.projects__item:not([data-type="bath"])').attr('hidden', 'true');

		$.get('bath.html', function (data) {

			let y = $.parseHTML(data); //Преобразуем HTML-строку в массив
			let i = $('.projects__item[data-type="bath"]').length;

			function ee() {
				if (i < y.length) {
					$('.projects__body').append(y)
				}
				else $('.projects__item[data-type="bath"]').attr('hidden', null);
			}
			ee();

			// $(document).scrollTop(q); //Возвращаем положение экрана в исходное положение
		});

	});


	//Отработка клика на пункт "Дома" в разделе "Проекты"
	$('.projects__menu-item[data-type="house"]').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		$('.projects__item:not([data-type="house"])').attr('hidden', 'true');
		$('.projects__item[data-type="house"]').attr('hidden', null);

	});


	//Отработка клика на Scroll
	$(' .scroll').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		let y = $('.projects').offset().top;
		let y1 = $('.header').height();
		function ee() {
			// $(document).scrollTop(y - y1);

			//Вычел вручную 37рх, чтобы не скакал блок при нажатии на пункт меню Проекты после отработки нажатия на скролл
			$("html, body").animate({ scrollTop: (y - y1 - 37) }, 300);
			// console.log($('.projects').css('padding-top'));
			// console.log($('.projects').css('margin-top'));
		}
		ee();
		// $('.menu-disable').css('display', 'none');
	});

	//Отработка клика на пункт "фильтры +" в разделе "Проекты"
	$('.projects-all__filter-mobile').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		// $('.projects-form').toggle();
		// console.log('ggg');

		function ee() {
			{ $('.projects-form').css({ 'display': 'none' }) ? $('.projects-form').css({ 'display': 'grid' }) : $('.projects-form').css({ 'display': 'none' }) }
		}
		ee();
	});

	//Отработка клика на X в разделе "фильтры +"
	$('.projects-form__clear-block-mobile-exit').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();

		function ee() {
			{ $('.projects-form').css({ 'display': 'grid' }) ? $('.projects-form').css({ 'display': 'none' }) : $('.projects-form').css({ 'display': 'none' }) }
		}
		ee();
	});

	//Отработка клика на "Очистить фильтры" в разделе "фильтры +"
	$('.projects-form__clear-block-mobile').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();

		$('.projects-all__form select').prop('selectedIndex', 0);
		$('.projects-all__form input').val('');
	});

	//Слайдер в project-solo
	$('.slider__container-image').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.slider__arrow'),
		nextArrow: $('.slider__arrow_right'),
		dots: false
	});

	//Слайдер в project-solo Plan
	$('.plan__slider').slick({
		// infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: $('.plan__arrow'),
		nextArrow: $('.plan__arrow_right'),
		responsive: [
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}]
	});


	// Создание экземпляра карты и его привязка к контейнеру с id("map").
	var myMap;
	$(document).ready(function () {

		// Дождёмся загрузки API и готовности DOM.
		ymaps.ready(init);

		function init() {
			// Создание экземпляра карты и его привязка к контейнеру с
			// заданным id ("map").
			myMap = new ymaps.Map('map', {
				// При инициализации карты обязательно нужно указать
				// её центр и коэффициент масштабирования.
				center: [55.76, 37.64], // Москва
				zoom: 10,
				controls: ['zoomControl'],
				behaviors: ["disable('scrollZoom')"] // Отключаем масштабирование колесом мыши

			}, {
				// Зададим ограниченную область прямоугольником
				// Задаются в географических координатах самой юго-восточной и самой северо-западной точек видимой области.
				restrictMapArea: [
					[56.15, 36], [55.3, 39]
				]
			});

			// Создаём макет содержимого.
			MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
				'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
			),

				//Создаем геометку
				balashiha = new ymaps.Placemark([55.77, 37.92], {
					//Свойства:

					// hintContent: 'Собственный значок метки',
					// balloonContent: 'Это красивая метка'
					// name: 'balashiha'
				}, {
					// Опции:

					// Необходимо указать данный тип макета.
					iconLayout: 'default#image',
					// Своё изображение иконки метки.
					iconImageHref: '../img/placemark.png',
					// Размеры метки.
					iconImageSize: [56, 56],
					name: 'balashiha'
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					// iconImageOffset: [175, -50]

				}),

				//Создаем геометку
				dolgoprudniy = new ymaps.Placemark([55.907, 37.49], {

				}, {
					iconLayout: 'default#image',
					iconImageHref: '../img/placemark.png',
					iconImageSize: [56, 56],
					iconContentLayout: MyIconContentLayout,
					name: 'dolgoprudniy'
				});


			//Добавляем геометки на карту
			myMap.geoObjects
				.add(balashiha)
				.add(dolgoprudniy);

			//Отработка клика на любую метку на карте
			myMap.geoObjects.each(function (el, i) {



				el.events.add('click', function (e) {

					//Смещаем центр карты, в зависимости от выбранного объекта
					el.options._options.name == 'dolgoprudniy' ? myMap.setCenter([55.76, 37.5]) : el.options._options.name == 'balashiha' ? myMap.setCenter([55.76, 37.72]) : myMap.setCenter([55.76, 37.64]);

					//Всем меткам устанавливаем иконку по-умолчанию
					myMap.geoObjects.each(function (elem, i) {
						elem.options.set('iconImageHref', '../img/placemark.png');
					});

					//Целевой метке устанавливаем активную иконку
					e.get('target').options.set('iconImageHref', '../img/placemark-light.png');


					// console.log(el.options._options.name == 'dolgoprudniy');

					//Показываем item, соответствующий целевой метке
					$(`.portfolio__item[data-place != "${el.options._options.name}"]`).css({ 'display': 'none' });
					$(`.portfolio__item[data-place = "${el.options._options.name}"]`).css({ 'display': 'flex' });

				});
			});


		}

	});

	//Нажатие на кнопку "Показать на карте"
	$('.portfolio__button').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		$('.portfolio__map').addClass('portfolio__map-image_big');
		$('.portfolio__map').addClass('portfolio__map-withoutAfter');
		$('.portfolio__button').css({ 'display': 'none' });
		$('.portfolio__map-exit').css({ 'display': 'block' });

		setTimeout(function () {
			myMap.container.fitToViewport();
		}, 501);

	});


	//Нажатие на крест item на карте
	$('.main-item__exit').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();

		$(this).closest('.portfolio__item').css({ 'display': 'none' });

		//Всем меткам устанавливаем иконку по-умолчанию
		myMap.geoObjects.each(function (el, i) {
			el.options.set('iconImageHref', '../img/placemark.png');
		});

		myMap.setCenter([55.76, 37.64]);

	});

	//Нажатие на крест на карте
	$('.portfolio__map-exit').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();

		$('.portfolio__map').removeClass('portfolio__map-image_big');
		$('.portfolio__map').removeClass('portfolio__map-withoutAfter');
		$('.portfolio__button').css({ 'display': 'block' });
		$(this).css({ 'display': 'none' });

	});


	//Слайдер triple-slider__slider-main
	$('.slider-main').slick({
		// infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.triple-slider__arrow'),
		nextArrow: $('.triple-slider__arrow_right'),
		asNavFor: '.slider-title, .slider-text, .slider-left, .slider-right',
		speed: 500,
		// waitForAnimate: false,

	});

	//Слайдер triple-slider__slider-title
	$('.slider-title').slick({
		// infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		speed: 900,
		// useTransform: true,
		// cssEase: 'cubic-bezier(0.830, -0.040, 0.310, 1.355'

	});

	// $('.slider-title').on('beforeChange', function (event, slick, direction) {
	// 	$('.slider-title__item').addClass('slider-title__item_active');
	// });
	// $('.slider-title').on('afterChange', function (event, slick, direction) {
	// 	$('.slider-title__item').removeClass('slider-title__item_active');
	// });

	//Слайдер triple-slider__slider-text
	$('.slider-text').slick({
		// infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		speed: 900,
	});

	//Слайдер triple-slider__slider-left
	$('.slider-left').slick({
		// infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		// speed: 900,
		// waitForAnimate: false,
		cssEase: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
	});


	//Слайдер triple-slider__slider-left include opacity
	$('.slider-left').on('beforeChange', function (event, slick, currentSlide, nextSlide) {

		$($(`.slider-left__item.slick-slide[data-slick-index = "${nextSlide}"]`)).removeClass('opacity');
		$($(`.slider-left__item.slick-slide[data-slick-index = "${currentSlide}"]`)).addClass('opacity');

	});

	//Слайдер triple-slider__slider-right
	$('.slider-right').slick({
		// infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		// speed: 900,
		// waitForAnimate: false,
		cssEase: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
		// cssEase: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
	});

	//Слайдер triple-slider__slider-right include opacity
	$('.slider-right').on('beforeChange', function (event, slick, currentSlide, nextSlide) {

		$($(`.slider-right__item.slick-slide[data-slick-index = "${nextSlide}"]`)).removeClass('opacity');
		$($(`.slider-right__item.slick-slide[data-slick-index = "${currentSlide}"]`)).addClass('opacity');

	});


	// Создание экземпляра карты и его привязка к контейнеру с id("mapFooter").
	var myMapFooter;
	$(document).ready(function () {

		// Дождёмся загрузки API и готовности DOM.
		ymaps.ready(init);

		function init() {
			// Создание экземпляра карты и его привязка к контейнеру с
			// заданным id ("map").
			myMapFooter = new ymaps.Map('mapFooter', {
				// При инициализации карты обязательно нужно указать
				// её центр и коэффициент масштабирования.
				center: [59.211377, 39.898646], // Москва
				zoom: 15,
				controls: [],
				behaviors: ["disable('scrollZoom')"] // Отключаем масштабирование колесом мыши
			}, {
				// Зададим ограниченную область прямоугольником
				// Задаются в географических координатах самой юго-восточной и самой северо-западной точек видимой области.
				restrictMapArea: [
					[59.223262, 39.865416], [59.199428, 39.937064]
				]
			});

			// Создаём макет содержимого.
			MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
				'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
			),

				office = new ymaps.Placemark([59.211377, 39.898646], {
					//Свойства:

					// hintContent: 'Собственный значок метки',
					// balloonContent: 'Это красивая метка'
					// name: 'balashiha'
					iconCaption: 'Первомайская улица, 12А'
				}, {
					// Опции:

					// Необходимо указать данный тип макета.
					// iconLayout: 'default#image',
					preset: 'islands#redDotIcon',

					// Своё изображение иконки метки.
					// iconImageHref: '../img/placemark.png',
					// Размеры метки.
					// iconImageSize: [56, 56],
					name: 'office'
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					// iconImageOffset: [175, -50]

				}),

				//Добавляем геометки на карту
				myMapFooter.geoObjects
					.add(office)
				;



		}

	});


	//Нажатие на icon в Реквизитах
	$('.office__item-text').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		$('.item-text-closed').toggle();
		$(this).toggleClass('office__item-text');
		$(this).toggleClass('office__item-text_active');
	});


	// Создание экземпляра карты и его привязка к контейнеру с id("contacts-map").
	// var contactsMap;
	// $(document).ready(function () {

	// 	// Дождёмся загрузки API и готовности DOM.
	// 	ymaps.ready(init);

	// 	function init() {
	// 		// Создание экземпляра карты и его привязка к контейнеру с
	// 		// заданным id ("map").
	// 		contactsMap = new ymaps.Map('contacts-map', {
	// 			// При инициализации карты обязательно нужно указать
	// 			// её центр и коэффициент масштабирования.
	// 			center: [59.211377, 39.898646], // Москва
	// 			zoom: 15,
	// 			controls: [],
	// 			behaviors: ["disable('scrollZoom')"] // Отключаем масштабирование колесом мыши
	// 		}, {
	// 			// Зададим ограниченную область прямоугольником
	// 			// Задаются в географических координатах самой юго-восточной и самой северо-западной точек видимой области.
	// 			restrictMapArea: [
	// 				[59.223262, 39.865416], [59.199428, 39.937064]
	// 			]
	// 		});

	// 		// Создаём макет содержимого.
	// 		MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
	// 			'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
	// 		),

	// 			office = new ymaps.Placemark([59.211377, 39.898646], {
	// 				//Свойства:

	// 				// hintContent: 'Собственный значок метки',
	// 				// balloonContent: 'Это красивая метка'
	// 				// name: 'balashiha'
	// 				iconCaption: 'Первомайская улица, 12А'
	// 			}, {
	// 				// Опции:

	// 				// Необходимо указать данный тип макета.
	// 				// iconLayout: 'default#image',
	// 				preset: 'islands#redDotIcon',

	// 				// Своё изображение иконки метки.
	// 				// iconImageHref: '../img/placemark.png',
	// 				// Размеры метки.
	// 				// iconImageSize: [56, 56],
	// 				name: 'office'
	// 				// Смещение левого верхнего угла иконки относительно
	// 				// её "ножки" (точки привязки).
	// 				// iconImageOffset: [175, -50]

	// 			}),

	// 			//Добавляем геометки на карту
	// 			contactsMap.geoObjects
	// 				.add(office)
	// 			;



	// 	}

	// });


	//Переключение класса active в меню Услуги и замена содержимого блока Услуги
	$('.services__menu-item').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		$('.services__menu-item').removeClass('active');
		$(this).addClass('active');
		let attr = $(this).attr('data-type');
		// let list = $('.services__content');
		// console.log(list);

		//Замена содержимого блока Услуги
		$('.services__content').each(function (i, elem) {
			if ($(elem).attr('data-type') == attr) {
				$(elem).css({ 'display': 'grid' });
			} else {
				$(elem).css({ 'display': 'none' });
			}
		});

	});

	//Переключение класса active в Menu
	$('.menu__top-link, .menu__bottom-link').on('click touchend', function (e) {
		e.stopPropagation();
		// e.preventDefault();
		$('.menu__top-link, .menu__bottom-link').removeClass('active');
		$(this).addClass('active');
	});


	//Pressing to Services in Menu
	// $('.menu__top-link').on('click touchend', function (e) {
	// 	e.stopPropagation();
	// 	e.preventDefault();
	// 	let attr = $(this).attr('data-type');
	// 	// let list = $('.services__content');
	// 	// console.log($("body").children().not('script'));

	// 	$(".main-wrapper").children().not('script, .header, .menu-wrapper').each(function (i, elem) {
	// 		if ($(elem).attr('data-type') == attr) {
	// 			let marginTop = $(elem).css('margin-top');
	// 			let paddingTop = $(elem).css('padding-top');
	// 			$(elem).css({ 'display': 'grid' });
	// 			$(elem).css({ 'padding-top': 200 });
	// 			$('body, html').animate({ scrollTop: 0 }, 0);

	// 		} else {

	// 			$(elem).css({ 'display': 'none' });
	// 			$('.scroll').css({ 'opacity': '0' });
	// 		}
	// 	});

	// });




});


