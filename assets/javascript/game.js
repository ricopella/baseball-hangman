// 
// Hangman Game
// 
// Pseudo Code
//  - Press any key to start
//  - Display word as "_ _ _ _ _ _ _"
//  - Once key entered, adjust:
//      -   if correct - display letter
//      -   if incorrect - add to # of remaining guesses
//      -   if incorrect - add to letters guessed
//
//  -   If Solved:
//      -   add to wins
//      -   start new game

var losses = 0;
var wins = 0;
var blanks = "";
var guessedLetters = [];
var successLetters = [];
var wrongletters = [];

var teams = [
    "boston red sox",
    "baltimore orioles",
    "tampa bay rays",
    "los angeles dodgers",
    "los angeles angeles",
    "arizona diamond backs",
    "kansas city royals"
];


function startGame() {
    //  Reset guessed letters array to 0 and remainingGuess to 10

    var guesses = 0;

    // Solution for randomly choosing current word
    var currentWord = teams[Math.floor(Math.random() * teams.length)];

    // Test - randomly choosing word
    console.log("Test Random team:" + currentWord);

    // Break currenWord string into array of letters
    currentWord = currentWord.split("");

    // count number of "_" needed
    var blanks = currentWord.length;

    // reset guess  & success arrays at each round
    guessedLetters = [];
    successLetters = [];

    // reset wrong guesses array
    wrongletters = [];

    blankAndSuccesses = [];

    // blanksAndSucessess list with appropirate number of blanks
    for (var i = 0; i < blanks; i++) {
        blankAndSuccesses.push("_");
    }
    // update html on page
    blankAndSuccesses = blankAndSuccesses.join(", ");
    // document.getElementById('wordBlanks').innerHTML = blankAndSuccesses;


    // Tests
    console.log("Test: team into array:" + currentWord);
    console.log("Test: count # of _ needed: " + blanks);
    console.log("Test: blanksAndSuccesses " + blankAndSuccesses)

}

// checkLetters() function

function checkLetters(letter) {

    var letterInWord = false;
    // Check if a letter exists inside currenWord array
    for (var i = 0; i < blanks; i++) {
        if (letter === currentWord[i]) {
            letterinWord = true;
        }
    }
    if (letterInWord) {
        for (var i = 0; i < currentWord.length; i++) {
            if (currentWord[i] === letter) {

            }
        }
    }
}

function roundComplete() {
    // initial test for status of game
    console.log(wins, losses, guesses);

    // update HTML to reflect number of guesses
    document.getElementById('remainingGuesses').innerHTML = guesses;
    // update HTML to reflect number of correct guesses
    document.getElementById('correctGuesses').innerHTML = wordBlanks;
    // update wordBlanks to show any correct guesses

    // update #guessedLetters to show the wrong guesses
    document.getElementById('guessedLetters').innerHTML = wrongLetteres;

    // If we have gotten all the letters to match the solution...
    // ..add to the win counter & give the user an alert.

    // Update the win counter in the HTML & restart the game.
    startGame();

    // If we've run out of guesses..
    // Add to the loss counter.
    // Give the user an alert.
    // Update the loss counter in the HTML.
    // Restart the game.
    startGame();

}

// once page loads, game starts
startGame();

// Starts the game on keypress & adds to guess array
document.onkeyup = function(event) {

    // Determines which key was pressed & converts to lowercase
    var userGuess = String.fromCharCode(event.key).toLowerCase();

    // adds pressed keys to guessedLetters array --- FROM OLD VERSION
    guessedLetters.push(userGuess);
    console.log(guessedLetters);

    // runs the checkLetters function for correctness
    checkLetters(userGuess);

    // Runs the function after each round is done.
    roundComplete();

};