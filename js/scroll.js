const scrollBtn = document.querySelector('.main__scroll')
const mainBtn = document.querySelector('.main__button')
const linksMenu = document.querySelectorAll('.menu-list__link')

const links = [...linksMenu, mainBtn, scrollBtn]

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    const id = link.getAttribute('href').substring(1)
    const section = document.getElementById(id)

    if (section) {
      seamless.scrollIntoView(section, {
        block: 'start',
        behavior: "smooth"
      });
    }
  })
})