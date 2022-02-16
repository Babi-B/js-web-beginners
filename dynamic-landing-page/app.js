let time = document.getElementById("time");
let greeting = document.getElementById("greeting");
let quote = document.getElementById("quote");
let display = document.getElementById("display");

setInterval(() =>{
    getTime();
    changeByTime();
},1000);

setInterval(() =>{
    getTime();
    changeByTime();
},1080000);

// setInterval(() =>{
//     getTime();
//     greet();
// },1000);

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
        display.style.backgroundImage = "url('./img/night.jpg')";
    }
    else if( midi === "PM" && hour > 8){
        greeting.innerHTML = "Good evening"
    }
    else{
        greeting.innerHTML = "Good night"
    }
}