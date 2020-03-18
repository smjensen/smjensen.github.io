



//-----------------Weather Data------------------

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=35b12c8d999fdda2699d5d2204b76ea4";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
	console.log(jsObject);
	
	const weatherAPI = jsObject;

    document.getElementById('valCurrent').textContent = weatherAPI.weather[0].main;

    document.getElementById('valHigh').textContent = weatherAPI.main.temp_max.toFixed(1);

    document.getElementById('valHumid').textContent = weatherAPI.main.humidity;
	
	document.getElementById('valWind').textContent = weatherAPI.wind.speed;
	
  });

//-----------------Forecast Data------------------

const apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=35b12c8d999fdda2699d5d2204b76ea4";

fetch(apiForecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
	console.log(jsObject);
	
	const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

	for (let i = 0; i < jsObject.list.length; i++ ){
		if (new Date(jsObject.list[i].dt_txt).getHours() == 18) {

			var forecastAPI = jsObject.list[i];
			
			let div1 = document.createElement('div');
			let div2 = document.createElement('div');
			let head = document.createElement('strong');
			let div3 = document.createElement('div');
			let image = document.createElement('img');
			let temp = document.createElement('p');

			const imageidentifier = forecastAPI.weather[0].main;
			if (imageidentifier == "Clear"){
				var imgSource = "assets/sunny.png";
			} 
			else if (imageidentifier == "Clouds"){
				var imgSource = "assets/cloud.png";
			}
			else if (imageidentifier == "Snow"){
				var imgSource = "assets/snow.png";
			}
			else if (imageidentifier == "Rain" || imageidentifier == "Drizzle"){
				var imgSource = "assets/rain.png";
			}
			else if (imageidentifier == "Thunderstorm"){
				var imgSource = "assets/thunderstorm.png";
			}
			else {
				var imgSource = "assets/mist.png"
			}


			head.textContent = dayOfWeek[new Date(forecastAPI.dt_txt).getDay()];
			image.setAttribute('src', imgSource);
			image.setAttribute('alt', forecastAPI.weather[0].description);
			temp.innerHTML = forecastAPI.main.temp.toFixed(1) + " &#8457;";

			div1.appendChild(div2);
			div2.classList.add("Day");
			div2.appendChild(head);
			div3.classList.add("DayContent");
			div1.appendChild(div3);
			div3.appendChild(image);
			div3.appendChild(temp);

			document.querySelector('div.forecastTable').appendChild(div1);

		}
	}
  });

  //----------------- Wind Chill Calculator -----------------


const tempF = parseFloat(document.getElementById("valHigh").textContent);
const speed = parseFloat(document.getElementById("valWind").textContent);

/* Celsius Calculator

if(tempC < 11 && speed < 4){
var tempF = (tempC * 9 /5) + 32; // Convert Celsius to Fahrenheit
var chill = windChill(tempF, speed); // Calculate Wind chill
var chillC = (chill - 32) * 5/9; // Convert back to Celsius
document.getElementById('valChill').textContent = chillC.toFixed(1);
}
else {
	document.getElementById('valChill').textContent = "N/A";
	document.getElementById('windUnit').textContent = "";
} */


// Fahrenheit calculator

if (tempF < 51 && speed < 4){
	var chill = windChill(tempF, speed);
	document.getElementById('valChill').textContent = chill.toFixed(1); 
}
else {
	document.getElementById('valChill').textContent = "N/A";
	document.getElementById('windUnit').textContent = "";
}

function windChill (TempF, speed) {
	var speedPower = Math.pow(speed, 0.16);
	var windChillFactor = 35.74 + (0.6215 * TempF) - (35.75 * speedPower) + (0.4275 * TempF * speedPower);
	return windChillFactor;
}