// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and
// the following capabilities that you need to write.
//
// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total
//  sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and
//  add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to
// change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions
// console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work
// as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.


let bank = {
  accounts : [],

  sum : function(){
    let total = 0;
    for (let x = 0; x < this.accounts.length; x++){
      total += this.accounts[x].balance;
    }
    return total;
  },

  addAccount : function(name, balance){
    if (typeof balance !== "number" || typeof name !== "string"){
      return;
    }
    console.log(`"Created account ${name} with a starting balance of ${balance};"`)
    this.accounts.push({
      name : name,
      balance : balance,
      deposit : function(num){
        this.balance += num;
        console.log(`"$${num} was deposited to ${this.name}'s account. The balance is now $${this.balance}.'"`)
      },
      withdraw : function(num){
        if(this.balance - num < 0){
          num = this.balance;
        }
        this.balance -= num;
        console.log(`"$${num} was withdrawn to ${this.name}'s account. The balance is now $${this.balance}.'"`)
      },
      transfer : function(num, otherAccount){
        if(this.balance - num < 0){
          num = this.balance;
        }

        for (let i = 0; i < bank.accounts.length; i++){
          if(otherAccount === bank.accounts[i].name){
            bank.accounts[i].balance += num;
            this.balance -= num;
            console.log(`"$${num} was transfered from ${this.name} to ${otherAccount}'s account. ${this.name}'s balance is now $${this.balance}.'"`);
            break;
          }
        }
      },
    })
  },
}


console.log(bank.addAccount('human1', 1000));
console.log(bank.addAccount('human2', 4));
console.log(bank.addAccount('cat1', 104200));
console.log(bank.sum());
console.log(bank.accounts);
console.log(bank.accounts[0]);
console.log(bank.accounts[0].deposit(200));
console.log(bank.accounts[1].withdraw(400));
console.log(bank.accounts[2].withdraw(10000));
console.log(bank.accounts[2].transfer(1000, 'human2'));
console.log(bank.sum());
