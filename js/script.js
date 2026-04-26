console.log("js loaded")

async function getWeatherAPI(){
    const url="https://api.weatherapi.com/v1/current.json?key=d4a0413ed9fa47ada3b200730261904&q=64068&aqi=no";
    const urlToUse=`https://corsproxy.io/?url=${encodeURIComponent(url)}`;
    const response=await fetch(urlToUse);
    const data=await response.json();
    //console.log(data)
    const imgEl=document.getElementById("WeatherImg");
    const textEl=document.getElementById("WeatherText");
    const tempEl=document.getElementById("WeatherTemp");
    const windEl=document.getElementById("WeatherWind");
    imgEl.src=data.current.condition.icon;
    imgEl.alt=`Image for ${data.current.condition.text} weather`;
    textEl.textContent=data.current.condition.text;
    tempEl.textContent=`It is ${data.current.temp_f}°F`;
    windEl.textContent=`Feels like ${data.current.windchill_f}°F`;
}

async function getQuoteAPI(){
    //Implement data organization and display
}

getWeatherAPI();
getQuoteAPI();