import '../lib/selectize.min.js';
import mobiscroll from '../lib/mobiscroll.jquery.min.js';
// import datepicker from 'air-datepicker';

// //datepicker
// ;(function ($) { $.fn.datepicker.language['en'] = {
//   days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
//   daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
//   daysMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
//   months: ['January','February','March','April','May','June', 'July','August','September','October','November','December'],
//   monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//   today: 'Today',
//   clear: 'Clear',
//   dateFormat: 'mm dd yyyy',
//   timeFormat: 'hh:ii aa',
//   firstDay: 0
// }; })(jQuery);

// $('.my-datepicker').datepicker({
//   language: 'en',
//   minDate: new Date()
// });


//select
$('select').selectize();

//pop-up
  //pop-up open
  $('[data-pop]').on('click', function(event) {
    event.preventDefault();
    let href = $(this).attr('href');
    $(href).fadeIn();
    $('.pop-up-bg').fadeIn()
  });

  //pop-up close
  $('.close, .pop-up-bg').on('click', function(event) {
    event.preventDefault();
    $('.pop-up, .pop-up-bg').fadeOut();
    $('.header').removeClass('active')
    $('.header a').find('img').attr('src', 'img/add_product.svg')
  });
  //menu digital-kit
    $('.header a').on('click', function(){
      if($(this).parent('.header').hasClass('active')){
        $(this).parent('.header').removeClass('active')
        $('.pop-up, .pop-up-bg').fadeOut();
        $(this).find('img').attr('src', 'img/add_product.svg')
      } else{
        $(this).parent('.header').addClass('active')
        $(this).find('img').attr('src', 'img/add_product_white.svg')
      }
    })

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



//password
var pass = $('input[type="password"]');
$('.password-show').click(function() {
  pass.attr('type', pass.attr('type') === 'password' ? 'text' : 'password');
});

//data
mobiscroll.settings = {
  theme: 'ios',
      lang: 'en'
};
$(function () {
// Mobiscroll Date & Time initialization
$('#date').mobiscroll().date({
  dateFormat: "DD dd MM yy"
});
    
// Mobiscroll Date & Time initialization
$('#demo-header').mobiscroll().date({
    headerText: false,
});

// Mobiscroll Date & Time initialization
$('#demo-non-form').mobiscroll().date();

// Mobiscroll Date & Time initialization
$('#demo-external').mobiscroll().date({
    showOnTap: false,
    showOnFocus: false,
    onInit: function (event, inst) {
        inst.setVal(new Date(), true);
    }
});

$('#show').click(function () {
    $('#demo-external').mobiscroll('show');
    return false;
});
});