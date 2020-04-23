const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=083d5df5242e489cd4ef0e96618bc5c7&query=' + latitude + ',' + longitude + '&units=m'

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find weather data', undefined);
    } else {
      callback(undefined, {
        description: body.current.weather_descriptions[0],
        temperature: body.current.temperature,
        feelslike: body.current.feelslike,
        humidity: body.current.humidity,
        icon: body.current.weather_icons,
      });
    }
  })

}

module.exports = forecast