$(document).ready(function () {
	new WOW().init();
	var rellax = new Rellax('.rellax');


	$(".html").click(function () {
		$(".popup").css("bottom", "0");
		$(".about .bg").css("z-index", "0");
	});

	$(".about .bg").click(function () {
		$(".popup").css("bottom", "-100%");
		$(".about .bg").css("z-index", "-1");
	});


	$(".slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 200,
		fade: true,
		appendArrows: $('.arrows'),
		prevArrow: '<div id="prev"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.53 6.53a.75.75 0 1 0-1.06-1.06l1.06 1.06zm-5.823 4.763l.53.53-.53-.53zm0 1.414l.53-.53-.53.53zm4.763 5.823a.75.75 0 0 0 1.06-1.06l-1.06 1.06zm0-13.06l-5.293 5.293 1.06 1.06L14.53 6.53l-1.06-1.06zm-5.293 7.767l5.293 5.293 1.06-1.06-5.293-5.293-1.06 1.06zm0-2.474a1.75 1.75 0 0 0 0 2.474l1.06-1.06a.25.25 0 0 1 0-.354l-1.06-1.06z" fill="#000"/></svg></div>',
		nextArrow: '<div id="next"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.53 5.47a.75.75 0 0 0-1.06 1.06l1.06-1.06zm4.763 5.823l-.53.53.53-.53zm0 1.414l-.53-.53.53.53zM8.47 17.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06zm0-10.94l5.293 5.293 1.06-1.06L9.53 5.47 8.47 6.53zm5.293 5.647L8.47 17.47l1.06 1.06 5.293-5.293-1.06-1.06zm0-.354a.25.25 0 0 1 0 .354l1.06 1.06a1.75 1.75 0 0 0 0-2.474l-1.06 1.06z" fill="#000"/></svg></div>'
	});

	$('.popup-projects').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	$(function () {

		let filter = $("[data-filter]");

		filter.on("click", function (event) {
			event.preventDefault();

			let cat = $(this).data('filter');

			if (cat == 'all') {
				$("[data-cat]").removeClass("hide");
			} else {
				$("[data-cat]").each(function () {
					let workCat = $(this).data('cat');

					if (workCat != cat) {
						$(this).addClass('hide');
					} else {
						$(this).removeClass('hide');
					}
				});
			}
		});
	});

	$(".filter a").click(function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
});

/*activation*/

$(function () {
	$('[data-toggle="tooltip"]').tooltip()
});



