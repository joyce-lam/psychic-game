
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins= 0;
var losses= 0;
var guesses=9;
var allGuesses =[];
var computerGuess;

//reset the game
function loadGame(){
	guesses = 9;
	allGuesses= [];
	computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
	document.getElementById("guess").innerHTML = guesses;
	document.getElementById("allguess").innerHTML = allGuesses;
}


loadGame();


//listen to the user's key
document.onkeydown = function(event) {

	var userGuess = event.key;

	if (userGuess===computerGuess) {
		wins++;
		document.getElementById("win").innerHTML=wins;
		alert("You picked " + userGuess + " and you win!");
		loadGame();
	} else  {
		guesses--;
		allGuesses.push(userGuess);
		document.getElementById("guess").innerHTML = guesses; 
		document.getElementById("allguess").innerHTML = allGuesses; 
	}

//reload the game when there is no guesses left
	if (guesses ===0) {
		losses++;
		document.getElementById("loss").innerHTML = losses; 
		loadGame();
	} 

};



