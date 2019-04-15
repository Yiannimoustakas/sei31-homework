// Array and Functions Bonus Material

// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (num1, num2){
    if (num1 > num2){
      console.log(`${ num1 }`);
    } else {
      console.log(`${ num2 }`);
    }
};
maxOfTwoNumbers(5, 10);
maxOfTwoNumbers(7, 99);
maxOfTwoNumbers(4, 57);

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const greaterNum = function(num1, num2, num3){
   const biggest = Math.max(num1, num2, num3)
    console.log(`"The greater number of ${num1} , ${num2} and ${ num3 } is ${biggest} .`)
   return biggest;
};

 greaterNum(2, 4, 6);
 greaterNum(5, 10, 15);
 greaterNum(7, 14, 21);

 //Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowelFinder = function(character){
    if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u" ) {
          console.log(true);
  } else {
          console.log(false);
      }
 };

vowelFinder("z");

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const array = [1, 2, 3, 4];

const sumArray = function(input){
  return input.reduce(function(a, b) {
  	return a + b;
	});
}

const multiplyArray = function(input){
  return input.reduce(function(a, b) {
    return a * b;
  });
}

console.log(sumArray(array));
console.log(multiplyArray(array));

// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar")
// should return the string "ratset gaj".

const reverseString = function(input){
  return input.split('').reverse().join('');
  }

console.log(reverseString("jag tester"));

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

const words = ['1234','12345', '123456', '1234567'];

const longestString = function(input) {
      let longString = '';
      for ( let i = 0; i < input.length; i++) {
        if ( input[i].length > longString.length ) {
           longString = input[i];
        }
      }
     return longString;
    }

console.log(longestString(words));

// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

const array2 = ["hello", "goodbye", "farewell", "good-morning"];

const filterLongWords = function (input, i){
  let longestWords = [];
   for (var i = 0; i < array2.length; i++){
     if (array2[i].length>i){
              longestWords.push(array2[i]);
}
}
return longestWords;
}

console.log(filterLongWords(array2));
