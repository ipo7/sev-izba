
$(function () {

	let tablet = 1024;
	let mobile = 414;

	//Выравнивание отступов menu по отступам header
	$(window).resize(function () {

		function rr(e) {
			// e.preventDefault();
			let offset = $('.logo-main__image').offset();
			let top = offset.top;
			let left = offset.left;
			// console.log(left);
			if ($(window).width() > 1786) {
				$('.menu, .social-nets').offset({ left: left });
			} return;
		};
		rr();

		console.log($('.projects-all__form').width());


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

	$('.header__mail').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		// console.log($('.feedback').css('display'));
		$('.feedback').toggle(200);
	});

	//Наведение на блок "Напишите нам"
	$('.feedback').on('click mouseenter touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();

		if (window.matchMedia('(max-width: 414px)').matches) {
			// $('.feedback').toggle();
			return;
		} else if (window.matchMedia('(max-width: 1024px)').matches) {
			$('.feedback').css({ 'transform': 'translate(-265px, 0)' });
		}
		else if (window.matchMedia('(min-width: 1025px)').matches) {
			$('.feedback').css({ 'transform': 'translate(-336px, 0)' });
		}

	});

	//Покидаем блок "Напишите нам"
	$('.feedback').on('mouseleave', function (e) {
		e.stopPropagation();
		e.preventDefault();

		if (window.matchMedia('(max-width: 414px)').matches) {
			// $('.feedback').toggle();
			return;
		} else {
			$('.feedback').css({ 'transform': 'translate(0px, 0)' });
		}

	});

	//Нажимаем на крестик блока "Напишите нам"
	$('.feedback-form__exit').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();

		if (window.matchMedia('(max-width: 414px)').matches) {
			$('.feedback').toggle();
		} else {
			$('.feedback').css({ 'transform': 'translate(0px, 0)' });
		}
	});

	//Временная заглушка на нажатие кнопки "Отправить"
	$('.feedback-form__button').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();

		if (window.matchMedia('(max-width: 414px)').matches) {
			// $('.feedback').toggle();
			return;
		} else {
			$('.feedback').css({ 'transform': 'translate(0px, 0)' });
		}
	});

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
		function ee() {
			$('.callback').css('display') == 'none' ? $('.callback').css({ 'display': 'flex' }) : $('.callback').css({ 'display': 'none' });
		};
		ee();

	});

	$('.callback-form__exit').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		$('.callback').toggle(200);
		$('.header__callback').css({ 'opacity': '1', 'pointer-events': 'all' });

	});


	//Временная заглушка на нажатие кнопки "Перезвонить"
	$('.callback-form__button').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		$('.callback').toggle(200);

	});


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

	$(window).on('load', function () {
		// $('html body').scrollTop(0);
		// $(document).scrollTop(0);
		$("html,body").animate({ scrollTop: 0 }, "slow");
		// $(".projects-all").hide();
	});

	//Disable scroll-block если высота экрана больше, чем высота блока Topic
	$(document).ready(function () {
		// $('html body').scrollTop(0);
		$('body, html').animate({ scrollTop: 0 }, "fast");
		// $(document).scrollTop(0);
		// console.log($('body, html').scrollTop());
		// let y1 = $(document).scrollTop() + $(window).height();
		let y1 = $(window).height();
		let y2 = $('.topic').height();
		let y3 = parseInt($('.topic').css('padding-top'));
		// console.log('.topic + padding ' + (y2 + y3), 'window height() ' + y1, y3);
		// console.log(y2 <= y1);
		function ee() {
			{ y2 + y3 <= y1 ? $('.scroll').css({ 'display': 'none' }) : $('.scroll').css({ 'display': 'block' }) }
		}
		ee();

		//Disable scroll-block на малых экранах
		if ($(window).width() <= 600) {
			$('.scroll').hide();
		}


	});

	//Disable scroll-block if scrolling
	$(document).on('scroll', function (e) {
		// e.stopPropagation();
		// e.preventDefault();
		// let y = $('.projects').offset().top;
		let y = $(document).scrollTop();
		let y1 = $(document).scrollTop() + $(window).height();
		let y2 = $('.topic').height();
		let y3 = parseInt($('.topic').css('padding-top'));

		//Disable topic-footer on mobile scroll
		if ($(window).width() <= mobile) {

			{ 10 <= y ? $('.topic__footer').css({ 'display': 'none' }) : $('.topic__footer').css({ 'display': 'flex' }) }
		} else {
			function ee() {
				{ y2 + y3 <= y1 ? $('.scroll').css({ 'display': 'none' }) : $('.scroll').css({ 'display': 'block' }) }
			}
			ee();
		};
	});


	//Disable menu on footer
	$(document).on('scroll', function (e) {
		// e.stopPropagation();
		// e.preventDefault();
		let y = $('.footer').offset().top;
		let y1 = $(document).scrollTop();
		let y2 = $('.menu').height();
		let y3 = parseInt($('.menu').css('top'));
		// console.log("footer top " + y, "menu top " + y3, "menu height " + y2, "scroll " + y1);
		// console.log("footer top " + y, "menu top+height " + (y2 + y3), "scroll " + y1);

		function ee() {
			// console.log(y);
			console.log(y <= (y1 + y2 + y3 - 1));
			// console.log(y1 + y2 + y3);
			// console.log(y1 + y2 + y3 - 1);
			// { y <= (y1 + y2 + y3) ? $('.menu').css({ 'position': 'absolute', 'top': y - y2 }) : $('.menu').css({ 'position': 'fixed', 'top': '224px' }) }


			if (y <= (y1 + y2 + y3)) {
				// $('.menu').css({ 'position': 'absolute', 'top': y - y2 });

			} else
				$('.menu').css({ 'position': 'fixed', 'top': '224px' })


		}
		ee();

		// function ee() {
		// 	{ y <= y1 ? $('.menu').css({ 'position': 'absolute', 'top': y - y2 }) : $('.menu').css({ 'position': 'fixed', 'top': '224px' }) }
		// }
		// ee();
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
		$('.projects__body').css({
			// overflow: 'hidden',
			// 'min-height': '100vh'
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


	//Отработка клика на пункт "Проекты" в Menu
	$('.menu__top-link[data-type="projects"], .menu-disable__top-link[data-type="projects"], .scroll').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		let y = $('.projects').offset().top;
		let y1 = $('.header').height();
		function ee() {
			$(document).scrollTop(y - y1);
		}
		ee();
		// $('.menu-disable').css('display', 'none');
	});

});


