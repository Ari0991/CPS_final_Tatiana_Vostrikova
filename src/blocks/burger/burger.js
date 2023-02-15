const burgerMenu = document.querySelector('.burger')
const burgerBlur = document.querySelector('.burger__blur')
const burgerButton = document.querySelector('.item--burger')
const closeButton = burgerMenu.querySelector('.button--close')

const burgerButtonInteractive = burgerButton.addEventListener(
  'click',
  function () {
    burgerMenu.classList.add('burger--visible')
    burgerBlur.classList.add('burger--opacity')
  }
)

closeButton.addEventListener('click', function () {
  burgerMenu.classList.remove('burger--visible')
  burgerBlur.classList.remove('burger--opacity')
})

burgerBlur.addEventListener('click', function () {
  burgerMenu.classList.remove('burger--visible')
  burgerBlur.classList.remove('burger--opacity')
})
