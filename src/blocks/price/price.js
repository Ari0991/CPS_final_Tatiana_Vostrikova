import Swiper from 'swiper'

const swiperPrice = new Swiper('.price-swiper__container', {
  enabled: true,
  observer: true,
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 16,
  clickable: true,
  breakpoints: {
    768: {
      enabled: false
    },
    1120: {
      enabled: false
    }
  },

  pagination: {
    el: '.price-swiper__pagination',
    clickable: true
  }
})
