// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.


// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.


// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.



const wordArray = ['s', 'm', 'a', 'r', 't'];
let guessedArray = ['_', '_', '_', '_', '_'];
let status = "pending";
let reward = 0;
const min=1;
const max=50;
let allGuessedChars = [];
let hangman = 0;
const hangedImage = ["|_______________\n|         |\n|\n|\n|",
                    "|_______________\n|         |\n|         O\n|\n|",
                    "|_______________\n|         |\n|         O\n|         |\n|",
                    "|_______________\n|         |\n|         O\n|       / |\n|",
                    "|_______________\n|         |\n|         O\n|       / | \\\n|",
                    "|_______________\n|         |\n|         O\n|       / | \\\n|        /",
                    "|_______________\n|         |\n|         O\n|       / | \\\n|        /  \\"];

const guessLetter = function ( guessedLetter ) {
  if( status === "done" ) {
    return `You got this already mate! Try refreshing the page to start over!`;
  }else if ( hangman === 6 ) {
    console.log(`You're a dead man!`);
    console.log( `${hangedImage[ hangman ]}` );
    return '';
  } else {
    for( let k = 0; k < allGuessedChars.length; k++ )
    {
      if( guessedLetter === allGuessedChars[k] ) {
        return '';
      }
    }
    let result = '';
    let flagChar = false;
    let newStatus = "checking";
    let random = Math.floor(Math.random() * (+max - +min)) + +min;
    allGuessedChars.push( guessedLetter );
    for ( let i = 0; i < wordArray.length; i++ ) {
      if ( guessedLetter === wordArray[i] ) {
        guessedArray[i] = guessedLetter;
        flagChar = true;
        reward += random;
        if(hangman > 0) {
          hangman--;
        }
      }
    }
    for ( let j = 0; j < guessedArray.length; j++ ) {
      result += guessedArray[j];
      if( guessedArray[j] === '_' )
      {
        newStatus = "pending";
      }
    }
    if( status !== newStatus ) {
      status = "done";
      return `Congratulations! The word is ${ result } and you won $${ reward }.`;
    } else if(flagChar){
      if(hangman >= 0) {
        console.log( `${hangedImage[ hangman ]}` );
      }
      return `Good work - ${ result }! You have a $${ reward } reward.`;
    } else {
      reward -= random;
      hangman++;
      if(hangman >= 0) {
        console.log( `${hangedImage[ hangman ]}` );
      }
      return `${ guessedLetter } is not right. $${ random } deducted with new total of $${ reward }. Try again - ${ result }.`;
    }
  }
}

console.log('--------------The Word Guesser-----------');
console.log(guessLetter('a'));
console.log(guessLetter('b'));
console.log(guessLetter('m'));
console.log(guessLetter('i'));
console.log(guessLetter('q'));
console.log(guessLetter('s'));
console.log(guessLetter('t'));
console.log(guessLetter('q'));
console.log(guessLetter('c'));
console.log(guessLetter('n'));
console.log(guessLetter('f'));
console.log(guessLetter('z'));
console.log(guessLetter('l'));
console.log(guessLetter('d'));
console.log(guessLetter('e'));
console.log(guessLetter('g'));
console.log(guessLetter('h'));
console.log(guessLetter('j'));
