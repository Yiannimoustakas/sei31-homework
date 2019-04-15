// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
//
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

const bank = {
  accounts: {
    'Ritika': 100000,
    'Mr Generous': 500,
    'Techie Guy': 20000,
    'Another Person': 4000,
    'The Last One': 80
  },
  addAccount: function ( name, amount ) {
    this.accounts[ name ] = amount;
    return `${ name } successfully created an account in the bank with a starting balance of $${ this.accounts[ name ] }`;
  },
  deposit: function ( name, amount ) {
    this.accounts[name] += amount;
    return `${ name } now has $${ this.accounts[name] } in account`;
  },
  withdraw: function ( name, amount ) {
    if ( amount > this.accounts[name] ) {
      return `${ name } does not have $${ amount } in account`;
    }
    this.accounts[name] -= amount;
    return `${ name } now has $${ this.accounts[name] } in account`;
  },
  transfer: function ( from, to, amount ) {
    if ( amount > this.accounts[from] ) {
      return `${ from } does not have $${ amount } in account`;
    }
    this.accounts[ from ] -= amount;
    this.accounts[ to ] += amount;
    return `${ from } successfully transfered $${ amount } to ${ to }'s account`;
  },
  totalSum: function () {
    let total = 0;
    for (let name in this.accounts) {
      total += this.accounts[ name ];
    }
    return `Total sum in accounts is $${ total }`;
  }
}

console.log(`Ritika won a lottery and got a $10 cash prize.\nShe went to the bank to deposit the money in her account`);
console.log(bank.deposit( 'Ritika', 10));
console.log(`On her way back home, she saw a homeless on the street but didn't have cash to donate.\nShe told Mr. Generous about the homeless.\nHe immediately went to the bank to withdraw $20 to donate.`);
console.log(bank.withdraw( 'Mr Generous', 20));
console.log(`The Homeless was very greatful of receiving generous donations.\nHe though of opening up an account in the bank to deposit the surplus which he can use to rent a house for himself.`);
console.log(bank.addAccount( 'The Homeless', 200));
console.log(`The Homeless was testing out his new account and accidently hit the transfer button to a random account.`);
console.log(bank.transfer( 'The Homeless', 'Ritika', 300));
console.log(`Luckily, he did not have that much of an amount in his account! Phhhheeeewwww!!!!\nRitika came to know about the transaction error by The Homeless and was excited to discover that he has a bank account now. She immediately transfered some money into his account as a donation.`);
console.log(bank.transfer( 'Ritika', 'The Homeless', 100));
console.log(`So many transactions one after the other in a set of bank accounts triggered an alert in the bank system.\nThe bank manager logged in to check the total sum of money in the accounts`);
console.log(bank.totalSum());
console.log(`To his delight, everything was working fine!`);
