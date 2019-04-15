
/


Homework: The Word Guesser
You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

let guessTheWord = function (letter, firstLetter) {
  if (letter === 'firstLetter') {
    console.log ('You get the first letter!');
  } else if (letter === 'p') {
    console.log ('You get the second and third letter!');
  } else if (letter === 'l') {
    console.log ('You get the forth letter!');
  } else if (letter === 'e') {
    console.log ('You get the last letter!');
  } else {
    console.log ('Sorry, please try again!');
  }
};
let guessIt = function (word) {
  if (word === 'apple') {
    console.log('Congratulation! You got it!');
  } else {
    console.log ('Sorry, please try again!');
  }
};
console.log(guessTheWord('a'));
console.log(guessTheWord('b'));
console.log(guessTheWord('p'));
console.log(guessTheWord('l'));
console.log(guessTheWord('e'));
console.log (guessIt('apple'));
console.log (guessIt('banana'));
Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').


Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
Bonus: Make it more like Wheel of Fortune:
Start with a reward amount of $0
Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
When they guess the word, log their final reward amount.
Bonus: Make it like Hangman:
Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
