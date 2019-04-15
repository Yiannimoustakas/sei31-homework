//   _______     __        __  _   __         _      __   __
//  / ___/ /__  / /  ___ _/ / | | / /__ _____(_)__ _/ /  / /__ ___
// / (_ / / _ \/ _ \/ _ `/ /  | |/ / _ `/ __/ / _ `/ _ \/ / -_|_-<
// \___/_/\___/_.__/\_,_/_/   |___/\_,_/_/ /_/\_,_/_.__/_/\__/___/
//
//
console.log('Test');

const accounts = [{
    accName: "checking",
    value: 0
  },
  {
    accName: "savings",
    value: 0
  }
]

//    ___              __  _
//   / _/_ _____  ____/ /_(_)__  ___  ___
//  / _/ // / _ \/ __/ __/ / _ \/ _ \(_-<
// /_/ \_,_/_//_/\__/\__/_/\___/_//_/___/
//
// This function changes the background colour
const colorChecker = function() {
  if (accounts[0].value === 0) {
    $('#checking').css("backgroundColor", "red")
  } else {
    $('#checking').css("backgroundColor", "gray")
  }
  if (accounts[1].value === 0) {
    $('#savings').css("backgroundColor", "red")
  } else {
    $('#savings').css("backgroundColor", "gray")
  }
}


// // Number Checker
// const isItANumber = function(){
//   if (isNaN(checkingInput) ||isNaN(savingsInput)){
//     alert("Please a number only")
//   } else {
//     console.log("continue")
//   }
// }

// Borrow from account function
const crossAccBorrowCheck = function(){
  checkingInput = Number($('#checking-amount').val());
  const combinedBal = accounts[0].value+accounts[1].value
  if ( checkingInput <= combinedBal) {
    const remainingBal = combinedBal - checkingInput;
    $('#checking-balance').text( "$"+0 );
    $('#savings-balance').text( "$"+ remainingBal)
    accounts[0].value = 0
    accounts[1].value = remainingBal
    colorChecker()
  } else {
    alert ("There is not enough money to continue")
    $('#checking-balance').text( "$"+accounts[0].value );
    $('#savings-balance').text( "$"+accounts[1].value )
    colorChecker()
  }
}

const crossAccBorrowSavings = function(){
  savingsInput = Number($('#savings-amount').val());
  const combinedBal = accounts[0].value+accounts[1].value
  if ( savingsInput <= combinedBal) {
    const remainingBal = combinedBal - savingsInput;
    $('#savings-balance').text( "$"+0 );
    $('#checking-balance').text( "$"+ remainingBal)
    accounts[1].value = 0
    accounts[0].value = remainingBal
    colorChecker()
  } else {
    alert ("There is not enough money to continue")
    $('#savings-balance').text( "$"+accounts[1].value );
    $('#checking-balance').text( "$"+accounts[0].value )
    colorChecker()
  }
}

//    ____              __    __   _     __
//   / __/  _____ ___  / /_  / /  (_)__ / /____ ___  ___ _______
//  / _/| |/ / -_) _ \/ __/ / /__/ (_-</ __/ -_) _ \/ -_) __(_-<
// /___/|___/\__/_//_/\__/ /____/_/___/\__/\__/_//_/\__/_/ /___/

$('#checking-deposit').on('click', function() {
//  isItANumber();
  const checkingInput = Number($('#checking-amount').val());
  accounts[0].value = accounts[0].value + checkingInput
  $('#checking-balance').text("$" + accounts[0].value);
  $('#checking-amount').val('')
  colorChecker();
});

$('#savings-deposit').on('click', function() {
//  isItANumber();
  const savingsInput = Number($('#savings-amount').val());
  accounts[1].value = accounts[1].value + savingsInput
  $('#savings-balance').text("$" + accounts[1].value);
  $('#savings-amount').val('')
  colorChecker();
});

$('#checking-withdraw').on('click', function() {
//  isItANumber();
  const checkingInputM = Number($('#checking-amount').val());
  if (checkingInputM > accounts[0].value) {
    crossAccBorrowCheck();
    $('#checking-amount').val('');
  } else {
    accounts[0].value = accounts[0].value - checkingInputM;
    $('#checking-balance').text("$" + accounts[0].value);
    $('#checking-amount').val('')
    colorChecker();
  }
});

$('#savings-withdraw').on('click', function() {
//  isItANumber();
  const savingsInputM = Number($('#savings-amount').val());
  if (savingsInputM > accounts[1].value) {
    crossAccBorrowSavings();
    $('#savings-amount').val('');
  } else {
    accounts[1].value = accounts[1].value - savingsInputM;
    $('#savings-balance').text("$" + accounts[1].value);
    $('#savings-amount').val('')
    colorChecker();
  }
});


//  ___         _        ___                                   _
// / __|___  __| |___   / __|_ _ __ ___ _____ _  _ __ _ _ _ __| |
//| (__/ _ \/ _` / -_) | (_ | '_/ _` \ V / -_) || / _` | '_/ _` |
// \___\___/\__,_\___|  \___|_| \__,_|\_/\___|\_, \__,_|_| \__,_|
//                                           |__/
// const addNumberToChecking = function(checkingInput) {
// accounts[0].value = accounts[0].value + checkingInput
//
//
// const addMoney = function(bankAcc,deposit) {
//   console.log(bankAcc)
//   if (bankAcc == savings) {
//     accounts[0].value = accounts[0].value + deposit
//   } else { // Room for expandabilty
//     accounts[1].value = accounts[1].value + deposit
//   }
//}

// $('#checking-balance').text(accounts[0].value)
// $('#savings-balance').text(accounts[1].value)
