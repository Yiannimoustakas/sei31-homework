//Array and Functions Bonus Material
console.log("---Homework: arrays and functions---");

/*Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
Use the if-then-else construct available in Javascript.
You'll have to remember your pre-work, or do some googling to figure this out.
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/

console.log("---maxOfTwoNumbers---");
const maxOfTwoNumbers = function(number1, number2) {
  // if (number1 > number2) {
  //   return number1;
  // } else {
  //   return number2;
  // }

  return number1 > number2 ? number1 : number2;
};

console.log(maxOfTwoNumbers(3, 6));
console.log(maxOfTwoNumbers(15, 8));

console.log("---axOfThreeNumbers ---");
const maxOfThreeNumbers = function(number1, number2, number3) {
  if (number1 > number2 && number1 > number3) {
    return number1;
  } else if (number2 > number1 && number2 > number3) {
    return number2;
  } else {
    return number3;
  }
};

console.log(maxOfThreeNumbers(3, 6, 9));
console.log(maxOfThreeNumbers(40, 30, 20));
console.log(maxOfThreeNumbers(0, 50, 10));

//Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

console.log("---isAVowel---");

const vowelFunc = function (character) {
  const vowelsArray = ["A", "E", "I", "O", "U", "a", "e", "i" , "o", "u"]

  for (let i = 0; i < vowelsArray.length; i++) {
    if ( character === vowelsArray[i] ) {
      return true;
    }
  }
  return false;
}

console.log(vowelFunc("a"));
console.log(vowelFunc("U"));
console.log(vowelFunc("n"));


//Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers.
//For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
console.log("---sumArray & multiplyArray---");

const sumArray = function(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
    message = `The result of sum is ${total}.`;
  }
  return message;
};

// Another solutions is using the "Reduce"!
const multiplyArray = function(array) {
  let total = 1;
  for (let i = 0; i < array.length; i++) {
    total = total * array[i];
    message = `The result of multiplication is ${total}.`;
  }
  return message;
};

console.log(sumArray([1, 2, 3, 4]));
console.log(multiplyArray([1, 2, 3, 4]));

/*
Bonus
Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/
console.log("---The reversal of a string---");
const reverseString = function(string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
    message = `The reversal of the string is ${newString}.`;
  }
  return message;
};
console.log(reverseString("jag testar"));

/*
Bonus
Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
console.log("---Find Longest Word---");

var names = ["kelly", "john", "mariana", "rafael", "ray"];

const findLongestWord = function(arrayOfWords) {
  let longestWord = "";
  for (var i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].length > longestWord.length) {
      longestWord = arrayOfWords[i];
      message = `The longest word is ${longestWord}.`;
    }
  }
  return message;
};

console.log(findLongestWord(names));

const findLongestWordFromSentence = function(sentence) {
  const arrayOfWords = sentence.split(" ");

  return findLongestWord(arrayOfWords);
};

const phrase = "I will go to the beach tomorrow";
const words = phrase.split(" ");
console.log(findLongestWord(words));
console.log(findLongestWordFromSentence(phrase));

/*
Bonus
Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
*/
console.log("---Filter Long Words---");

const filterLongWords = function(arrayOfWords, number) {
  const filteredWords = arrayOfWords.filter(word => word.length > number);
  // const filteredWords = arrayOfWords.filter(function(word){
  //     return word.length > number;
  // });
  return filteredWords;
};
console.log(filterLongWords(names, 3));
