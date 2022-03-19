const more = document.querySelectorAll('.more')
const modal = document.querySelector('.modal')

const closeBtn = document.querySelector('.modal__close')
const overlay = modal.querySelector('.overlay')

more.forEach((link) => {
  link.addEventListener('click', () => {
    modal.classList.remove('hidden')
  })
})

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden')
})

overlay.addEventListener('click', () => {
  modal.classList.add('hidden')
})

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modal.classList.add('hidden')
  }
})