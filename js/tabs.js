const tabButtons = document.querySelectorAll('.design-list__item')
const tabTexts = document.querySelectorAll('.design__descr')
const tabImages = document.querySelectorAll('.design-images')
const tabHeaders = document.querySelectorAll('.design__title')
const tabImageBlock = document.querySelectorAll('.design-block__img')

function changeContent(arr, value) {
  arr.forEach((elem) => {
    if (elem.dataset.tabsField === value) {
      elem.classList.remove('hidden')
    } else {
      elem.classList.add('hidden')
    }
  })
}

//title
title.innerText = tabHeaders[0].innerText

tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener('click', (event) => {
    const dataValue = tabButton.dataset.tabsHandler

    //title
    Array.from(tabHeaders).filter(header => {
      return header.dataset.tabsField === dataValue
    }).forEach(elem => {
      title.innerText = elem.innerText
    })

    tabButtons.forEach(btn => {
      if (btn === event.target) {
        btn.classList.add('design-list__item_active')
      } else {
        btn.classList.remove('design-list__item_active')
      }
    })
    changeContent(tabImages, dataValue)
    changeContent(tabTexts, dataValue)
    changeContent(tabHeaders, dataValue)
    changeContent(tabImageBlock, dataValue)
  })
})