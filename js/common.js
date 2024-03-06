$(document).ready(function(){
    AOS.init({
      offset: 200,
      duration: 1100
    });
    $('#header').css({height:$(window).height(),width:$(window).width()});
    $(window).resize(function(){
        $('#homeFullScreen').css({height:$(window).height(),width:$(window).width()});
    });
});