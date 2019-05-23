// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr){
    // This function returns the largest number in a given array.
  if(arr.length === 1){
    return arr[0]
  }
  if (arr[0] > arr[arr.length - 1]) {
    arr.pop()
  } else {
    arr.shift()
  }
  return findMax(arr);
}

function factorial(n){
  // This function returns the factorial of a given number.
  // return (n <= 1) ? 1 : n * factorial(n-1);
  if (n === 0){
    return 1
  } else {
    return factorial(n - 1) * n
  }
}

// O(2^N)
function fibonacci(n, a=1, b=1){
  return ( n <= 2 ) ? b : fibonacci(n-1, b, a+b);

  // This function returns the Nth number in the fibonacci sequence.
  // https://en.wikipedia.org/wiki/Fibonacci_number
  // For this function, the first two fibonacci numbers are 1 and 1
  // if (n===1 || n === 2) {
  //   return 1
  // } else {
  //   return fibonacci(n - 1) + fibonacci(n - 2)
  // }
}

// This function returns an array of all possible outcomes from flipping a coin N times.
// Input type: Integer
// For example, coinFlips(2) would return the following:
// ["HH", "HT", "TH", "TT"]
// H stands for Heads and T stands for tails
// Represent the two outcomes of each flip as "H" or "T"

function coinFlips(tosses){
  const combinations = [];

  //define a recursive function
  const flip = function(soFar="") {
    if (soFar.length === tosses){
      combinations.push(soFar); // base case
    } else {
      // recursive
      flip(soFar + 'H')
      flip(soFar + 'T')
    }
  };

  //start recursing
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
    fibonacci,
    coinFlips,
    letterCombinations
}
