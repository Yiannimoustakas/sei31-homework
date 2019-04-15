


const accounts = {
  checkingBalance: 0,
  savingsBalance: 0,

  total: function() {
    return this.checkingBalance + this.savingsBalance;
  },

  checkingDeposit: function(amount) {
    this.checkingBalance += Number(amount);
  },

  checkingWithdraw: function(amount) {
    amount = Number(amount);
    if (amount <= this.checkingBalance) {
      this.checkingBalance -= amount;
    }
  //TODO: overdraft protection
},
savingDeposit: function(amount) {
  this.savingsBalance += Number(amount);
},

};
