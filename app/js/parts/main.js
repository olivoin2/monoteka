jQuery(document).ready(function($) {

	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false
	});

	$('.product [data-size]').click(function() {
		$(this).addClass('active');
		$(this).siblings('.active').removeClass('active');
	});

	$('.tabs').multitabs();

});