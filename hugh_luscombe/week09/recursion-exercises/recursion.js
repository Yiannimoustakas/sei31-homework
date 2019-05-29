// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

// function findMax(array){
//   // This function returns the largest number in a given array.
//   if (array.length === 1) {
//     return array[0]
//   }
//   if (array[0] > array[array.length - 1]) {
//     array.pop()
//   } else {
//     array.shift()
//   }
//   return finMax(array);
// }

function findMax(array, index=1, max=-Infinity){
  // base case
  // move closer to the base case

  if (!max && array.length > 0) {
    max = array[0]; // starting point
  }
  //stop when we reach the end of the array
  if (index >= array.length) {
    return max;
  } else {
    if (array[index] > max) {
      max = array[index];
    }

    return findMax(array, index+1, max);
  }
}

function factorial(n){
  // This function returns the factorial of a given number.
  if (num <= 1) {
    return 1;
  } else {
    return (num * factorial(num - 1));
  }
}

function fibonacci(num) {
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
  if (num <= 2) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

function fibonacci (n, a=1, b=1) {
  if (n <= 2) {
    return b;
  } else {
    return fibonacci(n-1, b, a+b)
  }
}
//memoization solution
function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}


function coinFlips(toses){
  // This function returns an array of all possible outcomes from flipping a coin N times.
  // Input type: Integer
  // For example, coinFlips(2) would return the following:
  // ["HH", "HT", "TH", "TT"]
  // H stands for Heads and T stands for tails
  // Represent the two outcomes of each flip as "H" or "T"
  const combinations = [];
  const flip = function (soFar="") {
    if (soFar.length === tosses) {
      combinations.push(soFar); // base case
    } else {
      // recursive section
      flip(soFar + 'H');
      flip(soFar + 'T');
    }
  };
  flip();
  return combinations;
}

function letterCombinations(){
  // This function returns an array of all combinations of the given letters
  // Input type: Array of single characters
  // For example, letterCombinations(["a","b","c"]) would return the following:
  // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

module.exports = {
    findMax,
    factorial,
    fibonacci
    coinFlips,
    letterCombinations
}
