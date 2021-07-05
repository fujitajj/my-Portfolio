$(function() {
  $("#hamburger-menu").click(function(){
    $(this).toggleClass("open");
    $("#nav").toggleClass("open");
  });

if($('.js-trigger').length) {
    scrollAnimeation();
  }
  if($('.js-trigger2').length) {
    scrollAnimeation2();
  }

 function scrollAnimeation() {
  $(window).scroll(function() {
    $('.js-trigger').each(function() {
      let position = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();

     if(scroll>position-windowHeight+200) {
       $(this).addClass('scroll-action');
     }
    });
  });
 }
 function scrollAnimeation2() {
  $(window).scroll(function() {
    $('.js-trigger2').each(function() {
      let position = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();

     if(scroll>position-windowHeight+200) {
       $(this).addClass('scroll-action2');
     }
    });
  });
 }

 $(window).trigger('scroll');



});