// create global variables for game

var letterGuessed;
var correctGuess;

// create an array of words
var  wordBank=["BIGGIE", "JARULE", "TUPAC", "AALIYAH", "NAS", "BLACKSTREET", "USHER", "GINUWINE", "FUGEES", "MONICA", "TLC", "BRANDY", "SHYNE", "USHER"];

// computer selects a random word from wordBank
var randomWord = wordBank[Math.floor(Math.random() *
 wordBank.length)];

 console.log(randomWord);

// set up answer Array. This is a collection of blank spaces equal to the number of letters of the secret word.

function generateUnderscore() {
  var answerArray = [];
  for (var i = 0; i < randomWord.length; i++) {
    answerArray.push('_');
}
  document.getElementById('answer').innerHTML = answerArray.join(' ');
  return answerArray;
}

// call above function
generateUnderscore();
console.log(generateUnderscore());

// collect user input
document.addEventListener("keyup", function(event) {
  var lettersGuessed = String.fromCharCode(event.keyCode);
  // if user guess is correct
    if (randomWord.indexOf(lettersGuessed) > -1){
    // replace underscore with correct lette
}
});
