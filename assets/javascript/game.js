// declare global variables in the game

// array of words to guess from
var wordBank = [
  "BIGGIE", "JARULE", "TUPAC", "AALIYAH", "NAS", "BLACKSTREET", "USHER", "GINUWINE", "FUGEES", "MONICA", "TLC", "BRANDY", "SHYNE", "USHER"
];

// create empty array to store the words we want the player to guess

var words = "";

// create answer array to store the answer board (starting words as blanks the player will gradully fill in)

var answerArray = [];

// start the game initialization

function init(){
  // select a random word from wordBank

  words = wordBank[Math.floor(Math.random() * wordBank.length)];

  // set up answer array.

  answerArray = [];
  for (var i = 0; i < words.length; i++) {
    answerArray[i] = "_";
  }

  document.getElementById('answer').innerHTML = answerArray.join('');
  document.getElementById('message').innerHTML = "Type a letter to guess the artist!";

  }
init();

function playerGuess(){
  // get a guess from the player
  var guess = document.getElementById('guess').value
  var showThisMessage = "";

  if (guess.length === 1){
    showThisMessage = "Enter a single letter";
  }
  else {
    // update the game with player input
    var i = 0; // indexer into the array
    for (i = 0; i <words.length; i++){
      if (words[i]=== guess) {
        answerArray[i] = guess;
        showThisMessage = "Yes! +"+guess+" is in the answer";
      }
    }

    // Update player unknown letters still missing
    var remainingLetters = answerArray.length;

    //recount remaining letters
    for (i = 0; i < answerArray.length; i ++ ) {
    if (answerArray[i] === '_') {
        remainingLetters -=1;
      }
      }
      // if no letters remain - YOU WON!
      if (remainingLetters == 0){
        showThisMessage = "Hurray! You won!";
      }

      // (otherwise) if we have no message to show, the guess is wrong
       if (showThisMessage===""){
         showThisMessage = "Sorry, no "+guess;
       }

       // update game
       document.getElementById('answer').innerHTML = answerArray.join(" ");

       // clear out last guess
       document.getElementById('guess').value = "";
}
document.getElementById('message').innerHTML = showThisMessage;
}
