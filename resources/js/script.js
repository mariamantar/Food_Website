$(document).ready(function(){
// sticky nav
  $('.js--section-features').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  });

// scroll on buttons
$('.js--scroll-to-plans').click(function () {
  $('html, body').animate({scrollTop: $('.js--info-section').offset().top}, 1000);
});

$('.js--scroll-to-start').click(function () {
  $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
});

});
