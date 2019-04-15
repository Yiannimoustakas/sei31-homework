//Create my "Building" as an array

const theBank = [{
    name: "Kylie",
    balance: 100000,
  },
  {
    name: "James",
    balance: 100000,
  },
  {
    name: "Sam",
    balance: 100000
  }

];


//Constructor for an account
class bankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
}

//Create A New Account
const createAccount = (name, balance) => {
  let newAccount = new bankAccount(name, balance);
  theBank.push(newAccount);
  console.log(`A new account for ${name} with a balance of $${balance} was created`);
}

//Search for a person's account
const search = (nameKey) => {
  for (let i = 0; i < theBank.length; i++) {
    if (theBank[i].name === nameKey) {
      return theBank[i];
    }
  }
}

//Function to get persons balance.
const getBalance = (name) => {
  let balance = search(name).balance;
  console.log(`${name} balance is: $${balance}`);
}

//Make Deposit
const makeDeposit = (accName, deposit) => {
  let balance = search(accName).balance;
  let newBalance = balance += deposit;
  let index = theBank.findIndex(x => x.name === accName);
  theBank[index].balance = newBalance;
  console.log(`${accName}'s new balance is: $${newBalance}`);
}

//Make Withdrawl
const makeWithdrawl = (accName, deposit) => {
  let balance = search(accName).balance;
  let newBalance = balance -= deposit;
  let index = theBank.findIndex(x => x.name === accName);
  theBank[index].balance = newBalance;
  console.log(`${accName}'s new balance is" ${newBalance}`);
}

//Console log all account info
const overviewBank = () => {
  for (let accounts in theBank) {
    console.log(accounts, theBank[accounts]);
  }
}

//Get Sum of all accounts
const totalBalance = () => {
  const sum = (obj) => {
    let sum = 0;
    for (let el in obj) {
      if (obj.hasOwnProperty(el)) {
        sum += parseFloat(theBank[el].balance);
      }
    }
    return sum;
  }
  let total = sum(theBank);
  console.log(`The Bank's Balance is: $${total} `);
}
