let screen = document.getElementById("screen");
let svn = document.getElementById("svn");
let clr = document.getElementById("op-clr");
let del = document.getElementById("op-del");
let keys = document.querySelector(".calculator_keys");


keys.addEventListener("click", e => {
    if(e.target.matches("button")){
        const key = e.target;
        const action = key.dataset.op;
        const display = screen.textContent;
        const keyContent = key.textContent;

        if(!action){
            if(display === "0"){
                screen.innerHTML = screen.textContent = keyContent;
            }else
                screen.textContent += keyContent;
            
        }else if(action == "div" || action == "mul" || action == "add" || action == "minus" || action == "percent"){
            key.classList.add("isDepressed");
            console.log("OPERATOR");
        }else if(action == "pnt" ){
            screen.textContent += ".";
        }else if(action == "eq"){
            console.log("EQ");
        }else if(action == "del"){
            if(screen.innerHTML === "0"){
                screen.innerHTML = 0;
                console.log("DEL");
            }else{
                let element = [...screen.innerHTML];
                output = element.pop();
                screen.innerHTML = element.join("");
            }
        }else if(action == "clr"){
            screen.innerHTML = 0;
            console.log("CLR");
        }
    }
});
