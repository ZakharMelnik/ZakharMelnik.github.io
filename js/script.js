

/*activation tooltip*/

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});


/*Last projects: site selection*/

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


	/*Header scrolling styling*/

	var scroll_top = $(document).scrollTop();
	if(scroll_top >= 500){
	$('.header').addClass('scroll')
	}else{ $('.header').removeClass('scroll');}

	/*mobile scrolling styling*/
	if(window.matchMedia('(max-width: 480px)').matches){
		var scroll_top = $(document).scrollTop();
		if(scroll_top >= 80){
		$('.header').addClass('scroll')
		}else{ $('.header').removeClass('scroll');}
	};


	/*feedback form*/

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


	/*Header menu*/

	$(".header__menu img").click(function(e){
				e.preventDefault();
				$("#menu").toggleClass("show");
			});
			$("#menu a").click(function(event){
				if($(this).next('ul').length){
					$(this).next().toggle('fast');
					$(this).children('i:last-child').toggleClass('fa-caret-down fa-caret-left');
				}
	});

	$(document).on('click','.milk-shadow',function(){
		$(".header__menu img").click();
	});


});


/*Header dynamic-text*/

var typed = new Typed(".dynamic-text span", {
  strings: ["Zahar Melnik.", "Frontend developer."],
  loop: true,
  typeSpeed: 50,
  backSpeed : 50,
  startDelay: 0,
  backDelay: 2000
});


/*Анимация при скроле к элементу*/



/*Header scrolling styling*/

$(document).on('scroll', function(){
var scroll_top = $(document).scrollTop();
if(scroll_top >= 600){
$('.header').addClass('scroll')
}else{ $('.header').removeClass('scroll');}
});

/*mobile scrolling styling*/
if(window.matchMedia('(max-width: 480px)').matches){
	$(document).on('scroll', function(){
	var scroll_top = $(document).scrollTop();
	if(scroll_top >= 80){
	$('.header').addClass('scroll')
	}else{ $('.header').removeClass('scroll');}
	});
};


/*Header open lang*/

$('.header__lang').hover(function(){
$(this).toggleClass('open');
});


/*Header switch theme*/

$('.header__theme .checkbox').click(function(){
	$(this).toggleClass('theme-light');
});


/*Счётчик*/

$(window).scroll(function (){
    $('#skills').each(function (){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+200) {
            move();
        }
    });
});

function move() {
    let width = 0;
    let id = setInterval(frame, 2);
    
    function frame() {
        if (width >= $('#myBar').data('num')) {
            clearInterval(id);
        } else {
            width++;
            $('#myBar').css('width', width + '%');

            $('.skill-percent').html(width + ' percent');
        }
    }
    return;
};



