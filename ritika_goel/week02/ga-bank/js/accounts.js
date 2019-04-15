const bank = {
  accounts: {
    'savings': 0,
    'checking': 0
  },

  render: function () {
    $('#checking-balance').text('$' + this.accounts['checking']);
    $('#savings-balance').text('$' + this.accounts['savings']);

    $('.zero').removeClass('zero');

    if ( this.accounts['savings'] <= 0 ) {
      $('#savings-balance').addClass('zero');
    }
    if ( this.accounts['checking'] <= 0 ) {
      $('#checking-balance').addClass('zero');
    }
  },

  deposit: function ( account, amount ) {
    this.accounts[account] += amount;
    this.render();
  },

  withdraw: function ( account, amount ) {
    let second_account = ( account === 'savings') ? 'checking' : 'savings';
    let currentBalance = this.accounts[account];
    if ( amount > currentBalance ) {
      let second_balance = this.accounts[second_account];
      let available_balance = currentBalance + second_balance;
      if( amount < available_balance ) {
        this.accounts[account] = 0;
        this.accounts[second_account] = available_balance - amount; // second_balance - (amount-currentBalance)
      }
    } else {
      currentBalance -= amount;
      this.accounts[account] = currentBalance;
    }
    this.render();
  }
}
