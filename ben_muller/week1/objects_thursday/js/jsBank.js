//JavaScript Bank

const bankOfBen = [
  {
    accountName: 'Ben Muller',
    currentBalance: 50000
  },
  {
    accountName: 'Jill Jooste',
    currentBalance: 7900
  },
  {
    accountName: 'General Assembly',
    currentBalance: 99999999999
  }
];

const sumOfBankDeposits = function ( bank ){
  return `$${bank.reduce(( sum, balance ) => sum + balance.currentBalance, 0 )}`
}

const addAccount = function ( accountHolder, initialDeposit, bank ){
  bank.push({ accountName: accountHolder, currentBalance: initialDeposit })
};

const deposit = function ( bank, accountHolder, depositAmount ){
  let indexOfAccount;
  for ( people in bank ){
    if ( bank[people].accountName === accountHolder){
      indexOfAccount = people; //saves the index number of this customer
      bank[indexOfAccount].currentBalance += depositAmount;
      return `Deposit Succesful, New Balance: $${bank[indexOfAccount].currentBalance}`;
    };
  };
    if (!indexOfAccount){
      return `${accountHolder} Does Not Have An Account At This Bank`
    };
  };

const withdraw = function ( bank, accountHolder, withdrawAmount){
  let indexOfAccount;
  for ( people in bank ){
    if ( bank[people].accountName === accountHolder){
      indexOfAccount = people; //saves the index number of this customer
    };
  };
  
  if (!indexOfAccount){
    return `${accountHolder} Does Not Have An Account At This Bank`
  }
  
  if ( bank[indexOfAccount].currentBalance < withdrawAmount ){
    return `Insufficient Funds, Balance: $${bank[indexOfAccount].currentBalance}`
  } else { bank[indexOfAccount].currentBalance -= withdrawAmount;
    return `Withdraw Succesful, New Balance: $${bank[indexOfAccount].currentBalance}`;
};        
};


///BANK STORY

//Alex Random goes to the bankOfBen to open an account and deposit $99

addAccount('Alex Random',99,bankOfBen);

// The bank confirms that Alex's account has succesfully loaded into their system

console.log(bankOfBen);

//Alex goes to the casino and wins $500 and decides to deposit that money into his account through the ATM

console.log(deposit(bankOfBen,'Alex Random',500))

// While he is waiting in the line he hears a man getting very angry trying to make a deposit, because he is old 
// and has gone to the wrong bank

console.log(deposit(bankOfBen,'Old Man',10))

// A criminal now goes up to the ATM and tries to withdraw money from Bill Gates account

console.log(withdraw(bankOfBen, 'Bill Gates', 50000));

// Now Alex is back at the bank and wants to withdraw money to pay his rent, his rent is $1000

console.log(withdraw(bankOfBen, 'Alex Random', 1000))

// He see's that he can only withdraw $599 so he does that;

console.log(withdraw(bankOfBen, 'Alex Random', 599))

// The bank is now closing and wants to know how much money they have, so runs a sum check

console.log(sumOfBankDeposits(bankOfBe+n));




  
