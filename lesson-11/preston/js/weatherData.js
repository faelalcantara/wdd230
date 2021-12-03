function getDayOfTheWeek(object) {
	let weekDay = "";
	let date = new Date(object.dt_txt);
	let dayOfTheWeek = date.getDay();

	switch (dayOfTheWeek) {
		case 0:
			weekDay = "Sun";
			break;
		case 1:
			weekDay = "Mon";
			break;
		case 2:
			weekDay = "Tue";
			break;
		case 3:
			weekDay = "Wed";
			break;
		case 4:
			weekDay = "Thu";
			break;
		case 5:
			weekDay = "Fri";
			break;
		case 6:
			weekDay = "Sat";
			break;
		default:
			weekDay = "n/a";
			break;
	}

	return weekDay;
}

function outputForecastCard(object) {
	let weekDay = getDayOfTheWeek(object);

	let card = document.createElement("div");
	card.classList.add("forecast-day");

	let dayOfTheWeek = document.createElement("div");
	dayOfTheWeek.classList.add("week-day");
	dayOfTheWeek.textContent = weekDay;

	let img = document.createElement("img");
	let baseImgUrl = "http://openweathermap.org/img/wn/";
	img.setAttribute("src", `${baseImgUrl}${object.weather[0].icon}@2x.png`);
	img.setAttribute("alt", object.weather[0].description);

	let temperature = document.createElement("div");
	temperature.classList.add("temperature");
	temperature.textContent = `${object.main.temp.toFixed()} °F`;

	card.appendChild(dayOfTheWeek);
	card.appendChild(img);
	card.appendChild(temperature);

	document.querySelector(".forecast-main").appendChild(card);
}

function outputSummary(object) {
	document.querySelector(".currently").textContent = object.weather[0].main;

	let highTemperature = document.querySelector(".high-temperature");
	highTemperature.textContent = object.main.temp_max.toFixed(1);

	let temperature = parseFloat(highTemperature.innerText);

	let windSpeed = document.querySelector(".wind-speed");
	windSpeed.textContent = object.wind.speed;

	let humidity = document.querySelector(".humidity");
	humidity.textContent = object.main.humidity;

	const speed = parseFloat(windSpeed.innerText);

	const windChill =
		35.74 +
		0.6215 * temperature -
		35.75 * speed ** 0.16 +
		0.4275 * (temperature * speed ** 0.16);

	if (temperature > 50 || speed < 3) {
		document.querySelector(".wind-chill").innerText = "n/a";
	} else {
		document.querySelector(".wind-chill").innerText =
			windChill.toFixed(1) + "°F";
	}
}

const apiKey = "1414ba56a14dbf67746a1932cb8b6b41";
const url = `https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=${apiKey}`;

fetch(url)
	.then((response) => response.json())
	.then((data) => {
		let currentDay = data["list"][0];
		let day2 = data["list"][8];
		let day3 = data["list"][16];
		let day4 = data["list"][24];
		let day5 = data["list"][32];
		let day6 = data["list"][39];
		let fiveDaysForecastList = [currentDay, day2, day3, day4, day5, day6];

		for (let i = 1; i < fiveDaysForecastList.length; i++) {
			outputForecastCard(fiveDaysForecastList[i]);
		}

		outputSummary(currentDay);
	});
