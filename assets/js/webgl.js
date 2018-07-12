 /*$(window).scroll(function(){
var a = $('.wrap').scrollTop();
console.log(a);
        if (a > 0) {
         $('.navigation').addClass('nav-height');
         $('.nav-button-item').addClass('nav-underline-small').removeClass('nav-underline');
       } else {
         $('.navigation').removeClass('nav-height nav-underline-small');
         $('.nav-button-item').addClass('nav-underline').removeClass('nav-underline-small'); }

       }); */

$(document).ready(function() {
  $('.wrap').bind("scroll", function () {

    var a = $('.wrap').scrollTop();
    console.log(a);
            if (a > 0) {
             $('.navigation').addClass('nav-height');
             $('.nav-button-item').addClass('nav-underline-small').removeClass('nav-underline');
           } else {
             $('.navigation').removeClass('nav-height nav-underline-small');
             $('.nav-button-item').addClass('nav-underline').removeClass('nav-underline-small'); }

    }
  );

}) 
