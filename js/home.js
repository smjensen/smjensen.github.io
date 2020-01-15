var today = new Date();
var year = today.getFullYear()
document.getElementById("year").textContent = year;
var lastModify = document.lastModified
document.getElementById("lastModif").textContent = "Last Updated: " + lastModify;