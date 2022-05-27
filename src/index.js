let characters = [
  "!",
  "%",
  "&",
  "*",
  "+",
  "-",
  "/",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "[",
  "]",
  "^",
  "_",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "{",
  "|",
  "}",
  "~",
  "@"
];

let passwordDisplay1 = document.getElementById("password1");
let passwordDisplay2 = document.getElementById("password2");
let passwordDisplay3 = document.getElementById("password3");
let passwordDisplay4 = document.getElementById("password4");

let button = document.getElementById("btn");
button.addEventListener("click", getPassword);
button.addEventListener("click", getPasswordTwo);
button.addEventListener("click", getPasswordThree);
button.addEventListener("click", getPasswordFour);

function getPassword() {
  for (let i = 0; i < characters.length; i++) {
    // provides random indexnumber
    let randomPass1 = Math.floor(Math.random() * characters.length);
    let randomPass2 = Math.floor(Math.random() * characters.length);
    let randomPass3 = Math.floor(Math.random() * characters.length);
    let randomPass4 = Math.floor(Math.random() * characters.length);
    let randomPass5 = Math.floor(Math.random() * characters.length);
    let randomPass6 = Math.floor(Math.random() * characters.length);
    let randomPass7 = Math.floor(Math.random() * characters.length);
    let passwordsArray = [];
    // pushes randomindex to array
    passwordsArray.push(
      characters[randomPass1] +
        characters[randomPass2] +
        characters[randomPass3] +
        characters[randomPass4] +
        characters[randomPass5] +
        characters[randomPass6] +
        characters[randomPass7]
    );
    // outputs random item from array based on randomndex
    passwordDisplay1.textContent = passwordsArray;
  }
}

function getPasswordTwo() {
  for (let i = 0; i < characters.length; i++) {
    // provides random indexnumber
    let randomPass1 = Math.floor(Math.random() * characters.length);
    let randomPass2 = Math.floor(Math.random() * characters.length);
    let randomPass3 = Math.floor(Math.random() * characters.length);
    let randomPass4 = Math.floor(Math.random() * characters.length);
    let randomPass5 = Math.floor(Math.random() * characters.length);
    let randomPass6 = Math.floor(Math.random() * characters.length);
    let randomPass7 = Math.floor(Math.random() * characters.length);
    let passwordsArray = [];
    // pushes randomindex to array
    passwordsArray.push(
      characters[randomPass1] +
        characters[randomPass2] +
        characters[randomPass3] +
        characters[randomPass4] +
        characters[randomPass5] +
        characters[randomPass6] +
        characters[randomPass7]
    );
    // outputs random item from array based on randomndex
    passwordDisplay2.textContent = passwordsArray;
  }
}

function getPasswordThree() {
  for (let i = 0; i < characters.length; i++) {
    // provides random indexnumber
    let randomPass1 = Math.floor(Math.random() * characters.length);
    let randomPass2 = Math.floor(Math.random() * characters.length);
    let randomPass3 = Math.floor(Math.random() * characters.length);
    let randomPass4 = Math.floor(Math.random() * characters.length);
    let randomPass5 = Math.floor(Math.random() * characters.length);
    let randomPass6 = Math.floor(Math.random() * characters.length);
    let randomPass7 = Math.floor(Math.random() * characters.length);
    let passwordsArray = [];
    // pushes randomindex to array
    passwordsArray.push(
      characters[randomPass1] +
        characters[randomPass2] +
        characters[randomPass3] +
        characters[randomPass4] +
        characters[randomPass5] +
        characters[randomPass6] +
        characters[randomPass7]
    );
    // outputs random item from array based on randomndex
    passwordDisplay3.textContent = passwordsArray;
  }
}

function getPasswordFour() {
  for (let i = 0; i < characters.length; i++) {
    // provides random indexnumber
    let randomPass1 = Math.floor(Math.random() * characters.length);
    let randomPass2 = Math.floor(Math.random() * characters.length);
    let randomPass3 = Math.floor(Math.random() * characters.length);
    let randomPass4 = Math.floor(Math.random() * characters.length);
    let randomPass5 = Math.floor(Math.random() * characters.length);
    let randomPass6 = Math.floor(Math.random() * characters.length);
    let randomPass7 = Math.floor(Math.random() * characters.length);
    let passwordsArray = [];
    // pushes randomindex to array
    passwordsArray.push(
      characters[randomPass1] +
        characters[randomPass2] +
        characters[randomPass3] +
        characters[randomPass4] +
        characters[randomPass5] +
        characters[randomPass6] +
        characters[randomPass7]
    );
    // outputs random item from array based on randomndex
    passwordDisplay4.textContent = passwordsArray;
  }
}
