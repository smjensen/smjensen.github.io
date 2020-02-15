let t = document.getElementById('temp').innerHTML;
let s = document.getElementById('windSpeed').innerHTML;

if ((t <= 50) && (s >= 3)) {

let f = (35.74+0.6215*t) - (35.75*Math.pow(s,0.16)) +0.4275*t*(Math.pow(s,0.16));
 

document.getElementById('windChill').innerHTML = Math.round(f);
}

else {
document.getElementById('windChill').innerHTML = 'N/A';
};