/*---------------------weather-----*/
//const apiURL="https://api.openweathermap.org/data/2.5/forecast?id=4092267&units=imperial&APPID=e7e99f72ef4dc80d87dfcaa6b6420751";
const apiURL="https://api.openweathermap.org/data/2.5/forecast?lat=45.4200821&lon=-116.3296497&units=imperial&APPID=e7e99f72ef4dc80d87dfcaa6b6420751";
//const apiURL="https://api.openweathermap.org/data/2.5/forecast?zip=83549,us&units=imperial&APPID=e7e99f72ef4dc80d87dfcaa6b6420751";
fetch(apiURL)
.then((response) => response.json())
.then((jsObject)=>{
    //console.log(jsObject);
    const imgsource = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';
    const descrip = jsObject.list[0].weather[0].description;
    document.getElementById('current').textContent=jsObject.list[0].weather[0].main;
    document.getElementById('icon').setAttribute('src', imgsource);
    document.getElementById('icon').setAttribute('alt', descrip);
    document.getElementById('high').textContent = jsObject.list[0].main.temp_max.toFixed(0);
    document.getElementById('humidity').textContent = jsObject.list[0].main.humidity.toFixed(0);

}
)