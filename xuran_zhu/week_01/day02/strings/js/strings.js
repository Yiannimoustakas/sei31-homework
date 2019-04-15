// // DrEvil
// // Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// //
// //   DrEvil(10): 10 dollars
// //   DrEvil(1000000): 1000000 dollars (pinky)
// const drEvil = function (amount) {
//   if(amount === 1000000) {
//     return amount + " dollars" + "( pinky)";
//   } else {
//     return amount + " dollars";
//   };
//   console.log(amountValue);
// };
// drEvil(10);
// drEvil(1000000);
// drEvil(100);
// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
//
// const mixUpWithPosition = (str1, str2, position) => {
//   str1PartA = str1.substring(0,position);
//   str1PartB = str1.substring(position);
//   str2PartA = str2.substring(0,position);
//   str2PartB = str2.substring(position);
//   return str2PartA+str1PartB+ ' '+ str1PartA + str2PartB;
// }
//
// mixUp('mix', 'pod');

//
// let str1 = "mix";
// let arr1 = new Array();
// arr1 = str1.split("");
// console.log(arr1);
// let str2 = "pod";
// let arr2 = new Array();
// arr2 = str2.split("");
// // console.log(arr2);
// let mixUp = function(str1, str2) {
//
//   console.log (`${str1} ${str2}`);
// }
// console.log(mixUp("word", "time"));


// console.log(arr2);
// let mixUp = function (str1, str2) {
//
//   console.log(arr1);
//   console.log(arr2);
// }
// // console.log(str1("word"));
// console.log(str2("word"));

// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'
//
// const fixStart = function(str) {
//   const firstLetter = str.charAt(0);
//   const re = new RegExp(firstLetter, "g");
//   const value = str.replace(re, "*").replace("*", firstLetter);
//   return value;
// }
// console.log(fixStart);
//
// // fixStart = function(word) {
// //   for (i = 0; i < word.length; i++) {
// //     let character = word.charAt[i];
// //     if (character === word.charAt[0]) {
// //       word = word.replace(character, "*");
//       return word;
//     }
//   }
// }
// console.log (fixStart("babble"));
// // Verbing
Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'

// const verbing = function(verb) {
//   for(let i = 0; i < verb.length; i++) {
//     if(i > 2 && verb.endsWith("ing")) {
//       console.log(`${verb}ly`);
//     } else if (i > 2) {
//       console.log(`${verb}ing`);
//     } else {
//       return verb;
//     }
//   }
// }
// // console.log(verbing("go"));
//
//
//
Not Bad
Create a function called notBad that takes a single argument, a string.

It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'

const notBad = function(str) {
  const strToArray = str.split('');
  for(let i=0; i)
  for (let i = 0; i < str.length; i++) {
    if (str.includes("not") && str.includes("bad") && str.indexOf("not") < str.indexOf("bad")) {


    } else {
      console.log(str);
    }
  }
}

const test = [1, 2, 3];
const doubleNumInArray = value =>{
  let result = [];


  for(let i=0; i<value.length; i++) {
    result[i] = value[i]*2;

  }
  return result;
}
f
console.log(notBad("This movie is not that bad."));
