
const playWord = ['L','E','A','T','H','E','R'];

const guessWord = ['_','_','_','_','_','_','_'];

const guessLetter = function (letter) {

    if (guessedLetterList.includes(letter)) {
      console.log('Repeated letter:', letter);
      return;
    }

    guessedLetterList.push(letter);

    let correctGuess=false;

    for (let w=0; w<playWord.length; w++) {
        if (playWord[w]===letter) {
          correctGuess=true;
          guessWord[w]=playWord[w];
          console.log("Bravo! You have found a new letter");
        }
    }
      if (correctGuess===false) {
        maxWrongGuess--;
        console.log("Sorry, your guess.");
      }

      if (maxWrongGuess===0) {
        console.log("Badluck, you have lost this game.");
        alert ("Badluck, you have lost this game.");
      }
    if (!guessWord.includes('_')) {
      console.log("Congratulations!You have won this game.");
      console.log(guessWord);
      alert ("Congratulations!You have won this game.");
    }
    return guessWord;

    // console.log(guessWord);
};

let maxWrongGuess=6;
const guessedLetterList = [];

console.log(guessLetter('E'));
console.log(guessLetter('R'));
console.log(guessLetter('F'));
console.log(guessLetter('C'));
console.log(guessLetter('L'));
console.log(guessLetter('T'));
console.log(guessLetter('H'));
console.log(guessLetter('E'));
console.log(guessLetter('B'));
console.log(guessLetter('W'));
console.log(guessLetter('X'));
console.log(guessLetter('Y'));
