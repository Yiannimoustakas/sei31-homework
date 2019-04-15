/*

///////////////////////////////////////
// Array and Functions Bonus Material
///////////////////////////////////////

** Define a function maxOfTwoNumbers that takes two numbers as arguments and
returns the largest of them. Use the if-then-else construct available in
Javascript. You'll have to remember your pre-work, or do some googling to
figure this out.

** Define a function maxOfThree that takes three numbers as arguments and
returns the largest of them.

** Write a function that takes a character (i.e. a string of length 1) and
returns true if it is a vowel, false otherwise.

** Define a function sumArray and a function multiplyArray that sums and
multiplies (respectively) all the numbers in an array of numbers. For example,
sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should
return 24.

Bonus
** Define a function reverseString that computes the reversal of a string. For
example, reverseString("jag testar") should return the string "ratset gaj".
** Write a function findLongestWord that takes an array of words and returns
the length of the longest one.
** Write a function filterLongWords that takes an array of words and an number
i and returns the array of words that are longer than i.
*/

const maxOfTwoNumbers = (num1, num2) => {
  if (num1 > num2) return num1;
  return num2;
};

const maxOfThree = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) return num1;
  if (num2 > num1 && num2 > num3) return num2;
  return num3;
};

const isVowel = char => {
  const vowels = ["a", "e", "i", "o", "u"];
  const checkVowels = vowels.filter(vowel => {
    return vowel === char.toLowerCase();
  });
  return !!checkVowels.length && true; // is this stupid?
  // return checkVowels.length ? true : false; // is this simpler?
};

console.log(isVowel("a"));
console.log(isVowel("b"));
console.log(isVowel("i"));

const sumArray = arr => {
  const reducer = (accumulator, currentVal) => accumulator + currentVal;
  return arr.reduce(reducer);
};

console.log(sumArray([1, 2, 3, 4]));

const multiplyArray = arr => {
  const reducer = (accumulator, currentVal) => accumulator * currentVal;
  return arr.reduce(reducer);
};

console.log(multiplyArray([1, 2, 3, 4]));

const reverseString = string => {
  const stringAsArray = string.split("");
  const reverseArray = stringAsArray.reverse();

  return reverseArray.join("");
};

console.log(reverseString("popcorn"));
console.log(reverseString("anna"));

const findLongestWord = arr => {
  let longestWord = "";
  arr.forEach(word => {
    if (word.length > longestWord.length) longestWord = word;
  });

  return longestWord;
};

console.log(findLongestWord(["hat", "cat", "fence", "it"]));

const filterLongWords = (array, number) => {
  return array.filter(word => {
    if (word.length > number) return word;
  });
};

console.log(filterLongWords(["catalogue", "and", "theorisation"], 5));

///////////////////////////////////////
// Homework: The Word Guesser
///////////////////////////////////////

/*
You'll create a simple word guessing game where the user gets infinite tries to
guess the word (like Hangman without the hangman, or like Wheel of Fortune
without the wheel and fortune).

** Create two global arrays: one to hold the letters of the word
\(e.g. 'F', 'O', 'X'), and one to hold the current guessed letters
(e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').

** Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array
to reflect that.
When it's done iterating, it should log the current guessed letters ('F__') and
congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed,
and if not, it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with
various letters to check that your program works.
*/

const word = ["F", "O", "X"];
const guessedLetters = ["_", "_", "_"];

const isCorrectGuess = letter => {
  const letterUpCase = letter.toUpperCase();

  const correctGuess = word.filter(correctLetter => {
    if (letterUpCase === correctLetter) {
      return true;
    }
  });
  return correctGuess;
};

const updateGuessedLetters = letter => {
  const letterUpCase = letter.toUpperCase();

  word.forEach((correctLetter, index) => {
    if (letterUpCase === correctLetter) {
      // if match, change guessedLetters array to reflect
      guessedLetters[index] = correctLetter;
    }
  });
};

const upNextMessage = () => {
  const message = guessedLetters.includes("_")
    ? "Guess again.\n\n"
    : "*** Nice! You win! ***";
  console.log(message);
};

const guessLetter = letter => {
  // iterate through word's letters to see if letter is correct
  if (isCorrectGuess(letter)) {
    // log current guessed letter
    updateGuessedLetters(letter);

    // congratulate user
    console.log(`Congratulations! You guessed a correct letter: ${letter}.`);
  }

  // show user their progress
  console.log(`Your guessed letters now looks like:
    ${guessedLetters}`);

  // if no more letters need to be guessed, congratulate user on their win
  upNextMessage();
};

guessLetter("F");
guessLetter("M");
guessLetter("o");
guessLetter("X");

//////////////////////////////////////////////
// Bonus: Make it more like Wheel of Fortune:
//////////////////////////////////////////////

/*
** Start with a reward amount of $0
Every time a letter is guessed, generate a random amount and reward the user
if they found a letter (multiplying the reward if multiple letters found),
otherwise subtract from their reward.
When they guess the word, log their final reward amount.
*/

const reward = 0;

// on correct letter guess, generate random amount, reward user
// multiple letters revealed = multiplied reward
// on incorrect guess, subtract some reward
// on win, log reward

const wheelOfFortuneGuess = letter => {
  if (isCorrectGuess(letter)) console.log("millions");

  console.log(`Your guessed letters now looks like:
    ${guessedLetters}`);

  // if no more letters need to be guessed, congratulate user on their win
  upNextMessage();
};

//wheelOfFortuneGuess("F");

////////////////////////////////////
// Bonus: Make it like Hangman:
////////////////////////////////////

/*
** Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

*/
