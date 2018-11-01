import '../lib/selectize.min.js';

//select
$('select').selectize();

//pop-up
  //pop-up open
  $('[data-pop]').on('click', function() {
    let href = $(this).attr('href');
    $(href).fadeIn();
    $('.pop-up-bg').fadeIn()
  });

  //pop-up close
  $('.close, .pop-up-bg').on('click', function(event) {
    event.preventDefault();
    $('.pop-up, .pop-up-bg').fadeOut();
  });

//tabs
$('.tabs__caption').on('click', 'li:not(.active)', function() {
  $(this).addClass('active').siblings().removeClass('active')
  $(this).closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

//add product
$('.product-card__info button').on('click', function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active')
  } else{
    $(this).addClass('active')
    $('.buy__selected').fadeIn();
  }
})

//radio input
$('.order__payment__radio__block').on('click', function(){
  if($(this).find('#radio-3').is(":checked")){
    $(this).find('label input').removeAttr('disabled')
  } else if(!$('.order__payment__radio__block').find('label input')){
  } else{
    var val = $('.order__payment__radio__block').find('label input').attr('disabled');
    $('.order__payment__radio__block--input').find('label input').attr('disabled', !val)
  }
})