let time = document.getElementById("time");
let greeting = document.getElementById("greeting");
let quote = document.getElementById("quote");
let display = document.getElementById("display");

let quotes = [
    '“What would you do<br> if you weren\’t afraid?”<br> ― Sheryl Sandberg',
    '“Ask yourself<br> if what you\’re doing<br> today is getting<br> you closer to where<br> you want to be<br> tomorrow.” — Anonymous',
    '“Ask yourself if<br> what you\’re doing<br> today is getting you<br> closer to where you<br> want to be tomorrow.”<br> — Anonymous',
    '“The Way<br> Get Started Is<br> To Quit Talking<br> And Begin Doing.”<br> — Walt Disney', 
    ' “Procrastination is<br> opportunity\’s assassin.”<br> — Victor Kiam'   
]

setInterval(() =>{
    getTime();
    changeByTime();
},1000);

setInterval(() =>{
    changeByQuote();
},1000);


function getTime(){
    let today = new Date();
    let hour = (today.getHours()) % 12 || 12;
    let min = today.getMinutes();
    let sec = today.getSeconds();

    // AM PM
    const midi = (today.getHours()) >= 12 ? "PM":"AM";
    time.innerHTML = `${addZero(hour)}<span>:<span>${addZero(min)}<span>:<span>${addZero(sec)}<span>&nbsp;${midi}<span>`
}

function addZero(n){
    if( parseInt(n) < 10)
        return "0" + n;
    else
        return n;
}

function changeByTime(){
    let today = new Date();
    let hour = today.getHours();
    const midi = hour >= 12 ? "PM":"AM";

    if(midi === "AM"){
        greeting.innerHTML = "Good morning";
        display.style.backgroundImage = "url('./img/morning.jpg')";
    }
    else if( midi === "PM" && hour > 6){
        greeting.innerHTML = "Good afternoon"
        display.style.backgroundImage = "url('./img/afternoon.jpg')";
    }
    else if( midi === "PM" && hour > 8){
        greeting.innerHTML = "Good evening";
        display.style.backgroundImage = "url('./img/evening.jpg')";
    }
    else{
        greeting.innerHTML = "Good night"
        display.style.backgroundImage = "url('./img/night.jpg')";
    }
}

function changeByQuote(){
    let num = Math.floor(Math.random() * 5);
    console.log(num);
    quote.innerHTML = quotes[num];
}
