const searchWeather = function(city){
  searchURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=7d9ba91ae33f813b901a2b37f72aaac5`
  $.getJSON(searchURL).done(function (data) {
    //all the data
    console.log(data);
    sunrise = data.sys.sunrise
    sunset = data.sys.sunset
    wind = data.wind.speed
    windDirection = data.wind.deg
    let sunRiseConverted = new Date (sunrise * 1000) //myDate.toGMTString()
    let sunSetConverted = new Date (sunset * 1000) //myDate.toGMTString()

    $('#city').append(`${city}`)
    $('#basic-forecast').append(`${data.weather[0].description}`)
    $('#current-temp').append(`Current Temperature: ${data.main.temp}`)
    $('#min-temp').append(`Minimum Temperature: ${data.main.temp_min}`)
    $('#max-temp').append(`Maximum Temperature: ${data.main.temp_max}`)
    $('#humidity').append(`Humidity: ${data.main.humidity}`)
  });
}

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); //stay on the same page
    const query = $('#query').val();
    console.log(`searching for ${query}`);
    searchWeather(query);
  })
});


// var myDate = new Date( 1556650768 *1000);
// document.write(myDate.toGMTString()+"<br>"+myDate.toLocaleString());
