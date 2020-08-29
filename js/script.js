
$('[data-modal=consultation]').on('click', function() {
  $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
  $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
});

$('.button_main').each(function(i) {
  $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
  });
});

$('.prod__item_link').each(function(i) {
  $(this).on('click', function() {
      $('#order .modal__subtitle').text($('.prod__item_title').eq(i).text());
      $('#order .modal__descr').text($('.prod__item__descr').eq(i).text());
      $('#order .modal__price').text($('.prod__price_money').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
  });
});


window.addEventListener('DOMContentLoaded', function(){
  'use strict';

/*   function hideTabContent(a) {
    for (let i = a; i <tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
    }
}
hideTabContent(1);

function showTabContent (b) {
    if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
} */

});




