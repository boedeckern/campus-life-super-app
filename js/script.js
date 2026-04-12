console.log("js loaded")

async function getWeatherAPI(){
    url=""
    const response=await fetch(url);
    const data=await response.json();
    console.log(data);
    //Implement data organization and display
}

async function getMenuData(){
    //Implement web scraping, cleaning, organization, and display
}

async function getEventData(){
    //Implement web scraping, cleaning, organization, and display
}

let meal_selection="Breakfast";
let meal_buttons=document.querySelectorAll("#meal_buttons button");
meal_buttons.forEach(function(button){
    button.addEventListener("click",function(){
        meal_buttons.forEach(function(btn){
            btn.classList.remove("active");
        })
        button.classList.add("active")
        meal_selection=button.textContent;
    })
})