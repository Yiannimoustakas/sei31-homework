console.log('working');

//comment multiple lines = option + shift + a

/* Array and Functions Bonus Material
Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 
Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do 
some googling to figure this out.*/

const maxOfTwoNumbers = function (a, b) {
  let greater;
  if (a > b) {
    greater = a;
  } else {
    greater = b;
  }
  console.log( greater );
  return greater;
};

maxOfTwoNumbers(5,10)

/*
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/

const maxOfThree = function ( a, b, c ) {
  let greater;
  if (a > b && a > c) {
    greater = a;
  }  if (b > a && b > c) {
    greater = b;
  } if (c > b && c > a) {
    greater = c
  }
  console.log( greater );
  return greater;
};

maxOfThree(1,2,3)

/* 
Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, 
false otherwise.
 */

const vowelOrNot = function (string) {
  const vowel = ["a","e","i","o","u"];
  for (var i = 0; i < vowel.length; i++) {
    if (string === vowel[0] || string === vowel[1] || string === vowel[2] || string === vowel[3] || string === vowel[4]) {
      console.log(true)
    } else {
      console.log(false)
    }
  }
};

vowelOrNot("aeiou");
/*
Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all 
the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, 
and multiplyArray([1,2,3,4]) should return 24.
var numbers = [10, 20, 30, 40] // sums to 100
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}
 */
let array1 = [1,2,3,4]


const sumArray = function (array) {
  let sum = 0;
  for (var i = 0; i < array.length; i++) {
  sum += array [i];
  }
  console.log(sum);
  return sum
};

sumArray(array1);

const multiplyArray = function (array) {
  let multiply = 1;
  for (var i = 0; i < array.length; i++) {
    multiply *= array [i];
  }
  console.log(multiply);
  return multiply;
};

multiplyArray(array1);

/* Bonus
Define a function reverseString that computes the reversal of a string. For example, 
reverseString("jag testar") should return the string "ratset gaj".
*/

const reverseString = function (string) {
  string = string.split("");
  string = string.reverse();
  string = string.join("");
  console.log(string);
};

reverseString("Patricia Nunes")

/* 
Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/



const findLongestWord = function (words) {

  const stringArray = words.split(" ");
  const longestWord = stringArray.reduce((a, b) => {
    if(b.length > a.length) {
      return b;
    } else {
      return a;
    }
  });
  console.log(longestWord);
  console.log(longestWord.length);
  return longestWord.length;
};

findLongestWord("eu te amo");

/*
Write a function filterLongWords that takes an array of words and an number i and returns the 
array of words that are longer than i. */


