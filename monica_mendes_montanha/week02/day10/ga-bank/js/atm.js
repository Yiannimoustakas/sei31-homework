$(document).ready(function() {
  //console.log('loading...')

  const getBalance = function(balanceSelector){
    return $(balanceSelector)
    .text()
    .replace("$", "");
  };

  const checkStatusBalance = function(balanceSelector) {
    const currentBalance = getBalance(balanceSelector)

    if (parseInt(currentBalance) === 0) {
      $(balanceSelector).css("background-color", "red");
    } else {
      $(balanceSelector).css("background-color", "grey");
    }
  };

  $("#checking-deposit").click(function() {
    let currentBalance = getBalance("#checking-balance");
    const value = $("#checking-amount").val();

    currentBalance = parseInt(currentBalance) + parseInt(value);

    $("#checking-balance").text(`$${currentBalance}`);
    checkStatusBalance("#checking-balance");
  });

  $("#savings-deposit").click(function() {
    let currentBalance = getBalance("#savings-balance");
    const value = $("#savings-amount").val();

    currentBalance = parseInt(currentBalance) + parseInt(value);

    $("#savings-balance").text(`$${currentBalance}`);
    checkStatusBalance("#savings-balance");
  });

  $("#checking-withdraw").click(function() {
    let currentCheckingBalance = parseInt(getBalance("#checking-balance"));
    let currentSavingsBalance = parseInt(getBalance("#savings-balance"));

    const withdrawValue = parseInt($("#checking-amount").val());

    if (withdrawValue <= currentCheckingBalance) {
      currentCheckingBalance = currentCheckingBalance - withdrawValue;
    } else {
      if (withdrawValue <= currentCheckingBalance + currentSavingsBalance) {
        let remaining = withdrawValue;
        remaining = currentCheckingBalance - withdrawValue;
        currentCheckingBalance = 0;
        currentSavingsBalance =
          currentCheckingBalance + currentSavingsBalance - remaining * -1;
      }
    }

    $("#checking-balance").text(`$${currentCheckingBalance}`);
    $("#savings-balance").text(`$${currentSavingsBalance}`);
    checkStatusBalance("#checking-balance");
    checkStatusBalance("#savings-balance");
  });

  $("#savings-withdraw").click(function() {
    let currentCheckingBalance = parseInt(getBalance("#checking-balance"));
    let currentSavingsBalance = parseInt(getBalance("#savings-balance"));

    const withdrawValue = parseInt($("#savings-amount").val());

    if (withdrawValue <= currentSavingsBalance) {
      currentSavingsBalance = currentSavingsBalance - withdrawValue;
    } else {
      if (withdrawValue <= currentSavingsBalance + currentCheckingBalance) {
        let remaining = withdrawValue;
        remaining = currentSavingsBalance - withdrawValue;
        currentSavingsBalance = 0;
        currentCheckingBalance =
          currentSavingsBalance + currentCheckingBalance - remaining * -1;
      }
    }

    $("#checking-balance").text(`$${currentCheckingBalance}`);
    $("#savings-balance").text(`$${currentSavingsBalance}`);
    checkStatusBalance("#checking-balance");
    checkStatusBalance("#savings-balance");
  });
});
