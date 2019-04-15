// Geometry Function Lab

// Part 1, rectangle

const rectangleA = {
  length: 4,
  width: 4
};

const isSquare = function (length, breadth) {
  if (length===breadth) {
    const answer = `The rectangle is a square.`;
      return answer;
  }
  else {
    const answer = `The rectangleA is not a square.`;
      return answer;
  }
};

console.log(isSquare (rectangleA.length, rectangleA.width));


const areaRectangle = function (length, breadth) {
  const requiredArea = length * breadth;
  return requiredArea;
};

console.log(areaRectangle(rectangleA.length, rectangleA.width));


const perimeterRectangle = function (length, breadth) {
    const requiredPerimeter = (2 * (length + breadth));
      return requiredPerimeter;
};

console.log(perimeterRectangle(rectangleA.length, rectangleA.width));

// Part 2, Triangle

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const isEquilateral = function (sideOne, sideTwo, sideThree) {
    if (sideOne===sideTwo && sideTwo===sideThree && sideThree===sideOne) {
      const result = `The triangle is an equilateral traingle`;
      return result;
    }
    else {
      const result = `The triangle is not an equilateral traingle`;
      return result;
    }
};

console.log(isEquilateral (triangleA.sideA, triangleA.sideB, triangleA.sideC));


const isIsosceles = function (sideOne, sideTwo, sideThree) {
    if (sideOne===sideTwo || sideTwo===sideThree || sideThree===sideOne) {
      const result = `The triangle is an isosceles traingle`;
      return result;
    }
    else {
      const result = `The triangle is not an isosceles traingle`;
      return result;
    }
};

console.log(isIsosceles (triangleA.sideA, triangleA.sideB, triangleA.sideC));

const areaTriangle = function (sideOne, sideTwo, sideThree) {
  const partialPerimeter = ((sideOne+sideTwo+sideThree) / 2);
  const initialArea = (partialPerimeter * (partialPerimeter-sideOne) * (partialPerimeter-sideTwo) * (partialPerimeter-sideThree));
    const finalArea = Math.round(Math.sqrt(initialArea));
    return finalArea;
  };

  console.log(areaTriangle(triangleA.sideA, triangleA.sideB, triangleA.sideC));


const isObtuse = function (sideOne, sideTwo, sideThree) {
  const longestSide = [sideOne, sideTwo, sideThree];
  longestSide.sort(function(a, b){return a - b});
  const hypoSide = Math.pow(longestSide[2],2);
  const otherSideOne = Math.pow(longestSide[0],2);
  const otherSideTwo = Math.pow(longestSide[1],2);
  const otherSideTotal = otherSideOne + otherSideTwo;
    if (hypoSide > otherSideTotal) {
      const result = `The triangle is obtuse.`;
        return result;
    } else {
      const result = `The triangle is not obtuse.`;
       return result;
    }
};

console.log(isObtuse(triangleA.sideA, triangleA.sideB, triangleA.sideC));

//The Cash Register

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function (cart) {
  const priceList = Object.values(cart);
  console.log(priceList);
  let priceListTotal =[];
  let sum = 0;
    for (let i=0; i<priceList.length; i++) {
      priceListTotal.push(parseFloat(priceList[i]));
        sum += priceListTotal[i];
    }
    console.log(priceListTotal);
    return sum;
};

console.log(`The total price of the Shopping Cart is ${cashRegister(cartForParty)}`);


// Credit Card Validation

const sameDigits = function (input) {
  for (let i=1; i<input.length; i++) {
    if (input[i]!==input[0]) {
      return false;
    }
  }
    return true;
};

const sumOfDigits = function (input) {

  let inputArray = [];
  let total = 0;
  for (i=0; i<input.length; i++) {
    inputArray.push(parseFloat(input[i]));
    total += inputArray[i];
  }
  return total;
};

const allDigits = function (input) {
   return !isNaN(input);
};

