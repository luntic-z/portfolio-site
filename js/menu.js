const burger = document.querySelector('.humburger-menu')
const menu = document.querySelector('.menu')
const menuLinks = menu.querySelectorAll('.menu-list__link')

burger.addEventListener('click', () => {
  menu.classList.toggle('menu-active')
})

document.addEventListener('click', (event) => {
  if (!event.target.closest('.menu') && event.target !== burger) {
    menu.classList.remove('menu-active')
  }
})

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('menu-active')
  })
})