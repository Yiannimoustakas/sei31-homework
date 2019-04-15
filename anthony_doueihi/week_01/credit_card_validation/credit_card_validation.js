// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate
// credit cards with a simple function called validateCreditCard that returns true or false.
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
// Example
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.
//
// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules,
// and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

const lugnAlgorithm = function(num){
  const strArray = num.split('');
  let numArray = [];
  for(let i = 0; i < strArray.length; i++){
    numArray[i] = Number(strArray[i]);
  }

  let sum = 0;

  for(let i = 0; i < numArray.length; i++){
    if( i % 2 === 0 ){
      sum += numArray[i];
    }else{
      let doubleNum = numArray[i] * 2;
      if( doubleNum < 10 ){
        sum += doubleNum;
      }else{
        doubleStr = doubleNum.toString(10);
        const splitStr = doubleStr.split("");
        sum += Number(splitStr[0]) + Number(splitStr[1]);
      }
    }
  }

  if (sum % 10 === 0){
    return true;
  }else{
    return false;
  }
}


const validateCreditCard = function(creditNum){
  let returnObj = {
    valid : true,
    number : creditNum,
  }

  if(typeof creditNum !== "string" || creditNum.length !== 19 ||
    creditNum[4] !== "-" || creditNum[9] !== "-" || creditNum[14] !== "-"){
    console.log("Not a valid credit card numbers. xxxx-xxxx-xxxx-xxxx")
    return;
    }

  const cardNum = creditNum.split('-').reduce(function(acc, val) {
    return acc + val;
  });

  let sameNumTest = true;
  let sum = 0;

  for(let i = 0; i < cardNum.length; i++){
    if (cardNum[i] !== cardNum[i-1]){
      sameNumTest = false;
    }
    sum += Number(cardNum[i]);
  }

  if(isNaN(cardNum)){
    returnObj.valid = false;
    if(return.error !== undefined){
      returnObj.error += "Not All Numbers. "
    }else{
      eturnObj.error = "Not All Numbers. "
    }
  }

  if(cardNum[cardNum.length - 1] % 2 !== 0){
    returnObj.valid = false;
    if(return.error !== undefined){
      returnObj.error += "Last Number is not Even. ";
    }else{
      eturnObj.error = "Last Number is not Even. ";
    }
  }

  if (sameNumTest){
    returnObj.valid = false;
    if(return.error !== undefined){
      returnObj.error += "All Numbers are the Same. "
    }else{
      eturnObj.error = "All Numbers are the Same. "
    }
  }

  if(sum < 16){
    returnObj.valid = false;
    if(return.error !== undefined){
      returnObj.error += "Sum of Numbers too Low. ";
    }else{
      eturnObj.error = "Sum of Numbers too Low. ";
    }
  }

  if(!lugnAlgorithm(cardNum)){
    returnObj.valid = false;
    if(return.error !== undefined){
      returnObj.error += "Lugn Algorithm Test Failed. ";
    }else{
      eturnObj.error = "Lugn Algorithm Test Failed. ";
    }
  }

  return returnObj;
}

console.log(validateCreditCard("1111-1111-1441-1110"));
console.log(validateCreditCard("3917-1861-1341-1450"));
console.log(validateCreditCard("1231-1871-14d1-1678"));
console.log(validateCreditCard("1341-1641-1561-1164"));
console.log(validateCreditCard("1111-1111-1111-1000"));
