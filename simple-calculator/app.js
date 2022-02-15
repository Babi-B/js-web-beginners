let screen = document.getElementById("screen");
let svn = document.getElementById("svn");
let clr = document.getElementById("op-clr");
let del = document.getElementById("op-del");

clr.addEventListener("click", () => {
    screen.innerHTML = 0;
})

del.addEventListener("click", () => {
    let element = [...screen.innerHTML];
    output = element.pop();
    screen.innerHTML = element.join("");
})