const validateCreditCard = function (input) {
    while (input.includes('-')) {
      input = input.replace('-', '');
    };
    if (input.length===16 && (input[input.length-1])%2===0 && sumOfDigits(input)>16 && sameDigits(input)===false && allDigits(input)===true) {
      return true;
    }
    return false;
};

const errorMessage = function (input) {
  while (input.includes('-')) {
    input = input.replace('-', '');
  };
  if (input.length!==16) {
    const message = 'Wrong length.'
    return message;
  }
  if (input[input.length-1]%2!==0) {
    const message = 'Last digit is odd.'
    return message;
  }
  if (sumOfDigits(input)<16) {
    const message = 'Wrong summation.'
    return message;
  }
  if (sameDigits(input)!==false) {
    const message = 'All digits same.'
    return message;
  }
  if (allDigits(input)!==true) {
    const message = 'Invalid number.'
    return message;
  }
  const message = 'No error.'
  return message;
};

const creditCardDetails = function (input) {
    const details = {
      valid: validateCreditCard(input),
      input: input,
      error: errorMessage(input)
    };
  return details;
};

console.log(`Credit card valid: ${validateCreditCard('9999-9999-8888-0000')}`);
console.log(`Credit card valid: ${validateCreditCard('6666-6666-6666-1666')}`);
console.log(`Credit card valid: ${validateCreditCard('a923-3211-9c01-1112')}`);
console.log(`Credit card valid: ${validateCreditCard('4444-4444-4444-4444')}`);
console.log(`Credit card valid: ${validateCreditCard('1111-1111-1111-1110')}`);
console.log(`Credit card valid: ${validateCreditCard('6666-6666-6666-6661')}`);
console.log(`Credit card valid: ${validateCreditCard('9999-9999-9999-9999')}`);

console.log(creditCardDetails('9999-9999-8888-0000'));
console.log(creditCardDetails('6666-6666-6666-1666'));
console.log(creditCardDetails('a923-3211-9c01-1112'));
console.log(creditCardDetails('4444-4444-4444-4444'));
console.log(creditCardDetails('6666-6666-6666-6661'));
console.log(creditCardDetails('1111-1111-1111-1110'));
console.log(creditCardDetails('9999-9999-9999-9999'));


// Bank Java
const bankJava = [
    {
      accountName: 'Rashida Bengali',
      accountBalance: 6000
  },

{
      accountName: 'Huzaifa Shakir',
      accountBalance: 10000
  },

  {
      accountName: 'Hazel Dean',
      accountBalance: 7000
  }
];

// console.log(bankJava);
// index = a.findIndex(x => x.prop2 ==="yutu");
// console.log(bankJava.findIndex(bankJava => bankJava.accountName === 'Rashida Bengali'));

// Bank Java details
const printBankDetails = function () {
  console.log(JSON.parse(JSON.stringify(bankJava)));
};

//Total Funds in the Bank
const bankBalanceTotal = function (bankName) {
  //const accountFinder = bank.findIndex(bank => bank.accountNumber === number);
  let bankBalance = 0;
  for (let i=0; i<bankName.length; i++) {
    bankBalance += bankName[i].accountBalance;
  }
  return bankBalance;
};


// Add New Account
const addAccount = function (name,amount) {
 const accountNew = {
   accountName: name,
   accountBalance: amount
 };
 bankJava.push(accountNew);
};


// Deposit Money
const accountBalanceAfterDeposit = function (name,depositAmount) {
  const accountFinder = bankJava.findIndex(bankJava => bankJava.accountName === name);
  bankJava[accountFinder].accountBalance += depositAmount;
  return bankJava[accountFinder].accountBalance;
};


// Withdraw Money
const accountBalanceAfterWithdrawal = function (name,withdrawAmount) {
  const accountFinder = bankJava.findIndex(bankJava => bankJava.accountName === name);
    if (withdrawAmount < bankJava[accountFinder].accountBalance) {
      bankJava[accountFinder].accountBalance -= withdrawAmount;
      return bankJava[accountFinder].accountBalance;
    } else {
      console.log(`Withdraw amount is greater than the current account balance.`);
      return 'Insufficient funds!';
    }
};


