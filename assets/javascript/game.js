
// Declaring Variables
// Array of every lettter in the alphabet for the computer to choose at random
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
               "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variable to hold the user's guesses so they cannot reuse them
var used = [];

// Holds the computers random letter once it is assigned
var computerGuess;

// Number of times the player successfully guesses the letter
var wins = 0;

// Number of times the player ran out of guesses
var losses = 0;

// Number of guesses the player has - starts at 9, goes down by 1 on an unsuccessful guess
var guesses = 9;

// Hold references to the places in the HTML where info will be displayed
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");
var usedText = document.getElementById("used-text");

var fadeText = document.getElementById("tryagain-text");

// Functions
// Picks a random letter from the alphabet array
function pickRandom() {
  computerGuess = alphabet[Math.floor(Math.random()*alphabet.length)];
  // Reset the # of player guesses when a new letter is picked
  guesses = 9;
  // Reset the used array so players can pick those letters again
  used.length = 0;
  console.log("Computer's Letter: " + computerGuess);
  console.log("9 Guesses Remaining")
}

//Run above funcntion once to initialize the game
pickRandom();

// Captures which key the player presses
document.onkeyup = function(event) {

// Captures the key press, converts it to lowercase, and saves it to a variable.
  var playerGuess = event.key.toLowerCase();

// Check if the key press is in the alphabet (symbols and numbers won't use player guesses, only letters)
  if (alphabet.indexOf(playerGuess) >= 0) {
    console.log("Player's Letter: " + playerGuess);
    if (used.includes(playerGuess)) {
      console.log("Already guessed that letter!")
      fadeText.className = "visible";
    // Check if the letter the player pressed is not equal to the computer guess
      } else if (playerGuess != computerGuess) {
        // Adds the letter the player pressed to the used variable so it cannot be counted twice against guesses
        used.push(playerGuess);
        console.log("Letter's guessed: " + used)
        // Player loses 1 guess
        guesses = guesses -1;
        console.log("Guesses Remaining: " + guesses);
        
        fadeText.className = "hidden";
        // Players letter is the same as computer's, add 1 to wins and reset through the pickRandom function
        } else {
          wins++;
          pickRandom();
          console.log("Wins " + wins);

          fadeText.className = "hidden";
        }

        // Hide the directions
        directionsText.textContent = "";

        // Display the players wins, losses, guesses remaining, and letters already guesses in the current round
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesText.textContent = "Guesses remaining: " + guesses;
        usedText.textContent = "Guessed so far: " + used;
  }
  // Check if the player is out of guesses
  if (guesses <= 0) {
  // Add 1 to losses and reset the game
    losses++;
    pickRandom();
    console.log("Losses " + losses);
  }
};






