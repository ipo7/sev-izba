
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

	$('.feedback').on('click mouseleave touchend', function (e) {
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


	//Нажатие на кнопку "Заказать обратный звонок"
	$('.topic__footer-button').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		function ee() {
			$('.callback').css('display') == 'none' ? $('.callback').css({ 'display': 'flex' }) : $('.callback').css({ 'display': 'none' });
		};
		ee();

	});

	$('.callback-form__exit').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		$('.callback').toggle(200);

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

});


