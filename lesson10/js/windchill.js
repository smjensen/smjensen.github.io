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