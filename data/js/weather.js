const API_KEY="4defdb872df34da3c54873f3ff886a38";

function onGeoOK(position)
{
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response=>response.json()).then(data=>{
        const  weather=document.querySelector("#weather span:first-child");
        const  city=document.querySelector("#weather span:last-child");
        city.innerText =data.name;
        weather.innerText=`${data.weather[0].main} / ${data.main.temp}℃`;
    });
}

function onGeoError(){
    const  weather=document.querySelector("#weather span:first-child");
    weather.innerText="위치 불러오기에 실패했습니다.";
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);