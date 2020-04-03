const options= {year:"numeric"};
document.getElementById('currentDate').textContent=new Date().toLocaleDateString("en-US", options);

function menu() {
   
    document.getElementById("topNav").classList.toggle("hide");
}