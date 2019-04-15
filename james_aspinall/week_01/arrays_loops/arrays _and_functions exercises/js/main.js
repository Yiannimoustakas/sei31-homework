/////////////////////////////
// 1) Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
/////////////////////////////

const maxOfTwoNumbers = (num1, num2) => {
  if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
  } else if (num1 < num2) {
    console.log(`${num2} is greater than ${num1}`);
  } else {
    console.log("The numbers are equal");
  }
}

/////////////////////////////
// 2) Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
/////////////////////////////

const maxOfThreeNumbers = (num1, num2, num3) => {
  let myArray = [num1, num2, num3];
  let greatest = Math.max.apply(null, myArray);
  console.log(greatest);
}

/////////////////////////////
// 3) Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
/////////////////////////////

//FIND A BETTER WAY OF DOING THIS - IT IS HORRIBLE!!!!!!!
// const isAVowel = (letter) => {
//   if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
//     console.log(`${letter} is a vowel`);
//   }else{
//     console.log(`${letter} is not vowel`);
//   }
// }

//The better way...
const isAVowel = (letter) => {
  const vowelArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  if (vowelArray.includes(letter)) {
    console.log(`${letter} is a vowel`)
  } else {
    console.log(`${letter} is not vowel`)
  }
}

/////////////////////////////
// 4) Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
/////////////////////////////

//Look in your bookmarks, you did this before...
const sumArray = (array) => {
  const sum = array.reduce((a, b) => a + b);
  console.log(sum);
}

/////////////////////////////
// 5) Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
/////////////////////////////

const reverseString = (string) => {
  //split string into an array
  const stringToArray = string.split("");
  //reverse new array
  const reverseArray = stringToArray.reverse();
  //join array back to string
  const arraytoString = reverseArray.join("");
  console.log(arraytoString);
}

/////////////////////////////
// 6) Write a function findLongestWord that takes an array of words and returns the length of the longest one.
/////////////////////////////

//Sort array into decending order and console log for item in array
const findLongestWord = (array) => {
  const sortArray = array.sort(function(a, b) {
    return b.length - a.length;
  });
  console.log(array[0]);
}

/////////////////////////////
// 7) Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i
/////////////////////////////

//Find a filter methods that take into considration 'i' argument
const filterLongWord = (array, i) => {
  const arrayOfWords = array;
  const result = arrayOfWords.filter(word => word.length > i);
  console.log(result);
}
