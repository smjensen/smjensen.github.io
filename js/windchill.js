    
    let t = parseFloat(document.getElementById("temp").textContent);
    let s = parseFloat(document.getElementById("windspeed").textContent);
    
    let f;
    if (t<=50 && s>=3.0) {
    
    f = 35.74 + 0.6215*t - 35.75*s**0.16 + 0.4275*t*s**0.16;
    f= f.toFixed(0);
    }
    else {f= "N/A";}
   
    document.getElementById("windchill").textContent = f;