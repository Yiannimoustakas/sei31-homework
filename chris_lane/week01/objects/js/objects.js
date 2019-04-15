////////////////////////////
// Geometry Function Lab
////////////////////////////

/*
Part 1, Rectangle
Given the following a rectangle object like the one below, write the following
functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
const rectangleA = {
  length: 4,
  width: 4
};
*/

const rectangleA = {
  length: 4,
  width: 4
};

// isSquare

const isSquare = rectangle => {
  const { length, width } = rectangle;
  return length === width;
};

console.log("isSquare", isSquare(rectangleA));

// area

const area = rectangle => {
  const { length, width } = rectangle;
  return length * width;
};

console.log("area", area(rectangleA));

// perimeter

const perimeter = rectangle => {
  const { length, width } = rectangle;
  return 2 * (length + width);
};

console.log("perimeter", perimeter(rectangleA));

/*
Part 2, Triangle
Given the following a triangle object like the one below, write the following
functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
*/

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const triangleB = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};

const triangleC = {
  sideA: 2,
  sideB: 5,
  sideC: 4
};

// isEquilateral

const isEquilateral = triangle => {
  const { sideA, sideB, sideC } = triangle;
  return sideA === sideB && sideB === sideC;
};

console.log("isEquilateral", isEquilateral(triangleA));
console.log("isEquilateral", isEquilateral(triangleB));
console.log("isEquilateral", isEquilateral(triangleC));

// isIsosceles

const isIsosceles = triangle => {
  const { sideA, sideB, sideC } = triangle;
  return sideA === sideB || sideB === sideC || sideC === sideA;
};

console.log("isIsosceles", isIsosceles(triangleA));
console.log("isIsosceles", isIsosceles(triangleB));
console.log("isIsosceles", isIsosceles(triangleC));

// area

const areaTriangle = triangle => {
  const { sideA, sideB, sideC } = triangle;
  const perimeter = sideA + sideB + sideC;
  return Math.sqrt(perimeter * sideA * sideB * sideC);
};

console.log("areaTriangle", areaTriangle(triangleA));
console.log("areaTriangle", areaTriangle(triangleB));
console.log("areaTriangle", areaTriangle(triangleC));

// isObtuse

const isObtuse = triangle => {
  const arr = Object.values(triangle).sort();
  return arr[0] ** 2 + arr[1] ** 2 < arr[2] ** 2;
};

console.log("isObtuse", isObtuse(triangleA));
console.log("isObtuse", isObtuse(triangleB));
console.log("isObtuse", isObtuse(triangleC));

////////////////////////////
// The Cash Register
////////////////////////////

/*
** Write a function called cashRegister that takes a shopping cart object. The
object contains item names and prices (itemName: itemPrice). The function should
return the total price of the shopping cart. Example

// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output
cashRegister(cartForParty)); // 60.55
*/

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = cart => {
  const pricesAsStrings = Object.values(cart);
  const pricesAsNumbers = pricesAsStrings.map(price => {
    return price - 0;
  });

  const reducer = (accumulator, currentVal) => accumulator + currentVal;
  return pricesAsNumbers.reduce(reducer);
};

console.log(cashRegister(cartForParty));

////////////////////////////
// Credit Card Validation
////////////////////////////

/*
You're starting your own credit card business. You've come up with a new way to
validate credit cards with a simple function called validateCreditCard that
returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits
cannot be the same)
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

Bonus: Return an object indicating whether the credit card is valid, and if
not, what the error is

{ valid: true, number: 'a923-3211-9c01-1112' }
{ valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
Double Bonus: Make your credit card scheme even more advanced! What are the
rules, and what are some numbers that pass or fail? Ideas: check expiration
date! Check out the Luhn Algorithm for inspiration.
*/

const validateCreditCard = card => {
  const cardNumberAsString = card.replace(/-/gi, ""); // remove "-"
  const cardNumberStringAsArray = cardNumberAsString.split(""); // split into array
  const cardNumberArray = cardNumberStringAsArray.map(string => {
    const number = parseInt(string, 10);
    return number;
  }); // convert to numbers
  const errors = [];

  // length !== 16
  const badLengthVal = cardNumberStringAsArray.length > 16 ? "long" : "short";

  if (cardNumberStringAsArray.length !== 16)
    errors.push(`Card number is too ${badLengthVal}`);

  // typeof each is number
  const checksAllIntegers = cardNumberArray.forEach((number, index) => {
    if (isNaN(number))
      errors.push(`Character at position ${index + 1} is not a number`);
  });

  // at least two different digits
  let diffDigits = false;
  const hasTwoNumbers = cardNumberArray.forEach((number, index) => {
    if (index + 1 === cardNumberArray.length) return;
    if (number === cardNumberArray[index + 1]) {
      diffDigits = false;
    } else {
      diffDigits = true;
    }
  });
  const oneNumberError = "Card requires two different numbers";
  if (!diffDigits) errors.push(oneNumberError);

  // last digit % 2 === 0
  const isLastDigitEven = cardNumberArray.slice(-1)[0] % 2 === 0;
  if (!isLastDigitEven) errors.push("The last digit needs to be even");

  // The sum of all the digits must be greater than 16
  const reducer = (accumulator, currentVal) => accumulator + currentVal;
  const sumAllDigits = cardNumberArray.reduce(reducer);
  if (sumAllDigits <= 16)
    errors.push("Sum of all digits needs to be more than 16");

  return { valid: !errors.length, number: card, errors };
};

