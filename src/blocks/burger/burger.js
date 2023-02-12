const burgerMenu = document.querySelector('.burger')
const burgerBlur = document.querySelector('.burger__blur')
const burgerButton = document.querySelector('.item--burger')
const closeButton = burgerMenu.querySelector('.button--close')

const burgerButtonInteractive = burgerButton.addEventListener(
  'click',
  function () {
    burgerMenu.classList.add('burger--visible')
    burgerBlur.style.opacity = '0.96'

    closeButton.addEventListener('click', function () {
      burgerMenu.classList.remove('burger--visible')
      burgerBlur.style.opacity = '0'
    })

    burgerBlur.addEventListener('click', function () {
      burgerMenu.classList.remove('burger--visible')
      burgerBlur.style.opacity = '0'
    })
  }
)
