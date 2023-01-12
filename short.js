var randomNumber1 = Math.floor(Math.random()*(7-1)+ 1);
var randomNumber2 = Math.floor(Math.random()*(7-1)+ 1);

var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");


dice1.setAttribute("src", "images/dice"+randomNumber1+".png");
dice2.setAttribute("src", "images/dice"+randomNumber2+".png");

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
