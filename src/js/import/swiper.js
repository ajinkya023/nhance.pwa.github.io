import Swiper from 'swiper';


//home
var swiper = new Swiper('.swiper-digital-kit', {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 700,
  pagination: {
    el: '.swiper-pagination-digital-kit',
    type: 'fraction',
  },
});
$('.swiper-pagination-fraction').append('<span class="text">of</span>')


var swiper2 = new Swiper('.swiper-scroll', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  freeMode: true,
  slidesPerView: 3,
  spaceBetween: 30,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  mousewheel: true,
});