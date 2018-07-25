 /*$(window).scroll(function(){
var a = $('.wrap').scrollTop();
console.log(a);
        if (a > 0) {
         $('.navigation').addClass('nav-height');
         $('.nav-button-item').addClass('nav-underline-small').removeClass('nav-underline');
       } else {
         $('.navigation').removeClass('nav-height nav-underline-small');
         $('.nav-button-item').addClass('nav-underline').removeClass('nav-underline-small'); }

       });*/

$(document).ready(function() {
  $('.wrap').bind("scroll", function () {

    var a = $('.wrap').scrollTop();
    //console.log(a);
            if (a > 0) {
             $('.navigation').addClass('nav-height');
             $('.nav-button-item').addClass('nav-underline-small').removeClass('nav-underline');
           } else {
             $('.navigation').removeClass('nav-height nav-underline-small');
             $('.nav-button-item').addClass('nav-underline').removeClass('nav-underline-small'); }

    }
  );

});

$(document).ready(function() {
  $('input.gallery-input[type="checkbox"]').click(function(){
   if( $(this).is(':checked') ) {
      $('.wrap-for-label').css({'position':'absolute', 'height': '100%', 'width': '100%'});
      $('.hide-items').css({'position':'absolute', 'height': '100%', 'width': '100%'});
   } else {
      $('.wrap-for-label').css({'position':'relative', 'height': '0', 'width': '0'});
      $('.hide-items').css({'position':'relative', 'height': '0', 'width': '0'});
   }
});


})
