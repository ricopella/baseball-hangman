// make Array of Word Options (all lowercase)
var wordsList = [];

// startGame()
// Its how we we will start and restart the game.
// (Note: It's not being run here. It's just being made for future use.)
function startGame() {
    // Reset the guesses back to 0.
    // Solution is chosen randomly from wordList. (Like RPS)
    // The word is broken into individual letters. (convert string to array of letters)
    // We count the number of letters in the word. (tells us the number of `numBlanks`)

    // We print the solution in console (for testing).

    // reset the guess and success array at each round. Array of letters (first array, for succesful guesses)
    // reset the wrong guesses from the previous round. Array of letters (second arrays, one for fails)

    // Fill up the blanksAndSuccesses list with appropriate number of blanks.
    // This is based on number of letters in solution.
    for (var i = 0; i < numBlanks; i++) {
        // make a list of `_`
        // ex dog = ['d', 'o','g'] and generate a new array like ['_', '_', '_']
    }

    // update html on the page
    // set #guesses-left to numberOfGuesses

    // set #word-blanks to the blanks at the beginning of each round in the HTML

    // set #wrong-guesses to empty / clears the wrong guesses from the previous round by
}

// checkLetters() function
// It's where we will do all of the comparisons for matches.
// Again, it's not being called here. It's just being made for future use.
function checkLetters(letter) {

    var letterInWord = false;
    // Check if a letter exists inside the array at all. (by looping thru the word as an array)
    for (var i = 0; i < numBlanks; i++) {
        // If the letter exists then toggle this boolean to true. This will be used in the next step.
        letterInWord = true;
    }

    // If `letterInWord`, then figure out exactly where (which indices). ***********

    // Loop through the word, one letter at a time
    // Fill in the blanksAndSuccesses with every instance of the letter.
    // if chosenWord letter is the same as letter
    // Here we set the specific space in blanks and letter equal to the letter when there is a match.

    // If the letter doesn't exist at all...
    // ..then we add the letter to the list of wrong letters, and we subtract one of the guesses.
}

// roundComplete() function
// Here we will have all of the code that needs to be run after each guess is made
function roundComplete() {

    // First, log an initial status update in the console telling us how many wins, losses, and guesses are left.

    // Update the HTML to reflect the new number of guesses. Also update the correct guesses. 
    // Update #word-blanks to show any correct guesses *********
    // Update #wrong-guesses to show the wrong guesses

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


// on initial page load Starts the Game by running the startGame() function
startGame();

// Then initiate the function for capturing key clicks.
document.onkeyup = function(event) {
    // Converts all key clicks to lowercase letters.
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    // Runs the code to check for correctness.
    checkLetters(letterGuessed);
    // Runs the code after each round is done.
    roundComplete();
};