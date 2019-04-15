console.log("Running......");



/*
Array and Functions Bonus Material
Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
Use the if-then-else construct available in Javascript.
You'll have to remember your pre-work, or do some googling to figure this out.
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
Define a function sumArray and a function multiplyArray that sums and multiplies (respectively)
all the numbers in an array of numbers.
For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/
/*
const maxOfTwoNumbers = function(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(maxOfTwoNumbers(3, 5));
*/

//CODE ALONG HERE ->>>





/*
const maxOfThreeNumbers = function(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  if (c > a && c > b) {
    return c;
  }
}
console.log(maxOfThreeNumbers(2, 8, 1));
console.log(maxOfThreeNumbers(9, 2, 1));
console.log(maxOfThreeNumbers(2, 8, 20));
*/

//CODE ALONG HERE ->>>






/*
const vowelMac = function(str){
    if( str == "a") {
      return true;
    }
    if( str == "e") {
      return true;
    }
    if( str == "i") {
      return true;
    }
    if( str == "o") {
      return true;
    }
    if( str == "u") {
      return true;
    }
    else {
      return false;
    }
}
console.log(vowelMac("a"));

*/

//CODE ALONG HERE ->>>












/*
var numArray = [1, 2, 3, 4],
  s = 0,
  p = 1,
  i;

const sumArray = function() {

  for (i = 0; i < numArray.length; i += 1) {
    s += numArray[i];
  }
  console.log('The sum of the array is  ' + s);
}
console.log(sumArray());
*/

//CODE ALONG HERE ->>>



/*
const multiplyArray = function() {

  for (i = 0; i < numArray.length; i += 1) {
    p *= numArray[i];
  }
  console.log('The product of the array is  ' + p);
}
console.log(multiplyArray(6));
*/

//CODE ALONG HERE ->>>






/*
Bonus
Define a function reverseString that computes the reversal of a string.
For example, reverseString("jag testar") should return the string "ratset gaj".
Write a function findLongestWord that takes an array of words and returns the length of the longest one.
Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
 js-homework-3.md
*/
/*
const filterLongestWords = function(array, num) {
  if (array.length > num){
    return array;
  }

}
console.log(filterLongestWords("longword", 5));

*/

//CODE ALONG HERE ->>>




const reverseString = function(str){            //declaring Functions
  let reversed = "";                            //
  for (var i = str.length - 1; i >= 0; i--){
    reversed += str[i];
  }
  console.log(reversed);
  return reversed;
}
reverseString("reverse this string");



const findLongestWord= function(array) {
  let word = "";
  for (let i = 0; i < array.length; i++) {
    if (word.length < array[i].length) {
      word = array[i];
    }
  }
  return word;

  const longestStringReduce = function(array) {
    return array.reduce((a, b) => a.length < b.length ? b : a, "");
  }
}

/*
Homework: The Word Guesser
You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'),
 and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
When it's done iterating, it should log the current guessed letters ('F__')
 and congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed,
 and if not, it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
Bonus: Make it more like Wheel of Fortune:
Start with a reward amount of $0
Every time a letter is guessed, generate a random amount and reward the user if they found a letter
(multiplying the reward if multiple letters found), otherwise subtract from their reward.
When they guess the word, log their final reward amount.
Bonus: Make it like Hangman:
Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once.
If they guess a letter twice, do nothing.
Keep track of the state of the hangman as a number (starting at 0),
 and subtract or add to that number every time they make a wrong guess.
Once the number reaches 6 (a reasonable number of body parts for a hangman),
inform the user that they lost and show a hangman on the log.
*/
