var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

dice1 = './images/dice' + randomNumber1 + '.png';
dice2 = './images/dice' + randomNumber2 + '.png';


document.querySelector(".img1").setAttribute("src", dice1);
document.querySelector(".img2").setAttribute("src", dice2);
// document.querySelector(".img1").setAttribute("src", './images/dice1.png');

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🏆";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🏆 Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}