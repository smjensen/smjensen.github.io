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

//const options={minute: "numeric", hour: "numeric", day: "numeric", month: "long", }
const options= {weekday: "long", day: "numeric", month: "long", year:"numeric"};
          
document.getElementById('currentDate').textContent=new Date().toLocaleDateString("en-GB", options);
// const modoptions ={ second: "numeric", minute: "numeric", hour: "numeric", day: "numeric", month:"numeric", year: "numeric"};
//document.getElementById('lastModified').textContent=new Date(document.lastModified);
//document.getElementById('lastModified').textContent=document.lastModified;
function toggleMenu() {
   // console.log(document.getElementById("topNav").classList);
    document.getElementById("topNav").classList.toggle("hide");
}
function showBanner() {
    var today= new Date();
    var wkday= today.getDay();
    if (wkday == 5){
    document.getElementById("banner").classList.toggle("noshow");
   
}
}