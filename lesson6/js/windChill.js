const highTemperature = document.querySelector('.high-temperature');
const temperature = parseFloat(highTemperature.innerText);
const windSpeed = document.querySelector('.wind-speed');
const speed = parseFloat(windSpeed.innerText);
const windChill = 35.74 + (0.6215 * temperature) - (35.75 * (speed ** 0.16)) + (0.4275 * (temperature * (speed ** 0.16)));

if (temperature > 50 || speed < 3) {
  document.querySelector('.wind-chill').innerText = 'n/a'
} else {
  document.querySelector('.wind-chill').innerText = windChill.toFixed(1) + '°F'
}
