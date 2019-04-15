// console.log("working?")
/*Array and Functions Bonus Material
Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
*/

const maxOfTwoNumbers = function(x, y){
  if(x > y){
    return `x was the biggest number with ${x}`; //interpolation practise
  } else {
    return y;
  };
  }
console.log(maxOfTwoNumbers(3,1))

//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function (a, b, c){
  if(a > b && a > c){
    return `Variable a: ${a} was the biggest`;  //interpolation
  }
  if(b > a && b > c){
    return `Variable a: ${b} was the biggest`;
  }
  else {
    return `Variable a: ${c} was the biggest`;
  };
}
console.log(maxOfThree(8 , 4, 6))
//Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowelTest = function(p){
  if (p === "a" || p === "e" || p === "i" || p === "o" || p ==="u" || p === "A" || p === "E" || p === "I" || p === "O" || p ==="U") {
    return true;
  } else {
    return false;
  }
}

console.log(vowelTest("z"));
console.log(vowelTest("A"));

/*
Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers.
For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

const sumArray = [1, 2, 3, 4].reduce(add);

  function add(accumulator, a) {
  return accumulator + a;
}
console.log(sumArray); // 10


//
const multiplyArray = [1, 2, 3, 4].reduce( (a,b) => a * b );
console.log(multiplyArray)

  //const sumArray = function(a,b,c,d){
  //let splitString = str.split("");
  //console.log(splitString)
  //for (var i = 0; i < splitString.length; i = i + 1){
  //  splitString[i] + splitString[i+1]
  //console.log(sumArray);
  //for (var i = 0, sum = 0; i < splitString.length; sum += splitString[i++]);
  //}



//Bonus
//Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the
//string "ratset gaj".

const reverseString = function(str){
  let splitString = str.split(""); //splits string to array
  let reverseArray = splitString.reverse(); //reverses the split array
  let joinArray = reverseArray.join(""); //combines the array back into a string
  return joinArray; //returns the new reversed string
}
console.log(reverseString("hello"));

//chaining and how i learnt the above - https://medium.com/sonyamoisset/reverse-a-string-in-javascript-a18027b8e91c
function reverseString2(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString2("hello"));

//Write a function findLongestWord that takes an array of words and returns the length of the longest one.

const findLongestWord = ['1', '22', '333', '4444', 'longest6', 'second5'];

var lgth = 0;
var longest;

for(var i=0; i < findLongestWord.length; i++){
    if(findLongestWord[i].length > lgth){
        var lgth = findLongestWord[i].length;
        longest = findLongestWord[i];
    }
}
console.log(longest);


//Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
filterLongWords = ["four", "five5", "six666", "seven77"];
const wordsAbove = 4; //the i was confusing me
var currentLength;
//for statement that cycles through each filterLongWords position and checks its number againts i
for(var i = 0; i < filterLongWords.length; i++){
   if(wordsAbove < filterLongWords[i].length){
      console.log(filterLongWords[i])
      //currentLength = filterLongWords[i];
  // console.log(currentLength);
   }
}

/*
You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman,
or like Wheel of Fortune without the wheel and fortune).

Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters
(e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
*/
//var score = 0;

/*function randomScore() {
  var x = Math.floor((Math.random() * 10) + 1);
  score = score + x;
}*/


/*
Write a function called guessLetter that will:
Take one argument, the guessed letter.
*/


let guessWord = ['f','o','x']
let guessedLetters = ['','',''];
let score = guessWord.length;

const guessLetter = function(str){
  for (var i = 0; i < guessWord.length; i++){
    if (str === guessWord[i]) {
      //score = `${randomScore} + ${score}` - try to add points, how do i call a function
      //randomScore();
      //return guessWord[i];
      console.log( `you guessed correct ${ str }`);
      guessedLetters[i] = str;
      score -= 1;
      console.log(guessedLetters);
      console.log("score: ", score);
    }
    if (i === guessWord.length-1 && str !== guessWord[i]){
      console.log(`pick another letter, game status = ${guessedLetters}`)
    }
    if (score === 0){
      return `You won the game and spelt ${guessWord}`
    }
  }
}

/*
Bonus: Make it more like Wheel of Fortune:
Start with a reward amount of $0
Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
When they guess the word, log their final reward amount.


Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
*/

//
