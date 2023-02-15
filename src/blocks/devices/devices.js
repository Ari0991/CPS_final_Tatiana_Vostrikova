import Swiper from 'swiper'

const swiperDevices = new Swiper('.devices-swiper__container', {
  enabled: true,
  observer: true,
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 16,
  clickable: true,
  breakpoints: {
    768: {
      enabled: false
    }
  },

  pagination: {
    el: '.devices-swiper__pagination',
    clickable: true
  }
})

// Swiper button click

const swiperBlockDevices = document.querySelector('.devices-swiper')
const swiperWrapperDevices = swiperBlockDevices.querySelector(
  '.devices-swiper__wrapper'
)
const readMoreDevices = swiperBlockDevices.querySelector(
  '.devices-swiper__button--read-more'
)
const buttonIconDevices = readMoreDevices.querySelector('.button__icon')
const readMoreTextDevices = readMoreDevices.querySelector('.button__text')

let readMoreContentDevices = readMoreDevices.addEventListener(
  'click',
  function () {
    let isContentHideDevices = swiperWrapperDevices.classList.toggle(
      'swiper-wrapper--hide-content'
    )
    if (!isContentHideDevices) {
      swiperWrapperDevices.classList.remove('swiper-wrapper--hide-content')
      swiperWrapperDevices.classList.add('swiper-wrapper--max-height')

      readMoreTextDevices.textContent = 'Скрыть'
      buttonIconDevices.classList.add('button__icon--reverse')
    } else {
      swiperWrapperDevices.classList.add('swiper-wrapper--hide-content')
      swiperWrapperDevices.classList.remove('swiper-wrapper--max-height')
      readMoreTextDevices.textContent = 'Показать все'
      buttonIconDevices.classList.remove('button__icon--reverse')
    }
  }
)
