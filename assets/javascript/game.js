// create global variables for game

var winningScore;
var losingScore;
var wrongGuesses = [];
var correctGuess;
var letterGuessed;
var guessesRemaining = 15;

// create an array of words
var  wordBank = ["BIGGIE", "JARULE", "TUPAC", "AALIYAH", "NAS", "BLACKSTREET", "USHER", "GINUWINE", "FUGEES", "MONICA", "TLC", "BRANDY", "SHYNE", "USHER"];
// computer selects a random word from wordBank
var randomWord = wordBank[Math.floor(Math.random() *
 wordBank.length)];
console.log(randomWord);
// set up answer Array. This is a collection of blank spaces equal to the number of letters of the secret word.
function generateUnderscore() {
  // i = answerArray
  var answerArray = [];
  for (var i = 0; i < randomWord.length; i++) {
    answerArray.push('_');
}
  document.getElementById('answer').innerHTML = answerArray.join(' ');
  return answerArray
}


// call above function
// generateUnderscore();
var answerArray = generateUnderscore();

// collect user input
document.addEventListener("keyup", function(event) {
  var letterGuessed = String.fromCharCode(event.keyCode);
  // test if letterGuessed is reading correctly
  console.log((randomWord.indexOf(letterGuessed)));
  // if user input is correct
    if (randomWord.indexOf(letterGuessed) > -1){
    // replace underscore with correct letter
    var letterIndex = randomWord.indexOf(letterGuessed);
    answerArray[letterIndex] = letterGuessed;
    document.getElementById('answer').innerHTML = answerArray.join(' ');
    }
    // if user input is incorrect
    else {
      guessesRemaining = guessesRemaining-1;
      wrongGuesses.push(letterGuessed);
    }
    document.getElementById('number-of-guesses').innerHTML = guessesRemaining;
    document.getElementById('wrong-letter-guessed').innerHTML = wrongGuesses;
});
