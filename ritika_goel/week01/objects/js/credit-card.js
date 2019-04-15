// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number

// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is

//Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

const validateCreditCard = function ( num ) {
  let validity = false;
  let errorMsg = "";
  let numberInput = num.replace(/-/g, "");
  if ( numberInput.length === 16 )
  {
    if ( !isNaN( numberInput ) ) {
      let digitsArray = [];
      for (let i = 0; i < numberInput.length; i++ ) {
        digitsArray.push(Number(numberInput.charAt(i)));
      }
      const firstDigit = digitsArray[0];
      let luhnDigits = digitsArray;
      for (let j = 1; j < digitsArray.length; j++)
      {
        if ( digitsArray[j] !== firstDigit ){
          if ( digitsArray[15] % 2 == 0 ) {
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            let sum = digitsArray.reduce(reducer);
            if( sum > 16 ) {
              //luhn validation check
              let luhnArr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
              let counter = 0;
          		let incNum;
          		let odd = false;
          		if ( numberInput.length == 0)
          			return false;
          		for (var i = numberInput.length-1; i >= 0; --i)
          		{
          			incNum = parseInt(numberInput.charAt(i), 10);
          			counter += (odd = !odd)? incNum : luhnArr[incNum];
          		}
          		if (counter%10 == 0) {
                validity = true;
              }
              else {
                errorMsg = "failed_luhn_validation";
              }
              break;
            } else {
              errorMsg = "sum_less_than_16";
            }
          } else {
            errorMsg = "odd_final_number";
          }
        } else {
          errorMsg = "all_same_numbers";
        }
      }
    } else {
      errorMsg = "invalid_characters";
    }
  } else {
    errorMsg = "wrong_length";
  }
  const result = {
    valid: validity,
    number: num
  }
  if ( !validity ) {
    result.error = errorMsg;
  }
  console.log(result);
}

validateCreditCard('1234-5678-9012-3452');
validateCreditCard('9999-9999-8888-0000');
validateCreditCard('6666-6666-6666-1666');
validateCreditCard('a923-3211-9c01-1112');
validateCreditCard('4444-4444-4444-4444');
validateCreditCard('1111-1111-1111-1110');
validateCreditCard('6666-6666-6666-6661');
validateCreditCard('1234567812345670');
