/*Credit Card Validation
You're starting your own credit card business.
You've come up with a new way to validate credit cards with a simple function
called validateCreditCard that returns true or false.

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
Hint: Remove the dashed from the input string before checking if the input
credit card number is valid.

Bonus: Return an object indicating whether the credit card is valid, and if not,
what the error is

{ valid: true, number: 'a923-3211-9c01-1112' }
{ valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
Double Bonus: Make your credit card scheme even more advanced! What are the rules,
and what are some numbers that pass or fail? Ideas: check expiration date!
Check out the Luhn Algorithm for inspiration.*/


const validateCreditCard = function (creditCard){
  console.log(creditCard);
  console.log(creditCard.toString().length);
  //let numbers = [0-9];
  //if (creditCard.match(numbers)){
if (isNaN(creditCard)){ //code to check there is no alphabet in it.
  console.log(`it is not a number.`);
  return false;
}
    if (creditCard.toString().length > 16 && creditCard.toString().length < 16){ // code to check there are only 16 digits.
      return 'false';

}
let lastDigit = creditCard.toString().split('').pop(); //code to find out the last digit.
console.log(lastDigit);
      if (lastDigit % 2 === 1){
        return 'false';
      }
      //code for to find out the sum of all 16 digits
      let total = 0;
      let array = creditCard.toString().split('');
      console.log(array);
      for ( let i = 0; i < array.length; i++){
        total += array[i];
        console.log(total);
        if (total < 16){
          return 'false';
        }
      }
        //code for repetitive digits
        let repeatedDigit = function (str){
          const result = [];
          const strArr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);

          if (strArr != null) {
            strArr.forEach((elem) => {
              result.push(elem[0]);
    });
  }
  if( result.length === 1 ) {
      return true;
}

    return false;

}



};


console.log(validateCreditCard(6666666666661666));





//codo for 16 digits
//only digits
//alteast two different digit. code for repetitive
//code for modulous
//code for total sum should be > 16
