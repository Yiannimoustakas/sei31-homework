let savingsBalance = 0;
let checkingBalance = 0;

$(document).ready(function (){

	$('#checking-deposit').on('click', function(depositChecking) {
    let checkingAmount = $('#checking-amount').val();
    checkingAmount = parseInt(checkingAmount);

    checkingBalance += checkingAmount;
    $('#checking-balance').text(`$${checkingBalance}`)

    warningRed();
    removeText();

  });

	$('#checking-withdraw').on('click', function(withdrawChecking){
    let checkingAmount = $('#checking-amount').val();
    checkingAmount = parseInt(checkingAmount);

    let totalBalance = withdrawal(checkingAmount, checkingBalance, savingsBalance); //value1: checkingBalance
    checkingBalance = totalBalance[0];
    savingsBalance = totalBalance[1];

    $('#checking-balance').text(`$${checkingBalance}`);
    $('#savings-balance').text(`$${savingsBalance}`);

    warningRed();
    removeText();

  });

	$('#savings-deposit').on('click',function (depositSaving) {
    let savingsAmount = $('#savings-amount').val();
    savingsAmount = parseInt(savingsAmount);
    savingsBalance += savingsAmount;

    $('#savings-balance').text(`$${savingsBalance}`);

    warningRed();
    removeText();

  });

	$('#savings-withdraw').on('click', function(withdrawSaving) {
    let savingsAmount = $('#savings-amount').val();
    savingsAmount = parseInt(savingsAmount);

    let totalBalance = withdrawal(savingsAmount, savingsBalance, checkingBalance); //value1: savingsBalance
    savingsBalance = totalBalance[0];
    checkingBalance = totalBalance[1];

    $('#checking-balance').text(`$${checkingBalance}`);
    $('#savings-balance').text(`$${savingsBalance}`);

    warningRed();
    removeText();

  });

  const withdrawal = function(amount, val1, val2) {
  	//CHECK THAT SAVING AND CHECKING > 0
  	if (val1 >= amount) {
  		val1 -= amount;
  	} else {
  		//OVERDRAFT PROTECTION
  		if ((val1 + val2) >= amount) {
  			let remainingAmount = val1 - amount;
  			val1 = 0;
  			val2 += remainingAmount;
  		} else {
  			alert(`Sorry, you do not have enough money to withdraw from both accounts with the amount of $${amount}.`);
  		}
  	}
  	return [val1, val2];
  };

  const warningRed = function () {
    if (savingsBalance === 0) {
      $('#savings-balance').addClass('zero');
    } else {
      $('#savings-balance').removeClass('zero');
    }

    if (checkingBalance === 0) {
      $('#checking-balance').addClass('zero');
    } else {
      $('#checking-balance').removeClass('zero');
    }
  };

  const removeText = function () { //to remove the input text after clicking the button
    $('#savings-amount').val('').focus();
    $('#checking-amount').val('').focus();
  };

});
