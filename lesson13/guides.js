/*========guides=============*/
const guidebios ="bios.json";
fetch(guidebios)
.then(function(response){
    return response.json();

})
.then(function(jsonObject) {
    //console.table(jsonObject);
    const bios = jsonObject['bios'];
    for (let i=0; i <bios.length; i++) {
        let profile = document.createElement('section');
        let ind = document.createElement('div');
        let firstName =document.createElement('h3');
        let lastName =document.createElement('h3');
        let fullName=document.createElement('h3');
        let certLevel= document.createElement('h4');
        let email= document.createElement('h4');
        let bio= document.createElement('h4');
        let image=document.createElement('img');

        firstName.textContent =bios[i].firstName;
        lastName.textContent=bios[i].lastName;
        fullName.textContent=bios[i].firstName +" " + bios[i].lastName;
        certLevel.textContent=bios[i].certLevel;
        email.textContent=bios[i].email;
        bio.textContent='"' + bios[i].bio +'"';
        image.setAttribute('src', "images/" + bios[i].profile);
        image.setAttribute('alt', bios[i].lastName + " " + "photo");

        profile.appendChild(image);
       
        ind.appendChild(fullName);
        ind.appendChild(certLevel);
        ind.appendChild(email);
        ind.appendChild(bio);
        profile.appendChild(ind);
        document.querySelector('div.profiles').appendChild(profile);
    }

})