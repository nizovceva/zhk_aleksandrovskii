$(document).ready(function() {
  $('.screen-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    speed: 1000,
    arrows: true,
    prevArrow: '<div class="slick-arrow slick-arrow-prev"></div>',
    nextArrow: '<div class="slick-arrow slick-arrow-next"></div>',
  });
	$('.screen-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		setTextArrow($('.screen-slider'), nextSlide);
	});
});

function setTextArrow(slider, currentSlide) {
  var image = slider.find('.slick-slide[data-slick-index="' + currentSlide + '"]').data('image');
	slider.parents('.section').find('.screen-image').addClass('no-duration').fadeOut(0).fadeIn(1000).attr('src', image);
}