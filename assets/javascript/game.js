///////////////////
// Baseball     //
//     Hangman //
/////////////////
// 
// Pseudo Code
// 
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
// 
//  -   If run out of guesses:
//      -   add to losses
//      -   start new game


var losses = 0;
var wins = 0;
var blanks = "";
var guesses = 0;
var guessedLetters = [];
var successLetters = [];
var wrongLetters = [];
var currentWord;
var userGuess;
var blanks;

var teams = [
    "homerun",
    "walk",
    "strikeout",
    "backstop",
    "balk",
    "grandslam",
    "bunt",
    "batter",
    "pickle",
    "bullpen",
    "outfielder",
    "shortstop",
    "catcher",
    "pitcher",
    "closer",
    "steal"
];


var startGame = function() {
    //  Reset guessed letters array to 0 and remainingGuess to 0
    guesses = 0;
    // reset wrong guesses array
    wrongLetters = [];

    // reset guess  & success arrays at each round
    guessedLetters = [];
    successLetters = [];
    blankAndSuccesses = [];

    // Solution for randomly choosing current word
    word = teams[Math.floor(Math.random() * teams.length)];

    // Test - randomly choosing word
    console.log("Test Random team:" + currentWord);

    // Break currentWord string into array of letters
    currentWord = word.split("");
    wordJoined = currentWord.join(" ");

    // count number of "_" needed
    blanks = currentWord.length;


    // blanksAndSucessess list with appropirate number of blanks
    for (var i = 0; i < blanks; i++) {
        blankAndSuccesses.push("_");
    }
    // update html on page
    document.getElementById('wordBlanks').innerHTML = blankAndSuccesses.join(" ");

    // set #guess-left to numberOfGuesses
    document.getElementById("remainingGuess").innerHTML = guesses;

    // set #wrong-guesses to empty / clears the wrong guesses from the previous round
    document.getElementById("guessedLetters").innerHTML = [];

    // Tests
    console.log("Test: team into array:" + currentWord);

}

// checkLetters() function
var checkLetters = function() {

        var letterInWord = false;
        // Check if a letter exists inside currentWord array
        for (var i = 0; i < blanks; i++) {
            if (userGuess === currentWord[i]) {
                letterInWord = true;
                console.log(letterInWord);
            }
        }
        // If `letterInWord`, then figure out exactly where (which indices).
        if (letterInWord) {
            for (var j = 0; j < currentWord.length; j++) {
                if (currentWord[j] === userGuess) {
                    // Fill in the blanksAndSuccesses with every instance of the letter.
                    blankAndSuccesses[j] = userGuess;
                    successLetters[j] = userGuess;
                    console.log("update me " + blankAndSuccesses);
                    console.log(successLetters);
                } // end if
            } // end for
        } else if (!letterInWord) {
            // If the letter doesn't exist at all...
            // ..then we add the letter to the list of wrong letters, and we subtract one of the guesses.
            console.log("comma? " + wrongLetters)
            wrongLetters.push(userGuess);
            guesses = guesses + 1;
        };

    } // end checkLetters


var roundComplete = function(userGuess) {
    // initial test for status of game
    console.log("wins: " + wins, "losses: " + losses, "guesses: " + guesses);

    // update HTML to reflect number of guesses
    document.getElementById('remainingGuess').innerHTML = guesses;
    // update HTML to reflect number of correct guesses

    // Update #word-blanks to show any correct guesses
    document.getElementById('wordBlanks').innerHTML = blankAndSuccesses.join(" ");

    // update #guessedLetters to show the wrong guesses
    document.getElementById('guessedLetters').innerHTML = wrongLetters.join(" ");

    // If we have gotten all the letters to match the solution...
    successString = successLetters.join(" ").toString();

    if (successString === wordJoined) {
        console.log("did i win?: " + blankAndSuccesses + currentWord)
            // ..add to the win counter & give the user an alert,
        wins++;
        window.alert("You Win! Congrats. Click 'OK' for the next round.");

        // Update the win counter in the HTML & restart the game.
        document.getElementById("wins").innerHTML = wins;
        startGame();
    }
    console.log("pre-guesses " + guesses);
    // If we've run out of guesses..
    if (guesses === 9) {
        // Add to the loss counter.
        losses++;
        // Give the user an alert.
        window.alert("Sorry slugger, you lost that round. The answer was " + word + " Top of the order and on to the next inning for you!");
        // Update the loss counter in the HTML.
        document.getElementById("losses").innerHTML = losses;
        // Restart the game.
        startGame();
    }
}

// once page loads, game starts
window.onload = startGame();

// Starts the game on keypress & adds to guess array
document.onkeyup = function(event) {

    // Determines which key was pressed & converts to lowercase
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    console.log("user guess: " + userGuess);

    // runs the checkLetters function for correctness
    checkLetters(userGuess);

    // Runs the function after each round is done.
    roundComplete();

};