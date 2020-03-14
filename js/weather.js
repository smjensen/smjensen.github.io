
const d= new Date();
const todayDayNum= d.getDay();
const weekday= [];
weekday[0] ="Sun";
weekday[1] ="Mon";
weekday[2] ="Tue";
weekday[3] ="Wed";
weekday[4] = "Thu";
weekday[5] ="Fri";
weekday[6] ="Sat";

const apiURL="https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=e7e99f72ef4dc80d87dfcaa6b6420751";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('current').textContent = jsObject.list[0].weather[0].main;
    document.getElementById('temp').textContent = jsObject.list[0].main.temp_max.toFixed(0);
    document.getElementById('windspeed').textContent = jsObject.list[0].wind.speed.toFixed(0);
    document.getElementById('humidity').textContent = jsObject.list[0].main.humidity;
    
    
   const time = jsObject.list;
   let dtemp= 1;
   let forecastDayNum=todayDayNum;
   for (let i=0; i<time.length; i++) {
    
    if (time[i].dt_txt.includes("18:00:00")) {
      
       
      let icon = time[i].weather[0].icon;
   let descr= time[i].weather[0].description;
   let iconsrc= 'https://openweathermap.org/img/w/' + icon + '.png';
   let daytemp = jsObject.list[i].main.temp.toFixed(0);

   
   let mytemp="daytemp" + dtemp;
   let myicon= "icon" + dtemp;
   document.getElementById(mytemp).innerHTML= daytemp + "&#8457;";
   document.getElementById(myicon).setAttribute('src', iconsrc);
   document.getElementById(myicon).setAttribute('alt', descr);

   forecastDayNum+=1;
    if(forecastDayNum===7) {
      forecastDayNum=0;}
     
      let myweekday= "weekday" +dtemp;
      document.getElementById(myweekday).innerHTML=weekday[forecastDayNum];

   dtemp+=1;
   


     }}
   
     
    });

   /*==================windchill===============================*/ 
    let t = parseFloat(document.getElementById("temp").textContent);
    let s = parseFloat(document.getElementById("windspeed").textContent);
    
    let f;
    if (t<=50 && s>=3.0) {
    
    f = 35.74 + 0.6215*t - 35.75*s**0.16 + 0.4275*t*s**0.16;
    f= f.toFixed(0) + "&#8457;";
    }
    else {f= "N/A";}
   
    document.getElementById("windchill").textContent = f; 

/*//works with <body onload="windChill()">
function windChill() {
    
    let t = parseFloat(document.getElementById("temp").textContent);
    let s = parseFloat(document.getElementById("windspeed").textContent);
    //console.log(s);
    let f;
    if (t<=50 && s>=3.0) {
    
    f = 35.74 + 0.6215*t - 35.75*s**0.16 + 0.4275*t*s**0.16;
    f= f.toFixed(0)+ "&#8457;";
    }
    else {f= "N/A";}
   
    document.getElementById("windchill").textContent = f;
}*/