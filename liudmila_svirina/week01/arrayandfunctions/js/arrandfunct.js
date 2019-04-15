// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (num1, num2){
  if (num1 > num2){
    console.log(`The max number of ${num1} and ${num2} is ${num1}`);
    return num1;
  }
    else {
      console.log(`The max number of ${num1} and ${num2} is ${num2}`);
      return num2
    }
}

maxOfTwoNumbers(10, 50);
maxOfTwoNumbers(100, 40);


// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const  maxOfThree = function (num1, num2, num3){
  if(num1>num2 && num1>num3) {
    console.log(`The max number of 3 is ${num1}`);

    return num1;
  }
    else if(num2>num1 && num2>num3) {
      console.log(`The max number of 3 is ${num2}`);

    return num2;
  }

  else if(num3>num1 && num3>num1) {
    console.log(`The max number of 3 is ${num2}`);

    return num3;
  }
}
maxOfThree(800,200,100);


// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const VowelorNot  = function (letter){
  if (letter == 'A' || letter == 'E' || letter == 'I' || letter == 'O' || letter == 'U' || letter == 'Y' ){
    return true;
  }
  else {
    return false;
  }

}

console.log(VowelorNot ('I'));
console.log(VowelorNot ('B'));
console.log(VowelorNot ('Y'));
console.log(VowelorNot ('U'));


// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const sumArray = function(arr) {
const sum = arr.reduce((a,b) => a + b, 0)
// return sum
console.log(`${sum}`);
}

sumArray([1, 2, 3, 4]);

//option2
// const SumArray2 = function(arr2) {
//   for (
//     var
//       index = 0,              // The iterator
//       length = arr2.length,  // Cache the array length
//       sum1 = 0;                // The total amount
//       index < length;         // The "for"-loop condition
//       sum1 += arr2[index++]   // Add number on each iteration
//   );
//   return sum1
//   console.log(`${sum1}`);
// }
//
// SumArray2([1, 2, 3, 4]);

// multiply

const multiplyArray = function(arr1) {
  const mult = arr1.reduce((a,b) => a * b, 1)
  // return sum
  console.log(`${mult}`);
  }

  multiplyArray([2, 2, 3, 4]);

// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function (word){
  const splitString = word.split("");
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join("");
console.log(`${joinArray}`);
}

reverseString(`jag testar`);





// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

const findLongestWord = function (arr){
  let lword = [];
    for (let i = 0; i < arr.length; i++) {
      if (lword.length < arr[i].length){
        lword = arr[i]
      }
  }
  console.log(lword.length);

}

findLongestWord( ['I', 'love', 'snowboarding'])


// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

const filterLongWords = function (arr, number){
  let lWord = [];
    for (let i = 0; i < arr.length; i++) {
      if ( arr[i].length > number) {
        lWord.push(arr[i])
      }
    }
console.log(lWord);
}

filterLongWords( ['I', 'love', 'snowboarding'], 3)
