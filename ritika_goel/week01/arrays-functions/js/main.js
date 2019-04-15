// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function (num1, num2) {
  if( num1 > num2 ) {
    return num1;
  } else {
    return num2;
  }
};

console.log(`The largest number out of 2 and 5 is ${maxOfTwoNumbers(2, 5)}`);
console.log(`The largest number out of 10 and 0 is ${maxOfTwoNumbers(10, 0)}`);
console.log(`The largest number out of 86 and 57 is ${maxOfTwoNumbers(86, 57)}`);


// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function (num1, num2, num3) {
let greatest;
  if( num1 > num2 ) {
    greatest = num1;
  } else {
    greatest = num2;
  }
  if( num3 > greatest ) {
    greatest = num3;
  }
  return greatest;
};

console.log(`The largest number out of 2, 3 and 5 is ${maxOfThree(2, 3, 5)}`);
console.log(`The largest number out of 50, 70 and 60 is ${maxOfThree(50, 70, 60)}`);
console.log(`The largest number out of 45, 36 and 40 is ${maxOfThree(45, 36, 40)}`);


// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const vowelFunc = function ( character ) {
  const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowelsArray.length; i++) {
    if ( character === vowelsArray[i] ) {
      return true;
    }
  }
  return false;
};

console.log(vowelFunc('a'));
console.log(vowelFunc('d'));
console.log(vowelFunc('e'));

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
const sumArray = function ( arrayInput )
{
  let result = 0;
  for ( var i = 0; i < arrayInput.length; i++) {
    result += arrayInput[i];
  }
  return result;
};

const multiplyArray = function ( arrayInput )
{
  let result = 1;
  for ( var i = 0; i < arrayInput.length; i++) {
    result *= arrayInput[i];
  }
  return result;
};

console.log(`Multiplying 2, 5, 8, 10 gives us ${ multiplyArray([2, 5, 8, 10]) } `);
console.log(`Multiplying 10, 20, 30 gives us ${ multiplyArray([10, 20, 30]) } `);
console.log(`Multiplying 2, 2 gives us ${ multiplyArray([2, 2]) } `);

console.log(`Adding 2, 5, 8, 10 gives us ${ sumArray([2, 5, 8, 10]) } `);
console.log(`Adding 10, 20, 30 gives us ${ sumArray([10, 20, 30]) } `);
console.log(`Adding 2, 2 gives us ${ sumArray([2, 2]) } `);

// Bonus
//
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
const reverseString = function ( stringInput ) {
  let reversed = '';
  const size = stringInput.length -1;
  for( var i = size; i >= 0; i-- ) {
    reversed += stringInput[i];
  }
  return reversed;
}

console.log(`'Hello Everyone' when reversed gives: '${ reverseString('Hello Everyone') }'`);
console.log(`'What a Waste!' when reversed gives: '${ reverseString('What a Waste!') }'`);
console.log(`'Well Nevermind' when reversed gives: '${ reverseString('Well Nevermind') }'`);

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
const findLongestWord = function ( arrayInput ) {
  let longest = 0;
  for (var i = 0; i < arrayInput.length; i++) {
    if( arrayInput[i].length > longest ) {
      longest = arrayInput[i].length;
    }
  }
  return longest;
}

console.log(`The longest word in the array is ${ findLongestWord(['this', 'looks', 'amazing']) } characters long!`);
console.log(`The longest word in the array is ${ findLongestWord(['nothing', 'is', 'better']) } characters long!`);
console.log(`The longest word in the array is ${ findLongestWord(['it', 'horrifies', 'me']) } characters long!`);

// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
const filterLongWords = function ( arrayInput, i ) {
  let longer = [];
  for ( var j = 0; j < arrayInput.length; j++ ) {
    if ( arrayInput[j].length > i )
    {
      longer.push( arrayInput[j] );
    }
  }
  return longer;
}

console.log(`Words longer than 3 characters are '${ filterLongWords(['i', 'think', 'this', 'looks', 'amazing'], 3) }'.`);
console.log(`Words longer than 2 characters are '${ filterLongWords(['who', 'knows', 'what', 'this', 'shit', 'does'], 2) }'.`);
console.log(`Words longer than 5 characters are '${ filterLongWords(['someone', 'please', 'get', 'me', 'out', 'of', 'here'], 5) }'.`);
