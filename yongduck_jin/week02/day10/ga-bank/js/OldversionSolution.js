let bankRecord = {
  checking: 0, //in order to avoid "if, else" later
  savings: 0,
  total: function () {
    this.checking + this.savings
  }
}

$(document).on('ready', function () {

  let $checkingBalance = $('#checking-balance') //done
  let $savingsBalance = $('#savings-balance') //done

  let $body = $('body');

  function moneyInOut(acc, button, enteredValue, acc2) {

    let minus = bankRecord[acc] - Number(enteredValue)
    let total = bankRecord[acc2] - minus;

    if (button == 'Deposit') {
      bankRecord[acc] += Number(enteredValue);

    } else if (button == 'Withdraw') {
      if ((bankRecord[acc] + bankRecord[acc2]) - Number(enteredValue) < 0) {
        total = total
        console.log('Negative balance function fired');
        return
      }
      if (bankRecord[acc] - Number(enteredValue) < 0) {
        bankRecord[acc2] = bankRecord[acc2] + bankRecord[acc] - Number(enteredValue)
        ///
        bankRecord[acc] = 0
      }

      if (bankRecord[acc] - Number(enteredValue) >= 0) { //because of bloody '='
        bankRecord[acc] -= Number(enteredValue)
      }
    }

    if (bankRecord.checking == 0) {

      $('#checking').addClass('zero')
    } else if (bankRecord.checking >= 0) {
      $('#checking').removeClass('zero')
    }

    if (bankRecord.savings == 0) {
      $('#savings').addClass('zero')
    } else if (bankRecord.savings >= 0) {
      $('#savings').removeClass('zero')
    }
    $checkingBalance.text('$' + bankRecord.checking)
    $savingsBalance.text('$' + bankRecord.savings)

  }


  function whichMachin(event) {
    let account, buttonName, entered, account2
    // debugger
    if (event.target.id == 'checking-deposit' || event.target.id == "checking-withdraw") {
      account = 'checking';
      account2 = 'savings'
      buttonName = event.target.value
      entered = $('#checking-amount').val();
      $('#checking-amount').val('').focus(); // order always matters

    } else if (event.target.id == 'savings-deposit' || event.target.id == 'savings-withdraw') {
      account = 'savings'
      account2 = 'checking'
      buttonName = event.target.value
      entered = $('#savings-amount').val();
      $('#savings-amount').val('').focus();
    }
    moneyInOut(account, buttonName, entered, account2) // 여기서 bankReor[account] 형식아로 가면, 옵첵트에 대한 레퍼런스를 넘기는 게 아니라, 값을 넘겨 버린다. Any walkaround?
  }

  $body.on('click', (event) => {
    whichMachin(event)
  })

})