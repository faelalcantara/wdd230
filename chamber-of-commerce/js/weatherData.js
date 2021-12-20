function getDayOfTheWeek(object) {
	let weekDay = "";
	let date = new Date(object.dt);
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

	console.log(weekDay)

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
	temperature.textContent = `${object.temp.day.toFixed()}°F`;

	card.appendChild(dayOfTheWeek);
	card.appendChild(img);
	card.appendChild(temperature);

	document.querySelector(".forecast-main").appendChild(card);
}

function outputSummary(object) {
	document.querySelector(".today-temperature").textContent = `${object.temp.day.toFixed()}°F`;

	let baseImgUrl = "http://openweathermap.org/img/wn/";
	let img = document.querySelector(".current-img");
	img.setAttribute("src", `${baseImgUrl}${object.weather[0].icon}@2x.png`);
	img.setAttribute("alt", object.weather[0].description);

	let description = document.querySelector(".condition");
	description.textContent = object.weather[0].description;

	let humidity = document.querySelector(".humidity");
	humidity.textContent = `Humidity: ${object.humidity}%`;
}

const apiKey = "1414ba56a14dbf67746a1932cb8b6b41";
const lat = '-22.4838985'
const lon = '-43.2529976'
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
// const url = `https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=${apiKey}`;

fetch(url)
	.then((response) => response.json())
	.then((data) => {
		let currentDay = data["daily"][0];
		let day2 = data["daily"][1];
		let day3 = data["daily"][2];
		let day4 = data["daily"][3];
		let fiveDaysForecastList = [currentDay, day2, day3, day4];
		console.log(day4.dt)
		for (let i = 1; i < fiveDaysForecastList.length; i++) {
			let currentDate = fiveDaysForecastList[i].dt;
			outputForecastCard(fiveDaysForecastList[i], date);
		}

		console.log(fiveDaysForecastList)
		outputSummary(currentDay);
	});
