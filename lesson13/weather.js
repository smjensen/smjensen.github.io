var weather=new XMLHttpRequest();

weather.open('get', 'http://api.wunderground.com/api/e9496079f263a55e/conditions/q/ID/Riggins.json', true);

weather.send();

weather.onload=function(){
    
    var info=JSON.parse (weather.responseText);
    console.log(info);
    
    document.getElementById('place').innerHTML=info.current_observation.display_location.full;
    document.getElementById('tempf').innerHTML=info.current_observation.temp_f;
    document.getElementById('tempc').innerHTML=info.current_observation.temp_c;
    document.getElementById('feelf').innerHTML=info.current_observation.feelslike_f;
    document.getElementById('feelc').innerHTML=info.current_observation.feelslike_c;
    document.getElementById('w_icon').src=info.current_observation.icon_url;
    
}