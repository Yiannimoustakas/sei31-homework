console.log(
  "%c---Homework: Credit Card Validation---",
  "color: blue; font-size: large; background-color: yellow;"
);


/* Credit Card Validation
You're starting your own credit card business.
You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
The following credit card numbers are valid:

9999-9999-8888-0000
6666-6666-6666-1666
The following credit card numbers are invalid:

a923-3211-9c01-1112 invalid characters
4444-4444-4444-4444 only one type of number
1111-1111-1111-1110 sum less than 16
6666-6666-6666-6661 odd final number
Example
validateCreditCard('9999-9999-8888-0000'); // Returns: true
Hint: Remove the dashed from the input string before checking if the input credit card number is valid.

Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is

{ valid: true, number: 'a923-3211-9c01-1112' }
{ valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
*/

const validateCreditCard = function(number) {
  // > '1111-1111-1111-1110'
  const newArray = number.split("-"); //Remove the dashed from the input string
  // > ['1111', '1111', '1111', '1110']
  // > ['1', '1', ... '0']

  const allEqual = newArray.every(v => v === newArray[0]);
  if (allEqual === true) {
    return { valid: false, error: "only one type of number", number: number };;
  }

  //console.log(newArray);
  let result = 0;
  for (let i = 0; i < newArray.length; i++) {
    if (Number.isNaN(Number(newArray[i])) === true) {
      return { valid: false, error: "invalid characters", number: number };
    }

    if (newArray[newArray.length - 1] % 2 !== 0) {
      return { valid: false, error: "odd final number", number: number };
    }

    // newArray[i] -> '1111'
    // Number(newArray[i]) -> 1111
    // 1111
    // [1, 1, 1, 1]

    const arrayOfNumbers = newArray[i].split('')
    let resultNumbers = 0
    for(let y = 0; y < arrayOfNumbers.length; y++) {
      const number = Number(arrayOfNumbers[y]);
      resultNumbers = resultNumbers + number;
    }

    result = resultNumbers + result;
  }

  if (result < 16) {
    return { valid: false, error: "sum less than 16", number: number };
  }
  return { valid: true, number: number };
};

console.log(validateCreditCard("a923-3211-9c01-1112")); // invalid characters
console.log(validateCreditCard("4444-4444-4444-4444")); //only one type of number
console.log(validateCreditCard("1111-1111-1111-1110")); //sum less than 16
console.log(validateCreditCard("6666-6666-6666-6661")); //odd final number
console.log(validateCreditCard('6666-6666-6666-1666')); //correct
