var randomNumber1 = Math.floor(Math.random()*(7-1)+ 1);
var randomNumber2 = Math.floor(Math.random()*(7-1)+ 1);


var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");

var title = document.querySelector("h1");

if (randomNumber1<randomNumber2) {
    title.innerText = "Player 2 Wins !! ";
}
else if (randomNumber1>randomNumber2) {
    title.innerText = "Player 1 Wins !! ";
}
else {
    title.innerText = "Draw !! ";
}



if (randomNumber1 == 1) {
    
    dice1.setAttribute("src", "images/dice1.png");
    
} 
else if (randomNumber1 == 2) {
    dice1.setAttribute("src", "images/dice2.png");
}

else if (randomNumber1 == 3) {
    dice1.setAttribute("src", "images/dice3.png");
}

else if (randomNumber1 == 4) {
    dice1.setAttribute("src", "images/dice4.png");
}
else if (randomNumber1 == 5) {
    dice1.setAttribute("src", "images/dice5.png");
}


// Dice 2

if (randomNumber2 == 1) {
    dice2.setAttribute("src", "images/dice1.png");
}
else if (randomNumber2 == 2) {
    dice2.setAttribute("src", "images/dice2.png");
}

else if (randomNumber2 == 3) {
    dice2.setAttribute("src", "images/dice3.png");
}

else if (randomNumber2 == 4) {
    dice2.setAttribute("src", "images/dice4.png");
}
else if (randomNumber2 == 5) {
    dice2.setAttribute("src", "images/dice5.png");
}



