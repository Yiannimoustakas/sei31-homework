
// Array and Functions Bonus Material

function maxOfTwoNumbers(a, b){
  if(a > b){
    return a
  }else {
    return b
  }

}

// Define a function maxOfTwoNumbers that takes two numbers as arguments and 
// returns the largest of them. Use the if-then-else construct available in Javascript.
//  You'll have to remember your pre-work, or do some googling to figure this out.

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
function maxOfThree(a, b, c){
  if(a > b && a > c){
    return a
  }else if( b > a && b > c){
    return b;
  }else if (c > a && c > b){
    return c;
  }
}


// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, 
// false otherwise.
function takesChar(arg){
  let result = arg[0];
  let vowel = 'weyuioa'
  if(vowel.includes(result)){
    return true
  }else{
    return false
  }
}

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) a
// ll the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, 
// and multiplyArray([1,2,3,4]) should return 24.
const sumArray = function (number){
  let result = 0
  for(let i=0; i < number.length; i ++){
    result = result + number[i]

  }
  return result; 

}

const multiplyArray = function(number){
  let result =1; 
  for( let i=0; i < number.length; i++){
    result = result * number[i]
  }
  return result

}
console.log(sumArray([2, 3, 3, 4, 5])); 
console.log(multiplyArray([3, 2, 3, 4, 4]));





// Bonus
// Define a function reverseString that computes the reversal of a string. For example, 
// reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function(arg){
  let result = arg.split("")
  return result = result.reverse().join("")
}
console.log(reverseString("Apple and Mac"));
// Write a function findLongestWord that takes an array of words and returns 
// the length of the longest one.

const findLongestWord = function (arr){
  let result =""
  for ( let i= 0; i < arr.length; i ++){
    if(arr[i].length > result.length){
      result = arr[i]
    }
  }
 
  return result; 

}
console.log(findLongestWord(['apply', 'microsoft', 'general assembly']));

// Write a function filterLongWords that takes an array of words and 
// an number i and returns the array of words that are longer than i.


const filterLongWords = function(arr, number){
  let newArray = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length > number){
      newArray.push(arr[i])
    }
  }
  return newArray;

}

console.log(filterLongWords(['apple', 'mac', 'keyboard', 'on'], 3));




// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word 
// (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
// When it's done iterating, it should log the current guessed letters ('F__') 
// and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, 
// it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with 
// various letters to check that your program works.


let arrayLetters = ['a', 'p', 'p', 'l', 'e']
let arrayWords = ['_', '_', '_', '_', '_']
let loseCounter= 6;
let totalRewards = 0;
const guessLetter = function(gessedLetter){
  let counter = 0
  let rewardCounter = 0
   
   if(arrayWords.includes(gessedLetter)){
     console.log(`You have already guessed the letter`);
     return
   }else{
    for(let i = 0; i < arrayLetters.length; i++){
      if(gessedLetter === arrayLetters[i]){
        arrayWords[i] = gessedLetter;
        rewardCounter = rewardCounter + 1;     
    }    
  }

   }

   
  if(!arrayLetters.includes(gessedLetter)){
    rewardCounter = rewardCounter -1
    loseCounter = loseCounter -1
    if(loseCounter === 0){
      console.log(`Hangman here! You used your 6 chances, now time to die.`);
      arrayWords = ['_', '_', '_', '_', '_'];
      loseCounter = 6;
      totalRewards = 0; 
      return
    } 

  }
  for(let i = 0; i < arrayWords.length; i++){
    if(arrayWords[i] === '_'){
      counter = counter +1
    }
  }
  
  console.log(`The current guessed letter is ${arrayWords.join("")}`); 
  if(counter ===0){
    console.log(`Congratulation! You guess the whole lettres`);
  }else{console.log(`${counter} more to be guessed!`);}

  let reward = Math.round(Math.random() * 10) * rewardCounter; 
  totalRewards = totalRewards + reward; 
console.log(`You earn $${reward} for this turn.
Your total reward is $${totalRewards}`);


}

guessLetter('a')





// Bonus: Make it more like Wheel of Fortune:

// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter 
// (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.
// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. 
// If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to 
// that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), 
// inform the user that they lost and show a hangman on the log.