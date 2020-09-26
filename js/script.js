
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

	//Поднятие наверх при перезагрузке страницы
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


	//Disable scrolling menu on footer
	const menuTop = parseInt($('.menu').css('top')); //добавляем в константу текущее положение menu
	$(document).on('scroll', function (e) {
		// e.stopPropagation();
		// e.preventDefault();
		let y = $('.footer').offset().top;
		let y1 = $(document).scrollTop();
		let y2 = $('.menu').height();

		function ee() {
			if (y <= (y1 + y2 + menuTop)) {
				$('.menu').css({ 'position': 'absolute', 'top': y - y2 });
			}
			else {
				$('.menu').css({ 'position': 'fixed', 'top': menuTop });
			}
		}
		ee();
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


	//Отработка клика на пункт "Проекты" в Menu, на Scroll
	$('.menu__top-link[data-type="projects"], .menu-disable__top-link[data-type="projects"], .scroll').on('click touchend', function (e) {
		e.stopPropagation();
		e.preventDefault();
		let y = $('.projects').offset().top;
		let y1 = $('.header').height();
		function ee() {
			// $(document).scrollTop(y - y1);
			$("html, body").animate({ scrollTop: (y - y1) }, 300);
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
				zoom: 10
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


					console.log(el.options._options.name == 'dolgoprudniy');

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


});


