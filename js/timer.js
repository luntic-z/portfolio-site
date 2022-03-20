const timer = document.querySelector('.timer__time')
const deadline = '31 march 2022'

let interval

const updateClock = () => {
  const date = new Date().getTime()
  const dateDeadline = new Date(deadline).getTime()
  const timeRemaining = (dateDeadline - date) / 1000

  const days = Math.floor(timeRemaining / 60 / 60 / 24)
  const hours = Math.floor((timeRemaining / 60 / 60) % 24)
  const minutes = Math.floor((timeRemaining / 60) % 60)
  const seconds = Math.floor(timeRemaining % 60)

  const fDays = days > 0 ? `${days}д. ` : ''
  const fHours = hours > 9 ? hours : `0${hours}`
  const fMinutes = minutes > 9 ? minutes : `0${minutes}`
  const fSeconds = seconds > 9 ? seconds : `0${seconds}`

  timer.textContent = `${fDays}${fHours}:${fMinutes}:${fSeconds}`

  if (timeRemaining <= 0) {
    clearInterval(interval)
    timer.textContent = '00:00:00'
  }
}

updateClock()

interval = setInterval(updateClock, 5000)