//Transfer Money
const bankTransfer = function (nameOne,nameTwo,transferAmount) {
  const accountFinderOne = bankJava.findIndex(bankJava => bankJava.accountName === nameOne);
  if (transferAmount < bankJava[accountFinderOne].accountBalance) {
    bankJava[accountFinderOne].accountBalance -= transferAmount;
    const accountFinderTwo = bankJava.findIndex(bankJava => bankJava.accountName === nameTwo);
      bankJava[accountFinderTwo].accountBalance += transferAmount;
  } else {
    return ('Not sufficient funds to make the transfer');
  }
};


// View Account details
const acccountDetails = function (name) {
  const accountFinder = bankJava.findIndex(bankJava => bankJava.accountName === name);
  const viewAccountDetails = bankJava[accountFinder];
  return viewAccountDetails;
};


// console.log(bankBalanceTotal(bankJava));
// addAccount ('Daniel Menis', 500);
// console.log(accountBalanceAfterDeposit ('Rashida Bengali',3000));
// console.log(accountBalanceAfterWithdrawal ('Huzaifa Shakir',5000));
// console.log(bankBalanceTotal(bankJava));
// bankTransfer('Rashida Bengali','Hazel Dean',700);


//Java Bank is a newbie in the Banking sector. The details of their current clients are below:
printBankDetails();
//Java Bank has the following funds so far:
console.log(bankBalanceTotal(bankJava));
//The inauguration of Java Bank's first Branch in Sydney CBD was done by one of their valued clients' Rashida Bengali as she was the first one to create an account in their Bank.
//Rashida brought a friend named Daniel Menis along in the Inauguration Ceremony.
//Daniel being impressed by Java Bank's structure and client facilities decided to open an account in the Bank.
addAccount ('Daniel Menis', 500);
//Java Bank seemed to be gradually growing and the updated client details were as follows:
printBankDetails();
//Now the bank had the following funds:
console.log(bankBalanceTotal(bankJava));
//Rashida remembered that she owed AUD700 to her colleague Hazel Dean who aslo had an account in Java Bank.
//She asked one of the employees at the Bank to help her out with transfer procedures.
//The employee effeciently explained her the transfer process and requirements and Rashida was able to make the transfer smoothly into Hazel's account.
bankTransfer('Rashida Bengali','Hazel Dean',700);
//Now, Rashida wished to view the current details of her account. She could do so by entering her name in the system.
console.log(acccountDetails('Rashida Bengali'));
//The updated client details of Java Bank were as follows:
printBankDetails();
//Now the bank had the following funds:
console.log(bankBalanceTotal(bankJava));
//Another valued client Huzaifa Shakir of Java Bank wanted to withdraw some amount. So he entered his name and the amount he wanted to withdraw in the system.
console.log(accountBalanceAfterWithdrawal ('Huzaifa Shakir',5000));
//Now, Huzaifa wished to view the current details of his account. He could do so by entering his name in the system.
console.log(acccountDetails('Huzaifa Shakir'));
//The updated client details of Java Bank were as follows:
printBankDetails();
//Now the bank had the following funds:
console.log(bankBalanceTotal(bankJava));
//The new client Daniel also wanted some cash in hand so he decided to withdraw some amount.
//He too followed the same withdrawal procedure ans Huzaifa did.
console.log(accountBalanceAfterWithdrawal ('Daniel Menis',1000));
//However, the system showed him a message saying is withdrawal amount was greater than the account balance. Hence, he could not withdrew cash.
//Rashida had won AUD3000 in a lottery so she deposited the same amount in her account by following the deposit method.
console.log(accountBalanceAfterDeposit ('Rashida Bengali',3000));
//Now, Rashida wished to view the current details of her account. She could do so by entering her name in the system.
console.log(acccountDetails('Rashida Bengali'));
//The updated client details of Java Bank were as follows:
printBankDetails();
//Now the bank had the following funds:
console.log(bankBalanceTotal(bankJava));
