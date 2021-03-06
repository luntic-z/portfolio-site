const forms = document.querySelectorAll('form')

const sendForm = (body, form) => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else throw new Error(response.status)
    })
    .then(data => {
      alert('Данные отправлены успешно')
    })
    .catch(error => {
      alert('Данные отправлены с ошибкой ' + error.message)
    })
    .finally(() => {
      form.reset()
    })

}

forms.forEach((form) => {
  if (form.closest('.modal')) {
    form.addEventListener('submit', (event) => {
      const modal = document.querySelector('.modal')
      modal.classList.add('hidden')
    })
  }
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    const body = {}

    formData.append('form', form.classList.value)

    formData.forEach((value, field) => {
      body[field] = value;
    })

    sendForm(body, form)
  })
})