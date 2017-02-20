$(document).ready(function(){
  // Button #toTop show and hide
  $(window).scroll(function(){
    if($(this).scrollTop() > 200) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });

  // Navbar fixed
  $(window).scroll(function(){
    if($(this).scrollTop() > 600) {
      $('.header-top').css('background-color', 'rgb(16,22,54)');
    } else {
      $('.header-top').css('background-color', 'rgba(16,22,54,.2)');
    }
  });

  // Go to top
  $('#toTop').on('click', function() {
    $('html,body').animate({scrollTop: 0}, 1500);
  });


// Scroll to section
  $('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
// Mobile menu
$('.nav-btn').on('click', function() {
  $('nav').slideToggle();
});
});
