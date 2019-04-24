// анимация
$(document).ready(function () {
  // подключение анимации
  AOS.init({
    duration: 1000,
    offset: 800,
    once: true,
    disable: 'mobile' 
  });

  if ($('.js-animate').length > 0) {
    $(window).on('scroll', function () {
      if ($('.js-animate').offset().top <= $(window).height() * 2 / 3 + $(window).scrollTop()) {
        $('.js-animate').addClass('is-animate');
      } else {
        $('.js-animate').removeClass('is-animate');
      }
    });
  }

  // плавный скролл к блоку
  $('.js-page-slideDown').on(wheelEvent, function (e) {
      e = e || window.event;

      var $activeSection = $(this);
      var delta = e.deltaY || -e.detail || e.wheelDelta || -e.originalEvent.detail || -e.originalEvent.deltaY;
      delta = -20 * (Math.max(-1, Math.min(1, delta)));

      if (pageSlideSection($activeSection, delta)) {
        e.stopPropagation();
        e.preventDefault();
        return false;
      }
    })
    .on('touchstart', function (e) {
      positionTap.X = (e.changedTouches !== undefined && e.changedTouches[0] !== undefined) ? e.changedTouches[0].pageX : e.pageX;
      positionTap.Y = (e.changedTouches !== undefined && e.changedTouches[0] !== undefined) ? e.changedTouches[0].pageY : e.pageY;
    })
    .on('touchend', function (e) {
      var positionCurrent = {
        X: (e.changedTouches !== undefined && e.changedTouches[0] !== undefined) ? e.changedTouches[0].pageX : e.pageX,
        Y: (e.changedTouches !== undefined && e.changedTouches[0] !== undefined) ? e.changedTouches[0].pageY : e.pageY
      };

      if (Math.abs(positionTap.Y - positionCurrent.Y) > 3) {
        var $activeSection = $(this);
        var delta = positionTap.Y - positionCurrent.Y;

        pageSlideSection($activeSection, delta);
      }
    });

  function pageSlideSection($activeSection, delta) {
    var destination = -1;
    var scrollTop = $(window).scrollTop();
    var activeIndex = $activeSection.index('.js-page-slideDown');

    if (delta > 0 && activeIndex < $('.js-page-slideDown').length - 1) {
      if ($activeSection.offset().top + $activeSection.outerHeight() <= scrollTop + $(window).height()) {
        destination = $('.js-page-slideDown').eq(1 + activeIndex).offset().top;
      }
    } else if (delta < 0 && activeIndex > 0) {
      if (scrollTop <= $activeSection.offset().top) {
        destination = $('.js-page-slideDown').eq(activeIndex - 1).offset().top;

        if (destination >= $(window).scrollTop()) {
          destination = -1;
        }
      }
    }

    if (destination >= 0 && destination !== $(window).scrollTop()) {
      destination = Math.max(0, destination);

      $('html, body').stop().animate({scrollTop: destination}, 1000);

      return true;
    }

    return false;
  }
});

$(function() {
  $.scrollify({
    section : ".section",
    updateHash: false,
    overflowScroll: true,
  });
  disableScrollify();
  $(window).resize(function() {
    disableScrollify();
  });
});

function disableScrollify() {
  if ($(window).height() < 700 || $(window).width() < 1024) {
    $.scrollify.disable();
  }
  else $.scrollify.enable()
}

/*$(document).ready(function() {
  	$('.all-wrap').fullpage({
      licenseKey: null,
      verticalCentered:!0,
      responsiveWidth:1024,
      responsiveHeight:700,
      scrollingSpeed:700,
      afterLoad:function(e,t){
        2==t&&(1023<$(window).width()&&i(2),1279<$(window).width()&&o(2),a(2)),
        3==t&&(1023<$(window).width()&&n(3),$(window).width(),a(3)),
        4==t&&(1023<$(window).width()&&i(4),1279<$(window).width()&&o(4),a(4)),
        5==t&&(1023<$(window).width()&&n(5),a(5)),
        6==t&&(1023<$(window).width()&&i(6),1279<$(window).width()&&o(6),a(6))
      },
      onLeave:function(e,t,i){
        2==t&&1023<$(window).width()&&c(2),
        3==t&&1023<$(window).width()&&s(3),
        4==t&&1023<$(window).width()&&c(4),
        5==t&&1023<$(window).width()&&s(5),
        6==t&&1023<$(window).width()&&s(6)
      }
  	});
  });*/