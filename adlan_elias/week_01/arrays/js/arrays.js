/*
Array and Functions Bonus Material

*/


// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some
// googling to figure this out.

const maxOfTwoNumbers = function (num1, num2) {
  if (num1 > num2) {
    return num1
  } else {
    return num2
  }
};

console.log( maxOfTwoNumbers(10,20) );
console.log( maxOfTwoNumbers(15,5) );
console.log( maxOfTwoNumbers(16,8) );

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (a, b, c) {
  let aVb = a > b;
  let aVc = a > c;
  let bVa = b > a;
  let bVc = b > c;
  // let cVa = c > a;
  // let cVb = c > b;
  if (aVb && aVc) {
    return a;
  } else if (bVa && bVc) {
    return b;
  } else {
    return c;
  }
};

console.log( maxOfThree (5, 10, 15) );
console.log( maxOfThree (27, 21, 19) );
console.log( maxOfThree (58, 67, 34) );
console.log( maxOfThree (85, 67, 98) );

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const isVowel = function (string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < vowels.length; i++){
    if (string === vowels[i]) {
      return true;
    }
  }

  return false;
};

console.log ( isVowel('a') );
console.log ( isVowel('c') );
console.log ( isVowel('e') );
console.log ( isVowel('8') );

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an
// array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

let array1 = [1, 2, 3, 4];
let array2 = [5, 13, 4, 4];
let array3 = [7, 3, 5, 1];
//Not sure if it's better to add the array locally or globally

const sumArray = function (array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};

console.log( sumArray(array1) );
console.log( sumArray(array2) );
console.log( sumArray(array3) );

const multiplyArray = function (array) {
  let multiplier = 1;

  for (let i = 0; i < array.length; i++) {
    multiplier = multiplier * array[i];
  }
  return multiplier;
};

console.log( multiplyArray(array1) );
console.log( multiplyArray(array2) );
console.log( multiplyArray(array3) );

// Define a function reverseString that computes the reversal of a string.
// For example, reverseString("jag testar") should return the string "ratset gaj".


const reverseString = function (string) {
    let text = '';

    for (let i = string.length - 1; i >= 0; i--) {
    	text = text + string[i];
    }
    return text;
};


console.log( reverseString("jag testar") );
console.log( reverseString("joel turnbull") );


// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

const array4 = ['hello', 'my', 'name', 'is', 'bob'];
const array5 = ['supercali', 'fragilistic', 'expi', 'ali', 'docious'];


const findLongestWord = function (array) {
  let longestWord = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (longestWord.length < array[i].length) {
      longestWord = array[i];
    }
  }
  return longestWord.length;
  // return longestWord;
};

console.log( findLongestWord(array4) );
console.log( findLongestWord(array5) );

// Write a function filterLongWords that takes an array of words and an number i and returns
// the array of words that are longer than i.


const filterLongWords = function (array, number) {
  let longWords = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > number) {
      longWords.push(array[i]);
    }
  }
  return longWords;
};

console.log ( filterLongWords(array5, 5) ); //using the arrays from the question before
console.log ( filterLongWords(array4, 4) );
// const array4 = ['hello', 'my', 'name', 'is', 'bob'];
// const array5 = ['supercali', 'fragilistic', 'expi', 'ali', 'docious']; These ones.
