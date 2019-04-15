//console.log('test');

//$(document).ready(function () {

//Keep track of the checking and savings balances somewhere
const accounts = {
  checking: 20,
  savings: 20,
}

// acount at zero zeroChecker
//chk
const zeroCheckerChk = function () {
  if (accounts.checking === 0) {
  $('#checking').addClass('zero');
} else {
  $('#checking').removeClass('zero');
  }
}

//sav
const zeroCheckerSav = function () {
  if (accounts.savings === 0) {
  $('#savings').addClass('zero');
} else {
  $('#savings').removeClass('zero');
  }
}

////////// Bank processes //////////
const chkDeposit = function (value){
  accounts.checking += value
  $('#checking-balance').text(`$ ${accounts.checking}`) // update display of new ammount
  zeroCheckerChk();
}

const chkWithdraw = function (value) {
  if (value > accounts.checking){
    negative = accounts.checking - value
    accounts.checking = 0
    accounts.savings += negative
  } else {
    accounts.checking -= value
  }
  $('#checking-balance').text(`$ ${accounts.checking}`)
  $('#savings-balance').text(`$ ${accounts.savings}`)
  zeroCheckerChk();
}

const savDeposit = function (value){
  accounts.savings += value
  $('#savings-balance').text(`$ ${accounts.savings}`)
  zeroCheckerSav();
}

const savWithdraw = function (value){
  if (value > accounts.savings){
    negative = accounts.savings - value
    accounts.savings = 0
    accounts.checking += negative
  } else {
    accounts.savings -= value
  }
  $('#checking-balance').text(`$ ${accounts.checking}`)
  $('#savings-balance').text(`$ ${accounts.savings}`)
  zeroCheckerSav();
}

//jquery visual updaters
$('#checking-deposit').on('click', function(event){
  const $depositAmount = parseInt($('#checking-amount').val()); //
  chkDeposit($depositAmount);
  // $('#checking-amount').val('')
});

$('#checking-withdraw').on('click', function(event){
  const $withdrawAmount = parseInt($('#checking-amount').val()); //
  if ($withdrawAmount > accounts.savings + accounts.checking) {
    console.log('not enough cash')
  } else {
  chkWithdraw($withdrawAmount);
  // $('#checking-amount').val('')
  }
});

$('#savings-deposit').on('click', function(event){
  const $depositAmount = parseInt($('#savings-amount').val()); //
  savDeposit($depositAmount);
  //$('#checking-amount').val('')
});

$('#savings-withdraw').on('click', function(event){
  const $withdrawAmount = parseInt($('#savings-amount').val()); //
  if ($withdrawAmount > accounts.savings + accounts.checking) {
    console.log('not enough cash')
  } else {
  savWithdraw($withdrawAmount);
  //$('#checking-amount').val('')
}
});


//}) //end of document ready
