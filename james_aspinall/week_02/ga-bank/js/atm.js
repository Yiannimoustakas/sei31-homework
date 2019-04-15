$(document).ready(function() {
  console.log("JSFILE CONNECTED")
  //////Store Balances//////
  let $checkingBalance = $("#checking-balance").html();
  $checkingBalance = (parseInt($checkingBalance));

  let $savingsBalance = $("#savings-balance").html();
  $savingsBalance = (parseInt($savingsBalance));

  //////Deposit Money//////
  $("#checking-deposit").on("click", function() {
    let $checkingAmount = parseInt($("#checking-amount").val(), 10);
    $("#checking-balance").html(`$${$checkingBalance += $checkingAmount}`);
    if ($("#checking-balance").html() > "$0") {
      $("#checking-balance").removeClass("zero");
      $("#checking-withdraw").css("visibility", "visible");
    }
  })

  $("#savings-deposit").on("click", function() {
    let $savingAmount = parseInt($("#savings-amount").val(), 10);
    $("#savings-balance").html(`$${$savingsBalance += $savingAmount}`);
    $("#savings-withdraw").css("visibility", "visible");
    if ($("#savings-balance").html() == "$0") {
      $("#savings-balance").toggleClass("zero");
    }
  })

  //////Withdraw Money//////
  $("#checking-withdraw").on("click", function() {
    let $checkingAmount = parseInt($("#checking-amount").val(), 10);
    $("#checking-balance").html(`$${$checkingBalance -= $checkingAmount}`);
    if ($("#checking-balance").html() == "$0") {
      $("#checking-balance").toggleClass("zero");
      $("#checking-withdraw").css("visibility", "hidden");
    }
  })


  $("#savings-withdraw").on("click", function() {
    let $savingAmount = parseInt($("#savings-amount").val(), 10);
    $("#savings-balance").html(`$${$savingsBalance -= $savingAmount}`);
    if ($("#savings-balance").html() == "$0") {
      $("#savings-balance").toggleClass("zero");
      $("#savings-withdraw").css("visibility", "hidden");
    }
  })


});
