function roll(){
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageSource1 = "img/dg" + randomNumber1 + ".svg";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "img/dg" + randomNumber2 + ".svg";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//If player 1 wins
if (randomNumber1 > randomNumber2) {
  $("h1")[1].innerHTML="🚩 Player 1 Wins!";
}
//If player 2 wins
else if (randomNumber2 > randomNumber1) {
  $("h1")[1].innerHTML="Player 2 Wins! 🚩";
}
else {
  $("h1")[1].innerHTML="Draw!";
}

}

function loaded(){
  var fname= prompt("Player 1 name.");
  var sname= prompt("Player 2 name.");

  $("h3")[0].innerHTML= fname;
  $("h3")[1].innerHTML= sname;
  var pone = "🚩 " + fname + " Wins!";
  var ptwo = "" + sname + " Wins! 🚩";
}

function rolln(){

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageSource1 = "img/dg" + randomNumber1 + ".svg";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "img/dg" + randomNumber2 + ".svg";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//If player 1 wins
if (randomNumber1 > randomNumber2) {
  $("h1")[1].innerHTML= "🚩 Player 1 Wins!";
}
//If player 2 wins
else if (randomNumber2 > randomNumber1) {
  $("h1")[1].innerHTML= "Player 2 Wins! 🚩";
}
else {
  $("h1")[1].innerHTML="Draw!";
}

}
