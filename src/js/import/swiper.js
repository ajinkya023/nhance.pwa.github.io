import Swiper from 'swiper';


//home
var swiper = new Swiper('.swiper-digital-kit', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination-digital-kit',
    type: 'fraction',
  },
});
$('.swiper-pagination-fraction').append('<span class="text">of</span>')