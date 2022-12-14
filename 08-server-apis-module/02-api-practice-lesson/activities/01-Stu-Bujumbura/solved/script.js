const log = console.log.bind(document);

// Here we are building the URL we need to query the database
const queryURL = (city,country) => {
  var APIKey = "8143ac5be27f4f44b6e5d03ce390686b";
  return `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKey}`;
};

const city = 'Bujumbura';
const country = 'Burundi';
const url = queryURL(city,country);

// We then created an AJAX call
$.ajax({
  url: url,
  method: "GET"
}).then(function(response) {

  // Create CODE HERE to Log the queryURL
  log(url);
  
  // Create CODE HERE to log the resulting object
  log(response);
  
  // Create CODE HERE to calculate the temperature (converted from Kelvin)
  // Hint: To convert from Kelvin to Celsius: C = K - 273.15
  const convertKtoC = (K) => { return (K - 273.15); }

  // Convert m/s to MPH
  const convertMStoMPH = (ms) => { return (ms * 2.23694); }
  
  // Create CODE HERE to transfer content to HTML
  const render = (city,windspeed,humidity,temp) => {
    $('.city').text('City : ' + city);
    $('.wind').text('Windspeed : ' + convertMStoMPH(windspeed).toFixed(2) + 'MPH');
    $('.humidity').text('Humidity : ' + humidity + '%');
    $('.temp').text('Temperature : ' + convertKtoC(temp) + '\xB0' + 'C');
  }
  
  // Create CODE HERE to dump the temperature content into HTML
  render(response.name, response.wind.speed, response.main.humidity , response.main.temp);

});
