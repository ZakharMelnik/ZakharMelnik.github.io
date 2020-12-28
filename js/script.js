$(document).ready(function () {
	new WOW().init();
	var rellax = new Rellax('.rellax');

	if (localStorage.getItem('theme') == 'dark') {
		$('body').addClass('dark');
	} else {
		$('body').removeClass('dark');
	}

	tippy('#tooltip-vue', {
		content: 'Vue.js framework ',
	});
	tippy('#tooltip-webpack', {
		content: 'Webpack',
	});
	tippy('#tooltip-gulp', {
		content: 'Gulp',
	});


	// $(".html").click(function () {
	// 	$(".projects").css("display", "none");
	// 	$(".page-html").css("display", "block");
	// 	$(this).toggleClass("active");
	// });

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
		$(this).addClass('active').siblings().removeClass('active')
		$('.projects__container').animate({scrollTop:0});
	});

	$('.filter a span#all').html($('.project').filter('[data-cat]').length)
	$('.link-projects span').html($('.project').filter('[data-cat]').length)
	$('.filter a span#promotion').html($('.project').filter('[data-cat="promotion"]').length)
	$('.filter a span#landing').html($('.project').filter('[data-cat="landing"]').length)
	$('.filter a span#commerce').html($('.project').filter('[data-cat="commerce"]').length)
	$('.filter a span#social').html($('.project').filter('[data-cat="social"]').length)
	

	$('.link-theme').click(function () {
		if (localStorage.getItem('theme') == 'dark') {
			localStorage.setItem('theme', 'light');
			$('body').removeClass('dark');
		} else {
			localStorage.setItem('theme', 'dark');
			$('body').addClass('dark');
		}
	});

});

/*activation*/

$(function () {
	$('[data-toggle="tooltip"]').tooltip()
});

// $('#pageTimer').html(countdown( new Date(2018, 05, 12), new Date(), null, 2 ).toString());

var start = moment([2018, 09, 12]); // Beginning of work
var now = moment();

var years = now.diff(start, 'year');
start.add(years, 'years');

var months = now.diff(start, 'months');
start.add(months, 'months');

var days = now.diff(start, 'days');

// $('#pageTimer').html(years + ' years ' + months + ' months ' + days + ' days');
$('.work-experience .date').html(years + ' years ' + months + ' months ');



// $('.link.link-skills').click(function() {
// 	$('.bg-popup').toggleClass('show');
// });

// $('.bg-popup').click(function() {
// 	$(this).removeClass('show');
// });

$('.link-projects').click(function() {
	$('.link').removeClass('active');
	$('.content').removeClass('show');
	$('.left-col').toggleClass('hide');
	
	$('.content-projects').toggleClass('show');
	$(this).toggleClass('active');
});

$('.link-about').click(function() {
	$('.link').removeClass('active');
	$('.content').removeClass('show');
	$('.left-col').toggleClass('hide');

	$('.content-about').toggleClass('show');
	$(this).toggleClass('active');
});

$('.link-skills').click(function() {
	$('.link').removeClass('active');
	$('.content').removeClass('show');
	$('.left-col').toggleClass('hide');

	$('.content-skills').toggleClass('show');
	$(this).toggleClass('active');
});

$('.link-webpack').click(function() {
	$('.link').removeClass('active');
	$('.content').removeClass('show');
	$('.left-col').toggleClass('hide');

	$('.content-webpack').toggleClass('show');
	$(this).toggleClass('active');
});

$('.link-gulp').click(function() {
	$('.link').removeClass('active');
	$('.content').removeClass('show');
	$('.left-col').toggleClass('hide');

	$('.content-gulp').toggleClass('show');
	$(this).toggleClass('active');
});

$('.content-head .back').click(function() {
	$('.link').removeClass('active');
	$('.left-col.hide').removeClass('hide');
	$('.content').removeClass('show');
});

