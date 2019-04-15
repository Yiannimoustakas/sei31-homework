console.log('Up and running');


/*Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
Use the if-then-else construct available in Javascript.
You'll have to remember your pre-work, or do some googling to figure this out.*/


/////////////////ONE
const maxOfTwoNumbers = function(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  };
};

/////////////////TWO
//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThreeNumbers = function(num1, num2, num3) {
  let highestOfFirstTwoNumbers = maxOfTwoNumbers(num1, num2);
  if (highestOfFirstTwoNumbers > num3) {
    return highestOfFirstTwoNumbers;
  } else {
    return num3;
  };
};

////////////////THREE
//Write a function that takes a character (i.e. a string of length 1)
//and returns true if it is a vowel, false otherwise.

const amIAVowel = function(letter) {
  if (letter === 'A' || letter === 'a' || letter === 'E' || letter === 'e' || letter === 'I' || letter === 'i' || letter === 'O' || letter === 'o' || letter === 'U' || letter === 'u') {
    return true;
  } else {
    return false;
  };
};


///////////////FOUR
//Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers.
//For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const sumArray = function(array) {
  let total = '';
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  };
return total;
};


const multiplyArray = function(array) {
  let total = array[0];
  for (let i = 1; i < array.length; i++) {
    total = (total * array[i]);
  };
return total;
};


//////////////FIVE
//Define a function reverseString that computes the reversal of a string.
// For example, reverseString("jag testar") should return the string "ratset gaj"

const reverseString = function(string) {
    splitString = string.split("");
    reverseArray = splitString.reverse();
    joinArray = reverseArray.join("");
    return joinArray;
  };


////////////SIX
//Write a function findLongestWord that takes an array of words and returns the length of the longest one.
//
const findLongestWord = function(array){
  let longestWord;
  let lengthOfString = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > lengthOfString){
    //  console.log(array[i])
      lengthOfString = array[i].length;
      longestWord = array[i];
    };
  };return longestWord
};
