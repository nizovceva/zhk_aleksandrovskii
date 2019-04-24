svg4everybody();

// @include('detect.js')
// @include('globals.js')

// @include('_animate.js')
// @include('_sliders.js')
// @include('_layout.js')

$('body').on('click', '.js-hamburger', function() {
  let _this = $(this);
  if (_this.hasClass('is-active')) {
    _this.removeClass('is-active');
    $('.mobile-nav').removeClass('is-open');
  }
  else {
    _this.addClass('is-active');
    $('.mobile-nav').addClass('is-open');
  }
});