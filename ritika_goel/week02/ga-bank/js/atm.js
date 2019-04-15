$(document).ready( function () {
  bank.render();
  $('#checking-deposit').on('click', function () {
    let amount = Number( $('#checking-amount').val() );
    $('#checking-amount').val('').focus();
    bank.deposit( 'checking', amount );
  });
  $('#checking-withdraw').on('click', function () {
    let amount = Number( $('#checking-amount').val() );
    $('#checking-amount').val('').focus();
    bank.withdraw( 'checking', amount );
  });
  $('#savings-deposit').on('click', function () {
    let amount = Number( $('#savings-amount').val() );
    $('#savings-amount').val('').focus();
    bank.deposit( 'savings', amount );
  });
  $('#savings-withdraw').on('click', function () {
    let amount = Number( $('#savings-amount').val() );
    $('#savings-amount').val('').focus();
    bank.withdraw( 'savings', amount );
  });
});
