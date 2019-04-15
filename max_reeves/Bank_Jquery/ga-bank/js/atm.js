$(document).ready(function(){

	var $checkingAccountBalance = parseInt($(`#checking-balance`).text());
	var $savingsAccountBalance = parseInt($(`#savings-balance`).text());

	//Deposit value to checking account

  $(`#checking-deposit`).on('click', function(){
		var $checkingAmount = $(`#checking-amount`).val();
		$checkingAccountBalance += parseInt($checkingAmount);
		$(`#checking-balance`).text($checkingAccountBalance);
		updateBackgroundColour("checking", $checkingAccountBalance);
	});

  //Withdraw value from checking account

	$(`#checking-withdraw`).on('click', function(){
		var $checkingAmount = $(`#checking-amount`).val();
		if ($checkingAmount <= $checkingAccountBalance) {
			$checkingAccountBalance -= parseInt($checkingAmount);
			$(`#checking-balance`).text($checkingAccountBalance);
	} else {
 }
		updateBackgroundColour("checking", $checkingAccountBalance);
	});

	//Adds value to savings account

	$(`#savings-deposit`).on('click', function(){
		var $savingsAmount = $(`#savings-amount`).val();
		$savingsAccountBalance += parseInt($savingsAmount);
		$(`#savings-balance`).text($savingsAccountBalance);
		updateBackgroundColour("savings", $savingsAccountBalance);

	});

	//Withdraw value from savings account

	$(`#savings-withdraw`).on('click', function(){
		var $savingsAmount = $(`#savings-amount`).val();
		if ($savingsAmount <= $savingsAccountBalance){
			$savingsAccountBalance -= parseInt($savingsAmount);
			$(`#savings-balance`).text($savingsAccountBalance);
  } else {
 }
	updateBackgroundColour("savings", $savingsAccountBalance);

	});

	const updateBackgroundColour = function(account, accountBalance) {
		if (parseInt(accountBalance) === 0) {
			$(`#colour-${ account }`).css("background-color", "red");
	} else {
			$(`#colour-${ account }`).css("background-color", "#E3E3E3");
	}
 }

});
