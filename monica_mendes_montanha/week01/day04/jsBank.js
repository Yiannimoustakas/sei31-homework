console.log(
  "%c---Homework:(bonus) JS BANK---",
  "color: blue; font-size: large; background-color: yellow;"
);

/*JavaScript Bank
In this homework, you'll create a basic bank in Javascript.
The bank has many accounts and the following capabilities that you need to write.

Bank
There is only one bank. This bank has an array of accounts.
The bank needs a method that will return the total sum of money in the accounts.
It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts.
There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts.
Accounts should be objects that all share a set of common functionality.

Accounts
Accounts have a current balance and owner's name.
You should be able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface.
Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected:
add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

Tips
Don't overthink this. Shorter code is probably the answer.

Bonus
Ensure that the accounts cannot have negative values.
Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

Additional
Begin exploring the JavaScript Koans. Fork, clone and start trying them.
*/

bank = [
  {
    accountNumber: 0123,
    balance: 1000.0
  },
  {
    accountNumber: 4567,
    balance: 2000.0
  },
  {
    accountNumber: 8910,
    balance: 3000.0
  }
];

const sumOfMoney = bank.reduce(
  (accumulator, currentValue) => accumulator + currentValue.balance,
  0
);
console.log(`Total sum of money in all the accounts of bank $${sumOfMoney}.`);

const addAccount = function(newAccount) {
  bank.push(newAccount);
  const messageAddAccount = `The account number ${
    newAccount.accountNumber
  } has been added with $${newAccount.balance}.`;
  console.log(messageAddAccount);
};

const findAccount = function(accountNumber) {
  const accountFound = bank.find(function(element) {
    return element.accountNumber === accountNumber;
  });
  return accountFound;
};

const currentBalance = function(accountNumber) {
  const account = findAccount(accountNumber);
  return `Current balance: $${account.balance}`;
};

const deposit = function(depositValue, accountNumber) {
  const account = findAccount(accountNumber);
  account.balance = account.balance + depositValue;
  console.log(`Value of deposit: $${depositValue}`);
  return currentBalance(accountNumber);
};

const withdraw = function(withdrawValue, accountNumber) {
  const account = findAccount(accountNumber);

  if (account.balance < withdrawValue) {
    console.log(`!!! Trying to withdraw $${withdrawValue}`);
    return `This account doesn't have enough money to withdraw`;
  } else {
    account.balance = account.balance - withdrawValue;
    console.log(`Value of withdraw: -$${withdrawValue}`);
    return currentBalance(accountNumber);
  }
};

const transfer = function(transferValue, accountNumberFrom, accountNumberTo) {
  let accountFrom = findAccount(accountNumberFrom);
  let accountTo = findAccount(accountNumberTo);

  if (accountFrom.balance < transferValue) {
    console.log(`!!! Trying to transfer $${transferValue}`);
    return `This account doesn't have enough money to transfer`;
  } else {
    accountFrom.balance = accountFrom.balance - transferValue;
    accountTo.balance = accountTo.balance + transferValue;
    console.log(
      `Transfer $${transferValue} from account number ${accountNumberFrom} to account number ${accountNumberTo}`
    );
    return currentBalance(accountNumberTo);
  }
};

addAccount({ accountNumber: 1112, balance: 4000.0 });
console.log(deposit(1000.0, 1112));
console.log(withdraw(500.0, 1112));
console.log(withdraw(5000.0, 1112));
console.log(transfer(10, 1112, 0123));

//total sum of money in the accounts (reduce)
//addAccount >> array accounts (push)
//Accounts have a current balance and owner's name. (find)
//story: add some accounts, show the total balance,
//make some deposits
//and withdrawals,
//show the new total balance.
