
//////////////////////////////////////////////////////////
/////////////////////////////BONUS Guessing Game
//////////////////////////////////////////////////////////

//Global Arrays
const theWord = ["J","I", "M"];
const guessedLetters = [];

const submitFunction = () => {
let guess = document.getElementById("guessLetterInput").value;
console.log(guess);
}

//DOM Elements
let domDisplayGuess = document.getElementById("displayGuess");
let domDisplaySuccess = document.getElementById("successMsg");
let domDisplayWrongGuess = document.getElementById("displayWrongGuess");
let domUserGuess = document.getElementById("guessLetterInput").value;
let domSubmitGuess = document.getElementById("submitGuess").addEventListener("click", submitFunction());

//Function to check if user has got all of the checkLetters
const complete = () => {
  if(theWord.length === guessedLetters.length){
    domDisplaySuccess.className = "lead";
    console.log(`Awesome! You guessed ${theWord}`)
  }
}

//Funciton to check if the letter is in the hidden word
const checkGuessedLetter = (letter) => {
  if(guessedLetters.includes(letter)){
    console.log("You have already guessed that letter")
  }else{
      if (theWord.includes(letter)) {
        console.log(`${letter} is a letter in the word`);
        guessedLetters.push(letter);
        domDisplayGuess.innerHTML = guessedLetters;
        complete();
      } else {
        console.log(`${letter} is not letter in the word`);
        domDisplayWrongGuess.className = "lead";
      }
    }
  }
