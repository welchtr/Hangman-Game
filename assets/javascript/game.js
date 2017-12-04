

// array of words to guess

    var words_to_guess
        words_to_guess = ['Biggie', 'JaRule', 'Brandy', 'Monica', 'TLC', 'SWV', 'Aaliyah', 'Nas', 'Blackstreet', 'Usher', 'Ginuwine', 'Tupac', 'Juvenile', 'Fugees', 'Mase']

// array of characters to choose from

    var availableCharacters
          availableCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]

// choose from list of random words

    var randomWord = words_to_guess[Math.floor(Math.random() * words_to_guess.length)];

    console.log(randomWord);

// answer array

    var answerArray = [];

    for (var i = 0; i < randomWord.length; i++) {

     answerArray[i] = "_";

 }

    var remainingLetters = randomWord.length;

// display word also showing players progress

    document.write(answerArray.join(" "));

  // player input

    inputBox.addEventListener("keyup", function(event) {
      var answerArray = event.target.value;
      });

      console.log();
