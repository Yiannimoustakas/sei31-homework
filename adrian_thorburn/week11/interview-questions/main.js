// Write a function to reverse a string.
const reverseStr = function(str) {
  console.log(str.split('').reverse().join(''));
}
reverseStr("this is a string")

// Write function to compute Nth fibonacci number:
const fibonacci = function(n) {
  if (n===0 || n ===1) {
    return 1
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}
console.log(fibonacci(15));


// Print out the grade-school multiplication table up to 12x12
const timesTables = function(n=1) {
  if (n===13) {
    return
  }
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  for (let i = 0; i < arr.length; i++) {
    console.log(n * arr[i]);
  }
  timesTables(n+1)
}
timesTables()

// Write a function that sums up integers from a text file, one int per line.



// Write function to print the odd numbers from 1 to 99.
const odd = function(n = 1) {
  if (n > 100) {
    return
  }
  console.log(n);
  odd(n+2)
}
odd();

// Find the largest int value in an int array.
const highestNum = function(arr) {
  arr.sort(function(a, b) {
    return a - b
  });
  console.log(arr.pop());
}

highestNum([4,2,3,4,5,9])
// Format an RGB value (three 1-byte numbers) as a 6-digit hexadecimal string.


// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5

const fizzbuzz = function() {
  for (let i = 1; i < 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log(i, 'fizzbuzz');
    } else if (i % 5 === 0) {
      console.log(i, 'buzz');
    } else if (i % 3 === 0) {
      console.log(i, 'fizz');
    } else {
      console.log(i);
    }
  }
}
fizzbuzz()


// Write a function (in JS) to console.log the numbers from 1 to 20 with a one second delay between each.

const oneSec = function(n=1) {
  console.log(n);
  if( n === 20 ) {
    return
  } else {
    setTimeout(() => oneSec(n+1),1000);
  }
}
