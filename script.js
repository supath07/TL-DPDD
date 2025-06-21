
  // Weather API for Stamford 7-day forecast
var url = "https://api.open-meteo.com/v1/forecast?latitude=52.91&longitude=-0.64&daily=temperature_2m_max,temperature_2m_min&timezone=Europe/London";

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var weatherBox = document.getElementById("weather-container");
    var days = data.daily.time;
    var maxTemps = data.daily.temperature_2m_max;
    var minTemps = data.daily.temperature_2m_min;

    for (var i = 0; i < 7; i++) {
      var box = document.createElement("div");
      box.className = "forecast-day";

      var date = document.createElement("strong");
      date.textContent = days[i];

      var high = document.createElement("p");
      high.textContent = "High: " + maxTemps[i] + "°C";

      var low = document.createElement("p");
      low.textContent = "Low: " + minTemps[i] + "°C";

      box.appendChild(date);
      box.appendChild(high);
      box.appendChild(low);

      weatherBox.appendChild(box);
    }
  })
  .catch(function(error) {
    console.log("There was an error loading the weather data.");
  });
