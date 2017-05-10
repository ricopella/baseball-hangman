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
    // ["B", "O", "S", "T", "O", "N", "R", "E", "D", "S", "O", "X"],
    // ["B", "A", "L", "T", "I", "M", "O", "R", "E", "O", "R", "I", "O", "L", "E", "S"],
    // ["T", "A", "M", "P", "A", "B", "A", "Y", "R", "A", "Y", "S"],
    // ["L", "O", "S", "A", "N", "G", "E", "L", "E", "S", "D", "O", "D", "G", "E", "R", "S"],
    // ["L", "O", "S", "A", "N", "G", "E", "L", "E", "S", "A", "N", "G", "E", "L", "E", "S"],
    // ["A", "R", "I", "Z", "O", "N", "A", "D", "I", "A", "M", "O", "N", "D", "B", "A", "C", "K", "S"],
    // ["K", "A", "N", "S", "A", "S", "C", "I", "T", "Y", "R", "O", "Y", "A", "L", "S"]
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
var loses = 0;
var wins = 0;
var blanks = "";

// variable for randomly choosing current word
var currentWord = function() {
    return teams[Math.floor(Math.random() * teams.length)];
}

// Test - randomly choosing word
console.log(currentWord());



// updates HTML
var updatedHtml = function(element) {
    document.getElementById("guessedLetters").innerHTML = guessedLetters;
    document.getElementById("remaingGuess").innerHTML = remainGuess;
    document.getElementById("currentWord").innerHTML = currentWord();
}

// Starts the game on keypress & adds to guess array
document.onkeyup = function(event) {

    // Determines which key was pressed
    var userGuess = event.key.toUpperCase();

    // adds pressed keys to guessedLetters array
    guessedLetters.push(userGuess);
    console.log(guessedLetters);

    currentWord();
    updatedHtml();

}

// 
//  RE-ORG For DeBug
// 


// //  Function for display of "_" - blank letters that have not been guessed
// var blankWord = function() {
//     for (var i = 0; i < currentWord.length; i++) {
//         blanks = +"_";
//     }
// }

// // Conditionals to check if userGuess is in teams array
// var conditions = function(userGuess) {

//     for (var i = 0; i < currentWord.length; i++) {
//         if (userGuess === currentWord[i]) {

//         }
//     }

// }

// // adds to guessed letters if incorrect
// var guessedWrong = function(userGuess) {
//     if (userGuess !== teams) {
//         guessedLetters.push(userGuess);
//     }
// }

// // checks if guessed key already
// var checkKey = function(userGuess) {
//     if (userGuess === guessedLetters) {}
// }