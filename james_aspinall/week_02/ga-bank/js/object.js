const theBank = {
  checkingAccount: $("#checking-balance").html(),
  savingsAccount: $("#savings-balance").html(),
  depositAmount: $("#checking-amount").val(),

};
const depositChecking = () => {
  theBank.checkingAccount += depositAmount



$(document).ready(function() {






});
















// const theBank = {
//   checkingAccount: $("#checking-balance").html(),
//   savingsAccount: $("#savings-balance").html(),
//
//   depositAmount: $("#checking-amount").val(),
//
//
//   withdrawChecking: function() {
//     $("#checking-withdraw").on("click", function() {
//       let $checkingAmount = parseInt($("#checking-amount").val(), 10)
//       $("#checking-balance").html(`$${$checkingBalance -= $checkingAmount}`)
//     })
//   },
//
//   savingsAmount: $("#savings-amount").val(),
//
//   depositInSavings: function() {
//     $("#savings-deposit").on("click", function() {
//       let $savingAmount = parseInt($("#savings-amount").val(), 10)
//       $("#savings-balance").html(`$${$savingsBalance += $savingAmount}`)
//     });
//   },
//   withdrawSavings: function() {
//     $("#savings-withdraw").on("click", function() {
//       let $savingAmount = parseInt($("#savings-amount").val(), 10)
//       $("#savings-balance").html(`$${$savingsBalance -= $savingAmount}`)
//     });
//   },
// }
// console.log(theBank.depositInChecking);
