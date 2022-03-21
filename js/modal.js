const more = document.querySelectorAll('.more')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.modal__close')
const overlay = modal.querySelector('.overlay')

const array = [...more, closeBtn, overlay]

array.forEach((element) => {
  element.addEventListener('click', () => {
    modal.classList.toggle('hidden')
  })
})

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modal.classList.toggle('hidden')
  }
})