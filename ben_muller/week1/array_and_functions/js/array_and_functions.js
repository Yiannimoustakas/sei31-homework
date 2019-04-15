// Array and Functions Bonus Material

// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 

const maxOfTwoNumbers = function ( num1, num2 ) {
  return Math.max( num1, num2 )
};

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function ( num1, num2, num3 ) {
  return Math.max( num1, num2, num3 )
};

// Write a function that takes a character (i.e. a string of length 1) and returns
// true if it is a vowel, false otherwise.

const isAVowel = function ( char ){
  const vowels = 'aeiou';
  return vowels.indexOf(char) >= 0 ? true:false;
};

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) 
// all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, 
// and multiplyArray([1,2,3,4]) should return 24.

const sumArray = function ( arr ){ 
  return arr.reduce( (sum, element ) => sum + element ) 
};

const multiplyArray = function ( arr ) {
  return arr.reduce( ( sum, element ) => sum * element, 1)
};

// Define a function reverseString that computes the reversal of a string. 
// For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function ( str ){
  return str.split('').reverse().join('')
};

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

const findLongestWord = function ( array ){
  let maxLength = 0
  for ( elements of array ){
    maxLength = Math.max(elements.length, maxLength)
  };
  return maxLength;
};

// Write a function filterLongWords that takes an array of words and an number i 
// and returns the array of words that are longer than i.

const filterLongWords = function ( arr, num ){
  return arr.filter( w => w.length > num )
};

