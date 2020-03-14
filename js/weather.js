const apiURL="http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=e7e99f72ef4dc80d87dfcaa6b6420751";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = ((jsObject.main.temp-273.15)*(9/5)+32).toFixed(2);
    
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);
  });

  //lab examples
  /*
  const apiURL="weather";
  fetch(apiURL)
  .then((response)=> response.json())
  .then((jsObject);
  const currentTemp= document.querySelector
  ('#current-temp);
  const weatherIcon=document.querySelector
  ('*imagesrc');
  currentTemp.textContent=jsObject.main.temp;
  const imagesrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
  const desc = jsObject.weather[0].description;
  document.getElementById('imagesrc).textContent=imagesrc;
  document.getElementById('icon').setAttribute('src', imagesrc);
  document.getElmentById('icon').setAttribute('alt',desc);
});
  )*/
  /*
  const apiURL="forecast";
  fetch(apiURL)
  .then((response)=>)response.json())
  .then((jsObject);
  let fivecayforecast=[];
  const fivedayforecast=jsObject.list.filter(x=>x.dt_txt.includes('18:00::00));
  console.log(fivedayforecast);
  for(leti=0; i<fivedayforecast.length; i++){
    document..getElementById(`forecast${i+1}`). textContent.fivedayforecast[i].main.temp;
  }
});
*/