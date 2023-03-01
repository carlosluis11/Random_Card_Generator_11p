const cardValues = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
const cardPintas = ["♦", "♥", "♠", "♣"]

function generateRandomValue(array) {
    return array[Math.floor(Math.random() * array.length)]
  }

  let randomValues = generateRandomValue(cardValues);
  let randomPintas = generateRandomValue(cardPintas);
  let container = document.getElementById("card-container")
  let card = document.querySelector(".card")

container.style.backgroundColor = "green";
container.style.height = "550px";
container.style.width = "250px";
container.style.borderRadius = "10px";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.padding = "0px 500px 0px 500px";

card.style.padding = "3vw";
card.style.borderRadius = "10px";
card.style.border = "1px solid black";
card.style.height = "250px";
card.style.width = "350px"; 
card.style.backgroundColor = "white";
card.style.position = "relative";

let pintaUp = document.createElement("h2");
pintaUp.innerHTML = randomPintas;

pintaUp.style.position = 'absolute';
pintaUp.style.top = '0';
pintaUp.style.left = '5';
pintaUp.style.fontSize = '50px';

let cardValue = document.createElement("h1");
cardValue.innerHTML = randomValues;

cardValue.style.textAlign = 'center';
cardValue.style.justifyContent = 'center';
cardValue.style.alignItems = 'center';
cardValue.style.fontSize = '100px';


let pintaDown = document.createElement("h2");
pintaDown.innerHTML = randomPintas;

pintaDown.style.transform = "rotate(180deg)";
pintaDown.style.position = 'absolute';
pintaDown.style.bottom = '0px';
pintaDown.style.right = '40px';
pintaDown.style.fontSize = '50px';

if(randomPintas=== "♦" || randomPintas === "♥") {
    pintaUp.style.color = "red";
    cardValue.style.color = "red";
  }

if (randomPintas === "♦" || randomPintas === "♥") {
    pintaDown.style.color = "red";
  }

  // Icono superior
card.appendChild(pintaUp);

// Anexamos el valor numerico
card.appendChild(cardValue);

// Icono inferior
card.appendChild(pintaDown);