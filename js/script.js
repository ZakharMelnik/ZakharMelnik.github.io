$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$(".projects__link li").click(function(e) {
  e.preventDefault();
  $(".projects__link li").removeClass('active');
  $(this).addClass('active');

  $(".projects__img a").attr("href","https://zakharmelnik.github.io/"+$(this).text());
  $(".projects__img a img").attr("src","img/projects/"+$(this).text()+".png");
  $(".projects__img a img").attr("alt",$(this).text());
  $(".projects__img").scrollTop(0);
});

$(document).ready(function() {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});