
$(function () {


	$(window).resize(function () {

		function rr(e) {
			// e.preventDefault();
			let offset = $('.logo-main__image').offset();
			let top = offset.top;
			let left = offset.left;
			console.log(left);
			if ($(window).width() > 1786) {
				$('.main__menu, .social-nets').offset({ left: left });
			} return;
		};
		rr();
	});

	$(window).resize();





});


