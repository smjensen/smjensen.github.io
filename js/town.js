const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
 
fetch(requestURL)

  .then(function (response) {

    return response.json();

  })
  
  .then(function (jsonObject) { 

    const towns = jsonObject['towns'];

   for (let i = 0; i < towns.length; i++ ) {

       if (towns[i].name == "Fish Haven" || towns[i].name =="Preston"|| towns[i].name == "Soda Springs" ) {

    let card = document.createElement('section');
    let text = document.createElement('div');
      let h4 = document.createElement('h4');
      let h3= document.createElement('h3');
      let year = document.createElement('p');
      let pop = document.createElement('p');
      let rain = document.createElement('p');
      let image = document.createElement('img');



h3.textContent = towns[i].name;

h4.textContent = towns[i].motto;

year.textContent = "Year Founded: " + towns[i].yearFounded;

pop.textContent = "Population: " + towns[i].currentPopulation;

rain.textContent = "Annual Rainfall: " + towns[i].averageRainfall;

image.setAttribute('src', "images/" + towns[i].photo);
image.setAttribute('alt', towns[i].name );

pop.setAttribute('class', 'pop');
year.setAttribute('class', 'year');
rain.setAttribute('class', 'rain');
image.setAttribute('class', 'image');


text.appendChild(h3);
text.appendChild(h4);
text.appendChild(year);
text.appendChild(pop);
text.appendChild(rain);
card.appendChild(text);
card.appendChild(image);



document.querySelector('div.townInfo').appendChild(card);
}
}
});