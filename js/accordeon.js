const accordeon = document.querySelector('.feature-list')
const accordeonBtns = accordeon.querySelectorAll('.feature__link')

accordeonBtns.forEach((button) => {
  button.addEventListener('click', (event) => {
    accordeonBtns.forEach(btn => {
      if (btn !== button) {
        btn.classList.remove('feature__link_active')
        btn.nextElementSibling.classList.add('hidden')
      }
    })
    button.classList.toggle('feature__link_active')
    button.nextElementSibling.classList.toggle('hidden')
  })
})