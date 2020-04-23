const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const icon = document.getElementById("weather-icon");

// messageOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const location = search.value

  fetchWeather(location)
})

const fetchWeather = (address) => {
  icon.style.display = 'none'
  messageOne.textContent = 'Searching...'
  fetch('/weather?address=' + address).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        return messageOne.textContent = data.error
      } 
        icon.setAttribute('src', data.forecast.icon)
        icon.style.display = 'block'
        messageOne.textContent = '[' + data.forecast.description + ']  気温：' + data.forecast.temperature + '度  体感温度：' + data.forecast.feelslike + '度　湿度：' + data.forecast.humidity + '%' 
        messageTwo.textContent = data.location
    })

  })
}