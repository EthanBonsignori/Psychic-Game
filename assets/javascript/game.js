
//Declaring Variables
//Array of every lettter in the alphabet for the computer to choose at random
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
              "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Variable to hold the user's guesses so they cannot resuse them
var used = [];

//Holds the computers random letter once it is assigned
var computerGuess;

//Number of times the player successfully guesses the letter
var wins = 0;

//Number of times the player ran out of guesses
var losses = 0;

//Number of guesses the player has - starts at 9, goes down by 1 on an unsuccessful guess
var guesses = 9;

//Functions
//Picks a random letter from the letters array
function pickRandom() {
  computerGuess = alphabet[Math.floor(Math.random()*alphabet.length)];
  //Reset the # of player guesses when a new letter is picked
  guesses = 9;
  //Reset the used array so players can pick those letters again
  used.length = 0;
  console.log("Computer's Letter: " + computerGuess);
  console.log("9 Guesses Remaining")
}

//Function run once to initialize the game
pickRandom();

// Captures which key the player presses
document.onkeyup = function(event) {

// Captures the key press, converts it to lowercase, and saves it to a variable.
  var playerGuess = event.key.toLowerCase();

// Check if the player guess is in the alphabet (symbols and numbers won't use player guesses, only letters)
  if (alphabet.indexOf(playerGuess) >= 0) {
    console.log("Player's Letter: " + playerGuess);
    if (used.includes(playerGuess)) {
      alert("Already guessed that letter!");
    //Check if the player guess is not equal to the computer guess AND hasn't been used by the player before
      } else if (playerGuess != computerGuess) {
        //Adds key to the used variable
        used.push(playerGuess);
        console.log("Letter's guessed: " + used)
        //player loses 1 guess
        guesses = guesses -1;
        console.log("guesses: " + guesses);
      
        //players letter is the same as computer's, add 1 to wins and reset the game
        } else {
          wins++;
          pickRandom();
          console.log("Wins " + wins);
    }
  }
  //Check if the player is out of guesses
  if (guesses <= 0) {
  //add 1 to losses and reset the game
    losses++;
    pickRandom();
  }
};






