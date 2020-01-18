let d = new Date();
let lastUpdate = new Date(document.lastModified);
let updateMonth;
let updateDay;

let year = d.getFullYear();

if((lastUpdate.getMonth() + 1) < 10){
    updateMonth = "0" + (lastUpdate.getMonth() + 1);
}
else{
    updateMonth = lastUpdate.getMonth();
}

if((lastUpdate.getDate() + 1) < 10){
    updateDay = "0" + (lastUpdate.getDate() + 1);
}
else{
    updateDay = lastUpdate.getDate();
}

let updateTime = updateMonth + "/" + updateDay + "/" + lastUpdate.getFullYear() + " " + lastUpdate.getHours() + ":" + 
    lastUpdate.getMinutes() + ":" + lastUpdate.getSeconds();

document.getElementById("currentyear").innerHTML = year;

document.getElementById("lastUpdateTime").innerHTML = updateTime;