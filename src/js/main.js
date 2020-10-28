$(document).ready(function(){

///////// плавный скролл до якорей /////////

  var positions = [],
      currentActive = null,
      links = $('.btn--info, .btn--up');

  $(links).click(function (evt) {
    evt.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').stop().animate({scrollTop: top}, 750);
    return false;
  });

////////////////// Модальные окна

  $('*').on('show.bs.modal', function (e) {
    $('*').not(this).modal('hide');
  })

});