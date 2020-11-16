//scroll //

$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

//hamburger btn//

$(function () {
  $('.hamburger-menu').on('click', function () {
    $('.toggle').toggleClass('open');
    $('.nav-list').toggleClass('open');

  });
  
//animation scroll//
  
  AOS.init({
    easing:'ease',
    duration:1500,

  });


});
//accordian//
$('.panel-title > a').click(function() {
      $(this).find('i').toggleClass('fa-plus fa-minus')
        .closest('panel').siblings('panel')
        .find('i')
        .removeClass('fa-minus').addClass('fa-plus');
    });