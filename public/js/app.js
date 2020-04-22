const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const location = search.value

  fetchWeather(location)
})

const fetchWeather = (address) => {
  messageOne.textContent = 'Searching...'
  fetch('/weather?address=' + address).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        return messageOne.textContent = data.error
      } 
        messageOne.textContent = '[' + data.forecast.description + ']  気温：' + data.forecast.temperature + '度  体感温度：' + data.forecast.feelslike + '度'
        messageTwo.textContent = data.location
    })

  })
}