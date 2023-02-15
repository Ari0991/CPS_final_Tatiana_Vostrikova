const body = document.querySelector('.body')
const callButton = document.querySelectorAll('.item--call')
const chatButton = document.querySelectorAll('.item--chat')

const modalBlock = body.querySelectorAll('.modal__block')
const modalBlockFeedback = modalBlock[0]
const modalBlockCallback = modalBlock[1]

const modalBlurCallback = document.querySelectorAll('.modal__blur')
const BlurFeedback = modalBlurCallback[0]
const BlurCallback = modalBlurCallback[1]

const closeButtonModal = document.querySelectorAll('.modal__button')

// Call modal
const Call = callButton.forEach((element) => {
  element.addEventListener('click', function () {
    modalBlockCallback.classList.remove('modal--hidden')
  })
})
closeButtonModal.forEach((element) => {
  element.addEventListener('click', function () {
    modalBlockCallback.classList.add('modal--hidden')
  })
})

BlurCallback.addEventListener('click', function () {
  modalBlockCallback.classList.add('modal--hidden')
})

// Feedback modal

const Feedback = chatButton.forEach((element) => {
  element.addEventListener('click', function () {
    modalBlockFeedback.classList.remove('modal--hidden')
  })
})
closeButtonModal.forEach((element) => {
  element.addEventListener('click', function () {
    modalBlockFeedback.classList.add('modal--hidden')
  })
})

// BlurFeedback.addEventListener('click', function () {
//   modalBlockFeedback.classList.add('modal--hidden')
// })
