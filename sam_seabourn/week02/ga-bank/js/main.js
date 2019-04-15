//  ___ _     _          _  __   __        _      _    _
// / __| |___| |__  __ _| | \ \ / /_ _ _ _(_)__ _| |__| |___ ___
//| (_ | / _ \ '_ \/ _` | |  \ V / _` | '_| / _` | '_ \ / -_|_-<
// \___|_\___/_.__/\__,_|_|   \_/\__,_|_| |_\__,_|_.__/_\___/__/
//


const accounts = [{
    accName: "checking",
    value: 0
  },
  {
    accName: "savings",
    value: 0
  }
]


console.log('Test');

// ___                             _     ___             _
// |   \ ___  __ _  _ _ __  ___ _ _| |_  | _ \___ __ _ __| |_  _
// | |) / _ \/ _| || | '  \/ -_) ' \  _| |   / -_) _` / _` | || |
// |___/\___/\__|\_,_|_|_|_\___|_||_\__| |_|_\___\__,_\__,_|\_, |
//                                                          |__/
//$(document).ready(function() {


 $('.withdraw').hover(function(){$(this).toggleClass('withdraw_hover');
})


  $('#checking-deposit').on('click', function() {
    const checkingInput = Number($('#checking-amount').val());
    console.log("Boom")
    accounts[0].value = accounts[0].value + checkingInput
    $('#checking-balance').text("$" + accounts[0].value);
    $('#checking-amount').val('')
  });

  $('#savings-deposit').on('click', function() {
    const savingsInput = Number($('#savings-amount').val());
    accounts[1].value = accounts[1].value + savingsInput
    $('#savings-balance').text("$" + accounts[1].value);
    $('#savings-amount').val('')
  });

  $('#checking-withdraw').on('click', function() {
      const checkingInputM = Number($('#checking-amount').val());
      accounts[0].value = accounts[0].value - checkingInputM;
      $('#checking-balance').text("$" + accounts[0].value);
      $('#checking-amount').val('')
  });

  $('#savings-withdraw').on('click', function() {
    const savingsInputM = Number($('#savings-amount').val());
    accounts[1].value = accounts[1].value - savingsInputM;
    $('#savings-balance').text("$" + accounts[1].value);
    $('#savings-amount').val('')
  });





//});

// ###Type:
// - Lab
//
// ###Summary
// - This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
// - You'll be selecting elements, manipulating HTML, and manipulating style along
// with building out the logic using JavaScript.
//
// ###Objectives:
// - DOM selection, appending, removal, updating
//
// ###Specification:
// ******Keep track of the checking and savings balances somewhere
// ****** Add functionality so that a user can deposit money into one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Add functionality so that a user can withdraw money from one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.
// * When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account.
// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.
// * Are there ways to refactor your code to make it DRYer?

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
