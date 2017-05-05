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


var teams = [
    "BOSTON RED SOX",
    "BALTIMORE ORIOLES",
    "TAMPA BAY RAYS",
    "LOS ANGELES DODGERS",
    "LOS ANGELES ANGELES",
    "ARIZONA DIAMONDBACKS",
    "KANSAS CITY ROYALS"
];

var wins = 0;
var remainGuess = 10;
var guessedLetters = [];

// variable for randomly choosing current word
var currentWord = function() {
        return teams[Math.floor(Math.random() * teams.length)];
    }
    // Test - randomly choosing word
console.log(currentWord());

// checks if guessed key already

var checkKey = function(userGuess) {
    if (userGuess === guessedLetters) {

    }
}


// This function is starts the game on keypress & pulls the word from teams array

document.onkeyup = function(event) {

    var userGuess = event.key;

    currentWord();
}


// 
//  REFRENCE CODE FROM PREVIOUS PROJECT
// 



// This function is run whenever the user presses a key.
// document.onkeyup = function(event) {

//     // Determines which key was pressed
//     var userGuess = event.key;

//     // Alerts the key the user pressed (userGuess).
//     console.log(userGuess);
//     if (checkKey(userGuess)) {

//         // Randomly chooses a choice from the teams array. This is the currentWord.
//         var computerGuess = teams[Math.random() * options.length];

//         // Alerts the Computer's guess.
//         console.log(computerGuess);

//         keepRecord(calcWin(userGuess, computerGuess));

//         updateHtml();
//     } else {
//         console.log("try again");
//     }
// };