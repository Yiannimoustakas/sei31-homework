// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle


const rectangleA = {
  length: 4,
  width: 4
};

let isSquare = function(obs){
  if (obs.length === obs.width){
    console.log(`This is a Square`); // How do I print out "rectangleA", the name of variable by using ${} ?
    return true
  }
  console.log(`This is not a Square`);
  return false
}

console.log(isSquare(rectangleA));
let area = function(obs){
  return `${obs.length * obs.width} square cm`
}

console.log(area(rectangleA));

let perimeter = function(obs){
  return `${(obs.length + obs.width) * 2} cm`
}

console.log(`${perimeter(rectangleA)}`);

console.log(`End of practice for rectangle ==========================`);


// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 5
};


let isEquilateral =function (obs){


  if(obs.sideA === obs.sideB && obs.sideA === obs.sideC){
    console.log(`This is a Equaliateral`);
    return true
  }
  console.log(`This is not a Equaliateral`);
  return false
}

isEquilateral(triangleA)

let isIsosceles =function (obs){
  let counter = 0
  if(obs.sideA === obs.sideB){
    counter = counter + 1
  }
  if(obs.sideA === obs.sideC){
    counter = counter + 1
  }
  if(obs.sideC === obs.sideB){
    counter = counter + 1
  }
  if(counter === 1){
    console.log(`This is a Isosceles`);
    return true
  }else{
    console.log(`This is not a Isosceles`);
  }  
}
isIsosceles(triangleA)


// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

// ③ c² > a² + b² Obtus


let isObtuse =function (obs){
  
  let keys = Object.keys(obs);  
  // let max = Math.max(obs[keys][0], obs[keys][1], obs[keys][2])
  let values=[]
  let totalValues = 0
  
  
  for(let i =0; i < keys.length; i ++){
    values.push(obs[keys[i]])
    totalValues = totalValues + obs[keys[i]]
  }
  let maxValue= Math.max(values[0], values[1], values[2])
  let sub = totalValues - maxValue;  //order always matters 
  
  if ((maxValue**maxValue) > (sub ** sub)){
    console.log(`This is an Obtuse`);
    return true
  }
  console.log(`This is not an Obtuse`);
  return false

}

isObtuse(triangleA)


console.log(`End of practice for triangle ==========================`);

// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. 
// The object contains item names and prices (itemName: itemPrice). 
// The function should return the total price of the shopping cart. Example

// Input
const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "26.36"
};

const cashRegister = function(obj){
  let keys = Object.keys(obj)
  let totalValues = 0 
  
  for (let i = 0; i < keys.length; i++) {
    totalValues = totalValues + parseFloat(obj[keys[i]]) ; //not [][], but [[]]?
    
  }
  
  return totalValues

}
// Output
console.log(`Total price of all items is $${cashRegister(cartForParty)}`); ; // 

console.log(`end of cash Register practice ======================`);


// Credit Card Validation
// You're starting your own credit card business. You've come up with 
// a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// all of them must be numbers
// The final digit must be even
// The sum of all the digits must be greater than 16


// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
// You must have at least two different digits represented (all of the digits cannot be the same) //last checking part
//all 

// Math.max.apply(null, numArray)

const validateCreditCard = function(credit){
  let numbs = credit.split('-')
  let joinedNumbs = numbs.join("")
  let newArray = []
  let sumb = 0; 
  let validity = { number: credit}
  if(joinedNumbs.length === 16){
    for (let i = 0; i < joinedNumbs.length; i++) {
      if(Number.isInteger(parseInt(joinedNumbs[i])))
      {
        newArray.push(parseInt(joinedNumbs[i]))
        sumb = sumb + parseInt(joinedNumbs[i])  
     
      }else{ validity.valid= false;               
             validity.error = 'Plese enter numbers only'
             return validity
      } 
  } // End of for loop 
  
  let maxNumb = Math.max.apply(null, newArray)
  let minNumb = Math.min.apply(null, newArray) //Order always matters
  let lastDigit = newArray[newArray.length-1] % 2 //last digit [-1] does not work in Javascript 
  //I should have just used array.pop()
  
  if(sumb > 16 && lastDigit == 0 && maxNumb !== minNumb){
    validity.valid = true;    
    return validity
  }else{
    validity.valid = false;
    validity.error = `somethings wrong you figure it out`
    return validity
    
  }
}else{
  validity.valid= false;
  validity.error = 'Incorrect length'
  return validity; 

}

}
console.log(validateCreditCard('6666-6666-6666-1666'));
console.log(validateCreditCard('a923-3211-9c01-1112'));
console.log(validateCreditCard('a923-3211-9c01-112'));

// validateCreditCard('a923-3211-9c01-1112')
// validateCreditCard('4444-4444-4444-4444')

// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:

// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number


console.log(`End of practice for Credit Card Validator ==========================`);

// Bank
// There is only one bank. This bank has an array of accounts.  /done 
// The bank needs a method that will return the total sum of money in the accounts. /done
// It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. /done
// There is no need to create additional functions of the ba  nk to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// Accounts have a current balance and owner's name. 
// You should be able to deposit or withdraw from an account to change the balance.

 
const bank = {
  
  accounts: [
    {accountName: 'Jin1', currentBalance: 39, },
    {accountName: 'Jin2', currentBalance: 30, },
    {accountName: 'Jin3', currentBalance: 10, },
   ], 
  
  totalSum: function(){
    let totalDeposit = 0; 
    for (let i = 0; i < bank.accounts.length; i++) {
      totalDeposit += bank.accounts[i].currentBalance;
      
    }
    console.log("Totla Deposit of all accounts is :", totalDeposit);
    return totalDeposit;
  }, 
  moneyInOut: function(ownerName, money){
    for (let i = 0; i < bank.accounts.length; i++) {
       if(bank.accounts[i].accountName === ownerName){
        let tempBalance =bank.accounts[i].currentBalance + money; 
        if(tempBalance >0){
          console.log(`Your current balance is $${tempBalance}`);
          bank.accounts[i].currentBalance = tempBalance;
        }else{
          console.log(`Negative balance is not allowed`);
          return
        }
        
       }
      
    }
  },
  addAccount: function(added){
    // let newAccount = prompt('Enter your account name')
    bank.accounts.push({accountName: added, currentBalance:0})
    console.log(`${added}'s account has been made`);
  },
  moneyTransfer: function(accountName1, accountName2, moneyOut){
    for (let i = 0; i < bank.accounts.length; i++) {
      
      if(bank.accounts[i].accountName === accountName1){
        let tempBalance = bank.accounts[i].currentBalance - moneyOut
        if(tempBalance< 0){
          console.log(`Negative balance is not allowed`);
          return
        }else{
          for (let j = 0; j < bank.accounts.length; j++) {
            if(bank.accounts[j].accountName === accountName2){
              bank.accounts[i].currentBalance -= moneyOut;
              bank.accounts[j].currentBalance += moneyOut;
              console.log(`$${moneyOut} was transferred from ${accountName1}' account to ${accountName2}' account`);
            }
          }
        }       
      }      
    }    
  }
}
bank.moneyInOut('Jin1', 100)
bank.moneyInOut('Jin1', -400)
bank.totalSum();
bank.moneyTransfer('Jin1', 'Jin2', 1)
bank.moneyTransfer('Jin1', 'Jin2', 40000)
bank.addAccount('Jin5');



// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
