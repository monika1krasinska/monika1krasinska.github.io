'use strict';
$(function (){
  $(window).scroll(function(){
    var win = $(window);
    if(win.scrollTop()>= 50){
        $("#main-nav").addClass("scroll");
    } else {
        $("#main-nav").removeClass("scroll");}
});

  $("a.[href^='#']").on("click",function(){
      var elementTarget = $(this.hash);
      $("html,body").animate({scrollTop:elementTarget.offset().top -74},600)
  })
  })