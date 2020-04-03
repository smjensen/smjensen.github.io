/*========trips=============*/
const trips ="trips.json";
fetch(trips)
.then(function(response){
    return response.json();

})
.then(function(jsonObject) {
    
    const desc =jsonObject['trips'];
    for (let i=0; i < desc.length; i++) {
        let location =document.createElement('h3');
        let cost= document.createElement('p');
        let skill=document.createElement('p');
        let services=document.createElement('p');
        let len=document.createElement('p');
        let text = document.createElement('div');
        let image = document.createElement('img');
        let card = document.createElement('section');

        location.textContent=desc[i].location;
        len.textContent="Length: " + desc[i].length;
        skill.textContent="Skill level: " + desc[i].skill;
        cost.textContent=desc[i].cost + " per person";
        services.textContent="Details: " + desc[i].services;
        image.setAttribute('src', "images/" + desc[i].photo);
        image.setAttribute('alt', desc[i].location + " photo");

        text.appendChild(location);
        text.appendChild(len);
        text.appendChild(skill);
        text.appendChild(cost);
        text.appendChild(services);
                
        card.appendChild(text);
        card.appendChild(image);
        document.querySelector('div.trips').appendChild(card);
    }
})