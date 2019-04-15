// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16

const validateCreditCard = function(cC){
    if ((cC.toString().length === 16) &&
        (cC.toString().charAt(0)*16 !== cC) &&
        (typeof cC === 'number') &&
        (cC% 2 === 0) &&
        (cC.toString().split('').reduce((a, b) => a + b) > 16)
			 ){
    console.log(true);
  } else {
    console.log(false);
  }
};
