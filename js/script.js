
$(function () {

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

			console.log($('.header__container').css('justify-content'))
		};
		ee();

	});

	$('.header__mail').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		$('.feedback').toggle(200);

	});

	$('.feedback-form__exit').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		$('.feedback').toggle(200);

	});


	//Нажатие на кнопку "Заказать обратный звонок"
	$('.topic__footer-button').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		function ee() {
			$('.callback').css('display') == 'none' ? $('.callback').css({ 'display': 'flex' }) : $('.callback').css({ 'display': 'none' });

			console.log($('.callback').css('display'))
		};
		ee();

	});

	$('.callback-form__exit').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		$('.callback').toggle(200);

	});


});


