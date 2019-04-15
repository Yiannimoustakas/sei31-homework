// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

// const maxOfTwoNumbers = function (num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// };
// console.log (maxOfTwoNumbers(20, 2));
// console.log (maxOfTwoNumbers(99, 100));

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

// const maxOfThree= function (num1, num2, num3) {
//   if (num1 > num2 && num1 >num3) {
//     return num1;
//   } else if (num2 > num1 && num2 > num3) {
//     return num2;
//   } else if (num3 > num1 && num3 > num2) {
//     return num3;
//   }
// };
// console.log (maxOfThree(100, 99, 98));
// console.log (maxOfThree(0, 22, 44));
// console.log (maxOfThree(50, 60, 30));

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

// const character = function (letter) {
//   if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
//    return 'true';
//   } else {
//    return 'false';
//   }
// };
// console.log (character('a'));
// console.log (character('b'));
// console.log (character('z'));
// console.log (character('u'));

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
//
// const sumArray = function(arr) {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// };
// console.log (sumArray([1, 2, 3, 4, 5]));
// console.log (sumArray([10, 20, 30, 40, 50]));
// console.log (sumArray([1, 2, 3, 4, 5]));
//
// const multiplyArray = function(mlt) {
//   let sum = 1
//   for (let i = 0; i < mlt.length; i++) {
//     sum = sum * mlt[i];
//   }
//   return sum;
// };
// console.log (multiplyArray([1, 2, 3, 4, 5]));
// console.log (multiplyArray([10, 20, 30, 40, 50]));
// console.log (multiplyArray([1, 2, 3, 4, 5]));


// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// //
// const reverseString = function (str) {
//     str = str.split('');
//     str = str.reverse();
//     str = str.join('')
//     return str;
// };
// console.log(reverseString ('Hello'));//review this later

// // Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// let findLongestWord = function (word) {
//   let longestWord = '';
//   for (let i = 0; i < word.length; i++) {
//     if (word[i].length > longestWord.length)
//       longestWord = word[i];
//   }//why if dont use {}, and why the } should be used here?
//     return longestWord;
// };
// console.log(findLongestWord(['word', 'longestWords', 'name']));


// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

let filterLongWords = function (word, i) {
  let word = new Array();
  for (count = 0; count < word.length; count++) {
    if (word.length > i) {
      return word;
    } else {
        console.log(`The word "${word}" length is less than ${i}.`);
    }
  }
};
console.log(filterLongWords(["king", "word", "go"], 3));
// only can show one sring, not an array.
//  js-homework-3.md
