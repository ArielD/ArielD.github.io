/* $(window).scroll(function(){
  var a = $('.wrap').scrollTop();
  console.log(a);
          if (a > 0) {
           $('.navbar').css('min-height', 70);
         } else $('.navbar').css('min-height', 50);

       }); */
$(document).ready(function() {
  $('.wrap').bind("scroll", function () {

    var a = $('.wrap').scrollTop();
    console.log(a);
            if (a > 0) {
             $('.navbar').addClass('nav-height');
             $('.nav-button-item').addClass('nav-underline-small').removeClass('nav-underline');
           } else {
             $('.navbar').removeClass('nav-height nav-underline-small');
             $('.nav-button-item').addClass('nav-underline').removeClass('nav-underline-small'); }

    }
  );

})
