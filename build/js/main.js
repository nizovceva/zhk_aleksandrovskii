"use strict";svg4everybody(),function(){var e=function(i,e){!function(e,n){e.forEach(function(e){var o=void 0,i=void 0;i="string"==typeof e?o=e:(o=e[0],e[1]),n(o,i)})}(e,function(e,o){bowser[e]&&document.documentElement.classList.add("is-"+i+"-"+o)})};e("engine",["blink","gecko",["msedge","edge"],["msie","ie"],"webkit"]),e("device",["mobile","tablet"]),e("browser",["android","bada","blackberry","chrome","firefox","ios","kMeleon",["msedge","edge"],["msie","ie"],"opera","phantom","qupzilla","safari","sailfish",["samsungBrowser","samsung"],"seamonkey","silk","sleipnir","tizen","ucbrowser","vivaldi","webos",["yandexbrowser","yandex"]]),e("os",["android","bada","blackberry","chromeos","firefoxos","ipad","iphone","ipod","ios","linux","mac","windows","windowsphone","sailfish","tizen","webos"])}();var $window=$(window),$document=$(document),$html=$(document.documentElement),$body=$(document.body);function setTextArrow(e,o){var i=e.find('.slick-slide[data-slick-index="'+o+'"]').data("image");e.parents(".section").find(".screen-slider-bg").css("background-image","url("+i+")")}function disableScrollify(){$(window).height()<700||$(window).width()<1024?$.scrollify.disable():$.scrollify.enable()}$(document).ready(function(){$(".screen-slider").slick({slidesToShow:1,slidesToScroll:1,infinite:!0,fade:!0,speed:1e3,arrows:!0,prevArrow:'<div class="slick-arrow slick-arrow-prev"></div>',nextArrow:'<div class="slick-arrow slick-arrow-next"></div>'}),$(".screen-slider").on("beforeChange",function(e,o,i,n){setTextArrow($(".screen-slider"),n)})}),$(document).ready(function(){function n(e,o){var i=-1,n=$(window).scrollTop(),s=e.index(".js-page-slideDown");return 0<o&&s<$(".js-page-slideDown").length-1?e.offset().top+e.outerHeight()<=n+$(window).height()&&(i=$(".js-page-slideDown").eq(1+s).offset().top):o<0&&0<s&&n<=e.offset().top&&(i=$(".js-page-slideDown").eq(s-1).offset().top)>=$(window).scrollTop()&&(i=-1),0<=i&&i!==$(window).scrollTop()&&(i=Math.max(0,i),$("html, body").stop().animate({scrollTop:i},1e3),!0)}AOS.init({duration:1e3,offset:800,once:!0,disable:"mobile"}),0<$(".js-animate").length&&$(window).on("scroll",function(){$(".js-animate").offset().top<=2*$(window).height()/3+$(window).scrollTop()?$(".js-animate").addClass("is-animate"):$(".js-animate").removeClass("is-animate")}),$(".js-page-slideDown").on(wheelEvent,function(e){e=e||window.event;var o=$(this),i=e.deltaY||-e.detail||e.wheelDelta||-e.originalEvent.detail||-e.originalEvent.deltaY;if(n(o,i=-20*Math.max(-1,Math.min(1,i))))return e.stopPropagation(),e.preventDefault(),!1}).on("touchstart",function(e){positionTap.X=void 0!==e.changedTouches&&void 0!==e.changedTouches[0]?e.changedTouches[0].pageX:e.pageX,positionTap.Y=void 0!==e.changedTouches&&void 0!==e.changedTouches[0]?e.changedTouches[0].pageY:e.pageY}).on("touchend",function(e){void 0!==e.changedTouches&&void 0!==e.changedTouches[0]?e.changedTouches[0].pageX:e.pageX;var o=void 0!==e.changedTouches&&void 0!==e.changedTouches[0]?e.changedTouches[0].pageY:e.pageY;3<Math.abs(positionTap.Y-o)&&n($(this),positionTap.Y-o)})}),$(function(){$.scrollify({section:".section",updateHash:!1,overflowScroll:!0}),disableScrollify(),$(window).resize(function(){disableScrollify()})}),$("body").on("click",".js-hamburger",function(){var e=$(this);e.hasClass("is-active")?(e.removeClass("is-active"),$(".mobile-nav").removeClass("is-open")):(e.addClass("is-active"),$(".mobile-nav").addClass("is-open"))});