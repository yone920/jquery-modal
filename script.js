$(document).ready(function() {
  $('.learn-more-button').click(function(){
    $('.modal').addClass('show');
  });

  $('.close-button').click(function(){
    $('.modal').removeClass('show');
  });
});
