console.log('run');

$(document).ready(function () {

  const getCheckingBalance = function() {
    return parseInt($('#checking-balance').html().replace('$', ''));
  };

  const setCheckingBalance = function(value) {
    $('#checking-balance').html('$' + value);
  };

  const getSavingsBalance = function() {
    return parseInt($('#savings-balance').html().replace('$', ''));
  };

  const setSavingsBalance = function(value) {
    $('#savings-balance').html('$' + value);
  };

  const getCheckingAmount = function() {
    return parseInt($('#checking-amount').val());
  };

  const getSavingsAmount = function() {
    return parseInt($('#savings-amount').val());
  };

// Checking: Deposit Money
  const checkingBalanceAfterDeposit = function () {
    const checkingBalance = getCheckingBalance();
    const depositAmount = getCheckingAmount();
    const updatedBalance = checkingBalance + depositAmount;

    setCheckingBalance(updatedBalance);

    if (getCheckingBalance() > 0) {
      $('#checking-balance').removeClass('zero');
    }
  };

  $('#checking-deposit').on('click', checkingBalanceAfterDeposit);


// Checking: Withdraw Money
  const checkingBalanceAfterWithdrawal = function () {
    const withdrawAmount = getCheckingAmount();
    const checkingBalance = getCheckingBalance();
    const savingsBalance = getSavingsBalance();

    if (withdrawAmount <= checkingBalance) {
      const updatedBalance = checkingBalance - withdrawAmount;
      setCheckingBalance(updatedBalance);
    }
    else if (withdrawAmount <= (checkingBalance+savingsBalance)) {
      setCheckingBalance(0);
      const withdrawOne = withdrawAmount - checkingBalance;
      const withdrawTwo = savingsBalance - withdrawOne;
      setSavingsBalance(withdrawTwo);
    }
    if (getCheckingBalance() === 0) {
      $('#checking-balance').addClass('zero');
    }
  };

  $('#checking-withdraw').on('click', checkingBalanceAfterWithdrawal);


  // Savings: Deposit Money
  const savingBalanceAfterDeposit = function () {
    const savingsBalance = getSavingsBalance();
    const depositAmount = getSavingsAmount();
    const updatedBalance =  savingsBalance + depositAmount;
    setSavingsBalance(updatedBalance);

    if (getSavingsBalance() > 0) {
      $('#savings-balance').removeClass('zero');
    }
  };

 $('#savings-deposit').on('click', savingBalanceAfterDeposit);


// Savings: Withdraw Money
  const savingBalanceAfterWithdrawal = function () {
    const withdrawAmount = getSavingsAmount();
    const savingsBalance = getSavingsBalance();
    const checkingBalance = getCheckingBalance
    if (withdrawAmount <= savingsBalance) {
      const updatedBalance = savingsBalance - withdrawAmount;
      setSavingsBalance(updatedBalance);
    }
    else if (withdrawAmount <= (savingsBalance+checkingBalance)) {
      setSavingsBalance(0);
      const withdrawOne = withdrawAmount - savingsBalance;
      const withdrawTwo = checkingBalance - withdrawOne;
      setCheckingBalance(withdrawTwo);
    }
    if (getSavingsBalance() === 0) {
      $('#savings-balance').addClass('zero');
    }
  };

  $('#savings-withdraw').on('click', savingBalanceAfterWithdrawal);

});


/*
const checkForZero = function () {
  $('.zero').removeClass('zero');

  const checkingBalance = + $('#checking-balance').text().slice(1);
  if (checkingBalance <= 0) {
    $('#checking-balance').addClass('zero');
  }

  const savingsBalance = + $('#savings-balance').text().slice(1);
  if (savingsBalance <= 0) {
    $('#savings-balance').addClass('zero');
  }
}

$(document).ready(function () {

  checkForZero();

  $('#checking-deposit').on('click', function () {
    const amount = + $('#checking-amount').val();
    const currentBalance = + $('#checking-balance').text().slice(1);

    const newBalance = currentBalance + amount;
    $('#checking-balance').text('$' + newBalance);
    $('#checking-amount').val('').focus();

    checkForZero();
  });

  $('#checking-withdraw').on('click', function () {
    const amount = + $('#checking-amount').val();
    const currentBalance = + $('#checking-balance').text().slice(1);

    const otherBalance = + $('#savings-balance').text().slice(1);
    const totalBalance = currentBalance + otherBalance;

    const newBalance = currentBalance - amount;

    if (newBalance >= 0) {
      $('#checking-balance').text('$' + newBalance);
      $('#checking-amount').val('').focus();
    } else if (amount <= totalBalance) {
      $('#checking-balance').text('$0');
      $('#savings-balance').text('$' + (otherBalance + newBalance));
      $('#checking-amount').val('').focus();
    }

    checkForZero();
  });

  $('#savings-deposit').on('click', function () {
    const amount = + $('#savings-amount').val();
    const currentBalance = + $('#savings-balance').text().slice(1);

    const newBalance = currentBalance + amount;
    $('#savings-balance').text('$' + newBalance);
    $('#savings-amount').val('').focus();

    checkForZero();
  });

  $('#savings-withdraw').on('click', function () {
    const amount = + $('#savings-amount').val();
    const currentBalance = + $('#savings-balance').text().slice(1);

    const otherBalance = + $('#checking-balance').text().slice(1);
    const totalBalance = currentBalance + otherBalance;

    const newBalance = currentBalance - amount;

    if (newBalance >= 0) {
      $('#savings-balance').text('$' + newBalance);
      $('#savings-amount').val('').focus();
    } else if (amount <= totalBalance) {
      $('#savings-balance').text('$0');
      $('#checking-balance').text('$' + (otherBalance + newBalance));
      $('#savings-amount').val('').focus();
    }

    checkForZero();
  });
});
*/
