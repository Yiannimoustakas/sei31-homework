//Credit Card Validation

const creditCardValidator = function ( cc ){
  let cardNumbers = cc.split('-');
  cardNumbers = cardNumbers.reduce((string, elements) => string + elements ) //concatinate the chars back together
  cardNumbers = cardNumbers.split('') // split them again 
  
  
  // check to make sure numbers aren't all the same
  const sameNumbers = new Set(cardNumbers).size > 1;
  if (!sameNumbers){
    return false;
  };

  //make sure there are 16 digits
  if (cardNumbers.length !== 16){
    return false;
  };
  


  //make sure all characters are numbers;
  const numbers = cardNumbers.filter(l => isNaN(l));
  if (numbers.length > 0){
    return false;
  };

  //check final number is even
  const lastNumIsEven = cardNumbers[cardNumbers.length - 1] % 2 === 0;
  if (!lastNumIsEven){
    return false;
  };

  // check sum of all numbers is larger than 16
  const sumOfNums = cardNumbers.reduce((sum, elements) => sum + Number(elements),0);
  if (sumOfNums < 16){
    return false;
  };
  
  return true;
};

console.log(creditCardValidator('9999-9999-8888-0000'))
console.log(creditCardValidator('A923-3211-9C01-1112'))
console.log(creditCardValidator('4444-4444-4444-4444'))
console.log(creditCardValidator('1111-1111-1111-1110'))
console.log(creditCardValidator('6666-6666-6666-6661'))

