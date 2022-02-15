let length = document.getElementById("length");
let caps = document.getElementById("caps");
let lwCase = document.getElementById("lowerCase");
let numbers = document.getElementById("numbers");
let chars = document.getElementById("chars");
let gen = document.getElementById("gen");
let copy = document.getElementById("copy");
let screen = document.getElementById("screen");

gen.addEventListener("click", getPassword);
copy.addEventListener("click", copyToClipboard);

function getPassword() {
  screen.value = screen.innerHTML = generatePassword();
}
function copyToClipboard() {
  navigator.clipboard.writeText(screen.value);
}

/* To Generate the password*/
function generatePassword() {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let symbols = "%!@#$^&*-+=|\\(){}:\"';,?";
  let password = "";

  for (let i = 0; i < 4; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    let lowerCaseLetter = alphabet.charAt(Math.random() * 26).toLowerCase();
    let upperCaseLetter = alphabet.charAt(Math.random() * 26).toUpperCase();
    let specialChar = symbols.charAt(Math.random() * symbols.length);

    password += randomNumber + lowerCaseLetter + upperCaseLetter + specialChar;
  }
  return shuffle(password);
}

/* To shuffle the password string*/
function shuffle(str) {
  let arr = str.split("");
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let j = Math.floor(Math.random() * n);

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr.join("");
}
