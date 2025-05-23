
  const apiKey = 'b971868703d41917fcf540c1581380e2'; 
  const lat = -25.7461; 
  const lon = 28.1881;   

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const conditions = data.weather[0].description;
      const windSpeed = data.wind.speed;
      const iconCode = data.weather[0].icon;
      const windChill = calculateWindChill(temperature, windSpeed);

      document.getElementById('temperature').textContent = `${temperature} °C`;
      document.getElementById('conditions').textContent = conditions;
      document.getElementById('wind').textContent = `${windSpeed} km/h`;
      document.getElementById('windchill').textContent = windChill ? `${windChill} °C` : 'N/A';
      document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    })
    .catch(error => console.error('Error fetching weather data:', error));

  function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
      return Math.round(
        13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)
      );
    }
    return null;
  }

  document.getElementById('lastModified').textContent = document.lastModified;
