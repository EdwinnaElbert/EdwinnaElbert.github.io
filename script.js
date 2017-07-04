$(function() {
  $('.js-nav a, .js-connect').click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
});
$(document).ready(function() {
  $('.ruby').css('width', '75%');
  $('.ror').css('width', '60%');
  $('.rspec').css('width', '20%');
  $('.mysql').css('width', '40%');
  $('.html').css('width', '73%');
  $('.css').css('width', '70%');
  $('.bootstrap').css('width', '50%');
  $('.js').css('width', '45%');
  $('.jquery').css('width', '65%');
  $('.git').css('width', '70%');
  $('.linux').css('width', '55%');
});