console.log(validateCreditCard("9999-0000-8888-a2a22"));
console.log(validateCreditCard("1111-1111-1111-1111"));
console.log(validateCreditCard("9999-9999-9999-9997"));
console.log(validateCreditCard("2999-9999-9999-9992"));

////////////////////////////
// JavaScript Bank
////////////////////////////

/*
In this homework, you'll create a basic bank in Javascript. The bank has many
accounts and the following capabilities that you need to write.

Bank
There is only one bank. This bank has an array of accounts. The bank needs a
method that will return the total sum of money in the accounts. It also needs
an addAccount method that will enroll a new account at the bank and add it to
the array of accounts. There is no need to create additional functions of the
bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of
common functionality.

Accounts
Accounts have a current balance and owner's name. You should be able to deposit
or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values --
you may also have your functions console.log() values to help you see your code
working.

You should write a basic story through a series of JavaScript commands that
shows that the methods do indeed work as expected: add some accounts, show the
total balance, make some deposits and withdrawals, show the new total balance.

Tips
Don't overthink this. Shorter code is probably the answer.

Bonus
Ensure that the accounts cannot have negative values.
Write a 'transfer' on the bank that allows you to transfer amounts between two
accounts.
Additional
Begin exploring the JavaScript Koans. Fork, clone and start trying them.

*/

const bank = {
  accounts: [],
  sumAllAccounts: accounts => {
    const balances = bank.accounts.map(account => {
      const { balance } = account;
      return balance;
    });
    const reducer = (accumulator, currentVal) => accumulator + currentVal;
    return balances.reduce(reducer);
  },
  addAccount: function(balance, ownersName) {
    const newAccount = {
      balance,
      ownersName,
      deposit: function(amount) {
        this.balance += amount;
      },
      withdraw: function(amount) {
        if (this.balance - amount > 0) return (this.balance -= amount);
        console.log(`Sorry, ${this.ownersName}, you broke.`);
      }
    };
    this.accounts.push(newAccount);
  },
  getAccount: function(name) {
    const accountArr = bank.accounts.filter(account => {
      if (account.ownersName === name) return account;
    });
    return accountArr[0];
  },
  transferFunds: function(from, to, amount) {
    // get each account
    const fromAccount = this.getAccount(from);
    const toAccount = this.getAccount(to);

    // take funds out of fromAccount
    fromAccount.withdraw(amount);

    // deposit into toAccount
    toAccount.deposit(amount);
  }
};

// TESTS

/////////////////////////
// Test adding accounts
console.log("\n\nTHE BANK\n\n");
console.log("John wants to open an account and deposit $100");
bank.addAccount(100, "John");

console.log("Anna also wants an account and will deposit $1000");
bank.addAccount(1000, "Anna");

// Check that their accounts have been created
console.log("Bank's accounts: ", JSON.stringify(bank.accounts), "\n\n");
//
/////////////////////////

/////////////////////////
// Test withdrawing money

console.log("Anna will withdraw $200");
bank.getAccount("Anna").withdraw(200);

// Check that the accounts are accurate
console.log("Bank's accounts: ", JSON.stringify(bank.accounts), "\n\n");
//
/////////////////////////

/////////////////////////
// Test depositing money

console.log("John is going to deposit $10000");
bank.getAccount("John").deposit(10000);

// Check that the accounts are accurate
console.log("Bank's accounts: ", JSON.stringify(bank.accounts), "\n\n");
//
/////////////////////////

/////////////////////////
// Test sum of all accounts
console.log("Total cash at bank: ", bank.sumAllAccounts(), "\n\n");
//
/////////////////////////

/////////////////////////
// Test transfer between accounts
console.log("Anna is going to transfer $10 to John");
bank.transferFunds("Anna", "John", 10);

// Check that the accounts are accurate
console.log("Bank's accounts: ", JSON.stringify(bank.accounts), "\n\n");
//
/////////////////////////
