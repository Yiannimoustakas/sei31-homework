const account = {
	savings: 100, //starting money
	checking: 100, //starting money

	deposit: function(amount, savingsOrChecking) {
		$('#printMsg').html("");
		this[savingsOrChecking] += amount;
		this.displayBalances();
		return true;
	},

	displayBalances: function() {
		if (this.savings === 0) {
			$('#savings-balance').addClass("zero");
		} else {
			$('#savings-balance').removeClass("zero");
		}
		if (this.checking === 0) {
			$('#checking-balance').addClass("zero");
		} else {
			$('#checking-balance').removeClass("zero");
		}
		$('#checking-balance').html("$" + ( (Number.isInteger(account.checking)===true) ? account.checking : account.checking.toFixed(2) ) );
		$('#savings-balance').html("$" + ( (Number.isInteger(account.savings)===true) ? account.savings : account.savings.toFixed(2) ) );
	},

	withdraw: function(amount, savingsOrChecking) {
		$('#printMsg').html("");
		const tempBal = this[savingsOrChecking];
		const total = this.savings + this.checking;
		if (total-amount < 0) { //two accts together, still not enough money
			$('#printMsg').html("Transaction not allowed. Insufficient funds.");
			return false; 
		} else {
			if (tempBal-amount<0) { // one account can't handle it, apply overdraft
				const remainder = amount - tempBal;
				this[savingsOrChecking] -= tempBal; // account is now zero
				if (savingsOrChecking==="checking") {
					this.savings -= remainder;
				} else {
					this.checking -= remainder;
				}
				$('#printMsg').html("Overdraft Protection applied.");
			} else {
				//one account can handle it, proceed transaction
				this[savingsOrChecking] -= amount;
			}
			this.displayBalances();
			return true; //success
		}
	}
};

const checkingDeposit = function() {
	const amount = $('#checking-amount').val();
	if ( isNaN(amount)===false ) { account.deposit(Number(amount), "checking"); }
};

const savingsDeposit = function() {
	const amount = $('#savings-amount').val();
	if ( isNaN(amount)===false ) { account.deposit(Number(amount), "savings"); }
};

const savingsWithdraw = function() {
	const amount = $('#savings-amount').val();
	if ( isNaN(amount)===false ) { account.withdraw(Number(amount), "savings"); }
};

const checkingWithdraw = function() {
	const amount = $('#checking-amount').val();
	if ( isNaN(amount)===false ) { account.withdraw(Number(amount), "checking"); }
};

const startBank = function() {
	//display balances
	account.displayBalances();

	//transactions
	$('#checking-deposit').on('click', checkingDeposit);
	$('#savings-deposit').on('click', savingsDeposit);
	$('#checking-withdraw').on('click', checkingWithdraw);
	$('#savings-withdraw').on('click', savingsWithdraw);
};

$(document).ready( startBank );
