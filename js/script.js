
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
		//Выравнивание отступов projects по отступам menu
		function menu(e) {
			// e.preventDefault();
			let offset = $('.menu').offset();
			let top = offset.top;
			let left = offset.left;
			let width = $('.menu').width();
			console.log(left + width);
			if ($(window).width() > mobile) {
				$('.projects__container').css({ 'padding-left': left + width + 20 });
			} return;
		};
		menu();

	});

	$(window).resize();


	$('.burger').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		$(this).toggleClass('burger burger-disable');
		$('.header__mail, .logo-main').toggle();
		$('.menu-disable').toggle(200);

		function ee() {
			$('.header__container').css('justify-content') == 'flex-end' ? $('.header__container').css({ 'justify-content': 'space-between' }) : $('.header__container').css({ 'justify-content': 'flex-end' });


		};
		ee();

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

	$('.feedback').on('click mouseleave', function (e) {
		e.stopPropagation();
		e.preventDefault();

		if (window.matchMedia('(max-width: 414px)').matches) {
			// $('.feedback').toggle();
			return;
		} else {
			$('.feedback').css({ 'transform': 'translate(0px, 0)' });
		}

	});

	$('.feedback-form__exit').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();

		if (window.matchMedia('(max-width: 414px)').matches) {
			$('.feedback').toggle();
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


	//Временная заглушка на нажатие кнопки "Отправить"
	$('.feedback-form__button').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		$('.feedback').toggle();
		function ee() {
			$('.feedback-form-succses').css('display') == 'none' ? $('.feedback-form-succses').css({ 'display': 'flex' }) : $('.feedback-form-succses').css({ 'display': 'none' });
		};
		ee();

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

});


